<template>
  <div v-if="ctaSections && ctaSections.length > 0">
    <section
      v-for="section in ctaSections"
      :key="section.id"
      class="py-20 relative overflow-hidden"
      :style="{ backgroundColor: section.backgroundColor }"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
          <!-- Content -->
          <div class="flex-1 text-center lg:text-left" :style="{ color: section.textColor }">
            <h2 class="text-5xl lg:text-6xl font-heading font-black mb-4">
              {{ section.title }}
            </h2>
            <p v-if="section.subtitle" class="text-xl lg:text-2xl font-semibold mb-6 opacity-90">
              {{ section.subtitle }}
            </p>
            <p class="text-lg lg:text-xl mb-8 opacity-95 max-w-2xl" :class="{'mx-auto': !section.image, 'lg:mx-0': section.image}">
              {{ section.description }}
            </p>
            <NuxtLink
              :to="section.ctaLink"
              class="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              :style="{
                backgroundColor: section.textColor,
                color: section.backgroundColor
              }"
            >
              {{ section.ctaText }}
              <Icon name="mdi:arrow-right" class="w-6 h-6" />
            </NuxtLink>
          </div>

          <!-- Image (optional) -->
          <div v-if="section.image" class="flex-1 max-w-md">
            <NuxtImg
              :src="section.image"
              :alt="section.title"
              class="w-full h-auto rounded-xl shadow-2xl"
              sizes="sm:100vw lg:50vw"
            />
          </div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20" :style="{ backgroundColor: section.textColor }" />
      <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10" :style="{ backgroundColor: section.textColor }" />
    </section>
  </div>
</template>

<script setup lang="ts">
const { ctaSections } = useChurchContent()
</script>
