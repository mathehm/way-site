<template>
  <section v-if="displayCells.length > 0" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Encontre sua {{ cellName }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Conecte-se com pessoas da sua região e cresça em comunidade
        </p>
      </div>

      <!-- Cells Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div
          v-for="cell in displayCells"
          :key="cell.id"
          class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-[400px]"
          @click="navigateToCells(cell.id)"
        >
          <!-- Background Image -->
          <div
            v-if="cell.image"
            class="absolute inset-0 w-full h-full"
          >
            <img
              :src="cell.image"
              :alt="cell.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <!-- Gradient Overlay with Church Primary Color -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500"
            :style="{
              background: `linear-gradient(to top, ${primaryColorWithOpacity(0.95)} 0%, ${primaryColorWithOpacity(0.6)} 50%, transparent 100%)`
            }"
          ></div>

          <!-- Content -->
          <div class="relative h-full flex flex-col justify-end p-6 text-white">
            <!-- Network Badge -->
            <div
              class="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 self-start"
              :style="{ backgroundColor: getCellNetwork(cell.networkId)?.color || primaryColor }"
            >
              {{ getCellNetwork(cell.networkId)?.name }}
            </div>

            <!-- Cell Name -->
            <h3 class="text-2xl font-bold mb-2 group-hover:text-opacity-90 transition-all">
              {{ cell.name }}
            </h3>

            <!-- Leaders -->
            <p class="text-sm opacity-90 mb-3">
              {{ cell.leaders.join(' e ') }}
            </p>

            <!-- Schedule -->
            <div class="flex items-center text-sm opacity-90 mb-2">
              <Icon name="mdi:calendar-clock" class="mr-2" />
              <span>{{ cell.day }} - {{ cell.time }}</span>
            </div>

            <!-- Location -->
            <div class="flex items-start text-sm opacity-90 mb-4">
              <Icon name="mdi:map-marker" class="mr-2 mt-0.5 flex-shrink-0" />
              <span class="line-clamp-2">{{ cell.address }}</span>
            </div>

            <!-- Hover Indicator -->
            <div class="flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Ver detalhes</span>
              <Icon name="mdi:arrow-right" class="ml-2" />
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <NuxtLink
          to="/celulas"
          class="btn-primary inline-flex items-center text-lg px-8 py-4"
        >
          Ver todas as {{ cellNamePlural }}
          <Icon name="mdi:arrow-right" class="ml-2" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ChurchCell, ChurchCellNetwork } from '~/types/church'

// Church config
const { config } = useChurchConfig()
const cellName = computed(() => config.value?.customization?.names?.celula || 'Célula')
const cellNamePlural = computed(() => {
  const name = cellName.value
  return name.endsWith('a') ? name + 's' : name + 's'
})

const primaryColor = computed(() => config.value?.customization.colors.primary || '#2563eb')

// Fetch cells data
const { data: cellsData } = await useFetch('/api/church/cells')

const networks = computed<ChurchCellNetwork[]>(() => {
  if (!cellsData.value?.success || !cellsData.value.data) return []
  return cellsData.value.data.networks
})

const cells = computed<ChurchCell[]>(() => {
  if (!cellsData.value?.success || !cellsData.value.data) return []
  return cellsData.value.data.cells
})

// Select 4 random cells
const displayCells = computed(() => {
  const allCells = cells.value
  if (allCells.length <= 4) return allCells

  // Shuffle and take first 4
  const shuffled = [...allCells].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 4)
})

// Methods
function getCellNetwork(networkId: string): ChurchCellNetwork | undefined {
  return networks.value.find(n => n.id === networkId)
}

function primaryColorWithOpacity(opacity: number): string {
  // Convert hex to rgba
  const hex = primaryColor.value.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

function navigateToCells(cellId?: string) {
  if (!cellId) {
    navigateTo('/celulas')
    return
  }

  navigateTo({
    path: '/celulas',
    query: {
      cellId
    }
  })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
