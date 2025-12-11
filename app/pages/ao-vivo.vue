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

        <!-- Área de interação com tabs (1/3 da largura) -->
        <div class="lg:col-span-1">
          <div class="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden h-[400px] lg:h-[600px] flex flex-col border border-white/10">
            <!-- Tabs -->
            <div class="flex border-b border-white/10">
              <button
                @click="activeTab = 'chat'"
                :class="[
                  'flex-1 px-4 py-3 text-sm font-semibold transition-colors',
                  activeTab === 'chat'
                    ? 'bg-white/5 text-white border-b-2 border-white'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                ]"
              >
                <Icon name="mdi:chat" class="inline mr-1" />
                Chat
              </button>
              <button
                @click="activeTab = 'announcements'"
                :class="[
                  'flex-1 px-4 py-3 text-sm font-semibold transition-colors',
                  activeTab === 'announcements'
                    ? 'bg-white/5 text-white border-b-2 border-white'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                ]"
              >
                <Icon name="mdi:bullhorn" class="inline mr-1" />
                Recados
              </button>
              <button
                @click="activeTab = 'contribution'"
                :class="[
                  'flex-1 px-4 py-3 text-sm font-semibold transition-colors',
                  activeTab === 'contribution'
                    ? 'bg-white/5 text-white border-b-2 border-white'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                ]"
              >
                <Icon name="mdi:heart" class="inline mr-1" />
                Contribuir
              </button>
            </div>

            <!-- Conteúdo das tabs -->
            <div class="flex-1 overflow-hidden">
              <!-- Tab: Chat -->
              <div v-show="activeTab === 'chat'" class="h-full">
                <iframe
                  :src="`https://www.youtube.com/live_chat?v=${liveVideoId}&embed_domain=${domain}`"
                  class="w-full h-full"
                  frameborder="0"
                />
              </div>

              <!-- Tab: Recados -->
              <div v-show="activeTab === 'announcements'" class="h-full overflow-y-auto p-4 space-y-4">
                <!-- Recados da semana -->
                <div v-if="announcements && announcements.length > 0">
                  <div
                    v-for="announcement in announcements"
                    :key="announcement.id"
                    class="bg-white/5 rounded-lg p-4 border-l-4 border-white/20 hover:border-white/40 transition"
                  >
                    <div class="flex items-start gap-3">
                      <Icon
                        :name="announcement.icon || 'mdi:bullhorn'"
                        class="text-2xl text-white/60 flex-shrink-0 mt-1"
                      />
                      <div>
                        <h3 class="font-bold text-white mb-1">{{ announcement.title }}</h3>
                        <p class="text-sm text-white/70">{{ announcement.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="text-center text-white/50 py-8">
                  <Icon name="mdi:information-outline" class="text-4xl mb-2" />
                  <p>Nenhum recado no momento</p>
                </div>

                <!-- Próximos eventos (discreto) -->
                <div v-if="upcomingEvents.length > 0" class="mt-6 pt-6 border-t border-white/10">
                  <h4 class="text-xs uppercase tracking-wider text-white/40 mb-3 font-semibold">Próximos Eventos</h4>
                  <div class="space-y-2">
                    <NuxtLink
                      v-for="event in upcomingEvents.slice(0, 3)"
                      :key="event.id"
                      :to="`/eventos#${event.slug}`"
                      class="block bg-white/5 rounded p-3 hover:bg-white/10 transition text-sm"
                    >
                      <div class="flex items-center gap-2 text-white/50 mb-1">
                        <Icon name="mdi:calendar" class="text-sm" />
                        <span class="text-xs font-semibold">{{ formatEventDate(event.date) }}</span>
                      </div>
                      <p class="text-white/80 font-medium text-sm">{{ event.title }}</p>
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <!-- Tab: Contribuição -->
              <div v-show="activeTab === 'contribution'" class="h-full overflow-y-auto p-6">
                <div class="text-white space-y-6">
                  <div class="text-center">
                    <Icon name="mdi:heart-circle" class="text-6xl text-white/60 mb-4 mx-auto" />
                    <h3 class="text-xl font-bold mb-2">Contribua com a Obra</h3>
                    <p class="text-white/70 text-sm">
                      Sua contribuição nos ajuda a continuar impactando vidas através do evangelho.
                    </p>
                  </div>

                  <!-- Opções de contribuição -->
                  <div class="space-y-3">
                    <div class="bg-white/5 rounded-lg p-4">
                      <h4 class="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="mdi:qrcode" class="text-white/60" />
                        PIX
                      </h4>
                      <p class="text-sm text-white/70 mb-3">Use o QR Code ou copie a chave PIX</p>
                      <div class="bg-white p-4 rounded text-center mb-3">
                        <p class="text-gray-800 text-xs">QR Code aqui</p>
                      </div>
                      <button
                        @click="copyPix"
                        class="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 rounded transition flex items-center justify-center gap-2"
                      >
                        <Icon name="mdi:content-copy" />
                        Copiar chave PIX
                      </button>
                    </div>

                    <div class="bg-white/5 rounded-lg p-4">
                      <h4 class="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="mdi:bank" class="text-white/60" />
                        Transferência Bancária
                      </h4>
                      <div class="text-sm text-white/70 space-y-1">
                        <p><span class="text-white/50">Banco:</span> Banco Exemplo</p>
                        <p><span class="text-white/50">Agência:</span> 1234-5</p>
                        <p><span class="text-white/50">Conta:</span> 12345-6</p>
                        <p><span class="text-white/50">CNPJ:</span> 00.000.000/0001-00</p>
                      </div>
                    </div>

                    <div class="text-center text-xs text-white/40 pt-4">
                      <Icon name="mdi:shield-check" class="inline mr-1" />
                      Suas informações estão seguras conosco
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
const { youtube, events } = useChurchContent()
const { churchName } = useChurchMeta()

// SEO
useHead({
  title: 'Ao Vivo'
})

// Estado da tab ativa
const activeTab = ref<'chat' | 'announcements' | 'contribution'>('chat')

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

const announcements = computed(() => {
  return youtube.value?.currentLive?.announcements ?? []
})

const upcomingEvents = computed(() => {
  const now = new Date()
  return (events.value || [])
    .filter(event => new Date(event.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
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

function formatEventDate(isoDate: string): string {
  const date = new Date(isoDate)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short'
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

function copyPix() {
  const pixKey = 'exemplo@pix.com.br' // TODO: pegar do banco de dados da igreja
  navigator.clipboard.writeText(pixKey)
  alert('Chave PIX copiada para a área de transferência!')
}
</script>
