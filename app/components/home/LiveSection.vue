<template>
  <!-- Quando ESTÁ ao vivo - Card flutuante sobreposto ao Hero -->
  <section v-if="isLive" class="absolute top-0 left-0 right-0 z-10 pointer-events-none">
    <div class="container mx-auto px-4 pt-32 pb-12">
      <!-- Card com efeito glassmorphism -->
      <div class="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/20 overflow-hidden pointer-events-auto">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 lg:p-12">

        <!-- Lado esquerdo: Player do YouTube -->
        <div class="relative">
          <!-- Badge Ao Vivo (acima do player) -->
          <div class="flex items-center gap-2 mb-4">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span class="text-sm font-bold uppercase tracking-wider text-white">Ao Vivo Agora</span>
          </div>

          <!-- Player Container -->
          <div class="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            <iframe
              :src="`https://www.youtube.com/embed/${liveVideoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${liveVideoId}`"
              class="absolute inset-0 w-full h-full rounded-2xl"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen
              frameborder="0"
            />
          </div>

          <!-- Info adicional abaixo do player -->
          <p v-if="startedAt" class="mt-4 text-sm text-white/70">
            Transmissão iniciada às {{ formatTime(startedAt) }}
          </p>
        </div>

        <!-- Lado direito: Conteúdo (título, descrição, botões) -->
        <div class="text-white lg:pl-8">
          <!-- Título -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {{ liveTitle }}
          </h1>

          <!-- Descrição -->
          <p v-if="liveDescription" class="text-lg md:text-xl text-white/90 mb-8">
            {{ liveDescription }}
          </p>

          <!-- Botões de ação -->
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              to="/ao-vivo"
              class="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              <Icon name="mdi:play-circle" class="text-2xl" />
              Assistir Transmissão
            </NuxtLink>
            <button
              @click="shareLink"
              class="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              <Icon name="mdi:share-variant" class="text-xl" />
              Compartilhar
            </button>
          </div>
        </div>

        </div>
      </div>
    </div>
  </section>

  <!-- Quando NÃO está ao vivo - não mostrar nada (o Hero normal aparece) -->
</template>

<script setup lang="ts">
const { youtube } = useChurchContent()

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

function formatTime(isoDate: string): string {
  const date = new Date(isoDate)
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

function shareLink() {
  const url = window.location.origin + '/ao-vivo'
  if (navigator.share) {
    navigator.share({
      title: liveTitle.value,
      text: 'Assista conosco ao vivo!',
      url: url
    })
  } else {
    navigator.clipboard.writeText(url)
    alert('Link copiado para a área de transferência!')
  }
}
</script>
