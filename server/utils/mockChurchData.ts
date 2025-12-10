import type { ChurchConfig } from '~/types/church'

/**
 * Dados mock para desenvolvimento
 * Simula diferentes igrejas com configurações variadas
 */

export const mockChurchData: Record<string, ChurchConfig> = {
  icp: {
    id: '2',
    subdomain: 'modernblack',
    template: 'modern',
    customization: {
      colors: {
        primary: '#000000',      // black
        primaryDark: '#0a0a0a',  // neutral-950
        secondary: '#1f2937',    // gray-800
        secondaryDark: '#111827',// gray-900
        accent: '#22d3ee',       // cyan-400 (neon moderno)
        accentDark: '#0891b2'    // cyan-700
      },
      fonts: {
        heading: 'Montserrat',
        body: 'Inter'
      },
      logo: {
        main: 'https://igrejacomproposito.com/wp-content/uploads/2022/01/cropped-Logo-Proposito-preto-grande-300x86.png',
        white: 'https://igrejacomproposito.com/wp-content/uploads/2022/01/logo-300x70.png',
        favicon: 'https://placehold.co/32x32/000000/ffffff?text=icp'
      },
      social: {
        instagram: 'https://instagram.com/igrejacomproposito',
        facebook: 'https://www.facebook.com/igrejacompropositobr',
        youtube: 'https://www.youtube.com/c/IgrejacomProp%C3%B3sitoOnline',
        spotify: 'https://open.spotify.com/show/5iEvJesCmxAV4MJpMbYZx9?si=5A2IEhHaRySBoSJJi99bjQ'
      },
      names: {
        celula:'Nexo',
      }
    },

    content: {
      hero: {
        title: 'Igreja com Propósito',
        subtitle: 'Mensagem da Semana',
        description: 'Uma igreja ativa para uma geração em movimento.',
        backgroundVideo: 'https://igrejacomproposito.com/wp-content/uploads/2023/01/Teste-BG.mp4',
        ctaText: 'Assistir Agora',
        ctaLink: '/watch'
      },

      actionCards: [
        {
          id: '1',
          icon: 'mdi:account-plus',
          title: 'Primeira vez aqui?',
          description: 'Descubra quem somos',
          link: '/new'
        },
        {
          id: '2',
          icon: 'mdi:lightning-bolt',
          title: 'Próximos Passos',
          description: 'Encontre seu propósito',
          link: '/next'
        },
        {
          id: '3',
          icon: 'mdi:water',
          title: 'Batismos',
          description: 'Declare sua fé publicamente',
          link: '/baptism'
        },
        {
          id: '4',
          icon: 'mdi:earth',
          title: 'Pequenos Grupos',
          description: 'Conecte-se com pessoas',
          link: '/groups'
        },
        {
          id: '5',
          icon: 'mdi:hand-heart',
          title: 'Servir',
          description: 'Faça parte do time',
          link: '/serve'
        }
      ],

      events: [
        {
          id: '1',
          slug: 'ano-novo-2025',
          title: 'Reveillon Worship Night',
          subtitle: 'Virada com Propósito',
          description: 'Uma noite para agradecer, celebrar e declarar um novo tempo.',
          image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop',
          backgroundColor: '#1f2937', // gray-800
          startDate: '2025-12-31',
          endDate: '2026-01-01',
          ctaText: 'Participar',
          ctaLink: '/events/ano-novo-2025'
        },
        {
          id: '2',
          slug: 'conferencia-2025',
          title: 'CONFERÊNCIA 2025',
          subtitle: 'Despertando uma Geração',
          description: 'Três dias de imersão com palavra, louvor e presença.',
          image: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&h=600&fit=crop',
          backgroundColor: '#000000', // black
          startDate: '2025-09-10',
          endDate: '2025-09-12',
          ctaText: 'Garanta sua vaga',
          ctaLink: '/events/conferencia-2025'
        }
      ],

      locations: [
        {
          id: '1',
          name: 'Campus Central',
          city: 'São Paulo',
          country: 'Brasil',
          image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop',
          address: 'Av. Faria Lima, 2000 - São Paulo, SP',
          mapsLink: 'https://maps.google.com'
        },
        {
          id: '2',
          name: 'Campus Urbano',
          city: 'São Paulo',
          country: 'Brasil',
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
          address: 'Rua Augusta, 800 - São Paulo, SP',
          mapsLink: 'https://maps.google.com'
        }
      ],

      ctaSections: [
        {
          id: '1',
          title: 'SEJA PARTE',
          subtitle: 'Descubra o movimento',
          description:
            'Participe do ONBOARDING — uma experiência para conhecer a visão, valores e próximos passos.',
          backgroundColor: '#f9fafb',
          textColor: '#000000',
          ctaText: 'Inscrever-se',
          ctaLink: '/onboarding',
          image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30'
        }
      ],

      about: {
        title: 'Quem Somos',
        description:
          'Uma igreja moderna, relevante e apaixonada por Jesus. Acreditamos que cada pessoa carrega um propósito eterno.',
        mission: 'Conectar pessoas a Jesus e transformar cidades.',
        vision: 'Uma igreja para todos, construída sobre excelência, presença e impacto real.',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop'
      },

      contact: {
        email: 'contato@modernchurch.com',
        phone: '+55 11 98765-4321',
        address: 'Av. Faria Lima, 2000 - São Paulo, SP'
      },

      cells: {
        networks: [
          {
            id: 'rede-norte',
            name: 'Rede Norte',
            description: 'Células da região norte de Americana',
            color: '#2563eb', // blue-600
            leaders: ['João Silva', 'Maria Santos']
          },
          {
            id: 'rede-sul',
            name: 'Rede Sul',
            description: 'Células da região sul de Americana',
            color: '#059669', // emerald-600
            leaders: ['Pedro Oliveira', 'Ana Costa']
          },
          {
            id: 'rede-centro',
            name: 'Rede Centro',
            description: 'Células da região central de Americana',
            color: '#dc2626', // red-600
            leaders: ['Carlos Mendes', 'Juliana Lima']
          }
        ],
        cells: [
          {
            id: 'celula-1',
            name: 'Célula Vida Nova',
            networkId: 'rede-norte',
            leaders: ['Lucas Ferreira', 'Beatriz Alves'],
            day: 'Terça-feira',
            time: '19h30',
            address: 'Rua das Acácias, 123 - Jardim Boer, Americana - SP',
            phone: '(19) 99999-1111',
            description: 'Célula focada em jovens e jovens adultos, com estudos dinâmicos e relevantes para o dia a dia.',
            image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
            coordinates: {
              lat: -22.7341,
              lng: -47.3316
            },
            mapsLink: 'https://maps.google.com/?q=-22.7341,-47.3316'
          },
          {
            id: 'celula-2',
            name: 'Célula Esperança',
            networkId: 'rede-norte',
            leaders: ['Roberto Lima', 'Fernanda Costa'],
            day: 'Quinta-feira',
            time: '20h00',
            address: 'Av. Brasil, 456 - Centro, Americana - SP',
            phone: '(19) 99999-2222',
            description: 'Célula com foco em famílias, onde compartilhamos experiências e crescemos juntos na fé.',
            image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop',
            coordinates: {
              lat: -22.7389,
              lng: -47.3306
            },
            mapsLink: 'https://maps.google.com/?q=-22.7389,-47.3306'
          },
          {
            id: 'celula-3',
            name: 'Célula Fé Viva',
            networkId: 'rede-sul',
            leaders: ['Marcos Souza', 'Patrícia Rocha'],
            day: 'Quarta-feira',
            time: '19h00',
            address: 'Rua São Paulo, 789 - Jardim Ipiranga, Americana - SP',
            phone: '(19) 99999-3333',
            description: 'Encontros descontraídos com adoração e palavra, ideal para quem busca comunhão verdadeira.',
            image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600&h=400&fit=crop',
            coordinates: {
              lat: -22.7502,
              lng: -47.3398
            },
            mapsLink: 'https://maps.google.com/?q=-22.7502,-47.3398'
          },
          {
            id: 'celula-4',
            name: 'Célula Restauração',
            networkId: 'rede-sul',
            leaders: ['André Martins', 'Camila Dias'],
            day: 'Sexta-feira',
            time: '20h30',
            address: 'Rua das Flores, 321 - Vila Belvedere, Americana - SP',
            phone: '(19) 99999-4444',
            description: 'Espaço de acolhimento e cura, onde experimentamos o amor de Deus de forma prática.',
            image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop',
            coordinates: {
              lat: -22.7456,
              lng: -47.3442
            },
            mapsLink: 'https://maps.google.com/?q=-22.7456,-47.3442'
          },
          {
            id: 'celula-5',
            name: 'Célula Comunhão',
            networkId: 'rede-centro',
            leaders: ['Rafael Barbosa', 'Letícia Melo'],
            day: 'Segunda-feira',
            time: '19h30',
            address: 'Av. Cillos, 654 - Centro, Americana - SP',
            phone: '(19) 99999-5555',
            description: 'Célula que valoriza relacionamentos profundos e estudo bíblico aprofundado.',
            image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop',
            coordinates: {
              lat: -22.7395,
              lng: -47.3280
            },
            mapsLink: 'https://maps.google.com/?q=-22.7395,-47.3280'
          },
          {
            id: 'celula-6',
            name: 'Célula Impacto',
            networkId: 'rede-centro',
            leaders: ['Gabriel Torres', 'Priscila Nunes'],
            day: 'Sábado',
            time: '18h00',
            address: 'Rua Oreste Brunetti, 987 - Vila Mathiensen, Americana - SP',
            phone: '(19) 99999-6666',
            description: 'Célula voltada para jovens profissionais, com discussões sobre fé e carreira.',
            image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop',
            coordinates: {
              lat: -22.7422,
              lng: -47.3225
            },
            mapsLink: 'https://maps.google.com/?q=-22.7422,-47.3225'
          }
        ]
      }
    },

    metadata: {
      name: 'Igreja com Propósito',
      tagline: 'Glorificando a Deus e abençoando vidas',
      description: 'Uma igreja que impacta gerações através do amor de Cristo.',
      keywords: ['igreja', 'worship', 'fé', 'jesus', 'são paulo'],
      language: 'pt-BR'
    },

    active: true,
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-15T00:00:00Z'
  },
  
  demo: {
    id: '1',
    subdomain: 'demo',
    template: 'modern',
    customization: {
      colors: {
        primary: '#2563eb', // blue-600
        primaryDark: '#1d4ed8', // blue-700
        secondary: '#7c3aed', // violet-600
        secondaryDark: '#6d28d9', // violet-700
        accent: '#f59e0b', // amber-500
        accentDark: '#d97706' // amber-600
      },
      // colors: {
      //   primary: '#dc2626',       // red-600
      //   primaryDark: '#b91c1c',   // red-700
      //   secondary: '#7c3aed',     // violet-600
      //   secondaryDark: '#6d28d9', // violet-700
      //   accent: '#f59e0b',        // amber-500
      //   accentDark: '#d97706'     // amber-600
      // },
      // colors: {
      //   primary: '#16a34a',       // green-600
      //   primaryDark: '#15803d',   // green-700
      //   secondary: '#7c3aed',     // violet-600
      //   secondaryDark: '#6d28d9', // violet-700
      //   accent: '#f59e0b',        // amber-500
      //   accentDark: '#d97706'     // amber-600
      // },
      // colors: {
      //   primary: '#ea580c',       // orange-600
      //   primaryDark: '#c2410c',   // orange-700
      //   secondary: '#7c3aed',     // violet-600
      //   secondaryDark: '#6d28d9', // violet-700
      //   accent: '#f59e0b',        // amber-500
      //   accentDark: '#d97706'     // amber-600
      // },
      // colors: {
      //   primary: '#ca8a04',       // yellow-600 (dourado)
      //   primaryDark: '#a16207',   // yellow-700
      //   secondary: '#7c3aed',     // violet-600
      //   secondaryDark: '#6d28d9', // violet-700
      //   accent: '#f59e0b',        // amber-500
      //   accentDark: '#d97706'     // amber-600
      // },
      fonts: {
        heading: 'Montserrat',
        body: 'Inter'
      },
      logo: {
        main: 'https://placehold.co/200x60/2563eb/white?text=Demo+Church',
        white: 'https://placehold.co/200x60/ffffff/2563eb?text=Demo+Church',
        favicon: 'https://placehold.co/32x32/2563eb/white?text=D'
      },
      social: {
        instagram: 'https://instagram.com/demochurch',
        facebook: 'https://facebook.com/demochurch',
        youtube: 'https://youtube.com/@demochurch',
        spotify: 'https://open.spotify.com/show/demochurch'
      }
    },
    content: {
      hero: {
        title: 'Bem-vindo à Demo Church',
        subtitle: 'Última Mensagem',
        description: 'Rendição - Uma jornada de fé e transformação',
        backgroundImage: 'https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=1920&h=1080&fit=crop',
        ctaText: 'Assistir Agora',
        ctaLink: '/watch'
      },
      actionCards: [
        {
          id: '1',
          icon: 'mdi:hand-wave',
          title: 'Novo por aqui?',
          description: 'Conheça nossa igreja',
          link: '/new'
        },
        {
          id: '2',
          icon: 'mdi:cross',
          title: 'Quero seguir Jesus',
          description: 'Comece sua jornada de fé',
          link: '/faith'
        },
        {
          id: '3',
          icon: 'mdi:water',
          title: 'Quero ser batizado',
          description: 'Dê o próximo passo',
          link: '/baptism'
        },
        {
          id: '4',
          icon: 'mdi:account-group',
          title: 'Encontrar comunidade',
          description: 'Conecte-se com pessoas',
          link: '/community'
        },
        {
          id: '5',
          icon: 'mdi:hand-heart',
          title: 'Quero servir',
          description: 'Faça a diferença',
          link: '/volunteer'
        }
      ],
      events: [
        {
          id: '1',
          slug: 'natal-2025',
          title: 'Natal',
          subtitle: 'na Demo Church',
          description: 'Celebre o Natal conosco! Cultos especiais de 20 a 25 de dezembro.',
          image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&h=600&fit=crop',
          backgroundColor: '#166534', // green-800
          startDate: '2025-12-20',
          endDate: '2025-12-25',
          ctaText: 'Saiba Mais',
          ctaLink: '/events/natal-2025'
        },
        {
          id: '2',
          slug: 'ofertas-2025',
          title: 'SONHE AGORA',
          subtitle: 'Oferta de Fim de Ano',
          description: 'Juntos, vamos impactar vidas através da fé. Participe da nossa campanha de fim de ano.',
          image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop',
          backgroundColor: '#ca8a04', // yellow-600
          startDate: '2025-12-01',
          endDate: '2025-12-31',
          ctaText: 'Contribuir',
          ctaLink: '/give'
        }
      ],
      locations: [
        {
          id: '1',
          name: 'Campus Principal',
          city: 'São Paulo',
          country: 'Brasil',
          image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop',
          address: 'Av. Paulista, 1000 - São Paulo, SP',
          mapsLink: 'https://maps.google.com'
        },
        {
          id: '2',
          name: 'Campus Zona Sul',
          city: 'São Paulo',
          country: 'Brasil',
          image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
          address: 'Av. Santo Amaro, 500 - São Paulo, SP',
          mapsLink: 'https://maps.google.com'
        },
        {
          id: '3',
          name: 'Campus Online',
          city: 'Global',
          country: 'Mundial',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
          address: 'Transmissão ao vivo online',
          mapsLink: '/watch'
        }
      ],
      ctaSections: [
        {
          id: '1',
          title: 'ATIVE-SE',
          subtitle: 'Seu Primeiro Passo Começa Aqui',
          description: 'Uma experiência de uma hora para conhecer nossa igreja, fazer amigos e descobrir seu propósito.',
          backgroundColor: '#dc2626', // red-600
          textColor: '#ffffff',
          ctaText: 'Inscrever-se',
          ctaLink: '/activate',
          image: 'https://images.unsplash.com/photo-1532635241-17e820acc59f'
        }
      ],
      about: {
        title: 'Sobre Nós',
        description: 'Somos uma igreja apaixonada por pessoas e comprometida com a transformação de vidas através do amor de Cristo.',
        mission: 'Nossa missão é conectar pessoas a Jesus e umas às outras.',
        vision: 'Ser uma igreja que impacta gerações através da fé, esperança e amor.',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop'
      },
      contact: {
        email: 'contato@demochurch.com',
        phone: '+55 11 1234-5678',
        address: 'Av. Paulista, 1000 - São Paulo, SP'
      }
    },
    metadata: {
      name: 'Demo Church',
      tagline: 'Conectando pessoas a Jesus',
      description: 'Uma igreja moderna, acolhedora e comprometida com a transformação de vidas.',
      keywords: ['igreja', 'fé', 'comunidade', 'jesus', 'são paulo'],
      language: 'pt-BR'
    },
    active: true,
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-15T00:00:00Z'
  },

  // Igreja de exemplo com cores diferentes
  graca: {
    id: '2',
    subdomain: 'gracachurch',
    template: 'modern',
    customization: {
      colors: {
        primary: '#059669', // emerald-600
        primaryDark: '#047857', // emerald-700
        secondary: '#0891b2', // cyan-600
        secondaryDark: '#0e7490', // cyan-700
        accent: '#f97316', // orange-500
        accentDark: '#ea580c' // orange-600
      },
      fonts: {
        heading: 'Poppins',
        body: 'Open Sans'
      },
      logo: {
        main: 'https://placehold.co/200x60/059669/white?text=Graca+Church',
        white: 'https://placehold.co/200x60/ffffff/059669?text=Graca+Church',
        favicon: 'https://placehold.co/32x32/059669/white?text=G'
      },
      social: {
        instagram: 'https://instagram.com/gracachurch',
        facebook: 'https://facebook.com/gracachurch',
        youtube: 'https://youtube.com/@gracachurch'
      }
    },
    content: {
      hero: {
        title: 'Bem-vindo à Igreja da Graça',
        subtitle: 'Série Atual',
        description: 'Vivendo pela Graça - Descobrindo o amor incondicional de Deus',
        backgroundImage: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&h=1080&fit=crop',
        ctaText: 'Ver Mensagem',
        ctaLink: '/watch'
      },
      actionCards: [
        {
          id: '1',
          icon: 'mdi:account-plus',
          title: 'Primeira Vez?',
          link: '/new'
        },
        {
          id: '2',
          icon: 'mdi:book-open-page-variant',
          title: 'Estudos Bíblicos',
          link: '/studies'
        },
        {
          id: '3',
          icon: 'mdi:heart',
          title: 'Pequenos Grupos',
          link: '/groups'
        },
        {
          id: '4',
          icon: 'mdi:calendar',
          title: 'Eventos',
          link: '/events'
        },
        {
          id: '5',
          icon: 'mdi:hands-pray',
          title: 'Oração',
          link: '/prayer'
        }
      ],
      events: [],
      locations: [
        {
          id: '1',
          name: 'Sede',
          city: 'Rio de Janeiro',
          country: 'Brasil',
          image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop',
          address: 'Av. Atlântica, 2000 - Rio de Janeiro, RJ',
          mapsLink: 'https://maps.google.com'
        }
      ],
      ctaSections: [],
      about: {
        title: 'Nossa História',
        description: 'Igreja da Graça - Transformando vidas através do evangelho da graça.'
      },
      contact: {
        email: 'contato@gracachurch.com',
        phone: '+55 21 9876-5432',
        address: 'Av. Atlântica, 2000 - Rio de Janeiro, RJ'
      }
    },
    metadata: {
      name: 'Igreja da Graça',
      tagline: 'Vivendo pela Graça',
      description: 'Uma comunidade de fé no Rio de Janeiro.',
      keywords: ['igreja', 'graça', 'rio de janeiro', 'fé'],
      language: 'pt-BR'
    },
    active: true,
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-15T00:00:00Z'
  },
}

/**
 * Função helper para obter dados da igreja
 */
export function getChurchData(subdomain: string): ChurchConfig | null {
  return mockChurchData[subdomain] || mockChurchData.icp
}
