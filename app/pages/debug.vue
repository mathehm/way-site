<template>
  <div class="container mx-auto px-4 py-20">
    <h1 class="text-3xl font-bold mb-8">Debug - Configuração da Igreja</h1>

    <div v-if="isLoading" class="text-center py-10">
      <p>Carregando...</p>
    </div>

    <div v-else-if="hasError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <p><strong>Erro:</strong> {{ errorMessage }}</p>
    </div>

    <div v-else class="space-y-6">
      <!-- Config Raw -->
      <div class="bg-gray-100 p-4 rounded">
        <h2 class="font-bold mb-2">Config Raw:</h2>
        <pre class="text-xs overflow-auto">{{ config }}</pre>
      </div>

      <!-- Hero -->
      <div class="bg-blue-100 p-4 rounded">
        <h2 class="font-bold mb-2">Hero:</h2>
        <pre class="text-xs">{{ hero }}</pre>
      </div>

      <!-- Action Cards -->
      <div class="bg-green-100 p-4 rounded">
        <h2 class="font-bold mb-2">Action Cards ({{ actionCards?.length }} items):</h2>
        <pre class="text-xs">{{ actionCards }}</pre>
      </div>

      <!-- Events -->
      <div class="bg-yellow-100 p-4 rounded">
        <h2 class="font-bold mb-2">Events ({{ events?.length }} items):</h2>
        <pre class="text-xs">{{ events }}</pre>
      </div>

      <!-- Locations -->
      <div class="bg-purple-100 p-4 rounded">
        <h2 class="font-bold mb-2">Locations ({{ locations?.length }} items):</h2>
        <pre class="text-xs">{{ locations }}</pre>
      </div>

      <!-- CTA Sections -->
      <div class="bg-red-100 p-4 rounded">
        <h2 class="font-bold mb-2">CTA Sections ({{ ctaSections?.length }} items):</h2>
        <pre class="text-xs">{{ ctaSections }}</pre>
      </div>
    </div>

    <div class="mt-8">
      <NuxtLink to="/" class="text-blue-600 hover:underline">← Voltar para Home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { config, isLoading, hasError, errorMessage } = useChurchConfig()
const { hero, actionCards, events, locations, ctaSections } = useChurchContent()

// Debug direto do useFetch
const { data: rawData } = await useFetch('/api/church/config')

console.log('=== DEBUG ===')
console.log('Raw data from API:', rawData.value)
console.log('Config from composable:', config.value)
console.log('ActionCards:', actionCards.value)
console.log('Events:', events.value)
console.log('============')
</script>
