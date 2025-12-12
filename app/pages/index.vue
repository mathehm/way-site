<template>
  <div>
    <!-- Hero Section (sempre presente) -->
    <HomeHeroSection />

    <!-- Action Cards -->
    <HomeActionCards />

    <!-- Events Section -->
    <HomeEventsSection />

    <!-- Cells Section -->
    <HomeCellsSection />

    <!-- CTA Sections (como Activate) -->
    <HomeCTASections />

    <!-- Floating Live Card (fixed position, minimizable) -->
    <LiveFloatingCard />
  </div>
</template>

<script setup lang="ts">
// SEO para a página inicial
const { churchName, metadata } = useChurchMeta()

useHead({
  title: 'Início'
})
</script>
