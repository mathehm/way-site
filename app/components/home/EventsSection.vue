<template>
  <section v-if="events && events.length > 0" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article
          v-for="event in events"
          :key="event.id"
          class="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Background Image -->
          <div class="relative h-[400px] overflow-hidden">
            <NuxtImg
              :src="event.image"
              :alt="event.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="sm:100vw md:50vw"
            />

            <!-- Overlay with custom background color -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
              :style="{ backgroundColor: event.backgroundColor + '40' }"
            />

            <!-- Content -->
            <div class="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <!-- Subtitle -->
              <p v-if="event.subtitle" class="text-sm font-semibold uppercase tracking-wider mb-2 opacity-90">
                {{ event.subtitle }}
              </p>

              <!-- Title -->
              <h2 class="text-4xl lg:text-5xl font-heading font-bold mb-4">
                {{ event.title }}
              </h2>

              <!-- Description -->
              <p class="text-lg mb-6 opacity-95 max-w-xl">
                {{ event.description }}
              </p>

              <!-- CTA Button -->
              <div>
                <NuxtLink
                  :to="event.ctaLink"
                  class="inline-flex items-center gap-2 bg-white text-foreground hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  {{ event.ctaText }}
                  <Icon name="mdi:arrow-right" class="w-5 h-5" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { events } = useChurchContent()
</script>
