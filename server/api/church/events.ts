import type { ChurchEvent, ChurchEventCategory } from '~/types/church'

export default defineEventHandler(async (event) => {
  try {
    const subdomain = event.context.subdomain || 'icp'
    const churchData = getChurchData(subdomain)

    if (!churchData || !churchData.content.events) {
      return {
        success: false,
        error: {
          code: 'EVENTS_NOT_FOUND',
          message: 'Eventos não encontrados'
        }
      }
    }

    // Get query parameters for filtering
    const query = getQuery(event)
    const category = query.category as ChurchEventCategory | undefined
    const featured = query.featured === 'true'
    const upcoming = query.upcoming === 'true'

    let events = churchData.content.events

    // Filter by category if specified
    if (category) {
      events = events.filter(e => e.category === category)
    }

    // Filter by featured if specified
    if (featured) {
      events = events.filter(e => e.featured === true)
    }

    // Filter by upcoming if specified (events that haven't ended yet)
    if (upcoming) {
      const now = new Date().toISOString()
      events = events.filter(e => {
        const eventDate = e.endDate || e.startDate
        return eventDate >= now
      })
    }

    // Sort by start date (ascending - soonest first)
    events.sort((a, b) => {
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    })

    // Get event categories with counts
    const categories = [
      { id: 'culto' as const, name: 'Cultos', icon: 'mdi:church' },
      { id: 'reuniao' as const, name: 'Reuniões', icon: 'mdi:account-group' },
      { id: 'conferencia' as const, name: 'Conferências', icon: 'mdi:account-multiple' },
      { id: 'retiro' as const, name: 'Retiros', icon: 'mdi:pine-tree' },
      { id: 'curso' as const, name: 'Cursos', icon: 'mdi:school' },
      { id: 'social' as const, name: 'Social', icon: 'mdi:food' },
      { id: 'missoes' as const, name: 'Missões', icon: 'mdi:earth' },
      { id: 'infantil' as const, name: 'Infantil', icon: 'mdi:baby-face' },
      { id: 'jovens' as const, name: 'Jovens', icon: 'mdi:account-star' },
      { id: 'outro' as const, name: 'Outros', icon: 'mdi:dots-horizontal' }
    ]

    // Add counts to categories
    const categoriesWithCounts = categories.map(cat => ({
      ...cat,
      count: churchData.content.events.filter(e => e.category === cat.id).length
    }))

    return {
      success: true,
      data: {
        events,
        categories: categoriesWithCounts,
        total: events.length
      }
    }
  } catch (error) {
    console.error('[API Events] Error:', error)
    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Erro ao buscar eventos'
      }
    }
  }
})
