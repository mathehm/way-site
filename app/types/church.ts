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

export type ChurchEventCategory =
  | 'culto'
  | 'reuniao'
  | 'conferencia'
  | 'retiro'
  | 'curso'
  | 'social'
  | 'missoes'
  | 'infantil'
  | 'jovens'
  | 'outro'

export interface ChurchEvent {
  id: string
  slug: string
  title: string
  subtitle?: string
  description: string
  longDescription?: string
  image: string
  backgroundColor?: string // Cor de fundo customizada para o card
  category: ChurchEventCategory
  startDate: string // ISO 8601 format
  endDate?: string // ISO 8601 format
  time?: string // Ex: "19h30" ou "10h00 - 12h00"
  location?: {
    name?: string
    address?: string
    mapsLink?: string
  }
  isRecurring?: boolean
  recurrence?: {
    frequency: 'weekly' | 'monthly' | 'yearly'
    interval?: number // Ex: a cada 2 semanas
    daysOfWeek?: number[] // 0 = domingo, 1 = segunda, etc
  }
  registration?: {
    required: boolean
    link?: string
    deadline?: string
    price?: number
    spots?: number
    spotsRemaining?: number
  }
  organizer?: {
    name: string
    email?: string
    phone?: string
  }
  tags?: string[]
  featured?: boolean
  ctaText: string
  ctaLink: string
}

export interface ChurchEventsPageData {
  hero: {
    title: string
    subtitle?: string
    backgroundImage?: string
  }
  featured?: ChurchEvent[]
  upcoming?: ChurchEvent[]
  categories?: {
    id: ChurchEventCategory
    name: string
    icon: string
  }[]
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

export interface ChurchLeader {
  id: string
  name: string
  role: string // Ex: "Pastor Principal", "Pastor de Jovens"
  bio: string
  image?: string
  social?: {
    instagram?: string
    facebook?: string
    email?: string
  }
}

export interface ChurchValue {
  id: string
  title: string
  description: string
  icon: string
}

export interface ChurchHistoryMilestone {
  year: string
  title: string
  description: string
  image?: string
}

export interface ChurchStats {
  members?: number
  yearsActive?: number
  locations?: number
  cells?: number
  ministries?: number
}

export interface ChurchAbout {
  hero: {
    title: string
    subtitle?: string
    backgroundImage?: string
    backgroundVideo?: string
  }
  story: {
    title: string
    content: string
    image?: string
  }
  mission?: {
    title: string
    content: string
  }
  vision?: {
    title: string
    content: string
  }
  values?: ChurchValue[]
  beliefs?: {
    title: string
    items: string[] // Lista de crenças
  }
  leaders?: ChurchLeader[]
  history?: {
    title: string
    milestones: ChurchHistoryMilestone[]
  }
  stats?: ChurchStats
}

export interface ChurchContact {
  email: string
  phone: string
  address: string
}

export interface ChurchCellNetwork {
  id: string
  name: string
  description?: string
  color: string // Cor da rede (ex: #2563eb)
  leaders: string[] // Nomes dos líderes da rede
}

export interface ChurchCell {
  id: string
  name: string
  networkId: string // ID da rede à qual pertence
  leaders: string[] // Nomes dos líderes da célula
  day: string // Dia da semana (ex: "Terça-feira")
  time: string // Horário (ex: "19h30")
  address: string // Endereço completo
  phone: string // Telefone de contato
  description: string // Descrição da célula
  image?: string // Foto/imagem da célula
  coordinates: {
    lat: number
    lng: number
  }
  mapsLink: string // Link do Google Maps
}

export interface ChurchCellsData {
  networks: ChurchCellNetwork[]
  cells: ChurchCell[]
}

export interface ChurchFirstVisitFAQ {
  id: string
  question: string
  answer: string
}

export interface ChurchFirstVisitExpectation {
  id: string
  title: string
  description: string
  icon: string
}

export interface ChurchFirstVisitTestimonial {
  id: string
  name: string
  text: string
  image?: string
  role?: string
}

export interface ChurchFirstVisitNextStep {
  id: string
  title: string
  description: string
  icon: string
  link?: string
}

export interface ChurchFirstVisit {
  hero: {
    title: string
    subtitle?: string
    backgroundImage?: string
    ctaText?: string
  }
  welcome: {
    title: string
    content: string
    image?: string
  }
  whatToExpect: {
    title: string
    subtitle?: string
    items: ChurchFirstVisitExpectation[]
  }
  serviceInfo: {
    title: string
    items: {
      label: string
      value: string
      icon: string
    }[]
  }
  kids?: {
    title: string
    description: string
    ageGroups: string[]
    image?: string
  }
  parking?: {
    title: string
    description: string
    tips?: string[]
  }
  dressCode?: {
    title: string
    description: string
  }
  testimonials?: {
    title: string
    items: ChurchFirstVisitTestimonial[]
  }
  nextSteps?: {
    title: string
    subtitle?: string
    steps: ChurchFirstVisitNextStep[]
  }
  faq?: {
    title: string
    items: ChurchFirstVisitFAQ[]
  }
  contact: {
    title: string
    description: string
    email?: string
    phone?: string
  }
}

export interface ChurchYouTubeLive {
  videoId: string // ID do vídeo ao vivo (extraído do link)
  isActive: boolean // Se a live está ativa no site
  title: string // Título da transmissão
  description?: string // Descrição da live
  startedAt?: string // Quando iniciou (ISO 8601)
}

export interface ChurchYouTubeVideo {
  videoId: string
  title: string
  thumbnail?: string
  publishedAt?: string
}

export interface ChurchYouTube {
  channelId?: string // ID do canal (ex: UCxxxxxxx)
  channelHandle?: string // Handle do canal (ex: @igrejaexemplo)
  currentLive?: ChurchYouTubeLive // Live atual
  featuredVideos?: ChurchYouTubeVideo[] // Vídeos em destaque (últimos cultos)
}

export interface ChurchContent {
  hero: ChurchHeroContent
  actionCards: ChurchActionCard[]
  events: ChurchEvent[]
  locations: ChurchLocation[]
  ctaSections: ChurchCTASection[]
  cells?: ChurchCellsData
  about?: ChurchAbout
  contact?: ChurchContact
  firstVisit?: ChurchFirstVisit
  youtube?: ChurchYouTube
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
