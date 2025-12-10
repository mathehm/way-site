import type { ChurchCell } from '~/types/church'

/**
 * API Route para buscar uma célula específica por ID
 */
export default defineEventHandler(async (event) => {
  try {
    const subdomain = event.context.subdomain || 'icp'
    const cellId = getRouterParam(event, 'id')

    if (!cellId) {
      return {
        success: false,
        error: {
          code: 'INVALID_ID',
          message: 'ID da célula não fornecido'
        }
      }
    }

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

    // Busca a célula específica
    const cell = churchData.content.cells.cells.find((c) => c.id === cellId)

    if (!cell) {
      return {
        success: false,
        error: {
          code: 'CELL_NOT_FOUND',
          message: `Célula com ID "${cellId}" não encontrada`
        }
      }
    }

    // Busca a rede da célula
    const network = churchData.content.cells.networks.find((n) => n.id === cell.networkId)

    return {
      success: true,
      data: {
        cell,
        network
      }
    }
  } catch (error) {
    console.error('[API Cell Detail] Error:', error)

    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Erro ao buscar célula'
      }
    }
  }
})
