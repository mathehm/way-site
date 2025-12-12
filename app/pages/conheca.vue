<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero -->
    <section class="relative bg-primary text-white py-16">
      <div class="absolute inset-0 bg-gradient-to-br from-primary to-secondary"></div>
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h1 class="text-xl md:text-4xl font-bold mb-4">Conheça Nossa Igreja</h1>
        <p class="text-lg md:text-xl opacity-95">
          Estamos felizes que você está aqui. Explore as formas de se conectar e crescer conosco!
        </p>
      </div>
    </section>

    <!-- Section 1: Primeira vez aqui? -->
    <section id="primeira-vez" class="py-20 bg-white scroll-mt-24">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="mdi:hand-wave" class="text-4xl text-primary" />
            </div>
            <div>
              <h2 class="text-3xl md:text-4xl font-bold">Primeira vez aqui?</h2>
              <p class="text-lg text-gray-600">Descubra quem somos</p>
            </div>
          </div>

          <div class="prose prose-lg max-w-none">
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Sabemos que visitar uma igreja pela primeira vez pode ser intimidador. Queremos que você saiba que aqui não há julgamentos, apenas amor e acolhimento.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div class="bg-gray-50 p-6 rounded-xl">
                <h3 class="text-xl font-bold mb-3 flex items-center gap-2">
                  <Icon name="mdi:clock-outline" class="text-primary" />
                  Horários dos Cultos
                </h3>
                <p class="text-gray-700">Domingos: 9h, 11h e 18h</p>
                <p class="text-sm text-gray-600 mt-2">Duração: 1h15 a 1h30</p>
              </div>

              <div class="bg-gray-50 p-6 rounded-xl">
                <h3 class="text-xl font-bold mb-3 flex items-center gap-2">
                  <Icon name="mdi:tshirt-crew" class="text-primary" />
                  O Que Vestir
                </h3>
                <p class="text-gray-700">Vista-se como se sentir confortável!</p>
                <p class="text-sm text-gray-600 mt-2">Somos casuais e acolhedores</p>
              </div>

              <div class="bg-gray-50 p-6 rounded-xl">
                <h3 class="text-xl font-bold mb-3 flex items-center gap-2">
                  <Icon name="mdi:baby-face" class="text-primary" />
                  Programação Infantil
                </h3>
                <p class="text-gray-700">Para todas as idades, do berçário aos adolescentes</p>
              </div>

              <div class="bg-gray-50 p-6 rounded-xl">
                <h3 class="text-xl font-bold mb-3 flex items-center gap-2">
                  <Icon name="mdi:parking" class="text-primary" />
                  Estacionamento
                </h3>
                <p class="text-gray-700">Gratuito com manobrista</p>
                <p class="text-sm text-gray-600 mt-2">Chegue 15min antes</p>
              </div>
            </div>

            <div class="mt-8">
              <NuxtLink to="/sobre" class="btn-primary inline-flex items-center">
                Conheça Nossa História
                <Icon name="mdi:arrow-right" class="ml-2" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Próximos Passos -->
    <section id="proximos-passos" class="py-20 bg-gray-50 scroll-mt-24">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="mdi:compass" class="text-4xl text-primary" />
            </div>
            <div>
              <h2 class="text-3xl md:text-4xl font-bold">Próximos Passos</h2>
              <p class="text-lg text-gray-600">Encontre seu propósito</p>
            </div>
          </div>

          <div class="prose prose-lg max-w-none">
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
              Após sua primeira visita, queremos ajudá-lo a crescer e se conectar. Aqui estão os próximos passos para sua jornada espiritual:
            </p>

            <div class="space-y-6">
              <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold mb-2">Café de Boas-Vindas</h3>
                    <p class="text-gray-700 mb-3">Um encontro informal com pastores e líderes para conhecer mais sobre a igreja. Acontece todo primeiro domingo do mês após o culto das 11h.</p>
                    <NuxtLink to="/eventos" class="text-primary font-semibold hover:underline inline-flex items-center">
                      Ver próximas datas
                      <Icon name="mdi:arrow-right" class="ml-1" />
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-secondary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold mb-2">Curso de Membresia</h3>
                    <p class="text-gray-700 mb-3">Um curso de 4 semanas sobre nossa história, valores e como se tornar membro. Descubra como fazer parte oficialmente da família!</p>
                  </div>
                </div>
              </div>

              <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-accent font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold mb-2">Descubra Seu Propósito</h3>
                    <p class="text-gray-700 mb-3">Temos diversos ministérios e oportunidades de servir. Vamos te ajudar a descobrir onde você se encaixa e pode fazer diferença!</p>
                    <a href="#servir" class="text-primary font-semibold hover:underline inline-flex items-center">
                      Ver oportunidades
                      <Icon name="mdi:arrow-right" class="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Batismos -->
    <section id="batismos" class="py-20 bg-white scroll-mt-24">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="mdi:water" class="text-4xl text-primary" />
            </div>
            <div>
              <h2 class="text-3xl md:text-4xl font-bold">Batismos</h2>
              <p class="text-lg text-gray-600">Declare sua fé publicamente</p>
            </div>
          </div>

          <div class="prose prose-lg max-w-none">
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
              O batismo é um passo importante de obediência e um testemunho público da sua fé em Jesus Cristo. É um momento de celebração onde você declara sua nova vida!
            </p>

            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl mb-8">
              <h3 class="text-2xl font-bold mb-4">Por Que Se Batizar?</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <Icon name="mdi:check-circle" class="text-primary text-xl mt-1 flex-shrink-0" />
                  <span><strong>Obediência a Jesus:</strong> Foi um comando deixado por Jesus aos seus discípulos</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="mdi:check-circle" class="text-primary text-xl mt-1 flex-shrink-0" />
                  <span><strong>Testemunho Público:</strong> É uma forma de declarar publicamente sua fé</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="mdi:check-circle" class="text-primary text-xl mt-1 flex-shrink-0" />
                  <span><strong>Simboliza Nova Vida:</strong> Representa morte para o velho eu e ressurreição em Cristo</span>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="mdi:check-circle" class="text-primary text-xl mt-1 flex-shrink-0" />
                  <span><strong>Identificação com Cristo:</strong> Você se identifica com a morte, sepultamento e ressurreição de Jesus</span>
                </li>
              </ul>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="bg-gray-50 p-6 rounded-xl">
                <h3 class="text-xl font-bold mb-3">Pré-Requisitos</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <Icon name="mdi:check" class="text-primary mt-1" />
                    <span>Ter aceito Jesus como Salvador</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <Icon name="mdi:check" class="text-primary mt-1" />
                    <span>Participar do estudo preparatório</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <Icon name="mdi:check" class="text-primary mt-1" />
                    <span>Preencher ficha de inscrição</span>
                  </li>
                </ul>
              </div>

              <div class="bg-gray-50 p-6 rounded-xl">
                <h3 class="text-xl font-bold mb-3">Próximas Datas</h3>
                <p class="text-gray-700 mb-4">Realizamos batismos a cada 2 meses</p>
                <button class="btn-primary w-full">
                  Quero Me Batizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Pequenos Grupos -->
    <section id="pequenos-grupos" class="py-20 bg-gray-50 scroll-mt-24">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="mdi:account-group" class="text-4xl text-primary" />
            </div>
            <div>
              <h2 class="text-3xl md:text-4xl font-bold">Pequenos Grupos</h2>
              <p class="text-lg text-gray-600">Conecte-se com pessoas</p>
            </div>
          </div>

          <div class="prose prose-lg max-w-none">
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
              Nossas {{ cellName }}s são grupos pequenos que se reúnem durante a semana para estudo bíblico, oração e comunhão. É onde relacionamentos verdadeiros acontecem!
            </p>

            <div class="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h3 class="text-2xl font-bold mb-6 text-center">Por Que Participar?</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex items-start gap-3">
                  <Icon name="mdi:heart" class="text-primary text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-bold mb-1">Amizades Verdadeiras</h4>
                    <p class="text-gray-600 text-sm">Conheça pessoas que se tornarão amigos para a vida</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="mdi:book-open" class="text-primary text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-bold mb-1">Crescimento Espiritual</h4>
                    <p class="text-gray-600 text-sm">Estude a Bíblia em um ambiente acolhedor</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="mdi:hands-pray" class="text-primary text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-bold mb-1">Apoio e Oração</h4>
                    <p class="text-gray-600 text-sm">Tenha um grupo que ora por você e te apoia</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon name="mdi:home-heart" class="text-primary text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-bold mb-1">Ambiente Familiar</h4>
                    <p class="text-gray-600 text-sm">Sinta-se em casa e seja você mesmo</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <NuxtLink to="/celulas" class="btn-primary inline-flex items-center text-lg">
                Encontrar uma {{ cellName }} Perto de Você
                <Icon name="mdi:map-marker" class="ml-2" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Servir -->
    <section id="servir" class="py-20 bg-white scroll-mt-24">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="mdi:hand-heart" class="text-4xl text-primary" />
            </div>
            <div>
              <h2 class="text-3xl md:text-4xl font-bold">Servir</h2>
              <p class="text-lg text-gray-600">Faça parte do time</p>
            </div>
          </div>

          <div class="prose prose-lg max-w-none">
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
              Servir é mais do que um ministério - é uma oportunidade de usar seus dons e talentos para impactar vidas e glorificar a Deus!
            </p>

            <div class="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl mb-8">
              <h3 class="text-2xl font-bold mb-6 text-center">Áreas de Ministério</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="mdi:music" class="text-primary text-3xl mb-2" />
                  <h4 class="font-bold mb-1">Louvor</h4>
                  <p class="text-sm text-gray-600">Vocal, instrumentos, som e mídia</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="mdi:baby-face" class="text-primary text-3xl mb-2" />
                  <h4 class="font-bold mb-1">Kids</h4>
                  <p class="text-sm text-gray-600">Ministério infantil e adolescentes</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="mdi:hand-wave" class="text-primary text-3xl mb-2" />
                  <h4 class="font-bold mb-1">Recepção</h4>
                  <p class="text-sm text-gray-600">Primeira impressão e acolhimento</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="mdi:video" class="text-primary text-3xl mb-2" />
                  <h4 class="font-bold mb-1">Mídia</h4>
                  <p class="text-sm text-gray-600">Filmagem, edição e redes sociais</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="mdi:hands-pray" class="text-primary text-3xl mb-2" />
                  <h4 class="font-bold mb-1">Intercessão</h4>
                  <p class="text-sm text-gray-600">Ministério de oração</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="mdi:coffee" class="text-primary text-3xl mb-2" />
                  <h4 class="font-bold mb-1">Café</h4>
                  <p class="text-sm text-gray-600">Hospitalidade e conexão</p>
                </div>
              </div>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
              <div class="flex items-start gap-3">
                <Icon name="mdi:lightbulb" class="text-yellow-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h4 class="font-bold mb-2">Não Sabe Por Onde Começar?</h4>
                  <p class="text-gray-700">Tudo bem! Nossa equipe pode te ajudar a descobrir onde seus dons e paixões se encaixam melhor. O importante é dar o primeiro passo!</p>
                </div>
              </div>
            </div>

            <div class="text-center">
              <button class="btn-primary inline-flex items-center text-lg">
                Quero Fazer Parte do Time
                <Icon name="mdi:arrow-right" class="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Pronto Para Começar?</h2>
        <p class="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
          Não importa onde você está em sua jornada espiritual, há um lugar para você aqui!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/#" class="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Planejar Minha Visita
          </NuxtLink>
          <NuxtLink to="/contato" class="bg-white/10 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors">
            Falar com Alguém
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { config } = useChurchConfig()
const cellName = computed(() => config.value?.customization?.names?.celula || 'Célula')

// SEO
useHead({
  title: `Conheça - ${config.value?.metadata.name || 'Igreja'}`,
  meta: [
    {
      name: 'description',
      content: 'Descubra como fazer parte da nossa comunidade. Primeira visita, próximos passos, batismos, pequenos grupos e oportunidades de servir.'
    }
  ]
})

// Smooth scroll handling
onMounted(() => {
  // Handle hash navigation on page load
  if (process.client && window.location.hash) {
    setTimeout(() => {
      const element = document.querySelector(window.location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }
})
</script>

<style scoped>
.prose {
  max-width: none;
}

.scroll-mt-24 {
  scroll-margin-top: 6rem;
}
</style>
