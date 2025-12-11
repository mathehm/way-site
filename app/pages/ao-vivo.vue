<template>
  <div class="min-h-screen bg-black">
    <!-- Se está ao vivo -->
    <div v-if="isLive" class="container mx-auto px-4 py-8">
      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Player (2/3 da largura) -->
        <div class="lg:col-span-2">
          <div class="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              :src="`https://www.youtube.com/embed/${liveVideoId}?autoplay=1`"
              class="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              frameborder="0"
            />
          </div>

          <!-- Info da live -->
          <div class="mt-6 text-white">
            <div class="flex items-center gap-3 mb-3">
              <span class="px-3 py-1 bg-red-600 rounded-full text-sm font-bold flex items-center gap-2">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                AO VIVO
              </span>
              <span v-if="startedAt" class="text-gray-400 text-sm">
                Iniciado às {{ formatTime(startedAt) }}
              </span>
            </div>

            <h1 class="text-2xl md:text-3xl font-bold mb-2">{{ liveTitle }}</h1>
            <p v-if="liveDescription" class="text-gray-300">{{ liveDescription }}</p>

            <!-- Botões de ação -->
            <div class="flex flex-wrap gap-3 mt-6">
              <button
                @click="shareLink"
                class="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
              >
                <Icon name="mdi:share" class="text-xl" />
                Compartilhar
              </button>
              <a
                v-if="channelHandle"
                :href="`https://youtube.com/${channelHandle}`"
                target="_blank"
                class="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
              >
                <Icon name="mdi:youtube" class="text-xl" />
                Ver no YouTube
              </a>
            </div>
          </div>
        </div>

        <!-- Chat do YouTube (1/3 da largura) -->
        <div class="lg:col-span-1">
          <div class="bg-gray-900 rounded-xl overflow-hidden h-[400px] lg:h-[600px]">
            <iframe
              :src="`https://www.youtube.com/live_chat?v=${liveVideoId}&embed_domain=${domain}`"
              class="w-full h-full"
              frameborder="0"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Se NÃO está ao vivo -->
    <div v-else class="flex items-center justify-center min-h-screen text-white text-center px-4">
      <div>
        <Icon name="mdi:video-off-outline" class="text-8xl text-gray-600 mb-6 mx-auto" />
        <h1 class="text-3xl md:text-4xl font-bold mb-4">Nenhuma transmissão ativa</h1>
        <p class="text-xl text-gray-400 mb-8">
          Próxima transmissão: Domingo às 10h00
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/"
            class="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark px-8 py-3 rounded-full font-semibold transition"
          >
            <Icon name="mdi:home" />
            Voltar para Início
          </NuxtLink>

          <a
            v-if="channelHandle"
            :href="`https://youtube.com/${channelHandle}`"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-semibold transition"
          >
            <Icon name="mdi:youtube" class="text-xl" />
            Visitar Canal
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { youtube } = useChurchContent()
const { churchName } = useChurchMeta()

// SEO
useHead({
  title: 'Ao Vivo'
})

const isLive = computed(() => {
  return youtube.value?.currentLive?.isActive ?? false
})

const liveVideoId = computed(() => {
  return youtube.value?.currentLive?.videoId ?? ''
})

const liveTitle = computed(() => {
  return youtube.value?.currentLive?.title ?? 'Transmissão ao Vivo'
})

const liveDescription = computed(() => {
  return youtube.value?.currentLive?.description
})

const startedAt = computed(() => {
  return youtube.value?.currentLive?.startedAt
})

const channelHandle = computed(() => {
  return youtube.value?.channelHandle
})

const domain = computed(() => {
  if (process.client) {
    return window.location.hostname
  }
  return ''
})

function formatTime(isoDate: string): string {
  const date = new Date(isoDate)
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

function shareLink() {
  const url = window.location.href
  if (navigator.share) {
    navigator.share({
      title: `${liveTitle.value} - ${churchName.value}`,
      text: 'Assista conosco ao vivo!',
      url: url
    })
  } else {
    navigator.clipboard.writeText(url)
    alert('Link copiado para a área de transferência!')
  }
}
</script>
