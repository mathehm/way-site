import type { ChurchConfig, ChurchAPIResponse } from '~/types/church'

/**
 * Composable para acessar configuração da igreja
 * Faz cache automático e funciona com SSR
 */
export const useChurchConfig = () => {
  const { data, error, pending, refresh } = useFetch<ChurchAPIResponse>(
    '/api/church/config',
    {
      key: 'church-config'
    }
  )

  const churchConfig = computed<ChurchConfig | null>(() => {
    if (data.value?.success && data.value.data) {
      return data.value.data
    }
    return null
  })

  const isLoading = computed(() => pending.value)
  const hasError = computed(() => !!error.value || data.value?.success === false)
  const errorMessage = computed(() => {
    if (error.value) return 'Erro ao carregar configuração da igreja'
    if (data.value?.error) return data.value.error.message
    return null
  })

  return {
    config: churchConfig,
    isLoading,
    hasError,
    errorMessage,
    refresh
  }
}

/**
 * Composable helper para acessar partes específicas da config
 */
export const useChurchMeta = () => {
  const { config } = useChurchConfig()

  const metadata = computed(() => config.value?.metadata || null)
  const churchName = computed(() => config.value?.metadata.name || '')
  const churchTagline = computed(() => config.value?.metadata.tagline || '')

  return {
    metadata,
    churchName,
    churchTagline
  }
}

export const useChurchColors = () => {
  const { config } = useChurchConfig()

  const colors = computed(() => config.value?.customization.colors || null)

  return {
    colors
  }
}

export const useChurchLogo = () => {
  const { config } = useChurchConfig()

  const logo = computed(() => config.value?.customization.logo || null)

  return {
    logo
  }
}

export const useChurchSocial = () => {
  const { config } = useChurchConfig()

  const social = computed(() => config.value?.customization.social || null)

  return {
    social
  }
}

export const useChurchContent = () => {
  const { config } = useChurchConfig()

  const content = computed(() => config.value?.content || null)
  const hero = computed(() => config.value?.content.hero || null)
  const actionCards = computed(() => config.value?.content.actionCards || [])
  const events = computed(() => config.value?.content.events || [])
  const locations = computed(() => config.value?.content.locations || [])
  const customization = computed(() => config.value?.customization || null)
  const ctaSections = computed(() => config.value?.content.ctaSections || [])

  return {
    content,
    hero,
    actionCards,
    events,
    locations,
    customization,
    ctaSections
  }
}
