<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-xl md:text-4xl font-bold mb-4">Eventos</h1>
        <p class="text-lg md:text-xl opacity-90">
          Participe dos nossos eventos e faça parte da nossa comunidade
        </p>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="bg-white border-b">
      <div class="container mx-auto px-4 py-8">
        <h2 class="text-2xl font-bold mb-6">Filtrar por categoria</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <button
            @click="selectedCategory = null"
            :class="[
              'p-4 rounded-xl border-2 transition-all text-left hover:shadow-md',
              selectedCategory === null
                ? 'border-primary bg-primary/5 shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            ]"
          >
            <Icon name="mdi:view-grid" :class="['text-3xl mb-2', selectedCategory === null ? 'text-primary' : 'text-gray-400']" />
            <div :class="['font-semibold', selectedCategory === null ? 'text-primary' : 'text-gray-900']">
              Todos
            </div>
            <div class="text-sm text-gray-500">{{ totalEvents }} eventos</div>
          </button>
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            :class="[
              'p-4 rounded-xl border-2 transition-all text-left hover:shadow-md',
              selectedCategory === category.id
                ? 'border-primary bg-primary/5 shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            ]"
          >
            <Icon :name="category.icon" :class="['text-3xl mb-2', selectedCategory === category.id ? 'text-primary' : 'text-gray-400']" />
            <div :class="['font-semibold text-sm', selectedCategory === category.id ? 'text-primary' : 'text-gray-900']">
              {{ category.name }}
            </div>
            <div class="text-xs text-gray-500">{{ category.count }} {{ category.count === 1 ? 'evento' : 'eventos' }}</div>
          </button>
        </div>
      </div>
    </section>

    <!-- Loading State -->
    <div v-if="pending" class="container mx-auto px-4 py-20">
      <div class="text-center">
        <Icon name="mdi:loading" class="text-5xl text-primary animate-spin" />
        <p class="text-gray-600 mt-4">Carregando eventos...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="container mx-auto px-4 py-20">
      <div class="text-center">
        <Icon name="mdi:alert-circle" class="text-5xl text-red-500" />
        <p class="text-gray-600 mt-4">Erro ao carregar eventos</p>
      </div>
    </div>

    <!-- Events Grid -->
    <section v-else class="container mx-auto px-4 py-12">
      <!-- Featured Events -->
      <div v-if="featuredEvents.length > 0 && !selectedCategory" class="mb-16">
        <div class="flex items-center gap-3 mb-8">
          <Icon name="mdi:star" class="text-3xl text-yellow-500" />
          <h2 class="text-3xl font-bold">Eventos em Destaque</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard
            v-for="event in featuredEvents"
            :key="event.id"
            :event="event"
            :featured="true"
          />
        </div>
      </div>

      <!-- All Events -->
      <div>
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-3xl font-bold">
            {{ selectedCategory ? getCategoryName(selectedCategory) : 'Todos os Eventos' }}
          </h2>
          <div class="text-gray-600">
            {{ filteredEvents.length }} {{ filteredEvents.length === 1 ? 'evento' : 'eventos' }}
          </div>
        </div>

        <div v-if="filteredEvents.length === 0" class="text-center py-20">
          <Icon name="mdi:calendar-blank" class="text-6xl text-gray-300 mb-4" />
          <p class="text-gray-600 text-lg">Nenhum evento encontrado nesta categoria</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard
            v-for="event in filteredEvents"
            :key="event.id"
            :event="event"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <Icon name="mdi:calendar-plus" class="text-5xl mb-6 opacity-90" />
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Não perca nenhum evento
        </h2>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Fique por dentro de todos os nossos eventos e atividades. Siga-nos nas redes sociais!
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/conheca#primeira-vez"
            class="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Primeira vez aqui?
          </NuxtLink>
          <NuxtLink
            to="/contato"
            class="bg-white/10 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors"
          >
            Entre em contato
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { ChurchEvent, ChurchEventCategory } from '~/types/church'

// SEO
useHead({
  title: 'Eventos - Igreja com Propósito',
  meta: [
    {
      name: 'description',
      content: 'Confira todos os eventos, cultos, conferências e atividades da nossa igreja'
    }
  ]
})

// State
const selectedCategory = ref<ChurchEventCategory | null>(null)

// Fetch events
const { data, pending, error } = await useFetch('/api/church/events')

// Computed
const events = computed(() => data.value?.data?.events || [])
const categories = computed(() => data.value?.data?.categories || [])
const totalEvents = computed(() => data.value?.data?.total || 0)

const featuredEvents = computed(() => {
  return events.value.filter((e: ChurchEvent) => e.featured === true)
})

const filteredEvents = computed(() => {
  if (selectedCategory.value) {
    return events.value.filter((e: ChurchEvent) => e.category === selectedCategory.value)
  }
  return events.value
})

// Methods
function getCategoryName(categoryId: ChurchEventCategory): string {
  const category = categories.value.find((c: any) => c.id === categoryId)
  return category?.name || 'Eventos'
}
</script>
