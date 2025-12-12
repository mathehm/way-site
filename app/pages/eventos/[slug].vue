<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="pending" class="container mx-auto px-4 py-16">
      <div class="text-center">
        <Icon name="mdi:loading" class="text-5xl text-primary animate-spin" />
        <p class="text-gray-600 mt-4">Carregando evento...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error || !data?.success" class="container mx-auto px-4 py-16">
      <div class="text-center">
        <Icon name="mdi:alert-circle" class="text-5xl text-red-500" />
        <p class="text-gray-600 mt-4">Evento não encontrado</p>
        <NuxtLink to="/eventos" class="inline-block mt-6 btn-primary">
          Ver todos os eventos
        </NuxtLink>
      </div>
    </div>

    <!-- Event Detail -->
    <div v-else-if="event">
      <!-- Hero Section with Image -->
      <section class="relative h-[400px] md:h-[500px]">
        <div class="absolute inset-0">
          <img
            :src="event.image"
            :alt="event.title"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        <!-- Breadcrumb -->
        <div class="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent">
          <div class="container mx-auto px-4 py-6">
            <div class="flex items-center gap-2 text-white/90 text-sm">
              <NuxtLink to="/" class="hover:text-white transition-colors">Início</NuxtLink>
              <Icon name="mdi:chevron-right" />
              <NuxtLink to="/eventos" class="hover:text-white transition-colors">Eventos</NuxtLink>
              <Icon name="mdi:chevron-right" />
              <span class="text-white">{{ event.title }}</span>
            </div>
          </div>
        </div>

        <!-- Event Title and Category -->
        <div class="absolute bottom-0 left-0 right-0 z-10">
          <div class="container mx-auto px-4 pb-8">
            <div class="flex items-center gap-3 mb-4">
              <span class="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Icon :name="categoryIcon" class="text-lg" />
                {{ categoryName }}
              </span>
              <span v-if="event.isRecurring" class="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Icon name="mdi:refresh" class="text-lg" />
                Recorrente
              </span>
              <span v-if="event.featured" class="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Icon name="mdi:star" class="text-lg" />
                Destaque
              </span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
              {{ event.title }}
            </h1>
            <p v-if="event.subtitle" class="text-xl md:text-2xl text-white/90">
              {{ event.subtitle }}
            </p>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Column - Main Info -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Description -->
            <div class="bg-white rounded-2xl p-8 shadow-md">
              <h2 class="text-2xl font-bold mb-4">Sobre o evento</h2>
              <p class="text-gray-700 text-lg leading-relaxed">
                {{ event.longDescription || event.description }}
              </p>
            </div>

            <!-- Event Details Grid -->
            <div class="bg-white rounded-2xl p-8 shadow-md">
              <h2 class="text-2xl font-bold mb-6">Informações</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Date -->
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="mdi:calendar" class="text-2xl text-primary" />
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900 mb-1">Data</div>
                    <div class="text-gray-600">
                      {{ formatDate(event.startDate) }}
                      <span v-if="event.endDate"> - {{ formatDate(event.endDate) }}</span>
                    </div>
                  </div>
                </div>

                <!-- Time -->
                <div v-if="event.time" class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="mdi:clock" class="text-2xl text-primary" />
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900 mb-1">Horário</div>
                    <div class="text-gray-600">{{ event.time }}</div>
                  </div>
                </div>

                <!-- Location -->
                <div v-if="event.location" class="flex items-start gap-4 md:col-span-2">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="mdi:map-marker" class="text-2xl text-primary" />
                  </div>
                  <div class="flex-1">
                    <div class="font-semibold text-gray-900 mb-1">Local</div>
                    <div class="text-gray-600">
                      <div v-if="event.location.name">{{ event.location.name }}</div>
                      <div v-if="event.location.address">{{ event.location.address }}</div>
                      <a
                        v-if="event.location.mapsLink"
                        :href="event.location.mapsLink"
                        target="_blank"
                        class="text-primary hover:underline text-sm flex items-center gap-1 mt-1"
                      >
                        <Icon name="mdi:directions" class="text-lg" />
                        Ver no mapa
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Organizer -->
                <div v-if="event.organizer" class="flex items-start gap-4 md:col-span-2">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="mdi:account-circle" class="text-2xl text-primary" />
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900 mb-1">Organização</div>
                    <div class="text-gray-600">
                      <div>{{ event.organizer.name }}</div>
                      <div v-if="event.organizer.email" class="text-sm mt-1">
                        <a :href="`mailto:${event.organizer.email}`" class="text-primary hover:underline">
                          {{ event.organizer.email }}
                        </a>
                      </div>
                      <div v-if="event.organizer.phone" class="text-sm">
                        <a :href="`tel:${event.organizer.phone}`" class="text-primary hover:underline">
                          {{ event.organizer.phone }}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div v-if="event.tags && event.tags.length > 0" class="bg-white rounded-2xl p-8 shadow-md">
              <h2 class="text-2xl font-bold mb-4">Tags</h2>
              <div class="flex flex-wrap gap-3">
                <span
                  v-for="tag in event.tags"
                  :key="tag"
                  class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Right Column - Sidebar -->
          <div class="space-y-6">
            <!-- Registration Card -->
            <div v-if="event.registration" class="bg-white rounded-2xl p-6 shadow-md sticky top-24 z-10">
              <h3 class="text-xl font-bold mb-4">Inscrição</h3>

              <!-- Price -->
              <div class="flex items-center justify-between mb-4 pb-4 border-b">
                <span class="text-gray-600">Valor</span>
                <span class="text-2xl font-bold text-primary">
                  {{ event.registration.price === 0 ? 'Gratuito' : `R$ ${event.registration.price.toFixed(2)}` }}
                </span>
              </div>

              <!-- Spots -->
              <div v-if="event.registration.spotsRemaining !== undefined" class="mb-4 pb-4 border-b">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-gray-600">Vagas disponíveis</span>
                  <span class="font-semibold">{{ event.registration.spotsRemaining }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-primary h-2 rounded-full transition-all"
                    :style="{
                      width: `${Math.max(5, (event.registration.spotsRemaining / (event.registration.spots || 100)) * 100)}%`
                    }"
                  ></div>
                </div>
              </div>

              <!-- Deadline -->
              <div v-if="event.registration.deadline" class="mb-6">
                <div class="flex items-center gap-2 text-orange-600">
                  <Icon name="mdi:clock-alert" class="text-xl" />
                  <span class="text-sm font-medium">
                    Inscrições até {{ formatDate(event.registration.deadline) }}
                  </span>
                </div>
              </div>

              <!-- CTA Button -->
              <a
                v-if="event.registration.link"
                :href="event.registration.link"
                class="block w-full bg-primary text-white text-center py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                {{ event.registration.required ? 'Fazer inscrição' : 'Confirmar presença' }}
              </a>
            </div>

            <!-- Share Card -->
            <div class="bg-white rounded-2xl p-6 shadow-md">
              <h3 class="text-xl font-bold mb-4">Compartilhar</h3>
              <div class="flex gap-3">
                <button class="flex-1 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Icon name="mdi:instagram" class="text-xl" />
                  <span class="text-sm font-semibold">Instagram</span>
                </button>
                <button class="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  <Icon name="mdi:whatsapp" class="text-xl" />
                  <span class="text-sm font-semibold">WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Events -->
      <section v-if="relatedEvents && relatedEvents.length > 0" class="bg-white py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8">Eventos relacionados</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              v-for="relatedEvent in relatedEvents"
              :key="relatedEvent.id"
              :event="relatedEvent"
            />
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div class="container mx-auto px-4 text-center">
          <Icon name="mdi:calendar-check" class="text-5xl mb-6 opacity-90" />
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Veja todos os nossos eventos
          </h2>
          <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Temos diversas atividades acontecendo durante a semana
          </p>
          <NuxtLink
            to="/eventos"
            class="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Ver agenda completa
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChurchEvent } from '~/types/church'

