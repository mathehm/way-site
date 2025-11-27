/**
 * Plugin client-side para injetar cores customizadas da igreja
 * Converte cores HEX para RGB e injeta como CSS variables
 */

/**
 * Converte cor HEX para RGB
 */
function hexToRgb(hex: string): string {
  // Remove # se existir
  hex = hex.replace('#', '')

  // Converte para RGB
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return `${r} ${g} ${b}`
}

export default defineNuxtPlugin({
  name: 'church-theme',
  async setup() {
    const { config } = useChurchConfig()

    // Aguarda a config estar disponível
    watch(
      config,
      (newConfig) => {
        if (!newConfig) return

        const { colors, fonts } = newConfig.customization

        // Injeta cores customizadas
        if (colors) {
          const root = document.documentElement

          root.style.setProperty('--color-primary', hexToRgb(colors.primary))
          root.style.setProperty('--color-primary-dark', hexToRgb(colors.primaryDark))
          root.style.setProperty('--color-secondary', hexToRgb(colors.secondary))
          root.style.setProperty('--color-secondary-dark', hexToRgb(colors.secondaryDark))
          root.style.setProperty('--color-accent', hexToRgb(colors.accent))
          root.style.setProperty('--color-accent-dark', hexToRgb(colors.accentDark))
        }

        // Injeta fontes customizadas
        if (fonts) {
          const root = document.documentElement

          if (fonts.heading) {
            root.style.setProperty('--font-heading', fonts.heading)
          }

          if (fonts.body) {
            root.style.setProperty('--font-body', fonts.body)
          }
        }
      },
      { immediate: true }
    )
  }
})
