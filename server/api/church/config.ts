import type { ChurchAPIResponse } from '~/types/church'

/**
 * API Route para buscar configuração da igreja
 * Em produção, isso será substituído por chamada ao backend Golang
 */
export default defineEventHandler(async (event): Promise<ChurchAPIResponse> => {
  try {
    // Pega o subdomínio do contexto (adicionado pelo plugin subdomain.ts)
    const subdomain = event.context.subdomain || 'icp'

    // Em desenvolvimento, usa dados mock
    if (process.env.NODE_ENV === 'development' || !process.env.GOLANG_API_URL) {
      const churchData = getChurchData(subdomain)

      if (!churchData) {
        return {
          success: false,
          error: {
            code: 'CHURCH_NOT_FOUND',
            message: `Igreja com subdomínio "${subdomain}" não encontrada`
          }
        }
      }

      // Simula delay de rede (opcional, remover se quiser resposta instantânea)
      // await new Promise(resolve => setTimeout(resolve, 300))

      return {
        success: true,
        data: churchData
      }
    }

    // Em produção, busca do backend Golang
    // TODO: Implementar quando o backend estiver pronto
    const response = await $fetch<ChurchAPIResponse>(
      `${process.env.GOLANG_API_URL}/api/churches/${subdomain}`,
      {
        headers: {
          'Content-Type': 'application/json'
          // Adicionar headers de autenticação se necessário
          // 'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
      }
    )

    return response
  } catch (error) {
    console.error('[API Church Config] Error:', error)

    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Erro ao buscar configuração da igreja'
      }
    }
  }
})
