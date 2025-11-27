/**
 * Plugin para configurar SEO dinâmico baseado na igreja
 */
export default defineNuxtPlugin(() => {
  const { config } = useChurchConfig()

  // Atualiza head tags quando a config estiver disponível
  useHead(() => {
    if (!config.value) {
      return {}
    }

    const { metadata, customization } = config.value

    return {
      title: metadata.name,
      titleTemplate: `%s | ${metadata.name}`,
      meta: [
        { name: 'description', content: metadata.description },
        { name: 'keywords', content: metadata.keywords?.join(', ') || '' },
        { name: 'author', content: metadata.name },
        { name: 'og:title', content: metadata.name },
        { name: 'og:description', content: metadata.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:image', content: customization.logo.main },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: metadata.name },
        { name: 'twitter:description', content: metadata.description },
        { name: 'twitter:image', content: customization.logo.main },
        { name: 'theme-color', content: customization.colors.primary }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: customization.logo.favicon || customization.logo.main }
      ],
      htmlAttrs: {
        lang: metadata.language || 'pt-BR'
      }
    }
  })
})