const route = useRoute()
const id = route.params.slug as string // O parâmetro ainda se chama slug na URL, mas representa o ID

// Fetch event data
const { data, pending, error } = await useFetch(`/api/church/events/${id}`)

// Computed
const event = computed(() => data.value?.data?.event as ChurchEvent | undefined)
const relatedEvents = computed(() => data.value?.data?.relatedEvents || [])

const categoryIcon = computed(() => {
  if (!event.value) return 'mdi:calendar'
  const icons: Record<string, string> = {
    culto: 'mdi:church',
    reuniao: 'mdi:account-group',
    conferencia: 'mdi:account-multiple',
    retiro: 'mdi:pine-tree',
    curso: 'mdi:school',
    social: 'mdi:food',
    missoes: 'mdi:earth',
    infantil: 'mdi:baby-face',
    jovens: 'mdi:account-star',
    outro: 'mdi:dots-horizontal'
  }
  return icons[event.value.category] || 'mdi:calendar'
})

const categoryName = computed(() => {
  if (!event.value) return 'Evento'
  const names: Record<string, string> = {
    culto: 'Culto',
    reuniao: 'Reunião',
    conferencia: 'Conferência',
    retiro: 'Retiro',
    curso: 'Curso',
    social: 'Social',
    missoes: 'Missões',
    infantil: 'Infantil',
    jovens: 'Jovens',
    outro: 'Outro'
  }
  return names[event.value.category] || 'Evento'
})

// SEO
useHead({
  title: computed(() => event.value ? `${event.value.title} - Eventos` : 'Evento'),
  meta: [
    {
      name: 'description',
      content: computed(() => event.value?.description || 'Evento da igreja')
    }
  ]
})

// Methods
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}
</script>
