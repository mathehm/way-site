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
          link: '/conheca#primeira-vez'
        },
        {
          id: '2',
          icon: 'mdi:lightning-bolt',
          title: 'Próximos Passos',
          description: 'Encontre seu propósito',
          link: '/conheca#proximos-passos'
        },
        {
          id: '3',
          icon: 'mdi:water',
          title: 'Batismos',
          description: 'Declare sua fé publicamente',
          link: '/conheca#batismos'
        },
        {
          id: '4',
          icon: 'mdi:earth',
          title: 'Pequenos Grupos',
          description: 'Conecte-se com pessoas',
          link: '/conheca#pequenos-grupos'
        },
        {
          id: '5',
          icon: 'mdi:hand-heart',
          title: 'Servir',
          description: 'Faça parte do time',
          link: '/conheca#servir'
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
        hero: {
          title: 'Quem Somos',
          subtitle: 'Conectando pessoas a Jesus e transformando vidas',
          backgroundImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1920&h=1080&fit=crop'
        },
        story: {
          title: 'Nossa História',
          content: 'A Igreja da Cidade do Porto nasceu em 2010 com o sonho de ser uma comunidade de fé relevante e transformadora. Começamos com apenas 15 pessoas em uma sala alugada, movidos pela visão de ver vidas restauradas e a cidade impactada pelo evangelho. Hoje, somos uma família de mais de 2.000 pessoas espalhadas por 4 campus, unidos pelo mesmo propósito: amar a Deus, amar as pessoas e transformar nossa cidade.',
          image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop'
        },
        mission: {
          title: 'Nossa Missão',
          content: 'Conectar pessoas a Jesus Cristo e ajudá-las a crescer em relacionamento íntimo com Ele, capacitando-as a viver com propósito e impactar suas esferas de influência.'
        },
        vision: {
          title: 'Nossa Visão',
          content: 'Ser uma igreja para todas as pessoas, alcançando todas as gerações e culturas, construída sobre os pilares de excelência, presença de Deus e impacto real na sociedade.'
        },
        values: [
          {
            id: 'v1',
            title: 'Excelência',
            description: 'Fazemos o nosso melhor em tudo, como para o Senhor, buscando qualidade e dedicação em cada detalhe.',
            icon: 'mdi:star'
          },
          {
            id: 'v2',
            title: 'Comunidade',
            description: 'Valorizamos relacionamentos autênticos onde as pessoas são conhecidas, amadas e cuidadas.',
            icon: 'mdi:account-group'
          },
          {
            id: 'v3',
            title: 'Presença de Deus',
            description: 'Buscamos uma experiência real e transformadora com Deus através da adoração e da oração.',
            icon: 'mdi:hands-pray'
          },
          {
            id: 'v4',
            title: 'Generosidade',
            description: 'Vivemos para dar, compartilhando recursos, tempo e talentos para abençoar outros.',
            icon: 'mdi:gift'
          },
          {
            id: 'v5',
            title: 'Impacto',
            description: 'Existimos para fazer diferença na vida das pessoas e transformar nossa cidade.',
            icon: 'mdi:earth'
          },
          {
            id: 'v6',
            title: 'Verdade Bíblica',
            description: 'A Palavra de Deus é nossa autoridade e fundamento para vida e fé.',
            icon: 'mdi:book-open-page-variant'
          }
        ],
        beliefs: {
          title: 'No Que Cremos',
          items: [
            'Cremos na Trindade: Deus Pai, Filho e Espírito Santo, três pessoas em uma única essência divina.',
            'Cremos que a Bíblia é a Palavra inspirada de Deus, inerrante e autoridade final para fé e prática.',
            'Cremos que Jesus Cristo é o Filho de Deus, nasceu de uma virgem, viveu sem pecado, morreu na cruz pelos nossos pecados, ressuscitou ao terceiro dia e voltará em glória.',
            'Cremos que a salvação é pela graça mediante a fé em Jesus Cristo, não por obras.',
            'Cremos no batismo por imersão como testemunho público da fé em Cristo.',
            'Cremos na Santa Ceia como memorial da morte e ressurreição de Jesus.',
            'Cremos no batismo no Espírito Santo e na atualidade dos dons espirituais.',
            'Cremos na igreja local como corpo de Cristo e família de Deus.',
            'Cremos na Grande Comissão de fazer discípulos de todas as nações.',
            'Cremos na segunda vinda de Cristo, no juízo final e na vida eterna.'
          ]
        },
        leaders: [
          {
            id: 'l1',
            name: 'Pastor João Silva',
            role: 'Pastor Principal',
            bio: 'Pastor João lidera a ICP desde 2010. É casado com Ana há 25 anos e pai de 3 filhos. Formado em Teologia, tem paixão por ensinar a Palavra e ver vidas transformadas. Seu coração é ver cada pessoa alcançar seu potencial em Cristo.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
            social: {
              instagram: 'https://instagram.com/pastorjoao',
              email: 'joao@icp.com'
            }
          },
          {
            id: 'l2',
            name: 'Pastora Ana Silva',
            role: 'Pastora de Família e Mulheres',
            bio: 'Pastora Ana serve ao lado do marido desde o início da igreja. Lidera o ministério de mulheres e tem paixão por mentorear e discipular. É psicóloga e escritora, autora de 2 livros sobre família e propósito.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            social: {
              instagram: 'https://instagram.com/pastoraana',
              email: 'ana@icp.com'
            }
          },
          {
            id: 'l3',
            name: 'Pastor Carlos Mendes',
            role: 'Pastor de Jovens',
            bio: 'Pastor Carlos lidera o ministério de jovens da ICP há 5 anos. Apaixonado pela nova geração, seu objetivo é equipar jovens a serem líderes que fazem diferença. É formado em Comunicação e Teologia.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
            social: {
              instagram: 'https://instagram.com/pastorcarlos',
              email: 'carlos@icp.com'
            }
          },
          {
            id: 'l4',
            name: 'Pastora Mariana Costa',
            role: 'Pastora de Kids e Adolescentes',
            bio: 'Pastora Mariana é apaixonada por crianças e adolescentes. Pedagoga de formação, ela trouxe inovação e criatividade para o ministério infantil. Acredita que investir nas novas gerações é plantar sementes de eternidade.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
            social: {
              instagram: 'https://instagram.com/pastoramariana',
              email: 'mariana@icp.com'
            }
          }
        ],
        history: {
          title: 'Nossa Jornada',
          milestones: [
            {
              year: '2010',
              title: 'Fundação da Igreja',
              description: 'Primeira reunião com 15 pessoas em uma sala alugada no centro da cidade.',
              image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop'
            },
            {
              year: '2012',
              title: 'Primeiro Templo Próprio',
              description: 'Adquirimos nosso primeiro prédio com capacidade para 200 pessoas.',
              image: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=600&h=400&fit=crop'
            },
            {
              year: '2015',
              title: 'Expansão - Segundo Campus',
              description: 'Inauguramos nosso segundo campus na zona norte, alcançando mais 500 pessoas.',
              image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop'
            },
            {
              year: '2018',
              title: 'Projeto Social Transformar',
              description: 'Lançamento do projeto social que já impactou mais de 1.000 famílias em situação de vulnerabilidade.',
              image: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=600&h=400&fit=crop'
            },
            {
              year: '2020',
              title: 'Campus Online',
              description: 'Durante a pandemia, estruturamos nosso campus online alcançando pessoas em todo o Brasil.',
              image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop'
            },
            {
              year: '2023',
              title: 'Novos Campus e Célula',
              description: 'Inauguramos mais 2 campus e estruturamos a rede de células, fortalecendo o discipulado.',
              image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop'
            }
          ]
        },
        stats: {
          members: 2000,
          yearsActive: 15,
          locations: 4,
          cells: 45,
          ministries: 12
        }
      },

      contact: {
        email: 'contato@modernchurch.com',
        phone: '+55 11 98765-4321',
        address: 'Av. Faria Lima, 2000 - São Paulo, SP'
      },

      firstVisit: {
        hero: {
          title: 'Seja Bem-Vindo!',
          subtitle: 'Estamos muito felizes que você decidiu nos visitar. Queremos que você se sinta em casa!',
          backgroundImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=1080&fit=crop',
          ctaText: 'Preencher Formulário de Visita'
        },
        welcome: {
          title: 'Uma Casa Para Você',
          content: 'Sabemos que visitar uma igreja pela primeira vez pode ser intimidador. Queremos que você saiba que aqui não há julgamentos, apenas amor e acolhimento. Nossa comunidade é formada por pessoas reais, com histórias reais, buscando crescer juntas na fé. Não importa de onde você vem ou qual sua história, há um lugar para você aqui!',
          image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop'
        },
        whatToExpect: {
          title: 'O Que Esperar',
          subtitle: 'Para que você chegue preparado e relaxado, aqui está um resumo do que acontece em nossos cultos',
          items: [
            {
              id: 'e1',
              title: 'Recepção Calorosa',
              description: 'Ao chegar, você será recebido por nossa equipe de recepção com um sorriso! Eles podem responder suas dúvidas e te guiar até o auditório.',
              icon: 'mdi:hand-wave'
            },
            {
              id: 'e2',
              title: 'Adoração Vibrante',
              description: 'Iniciamos com 25-30 minutos de louvor contemporâneo. Sinta-se à vontade para cantar, levantar as mãos ou simplesmente ouvir.',
              icon: 'mdi:music'
            },
            {
              id: 'e3',
              title: 'Mensagem Relevante',
              description: 'Nossos pastores ensinam a Bíblia de forma prática e aplicável ao dia a dia. As mensagens duram cerca de 35-40 minutos.',
              icon: 'mdi:book-open-page-variant'
            },
            {
              id: 'e4',
              title: 'Conexão com Pessoas',
              description: 'Após o culto, fique para um café e conheça nossa comunidade. É uma ótima oportunidade de fazer amizades!',
              icon: 'mdi:coffee'
            }
          ]
        },
        serviceInfo: {
          title: 'Informações Práticas',
          items: [
            {
              label: 'Duração do Culto',
              value: '1h15min a 1h30min',
              icon: 'mdi:clock-outline'
            },
            {
              label: 'Horários',
              value: 'Domingos: 9h, 11h e 18h',
              icon: 'mdi:calendar-clock'
            },
            {
              label: 'O Que Vestir',
              value: 'Vista-se como se sente confortável! Somos casuais.',
              icon: 'mdi:tshirt-crew'
            },
            {
              label: 'Estacionamento',
              value: 'Gratuito e com manobrista. Chegue 15min antes.',
              icon: 'mdi:parking'
            }
          ]
        },
        kids: {
          title: 'Programação Infantil',
          description: 'Temos um ministério infantil incrível com atividades apropriadas para cada idade. Todas as salas são seguras, supervisionadas e os professores são treinados. Seu filho vai se divertir enquanto aprende sobre Jesus!',
          ageGroups: [
            'Berçário (0-2 anos)',
            'Kids 1 (3-5 anos)',
            'Kids 2 (6-8 anos)',
            'Kids 3 (9-11 anos)',
            'Adolescentes (12-14 anos)'
          ],
          image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop'
        },
        parking: {
          title: 'Estacionamento',
          description: 'Oferecemos estacionamento gratuito com serviço de manobrista aos domingos. O estacionamento abre 30 minutos antes de cada culto.',
          tips: [
            'Chegue 15-20 minutos antes para garantir vaga',
            'Siga as placas de "Visitantes" para vagas prioritárias',
            'Manobristas disponíveis para facilitar',
            'Há vagas para pessoas com deficiência próximas à entrada'
          ]
        },
        dressCode: {
          title: 'Código de Vestimenta',
          description: 'Não temos código de vestimenta! Vista o que fizer você se sentir confortável. Você verá pessoas de jeans e camiseta a vestidos e ternos. O mais importante é que você venha!'
        },
        testimonials: {
          title: 'Histórias de Quem Visitou',
          items: [
            {
              id: 't1',
              name: 'Mariana Santos',
              text: 'Estava nervosa para visitar, mas fui recebida com tanto amor que na primeira vez já me senti em casa. Hoje sou membro e voluntária!',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
              role: 'Membro há 2 anos'
            },
            {
              id: 't2',
              name: 'Carlos Eduardo',
              text: 'Fazia anos que não frequentava uma igreja. A mensagem foi exatamente o que eu precisava ouvir. Voltei no domingo seguinte e não parei mais.',
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
              role: 'Membro há 1 ano'
            },
            {
              id: 't3',
              name: 'Família Oliveira',
              text: 'Procurávamos uma igreja que tivesse programação para nossos filhos. Encontramos muito mais: uma família onde crescemos juntos na fé.',
              image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=200&h=200&fit=crop',
              role: 'Família membro'
            }
          ]
        },
        nextSteps: {
          title: 'Próximos Passos',
          subtitle: 'Depois da sua primeira visita, aqui estão algumas formas de se conectar mais com nossa comunidade',
          steps: [
            {
              id: 's1',
              title: 'Café de Boas-Vindas',
              description: 'Um encontro informal com pastores e líderes para conhecer mais sobre a igreja. Acontece todo primeiro domingo do mês após o culto.',
              icon: 'mdi:coffee',
              link: '/eventos'
            },
            {
              id: 's2',
              title: 'Conecte-se em uma Célula',
              description: 'Nossos pequenos grupos se reúnem durante a semana para estudo bíblico, oração e comunhão. É a melhor forma de fazer amigos!',
              icon: 'mdi:account-group',
              link: '/celulas'
            },
            {
              id: 's3',
              title: 'Curso de Membresia',
              description: 'Um curso de 4 semanas sobre nossa história, valores e como se tornar membro. Próxima turma começa em breve!',
              icon: 'mdi:school',
              link: '/seja-membro'
            },
            {
              id: 's4',
              title: 'Descubra Seu Dom',
              description: 'Temos diversos ministérios onde você pode servir usando seus talentos. Vamos te ajudar a descobrir onde você se encaixa!',
              icon: 'mdi:gift',
              link: '/ministerios'
            }
          ]
        },
        faq: {
          title: 'Perguntas Frequentes',
          items: [
            {
              id: 'f1',
              question: 'Preciso me registrar antes de visitar?',
              answer: 'Não! Você pode simplesmente aparecer. Mas se quiser preencher nosso formulário de visitante online, poderemos te receber ainda melhor e responder dúvidas antes da sua visita.'
            },
            {
              id: 'f2',
              question: 'Vou me sentir pressionado a dar dinheiro?',
              answer: 'Absolutamente não! Durante o culto há um momento de oferta, mas é apenas para membros e visitantes que desejam contribuir. Não há pressão alguma e ninguém vai saber se você deu ou não.'
            },
            {
              id: 'f3',
              question: 'Posso levar meus filhos?',
              answer: 'Sim! Temos programação específica para cada faixa etária, desde berçário até adolescentes. Todas as salas são seguras e os professores são preparados. Você pode deixar seus filhos com tranquilidade.'
            },
            {
              id: 'f4',
              question: 'E se eu chegar atrasado?',
              answer: 'Sem problemas! Nossa equipe estará na porta para te recepcionar e te ajudar a encontrar um assento sem interromper o culto. O ideal é chegar 10-15 minutos antes, mas sabemos que imprevistos acontecem.'
            },
            {
              id: 'f5',
              question: 'Posso trazer um amigo/familiar?',
              answer: 'Claro! Quanto mais, melhor! Não há limite de convidados. Temos assentos para todos e sua presença será uma bênção.'
            },
            {
              id: 'f6',
              question: 'Qual a diferença entre os horários?',
              answer: 'O conteúdo é o mesmo em todos os horários, mas a atmosfera pode variar. O culto das 9h tende a ser mais tranquilo, às 11h é o mais cheio e familiar, e às 18h tem um clima jovem e descontraído.'
            },
            {
              id: 'f7',
              question: 'Vocês aceitam todas as pessoas?',
              answer: 'Sim! Jesus nos ensinou a amar a todos sem distinção. Não importa sua origem, cor, situação social, passado ou histórias, você é bem-vindo aqui. Igreja é lugar de graça, não de perfeição.'
            },
            {
              id: 'f8',
              question: 'Preciso saber a Bíblia para ir?',
              answer: 'De jeito nenhum! Muitas pessoas chegam aqui sem nunca ter lido a Bíblia, e tudo bem. Ensinamos de forma simples e prática. Todos começaram do zero um dia!'
            }
          ]
        },
        contact: {
          title: 'Ainda Tem Dúvidas?',
          description: 'Nossa equipe está pronta para responder qualquer pergunta e te ajudar a planejar sua visita!',
          email: 'boasvindas@icp.com',
          phone: '+55 11 98765-4321'
        }
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
