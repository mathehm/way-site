/**
 * Tipos para configuração e conteúdo da igreja
 */

export interface ChurchColors {
  primary: string
  primaryDark: string
  secondary: string
  secondaryDark: string
  accent: string
  accentDark: string
}

export interface ChurchFonts {
  heading: string
  body: string
}

export interface ChurchSocial {
  instagram?: string
  facebook?: string
  youtube?: string
  spotify?: string
  twitter?: string
}

export interface ChurchLogo {
  main: string // URL do logo principal
  white?: string // URL do logo branco (para fundos escuros)
  favicon?: string // URL do favicon
}

export interface ChurchCustomization {
  colors: ChurchColors
  fonts: ChurchFonts
  logo: ChurchLogo
  social: ChurchSocial
  names?: {
    celula?: string // Nome customizado para "célula"
  } 
}

export interface ChurchHeroContent {
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  backgroundVideo?: string
  ctaText: string
  ctaLink: string
}

export interface ChurchActionCard {
  id: string
  icon: string // Nome do ícone (usando @nuxt/icon)
  title: string
  description?: string
  link: string
}

export interface ChurchEvent {
  id: string
  slug: string
  title: string
  subtitle?: string
  description: string
  image: string
  backgroundColor?: string // Cor de fundo customizada para o card
  startDate: string
  endDate?: string
  ctaText: string
  ctaLink: string
}

export interface ChurchLocation {
  id: string
  name: string
  city: string
  country: string
  image: string
  address: string
  mapsLink?: string
}

export interface ChurchCTASection {
  id: string
  title: string
  subtitle?: string
  description: string
  backgroundColor: string
  textColor: string
  ctaText: string
  ctaLink: string
  image?: string
}

export interface ChurchAbout {
  title: string
  description: string
  mission?: string
  vision?: string
  image?: string
}

export interface ChurchContact {
  email: string
  phone: string
  address: string
}

export interface ChurchContent {
  hero: ChurchHeroContent
  actionCards: ChurchActionCard[]
  events: ChurchEvent[]
  locations: ChurchLocation[]
  ctaSections: ChurchCTASection[]
  about?: ChurchAbout
  contact?: ChurchContact
}

export interface ChurchMetadata {
  name: string
  tagline?: string
  description: string
  keywords?: string[]
  language: string
}

export interface ChurchConfig {
  id: string
  subdomain: string
  customDomain?: string
  template: 'modern' | 'classic' | 'minimalist' // Templates disponíveis
  customization: ChurchCustomization
  content: ChurchContent
  metadata: ChurchMetadata
  active: boolean
  createdAt: string
  updatedAt: string
}

export interface ChurchAPIResponse {
  success: boolean
  data?: ChurchConfig
  error?: {
    code: string
    message: string
  }
}
