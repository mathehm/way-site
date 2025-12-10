/**
 * API Route para buscar informações de "Primeira Visita" da igreja
 */
export default defineEventHandler(async (event) => {
  try {
    const subdomain = event.context.subdomain || 'icp'

    // Busca configuração da igreja
    const churchData = getChurchData(subdomain)

    if (!churchData || !churchData.content.firstVisit) {
      return {
        success: false,
        error: {
          code: 'FIRST_VISIT_NOT_FOUND',
          message: 'Informações de primeira visita não encontradas'
        }
      }
    }

    return {
      success: true,
      data: churchData.content.firstVisit
    }
  } catch (error) {
    console.error('[API First Visit] Error:', error)

    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Erro ao buscar informações de primeira visita'
      }
    }
  }
})
