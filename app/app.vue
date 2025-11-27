<template>
  <div>
    <NuxtRouteAnnouncer />

    <!-- Loading State -->
    <div v-if="isLoading" class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <Icon name="mdi:loading" class="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
        <p class="text-muted">Carregando...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="hasError" class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center max-w-md mx-auto px-4">
        <Icon name="mdi:alert-circle" class="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 class="text-2xl font-bold mb-2">Erro ao carregar</h1>
        <p class="text-muted mb-6">{{ errorMessage }}</p>
        <button @click="refresh" class="btn-primary">
          Tentar Novamente
        </button>
      </div>
    </div>

    <!-- Main Layout -->
    <div v-else>
      <LayoutNavbar />

      <main class="pt-20">
        <NuxtPage />
      </main>

      <LayoutFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
const { isLoading, hasError, errorMessage, refresh } = useChurchConfig()
</script>
