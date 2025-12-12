<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <section class="bg-primary text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          {{ cellName }}
        </h1>
        <p class="text-lg md:text-xl opacity-90">
          Encontre uma {{ cellName }} perto de você e faça parte da nossa comunidade
        </p>
      </div>
    </section>

    <!-- Loading State -->
    <div v-if="isLoading" class="container mx-auto px-4 py-12 text-center">
      <p class="text-gray-600">Carregando {{ cellNamePlural }}...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="hasError" class="container mx-auto px-4 py-12">
      <div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p class="text-red-800">{{ errorMessage }}</p>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else class="container mx-auto px-4 py-12">
      <!-- Networks Filter -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Filtrar por Rede</h2>
        <div class="flex flex-wrap gap-3">
          <button
            @click="filterByNetwork(null)"
            :class="[
              'px-6 py-3 rounded-lg font-semibold transition-all duration-200',
              selectedNetworkId === null
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-primary'
            ]"
          >
            Todas as {{ cellNamePlural }}
          </button>
          <button
            v-for="network in networks"
            :key="network.id"
            @click="filterByNetwork(network.id)"
            :class="[
              'px-6 py-3 rounded-lg font-semibold transition-all duration-200',
              selectedNetworkId === network.id
                ? 'text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 hover:shadow-md'
            ]"
            :style="
              selectedNetworkId === network.id
                ? { backgroundColor: network.color, borderColor: network.color }
                : { borderColor: network.color }
            "
          >
            {{ network.name }}
          </button>
        </div>
      </div>

      <!-- Map and Cell Details Container -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Map Section -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden relative z-0">
            <div
              ref="mapContainer"
              class="h-[320px] sm:h-[380px] md:h-[460px] lg:h-[600px] w-full"
            ></div>
          </div>
        </div>

        <!-- Cell Details Panel -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:sticky lg:top-24" data-cell-detail-panel>
            <div v-if="selectedCell">
              <!-- Cell Image -->
              <div
                v-if="selectedCell.image"
                class="w-full h-40 md:h-48 rounded-lg mb-4 overflow-hidden"
              >
                <img
                  :src="selectedCell.image"
                  :alt="selectedCell.name"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Network Badge -->
              <div
                class="inline-block px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-white mb-3"
                :style="{ backgroundColor: selectedCellNetwork?.color || '#2563eb' }"
              >
                {{ selectedCellNetwork?.name }}
              </div>

              <!-- Cell Name -->
              <h2 class="text-xl md:text-2xl font-bold mb-2">{{ selectedCell.name }}</h2>

              <!-- Leaders -->
              <div class="mb-3 md:mb-4">
                <p class="text-xs md:text-sm font-semibold text-gray-700 mb-1">Líderes:</p>
                <p class="text-sm text-gray-600">{{ selectedCell.leaders.join(', ') }}</p>
              </div>

              <!-- Schedule -->
              <div class="mb-3 md:mb-4 flex items-start">
                <Icon name="mdi:calendar-clock" class="text-primary text-lg md:text-xl mr-2 mt-0.5" />
                <div>
                  <p class="text-sm md:text-base font-semibold text-gray-700">{{ selectedCell.day }}</p>
                  <p class="text-sm text-gray-600">{{ selectedCell.time }}</p>
                </div>
              </div>

              <!-- Address -->
              <div class="mb-3 md:mb-4 flex items-start">
                <Icon name="mdi:map-marker" class="text-primary text-lg md:text-xl mr-2 mt-0.5" />
                <div>
                  <p class="text-sm text-gray-600">{{ selectedCell.address }}</p>
                </div>
              </div>

              <!-- Phone -->
              <div class="mb-5 md:mb-6 flex items-start">
                <Icon name="mdi:phone" class="text-primary text-lg md:text-xl mr-2 mt-0.5" />
                <div>
                  <a
                    :href="`tel:${selectedCell.phone.replace(/\D/g, '')}`"
                    class="text-primary hover:text-primary-dark transition-colors"
                  >
                    <span class="text-sm md:text-base">{{ selectedCell.phone }}</span>
                  </a>
                </div>
              </div>

              <!-- Description -->
              <div class="mb-5 md:mb-6">
                <p class="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {{ selectedCell.description }}
                </p>
              </div>

              <!-- Actions -->
              <div class="flex gap-2 md:flex-col md:gap-3">
                <a
                  :href="selectedCell.mapsLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-primary flex-1 md:w-full text-center flex items-center justify-center px-3 py-2 md:px-6 md:py-3 text-xs md:text-base"
                >
                  <Icon name="mdi:google-maps" class="text-lg md:text-base md:mr-2" />
                  <span class="hidden md:inline">Ver no Google Maps</span>
                </a>
                <a
                  :href="`https://wa.me/${selectedCell.phone.replace(/\D/g, '')}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 md:w-full bg-green-500 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-green-600 hover:shadow-lg flex items-center justify-center text-xs md:text-base"
                >
                  <Icon name="mdi:whatsapp" class="text-lg md:text-base md:mr-2" />
                  <span class="hidden md:inline">Entrar em Contato</span>
                </a>
              </div>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-12">
              <Icon name="mdi:map-marker-question" class="text-6xl text-gray-300 mb-4" />
              <p class="text-gray-600 mb-2">Selecione uma {{ cellName }}</p>
              <p class="text-sm text-gray-500">
                Clique em um marcador no mapa para ver os detalhes
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Cell List (Mobile/Tablet friendly) -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-6">Lista de {{ cellNamePlural }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div
            v-for="cell in filteredCells"
            :key="cell.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            @click="selectCell(cell.id)"
          >
            <!-- Cell Image -->
            <div
              v-if="cell.image"
              class="w-full h-40 sm:h-44 md:h-48 overflow-hidden"
            >
              <img
                :src="cell.image"
                :alt="cell.name"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="p-4 sm:p-5 md:p-6">
              <!-- Network Badge -->
              <div
                class="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
                :style="{ backgroundColor: getCellNetwork(cell.networkId)?.color || '#2563eb' }"
              >
                {{ getCellNetwork(cell.networkId)?.name }}
              </div>

              <!-- Cell Name -->
              <h3 class="text-lg sm:text-xl font-bold mb-2">{{ cell.name }}</h3>

              <!-- Leaders -->
              <p class="text-sm text-gray-600 mb-3">{{ cell.leaders.join(', ') }}</p>

              <!-- Schedule -->
              <div class="flex items-center text-gray-700 mb-2">
                <Icon name="mdi:calendar-clock" class="mr-2 text-primary" />
                <span class="text-sm">{{ cell.day }} - {{ cell.time }}</span>
              </div>

              <!-- Address -->
              <div class="flex items-start text-gray-700 mb-4">
                <Icon name="mdi:map-marker" class="mr-2 text-primary mt-0.5" />
                <span class="text-sm">{{ cell.address }}</span>
              </div>

              <!-- Action Button -->
              <button
                @click.stop="selectCell(cell.id)"
                class="w-full btn-primary text-sm"
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue'
import type { ChurchCell, ChurchCellNetwork } from '~/types/church'

