/**
 * Plugin para carregar CSS do Leaflet e configurar ícones
 * Executado apenas no cliente
 */
export default defineNuxtPlugin(async () => {
  if (process.client) {
    // Importa CSS do Leaflet
    await import('leaflet/dist/leaflet.css')

    // Fix para os ícones do Leaflet no Webpack/Vite
    const L = await import('leaflet')
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    })
  }
})
