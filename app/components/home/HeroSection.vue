<template>
  <section class="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
    <!-- Background Image/Video -->
    <div class="absolute inset-0 z-0">
      <!-- Background Image -->
      <NuxtImg
        v-if="hero?.backgroundImage"
        :src="hero.backgroundImage"
        :alt="hero.title"
        class="w-full h-full object-cover"
        loading="eager"
        sizes="100vw"
      />

      <!-- Overlay escuro para melhor legibilidade -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center text-white">
      <!-- Subtitle -->
      <p v-if="hero?.subtitle" class="text-sm lg:text-base font-semibold uppercase tracking-wider mb-4 opacity-90">
        {{ hero.subtitle }}
      </p>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 leading-tight">
        {{ hero?.title || 'Bem-vindo' }}
      </h1>

      <!-- Description -->
      <p v-if="hero?.description" class="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
        {{ hero.description }}
      </p>

      <!-- CTA Button -->
      <NuxtLink
        v-if="hero?.ctaText"
        :to="hero.ctaLink"
        class="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
      >
        <Icon name="mdi:play-circle" class="w-6 h-6" />
        {{ hero.ctaText }}
      </NuxtLink>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <Icon name="mdi:chevron-down" class="w-8 h-8 text-white opacity-75" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { hero } = useChurchContent()
</script>
