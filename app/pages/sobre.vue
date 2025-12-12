<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="isLoading" class="container mx-auto px-4 py-12 text-center">
      <p class="text-gray-600">Carregando...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="hasError" class="container mx-auto px-4 py-12">
      <div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p class="text-red-800">{{ errorMessage }}</p>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else-if="aboutData">
      <!-- Hero Section -->
      <section
        class="relative bg-gray-900 text-white py-20"
        :style="aboutData.hero.backgroundImage ? {
          backgroundImage: `url(${aboutData.hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {}"
      >
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="container mx-auto relative z-10">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">
            {{ aboutData.hero.title }}
          </h1>
          <p v-if="aboutData.hero.subtitle" class="text-lg md:text-xl opacity-90 max-w-3xl">
            {{ aboutData.hero.subtitle }}
          </p>
        </div>
      </section>

      <!-- Story Section -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div v-if="aboutData.story.image" class="order-2 lg:order-1">
              <img
                :src="aboutData.story.image"
                :alt="aboutData.story.title"
                class="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ aboutData.story.title }}</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                {{ aboutData.story.content }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Vision -->
      <section v-if="aboutData.mission || aboutData.vision" class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Mission -->
            <div v-if="aboutData.mission" class="bg-primary text-white p-8 md:p-12 rounded-2xl">
              <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="mdi:target" class="text-4xl" />
              </div>
              <h3 class="text-2xl md:text-3xl font-bold mb-4">{{ aboutData.mission.title }}</h3>
              <p class="text-lg opacity-90 leading-relaxed">
                {{ aboutData.mission.content }}
              </p>
            </div>

            <!-- Vision -->
            <div v-if="aboutData.vision" class="bg-secondary text-white p-8 md:p-12 rounded-2xl">
              <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="mdi:telescope" class="text-4xl" />
              </div>
              <h3 class="text-2xl md:text-3xl font-bold mb-4">{{ aboutData.vision.title }}</h3>
              <p class="text-lg opacity-90 leading-relaxed">
                {{ aboutData.vision.content }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Values -->
      <section v-if="aboutData.values && aboutData.values.length > 0" class="py-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Estes princípios guiam tudo o que fazemos e quem somos como igreja
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="value in aboutData.values"
              :key="value.id"
              class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon :name="value.icon" class="text-3xl text-primary" />
              </div>
              <h3 class="text-xl font-bold mb-3">{{ value.title }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Leaders -->
      <section v-if="aboutData.leaders && aboutData.leaders.length > 0" class="py-20 bg-gray-100">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Nossa Liderança</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os pastores que lideram nossa comunidade com dedicação e paixão
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="leader in aboutData.leaders"
              :key="leader.id"
              class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <!-- Leader Image -->
              <div v-if="leader.image" class="w-full h-64 overflow-hidden">
                <img
                  :src="leader.image"
                  :alt="leader.name"
                  class="w-full h-full object-cover"
                />
              </div>

              <div class="p-6">
                <h3 class="text-xl font-bold mb-1">{{ leader.name }}</h3>
                <p class="text-primary font-semibold mb-3">{{ leader.role }}</p>
                <p class="text-sm text-gray-600 leading-relaxed mb-4">
                  {{ leader.bio }}
                </p>

                <!-- Social Links -->
                <div v-if="leader.social" class="flex gap-3">
                  <a
                    v-if="leader.social.instagram"
                    :href="leader.social.instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Icon name="mdi:instagram" class="text-xl" />
                  </a>
                  <a
                    v-if="leader.social.email"
                    :href="`mailto:${leader.social.email}`"
                    class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Icon name="mdi:email" class="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Beliefs -->
      <section v-if="aboutData.beliefs" class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ aboutData.beliefs.title }}</h2>
              <p class="text-lg text-gray-600">
                Nossa fé está fundamentada na Palavra de Deus
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                v-for="(belief, index) in aboutData.beliefs.items"
                :key="index"
                class="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="mdi:check" class="text-white text-xl" />
                </div>
                <p class="text-gray-700 leading-relaxed">{{ belief }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- History Timeline -->
      <section v-if="aboutData.history" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ aboutData.history.title }}</h2>
            <p class="text-lg text-gray-600">
              Veja os momentos marcantes da nossa trajetória
            </p>
          </div>

          <div class="max-w-6xl mx-auto">
            <div class="relative">
              <!-- Timeline Line -->
              <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

              <!-- Timeline Items -->
              <div class="space-y-12">
                <div
                  v-for="(milestone, index) in aboutData.history.milestones"
                  :key="index"
                  class="relative"
                >
                  <div
                    :class="[
                      'grid grid-cols-1 md:grid-cols-2 gap-8 items-center',
                      index % 2 === 0 ? 'md:grid-flow-dense' : ''
                    ]"
                  >
                    <!-- Content -->
                    <div
                      :class="[
                        'bg-white p-6 md:p-8 rounded-xl shadow-lg relative',
                        index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                      ]"
                    >
                      <!-- Timeline Dot -->
                      <div class="hidden md:block absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"
                        :class="index % 2 === 0 ? '-right-3 translate-x-full' : '-left-3 -translate-x-full'"
                      ></div>

                      <div class="text-primary font-bold text-2xl mb-2">{{ milestone.year }}</div>
                      <h3 class="text-xl md:text-2xl font-bold mb-3">{{ milestone.title }}</h3>
                      <p class="text-gray-600 leading-relaxed">{{ milestone.description }}</p>
                    </div>

                    <!-- Image -->
                    <div
                      v-if="milestone.image"
                      :class="[
                        'rounded-xl overflow-hidden shadow-lg',
                        index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'
                      ]"
                    >
                      <img
                        :src="milestone.image"
                        :alt="milestone.title"
                        class="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-primary text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Venha Fazer Parte da Nossa História
          </h2>
          <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Estamos construindo uma comunidade onde todos são bem-vindos
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/primeira-visita"
              class="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Planejar Minha Visita
              <Icon name="mdi:arrow-right" class="ml-2" />
            </NuxtLink>
            <NuxtLink
              to="/contato"
              class="bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center"
            >
              Entre em Contato
              <Icon name="mdi:email" class="ml-2" />
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Church config for cell name
const { config } = useChurchConfig()
const cellName = computed(() => config.value?.customization?.names?.celula || 'Célula')

// Fetch about data
const { data: response, pending: isLoading, error } = await useFetch('/api/church/about')

const hasError = computed(() => !response.value?.success)
const errorMessage = computed(() => response.value?.error?.message || 'Erro ao carregar informações')
const aboutData = computed(() => response.value?.success ? response.value.data : null)

// Helper function to format numbers
function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'k+'
  }
  return num.toString()
}

// SEO
useHead({
  title: `Sobre - ${config.value?.metadata.name || 'Igreja'}`,
  meta: [
    {
      name: 'description',
      content: aboutData.value?.story.content || config.value?.metadata.description || 'Conheça nossa história, missão e valores'
    }
  ]
})
</script>
