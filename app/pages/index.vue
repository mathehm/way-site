<template>
  <div>
    <!-- Hero Section -->
    <HomeHeroSection />

    <!-- Action Cards -->
    <HomeActionCards />

    <!-- Events Section -->
    <HomeEventsSection />

    <!-- Locations Section -->
    <HomeLocationsSection />

    <!-- CTA Sections (como Activate) -->
    <HomeCTASections />
  </div>
</template>

<script setup lang="ts">
// SEO para a página inicial
const { churchName, metadata } = useChurchMeta()

useHead({
  title: 'Início'
})
</script>
