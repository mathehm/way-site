<template>
  <section class="py-8 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        <NuxtLink
          v-for="card in actionCards"
          :key="card.id"
          :to="card.link"
          class="group flex flex-col items-center text-center p-4 rounded-xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Icon -->
          <div class="w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-2">
            <Icon :name="card.icon" class="w-4 sm:w-6 h-4 sm:h-6" />
          </div>

          <!-- Title -->
          <h3 class="font-semibold text-foreground group-hover:text-primary transition-colors sm:mb-1">
            {{ card.title }}
          </h3>

          <!-- Description (optional) -->
          <p v-if="card.description" class="text-sm text-muted">
            {{ card.description }}
          </p>

          <!-- Arrow Icon -->
          <Icon
            name="mdi:arrow-right"
            class="w-5 h-5 text-primary mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { actionCards } = useChurchContent()
</script>
