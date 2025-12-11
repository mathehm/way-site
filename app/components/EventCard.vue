<template>
  <div
    class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
    :class="{ 'ring-2 ring-yellow-400': featured }"
  >
    <!-- Featured Badge -->
    <div
      v-if="featured"
      class="absolute top-4 right-4 z-10 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1"
    >
      <Icon name="mdi:star" class="text-base" />
      Destaque
    </div>

    <!-- Image -->
    <div class="relative h-48 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"
      ></div>
      <img
        :src="event.image"
        :alt="event.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      <!-- Category Badge -->
      <div class="absolute top-4 left-4 z-10">
        <span
          class="bg-white/90 backdrop-blur text-gray-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
        >
          <Icon :name="categoryIcon" class="text-sm" />
          {{ categoryName }}
        </span>
      </div>

      <!-- Recurring Badge -->
      <div v-if="event.isRecurring" class="absolute bottom-4 left-4 z-10">
        <span
          class="bg-primary/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
        >
          <Icon name="mdi:refresh" class="text-sm" />
          Recorrente
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-1">
      <!-- Date -->
      <div class="flex items-center gap-2 text-primary font-semibold mb-3">
        <Icon name="mdi:calendar" class="text-xl" />
        <span class="text-sm">{{ formatDate(event.startDate) }}</span>
        <span v-if="event.time" class="text-gray-400">•</span>
        <span v-if="event.time" class="text-sm text-gray-600">{{ event.time }}</span>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
        {{ event.title }}
      </h3>

      <!-- Subtitle -->
      <p v-if="event.subtitle" class="text-sm text-gray-500 font-medium mb-3">
        {{ event.subtitle }}
      </p>

      <!-- Description -->
      <p class="text-gray-600 text-sm line-clamp-3 mb-4">
        {{ event.description }}
      </p>

      <!-- Location -->
      <div v-if="event.location" class="flex items-start gap-2 text-gray-600 text-sm mb-4">
        <Icon name="mdi:map-marker" class="text-lg text-primary flex-shrink-0 mt-0.5" />
        <span class="line-clamp-1">{{ event.location.name || event.location.address }}</span>
      </div>

      <!-- Registration Info -->
      <div v-if="event.registration" class="space-y-2 mb-4">
        <!-- Price -->
        <div class="flex items-center gap-2">
          <Icon
            :name="event.registration.price === 0 ? 'mdi:gift' : 'mdi:currency-brl'"
            class="text-lg text-primary"
          />
          <span class="text-sm font-semibold">
            {{ event.registration.price === 0 ? 'Gratuito' : `R$ ${event.registration.price.toFixed(2)}` }}
          </span>
        </div>

        <!-- Spots Remaining -->
        <div v-if="event.registration.spotsRemaining !== undefined" class="flex items-center gap-2">
          <Icon name="mdi:account-multiple" class="text-lg text-primary" />
          <span class="text-sm">
            {{ event.registration.spotsRemaining }} vagas disponíveis
          </span>
        </div>

        <!-- Registration Deadline -->
        <div v-if="event.registration.deadline" class="flex items-center gap-2">
          <Icon name="mdi:clock-alert" class="text-lg text-orange-500" />
          <span class="text-sm text-orange-600">
            Inscrições até {{ formatDate(event.registration.deadline) }}
          </span>
        </div>
      </div>

      <!-- Tags -->
      <div v-if="event.tags && event.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in event.tags.slice(0, 3)"
          :key="tag"
          class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
        >
          #{{ tag }}
        </span>
      </div>

      <!-- Spacer to push button to bottom -->
      <div class="flex-1"></div>

      <!-- CTA Button -->
      <NuxtLink
        :to="`/eventos/${event.id}`"
        class="block w-full bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mt-4"
      >
        Ver detalhes
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChurchEvent } from '~/types/church'

const props = defineProps<{
  event: ChurchEvent
  featured?: boolean
}>()

// Computed
const categoryIcon = computed(() => {
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
  return icons[props.event.category] || 'mdi:calendar'
})

const categoryName = computed(() => {
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
  return names[props.event.category] || 'Evento'
})

// Methods
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}
</script>
