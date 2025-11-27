/**
 * Plugin do servidor para detectar subdomínio
 * Extrai o subdomínio do header 'host' e adiciona ao contexto da requisição
 */
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    const host = getRequestHeader(event, 'host') || ''

    // Remove porta se existir (ex: localhost:3000 -> localhost)
    const hostWithoutPort = host.split(':')[0]

    // Divide o host em partes (ex: igrejax.seudominio.com -> ['igrejax', 'seudominio', 'com'])
    const parts = hostWithoutPort.split('.')

    let subdomain = 'demo' // Subdomínio padrão

    // Em desenvolvimento (localhost), usa 'demo'
    if (hostWithoutPort === 'localhost') {
      subdomain = 'demo'
    }
    // Se tiver mais de 2 partes, o primeiro é o subdomínio
    // Ex: igrejax.seudominio.com -> igrejax
    else if (parts.length > 2) {
      subdomain = parts[0]
    }
    // Se tiver exatamente 2 partes, pode ser domínio customizado
    // Ex: igrejax.com -> usa a parte principal como identificador
    else if (parts.length === 2) {
      subdomain = parts[0]
    }

    // Adiciona ao contexto para uso nas API routes
    event.context.subdomain = subdomain
    event.context.host = host

    // Log para debug (remover em produção)
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Subdomain Plugin] Host: ${host} -> Subdomain: ${subdomain}`)
    }
  })
})
