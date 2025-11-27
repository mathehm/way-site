<template>
  <section v-if="locations && locations.length > 0" class="py-20 bg-primary text-white">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-heading font-bold mb-4">
          Localizações
        </h2>
        <p class="text-lg opacity-90 max-w-2xl mx-auto">
          Encontre uma igreja perto de você ou participe online
        </p>
      </div>

      <!-- Locations Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <NuxtLink
          v-for="location in locations"
          :key="location.id"
          :to="location.mapsLink || '/locations'"
          :external="location.mapsLink?.startsWith('http')"
          class="group relative rounded-xl overflow-hidden aspect-[4/3] hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <!-- Image -->
          <NuxtImg
            :src="location.image"
            :alt="`${location.city}, ${location.country}`"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="sm:50vw md:33vw lg:25vw"
          />

          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <!-- Content -->
          <div class="absolute inset-0 flex flex-col justify-end p-4">
            <p class="text-xs uppercase tracking-wider opacity-90 mb-1">
              {{ location.country }}
            </p>
            <h3 class="text-lg font-bold">
              {{ location.city }}
            </h3>
          </div>

          <!-- Hover Icon -->
          <div class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <Icon name="mdi:arrow-right" class="w-5 h-5" />
          </div>
        </NuxtLink>
      </div>

      <!-- View All Link -->
      <div class="text-center mt-12">
        <NuxtLink
          to="/locations"
          class="inline-flex items-center gap-2 text-white font-semibold hover:underline"
        >
          Ver todas as localizações
          <Icon name="mdi:arrow-right" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locations } = useChurchContent()
</script>