// Church config
const { config } = useChurchConfig()
const cellName = computed(() => config.value?.customization?.names?.celula || 'Célula')
const cellNamePlural = computed(() => {
  const name = cellName.value
  return name.endsWith('a') ? name + 's' : name + 's'
})

// Fetch cells data
const { data: cellsData, pending: isLoading, error } = await useFetch('/api/church/cells')

const hasError = computed(() => !cellsData.value?.success)
const errorMessage = computed(() => cellsData.value?.error?.message || 'Erro ao carregar células')

const networks = computed<ChurchCellNetwork[]>(() => {
  if (!cellsData.value?.success || !cellsData.value.data) return []
  return cellsData.value.data.networks
})

const cells = computed<ChurchCell[]>(() => {
  if (!cellsData.value?.success || !cellsData.value.data) return []
  return cellsData.value.data.cells
})

// State
const selectedNetworkId = ref<string | null>(null)
const selectedCellId = ref<string | null>(null)
const mapContainer = ref<HTMLElement | null>(null)
let map: any = null
let markers: any[] = []

const route = useRoute()
const router = useRouter()

// Computed
const filteredCells = computed(() => {
  if (!selectedNetworkId.value) return cells.value
  return cells.value.filter(cell => cell.networkId === selectedNetworkId.value)
})

const selectedCell = computed(() => {
  if (!selectedCellId.value) return null
  return cells.value.find(cell => cell.id === selectedCellId.value) || null
})

const selectedCellNetwork = computed(() => {
  if (!selectedCell.value) return null
  return getCellNetwork(selectedCell.value.networkId)
})

// Map center - use first cell or default to Americana-SP center
const mapCenter = computed(() => {
  if (cells.value.length > 0) {
    return [cells.value[0].coordinates.lat, cells.value[0].coordinates.lng]
  }
  return [-22.7389, -47.3314] // Americana-SP center
})

