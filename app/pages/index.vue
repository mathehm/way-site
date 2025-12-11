<template>
  <div>
    <!-- Hero Section (sempre presente) -->
    <HomeHeroSection />

    <!-- LiveSection sobreposto (quando há transmissão ativa) -->
    <HomeLiveSection v-if="isLive" />

    <!-- Action Cards -->
    <HomeActionCards />

    <!-- Events Section -->
    <HomeEventsSection />

    <!-- Cells Section -->
    <HomeCellsSection />

    <!-- CTA Sections (como Activate) -->
    <HomeCTASections />
  </div>
</template>

<script setup lang="ts">
// SEO para a página inicial
const { churchName, metadata } = useChurchMeta()
const { youtube } = useChurchContent()

const isLive = computed(() => {
  return youtube.value?.currentLive?.isActive ?? false
})

useHead({
  title: 'Início'
})
</script>
