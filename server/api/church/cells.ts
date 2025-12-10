import type { ChurchCellsData } from '~/types/church'

/**
 * API Route para buscar todas as células da igreja
 */
export default defineEventHandler(async (event) => {
  try {
    const subdomain = event.context.subdomain || 'icp'

    // Busca configuração da igreja
    const churchData = getChurchData(subdomain)

    if (!churchData || !churchData.content.cells) {
      return {
        success: false,
        error: {
          code: 'CELLS_NOT_FOUND',
          message: 'Células não encontradas para esta igreja'
        }
      }
    }

    return {
      success: true,
      data: churchData.content.cells
    }
  } catch (error) {
    console.error('[API Cells] Error:', error)

    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Erro ao buscar células'
      }
    }
  }
})
