# Way Site - Sistema de Sites para Igrejas

Sistema multi-tenancy de sites personalizáveis para igrejas com painel administrativo integrado.

## Visão Geral

Este projeto permite que igrejas tenham seus próprios sites totalmente personalizados através de um painel administrativo, onde podem configurar:

- **Cores e Identidade Visual**: Cores primárias, secundárias, logos
- **Conteúdo Dinâmico**: Eventos, localizações, mensagens, CTAs
- **Informações Institucionais**: Sobre, contato, redes sociais
- **Layout Responsivo**: Baseado no design do Saddleback Church

## Arquitetura

### Stack Tecnológica

- **Frontend**: Nuxt 3 + Vue 3 + TypeScript
- **Styling**: Tailwind CSS com CSS Variables dinâmicas
- **Backend API**: Golang (em desenvolvimento)
- **Banco de Dados**: PostgreSQL
- **Rendering**: SSR (Server-Side Rendering) para SEO otimizado

### Estrutura de Pastas

```
app/
├── assets/
│   └── css/
│       └── main.css              # Estilos globais e CSS variables
├── components/
│   ├── home/                     # Componentes da home
│   │   ├── ActionCards.vue
│   │   ├── CTASections.vue
│   │   ├── EventsSection.vue
│   │   ├── HeroSection.vue
│   │   └── LocationsSection.vue
│   └── layout/                   # Componentes de layout
│       ├── Footer.vue
│       └── Navbar.vue
├── composables/
│   └── useChurchConfig.ts        # Composables para acessar config da igreja
├── pages/
│   └── index.vue                 # Página inicial
├── plugins/
│   ├── church-seo.ts            # Plugin para SEO dinâmico
│   └── church-theme.client.ts   # Plugin para injetar cores customizadas
├── types/
│   └── church.ts                 # Tipos TypeScript
└── app.vue                       # Layout principal

server/
├── api/
│   └── church/
│       └── config.ts             # API route para buscar config da igreja
├── plugins/
│   └── subdomain.ts             # Plugin para detectar subdomínio
└── utils/
    └── mockChurchData.ts        # Dados mock para desenvolvimento
```

## Funcionalidades Principais

### 1. Multi-tenancy via Subdomínio

- Cada igreja tem seu subdomínio: `igrejax.seudominio.com`
- Suporte para domínio customizado: `igrejax.com` → aponta para subdomínio
- Detecção automática no servidor

### 2. Personalização Completa

- **Cores**: Sistema de cores dinâmicas via CSS Variables
- **Logos**: Logo principal, versão branca e favicon
- **Fontes**: Customização de fontes heading e body
- **Conteúdo**: Hero, eventos, localizações, CTAs

### 3. SEO Otimizado

- Server-Side Rendering (SSR)
- Meta tags dinâmicas por igreja
- Open Graph e Twitter Cards
- Sitemap automático (futuro)

### 4. Performance

- Cache de 5 minutos na config da igreja
- Lazy loading de imagens
- CSS purge automático (Tailwind)
- Otimização de assets

## Setup

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:3000`

### Produção

```bash
npm run build
npm run preview
```

## Configuração

### Variáveis de Ambiente

Crie um arquivo `.env`:

```env
# URL do backend Golang (quando estiver pronto)
GOLANG_API_URL=http://localhost:8080

# Ambiente
NODE_ENV=development
```

### Dados Mock

Durante o desenvolvimento, o sistema usa dados mock localizados em:
`server/utils/mockChurchData.ts`

Existem 2 igrejas de exemplo:
- `demo` (padrão)
- `gracachurch`

## Integração com Backend Golang

### API Endpoint Esperado

```
GET /api/churches/{subdomain}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "1",
    "subdomain": "igrejax",
    "customization": {
      "colors": {
        "primary": "#2563eb",
        "primaryDark": "#1d4ed8",
        "secondary": "#7c3aed",
        "secondaryDark": "#6d28d9",
        "accent": "#f59e0b",
        "accentDark": "#d97706"
      },
      "logo": {
        "main": "url...",
        "white": "url...",
        "favicon": "url..."
      },
      "fonts": {
        "heading": "Montserrat",
        "body": "Inter"
      },
      "social": {
        "instagram": "url...",
        "facebook": "url..."
      }
    },
    "content": {
      "hero": { ... },
      "actionCards": [ ... ],
      "events": [ ... ],
      "locations": [ ... ],
      "ctaSections": [ ... ]
    },
    "metadata": {
      "name": "Igreja X",
      "description": "...",
      "keywords": [ ... ]
    }
  }
}
```

### Como Integrar

1. Configure a variável `GOLANG_API_URL` no `.env`
2. A API route em `server/api/church/config.ts` já está preparada
3. Remova ou ajuste os dados mock conforme necessário

## Componentes Principais

### Navbar
Navegação responsiva com logo customizado da igreja.

### HeroSection
Banner principal com imagem/vídeo de fundo e CTA.

### ActionCards
Cards de ação rápida (5 cards em linha).

### EventsSection
Exibe eventos da igreja em cards grandes.

### LocationsSection
Mostra localizações da igreja com fundo colorido customizado.

### CTASections
Seções de call-to-action customizáveis (como "Activate").

### Footer
Rodapé com redes sociais, links e app download.

## Customização de Cores

As cores são injetadas dinamicamente via CSS Variables:

```css
:root {
  --color-primary: 37 99 235;
  --color-primary-dark: 29 78 216;
  --color-secondary: 124 58 237;
  --color-secondary-dark: 109 40 217;
  --color-accent: 245 158 11;
  --color-accent-dark: 217 119 6;
}
```

No Tailwind, use:

```html
<div class="bg-primary text-white">
  <button class="btn-primary">Clique aqui</button>
</div>
```

## Próximos Passos

- [ ] Integração com backend Golang
- [ ] Páginas internas (Sobre, Eventos, Localizações, etc.)
- [ ] Sistema de autenticação
- [ ] Formulários de cadastro
- [ ] Sistema de doações/pagamentos
- [ ] Painel administrativo
- [ ] Sistema de upload de imagens
- [ ] Preview ao vivo no painel
- [ ] Múltiplos templates/temas
- [ ] Suporte a vídeos no hero
- [ ] Sistema de blog/notícias

## Referências

Design inspirado em: [Saddleback Church](https://welcome.saddleback.com/)

## Licença

Propriedade privada - Todos os direitos reservados