// Methods
function getCellNetwork(networkId: string): ChurchCellNetwork | undefined {
  return networks.value.find(n => n.id === networkId)
}

function selectCell(cellId: string) {
  focusCell(cellId, { syncQuery: true })
}

function focusCell(
  cellId: string,
  options: { scroll?: boolean; syncQuery?: boolean } = {}
) {
  const { scroll = true, syncQuery = false } = options
  const targetCell = cells.value.find(cell => cell.id === cellId)

  if (!targetCell) return

  selectedCellId.value = targetCell.id

  if (process.client && scroll && window.innerWidth < 1024) {
    const panel = document.querySelector('[data-cell-detail-panel]')
    panel?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (map) {
    centerSelectedCellOnMap()
  }

  if (syncQuery) {
    const currentCellId = Array.isArray(route.query.cellId)
      ? route.query.cellId[0]
      : route.query.cellId

    if (currentCellId !== targetCell.id) {
      router.replace({
        query: {
          ...route.query,
          cellId: targetCell.id
        }
      })
    }
  }
}

function centerSelectedCellOnMap(zoom = 15) {
  if (!map || !selectedCell.value) return

  const { coordinates } = selectedCell.value
  map.setView([coordinates.lat, coordinates.lng], zoom)
}

function filterByNetwork(networkId: string | null) {
  selectedNetworkId.value = networkId
  updateMapMarkers()
}

function createCustomIcon(color: string) {
  if (!process.client) return null

  const iconHtml = `
    <div style="
      width: 32px;
      height: 32px;
      background-color: ${color};
      border: 2px solid white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    ">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
      </svg>
    </div>
  `

  const L = (window as any).L
  return L.divIcon({
    html: iconHtml,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  })
}

async function initMap() {
  if (!process.client || !mapContainer.value) return

  // Dynamically import Leaflet
  const L = await import('leaflet')
  ;(window as any).L = L.default || L

  // Initialize map
  map = L.map(mapContainer.value).setView(mapCenter.value as [number, number], 13)

  // Add tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  // Add markers
  updateMapMarkers()
}

function updateMapMarkers() {
  if (!map) return

  const L = (window as any).L

  // Clear existing markers
  markers.forEach(marker => marker.remove())
  markers = []

  // Add new markers for filtered cells
  filteredCells.value.forEach(cell => {
    const network = getCellNetwork(cell.networkId)
    const icon = createCustomIcon(network?.color || '#2563eb')

    const marker = L.marker([cell.coordinates.lat, cell.coordinates.lng], {
      icon
    }).addTo(map)

    // Add popup
    const popupContent = `
      <div class="p-2">
        <h3 class="font-bold text-lg mb-1">${cell.name}</h3>
        <p class="text-sm text-gray-600 mb-2">${network?.name || ''}</p>
        <p class="text-sm mb-1">
          📅 ${cell.day} às ${cell.time}
        </p>
        <button
          onclick="window.selectCellFromMap('${cell.id}')"
          class="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Ver Detalhes
        </button>
      </div>
    `

    marker.bindPopup(popupContent)
    marker.on('click', () => {
      selectCell(cell.id)
    })

    markers.push(marker)
  })

  // Fit bounds if there are markers
  if (markers.length > 0) {
    const group = L.featureGroup(markers)
    map.fitBounds(group.getBounds().pad(0.1))
  }

  if (selectedCell.value) {
    centerSelectedCellOnMap()
  }
}

// Make selectCell available globally for popup buttons
if (process.client) {
  (window as any).selectCellFromMap = selectCell
}

// Watch for network filter changes
watch(filteredCells, () => {
  if (map) {
    updateMapMarkers()
  }
})

watchEffect(() => {
  const rawCellId = route.query.cellId
  const cellId = Array.isArray(rawCellId) ? rawCellId[0] : rawCellId

  if (!cellId) return
  if (cells.value.length === 0) return
  if (selectedCellId.value === cellId) return

  focusCell(cellId, { syncQuery: false })
})

// Initialize map on mount
onMounted(() => {
  if (cells.value.length > 0) {
    initMap()
  }
})

// SEO
useHead({
  title: `${cellName.value} - ${config.value?.metadata.name || 'Igreja'}`,
  meta: [
    {
      name: 'description',
      content: `Encontre uma ${cellName.value} perto de você e faça parte da nossa comunidade`
    }
  ]
})
</script>
