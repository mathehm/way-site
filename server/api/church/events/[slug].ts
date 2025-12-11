import type { ChurchEvent } from '~/types/church'

export default defineEventHandler(async (event) => {
  try {
    const subdomain = event.context.subdomain || 'icp'
    const id = getRouterParam(event, 'slug') // O parâmetro ainda se chama slug na rota, mas representa o ID

    if (!id) {
      return {
        success: false,
        error: {
          code: 'ID_REQUIRED',
          message: 'ID do evento é obrigatório'
        }
      }
    }

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

    // Find event by id
    const eventData = churchData.content.events.find((e: ChurchEvent) => e.id === id)

    if (!eventData) {
      return {
        success: false,
        error: {
          code: 'EVENT_NOT_FOUND',
          message: 'Evento não encontrado'
        }
      }
    }

    // Get related events (same category, excluding current)
    const relatedEvents = churchData.content.events
      .filter((e: ChurchEvent) => e.category === eventData.category && e.id !== id)
      .slice(0, 3)

    return {
      success: true,
      data: {
        event: eventData,
        relatedEvents
      }
    }
  } catch (error) {
    console.error('[API Event Detail] Error:', error)
    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Erro ao buscar evento'
      }
    }
  }
})
