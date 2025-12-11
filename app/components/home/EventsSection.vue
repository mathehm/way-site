<template>
  <section v-if="featuredEvents && featuredEvents.length > 0" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-2">Próximos Eventos</h2>
          <p class="text-gray-600">Não perca o que está acontecendo</p>
        </div>
        <NuxtLink
          to="/eventos"
          class="hidden md:inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
        >
          Ver todos
          <Icon name="mdi:arrow-right" class="text-xl" />
        </NuxtLink>
      </div>

      <!-- Carousel Container -->
      <div class="relative">
        <!-- Navigation Buttons (Desktop) -->
        <button
          v-if="featuredEvents.length > 1"
          @click="scrollToPrev"
          class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="currentIndex === 0"
        >
          <Icon name="mdi:chevron-left" class="text-2xl text-gray-700" />
        </button>

        <button
          v-if="featuredEvents.length > 1"
          @click="scrollToNext"
          class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="currentIndex >= featuredEvents.length - 1"
        >
          <Icon name="mdi:chevron-right" class="text-2xl text-gray-700" />
        </button>

        <!-- Scrollable Container -->
        <div
          ref="scrollContainer"
          class="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
          @scroll="handleScroll"
        >
          <article
            v-for="event in featuredEvents"
            :key="event.id"
            class="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
          >
            <!-- Background Image -->
            <div class="relative h-[400px] overflow-hidden">
              <NuxtImg
                :src="event.image"
                :alt="event.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="sm:100vw md:50vw lg:33vw"
              />

              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              <!-- Content -->
              <div class="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <!-- Date Badge -->
                <div v-if="event.startDate" class="mb-3">
                  <span class="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">
                    {{ formatDate(event.startDate) }}
                  </span>
                </div>

                <!-- Subtitle -->
                <p v-if="event.subtitle" class="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">
                  {{ event.subtitle }}
                </p>

                <!-- Title -->
                <h3 class="text-2xl lg:text-3xl font-bold mb-3 line-clamp-2">
                  {{ event.title }}
                </h3>

                <!-- Description -->
                <p class="text-sm mb-4 opacity-90 line-clamp-2">
                  {{ event.description }}
                </p>

                <!-- CTA Button -->
                <div>
                  <NuxtLink
                    :to="`/eventos/${event.id}`"
                    class="inline-flex items-center gap-2 bg-white text-foreground hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                  >
                    Ver detalhes
                    <Icon name="mdi:arrow-right" class="w-4 h-4" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Dots Indicator -->
        <div v-if="featuredEvents.length > 1" class="flex justify-center gap-2 mt-6">
          <button
            v-for="(event, index) in featuredEvents"
            :key="`dot-${event.id}`"
            @click="scrollToIndex(index)"
            :class="[
              'w-2 h-2 rounded-full transition-all',
              currentIndex === index ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
            ]"
            :aria-label="`Ir para evento ${index + 1}`"
          />
        </div>
      </div>

      <!-- View All Link (Mobile) -->
      <div class="md:hidden text-center mt-8">
        <NuxtLink
          to="/eventos"
          class="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
        >
          Ver todos os eventos
          <Icon name="mdi:arrow-right" class="text-xl" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ChurchEvent } from '~/types/church'

const { events } = useChurchContent()

// Filter only featured events (limit to 6)
const featuredEvents = computed(() => {
  if (!events.value) return []
  return events.value.filter((e: ChurchEvent) => e.featured).slice(0, 6)
})

const scrollContainer = ref<HTMLElement | null>(null)
const currentIndex = ref(0)

function scrollToIndex(index: number) {
  if (!scrollContainer.value) return
  const container = scrollContainer.value
  const cardWidth = container.children[0]?.clientWidth || 0
  const gap = 24 // gap-6 = 24px
  const scrollPosition = index * (cardWidth + gap)
  container.scrollTo({ left: scrollPosition, behavior: 'smooth' })
  currentIndex.value = index
}

function scrollToPrev() {
  if (currentIndex.value > 0) {
    scrollToIndex(currentIndex.value - 1)
  }
}

function scrollToNext() {
  if (currentIndex.value < featuredEvents.value.length - 1) {
    scrollToIndex(currentIndex.value + 1)
  }
}

function handleScroll() {
  if (!scrollContainer.value) return
  const container = scrollContainer.value
  const cardWidth = container.children[0]?.clientWidth || 0
  const gap = 24
  const scrollPosition = container.scrollLeft
  const newIndex = Math.round(scrollPosition / (cardWidth + gap))
  currentIndex.value = newIndex
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short'
  })
}
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
