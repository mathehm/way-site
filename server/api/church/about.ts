/**
 * API Route para buscar informações "Sobre" da igreja
 */
export default defineEventHandler(async (event) => {
  try {
    const subdomain = event.context.subdomain || 'icp'

    // Busca configuração da igreja
    const churchData = getChurchData(subdomain)

    if (!churchData || !churchData.content.about) {
      return {
        success: false,
        error: {
          code: 'ABOUT_NOT_FOUND',
          message: 'Informações sobre a igreja não encontradas'
        }
      }
    }

    return {
      success: true,
      data: churchData.content.about
    }
  } catch (error) {
    console.error('[API About] Error:', error)

    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Erro ao buscar informações da igreja'
      }
    }
  }
})
