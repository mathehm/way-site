<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <NuxtLink
          v-for="card in actionCards"
          :key="card.id"
          :to="card.link"
          class="group flex flex-col items-center text-center p-6 rounded-xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Icon -->
          <div class="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4">
            <Icon :name="card.icon" class="w-8 h-8" />
          </div>

          <!-- Title -->
          <h3 class="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
            {{ card.title }}
          </h3>

          <!-- Description (optional) -->
          <p v-if="card.description" class="text-sm text-muted">
            {{ card.description }}
          </p>

          <!-- Arrow Icon -->
          <Icon
            name="mdi:arrow-right"
            class="w-5 h-5 text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { actionCards } = useChurchContent()
</script>
