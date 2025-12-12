<template>
  <div v-if="isLive" class="fixed bottom-4 right-4 z-50 pointer-events-none">
    <!-- Desktop: Card with minimize/expand -->
    <div class="hidden md:block pointer-events-auto">
      <!-- Expanded state -->
      <div
        v-if="isExpanded"
        class="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/20 overflow-hidden w-[400px]"
      >
        <!-- Header with minimize button -->
        <div class="flex items-center justify-between p-3 border-b border-white/20">
          <div class="flex items-center gap-2">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-full w-full bg-red-500"></span>
            </span>
            <span class="text-xs font-bold uppercase tracking-wider text-black">Ao Vivo</span>
          </div>
          <button
            @click="isExpanded = false"
            class="text-black/60 hover:text-black transition-colors"
          >
            <Icon name="mdi:chevron-down" class="text-xl" />
          </button>
        </div>

        <!-- Player -->
        <div class="relative aspect-video bg-black">
          <iframe
            :src="`https://www.youtube.com/embed/${liveVideoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${liveVideoId}`"
            class="absolute inset-0 w-full h-full pointer-events-none"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
            frameborder="0"
          />
          <!-- Overlay to redirect -->
          <div class="absolute inset-0 z-10 cursor-pointer" @click="$router.push('/ao-vivo')"></div>
        </div>

        <!-- Content -->
        <div class="p-4 text-black">
          <h3 class="font-bold text-sm mb-2 line-clamp-2">{{ liveTitle }}</h3>

          <!-- Action buttons -->
          <div class="flex gap-2">
            <NuxtLink
              to="/ao-vivo"
              class="flex-1 inline-flex items-center justify-center gap-1.5 bg-white text-foreground px-3 py-2 rounded-full font-bold text-xs hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <Icon name="mdi:play-circle" class="text-base" />
              Assistir
            </NuxtLink>
            <button
              @click="shareLink"
              class="inline-flex items-center justify-center gap-1.5 bg-white/10 backdrop-blur text-black px-3 py-2 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              <Icon name="mdi:share-variant" class="text-sm" />
            </button>
          </div>
        </div>
      </div>

      <!-- Minimized state -->
      <div
        v-else
        @click="isExpanded = true"
        class="bg-white/10 backdrop-blur-2xl rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/20 px-4 py-3 cursor-pointer hover:bg-white/20 transition-all"
      >
        <div class="flex items-center gap-2 text-black">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-full w-full bg-red-500"></span>
          </span>
          <span class="text-xs font-bold uppercase tracking-wider">Ao Vivo</span>
          <Icon name="mdi:chevron-up" class="text-lg ml-1" />
        </div>
      </div>
    </div>

    <!-- Mobile: Minimized badge that redirects to /ao-vivo -->
    <NuxtLink
      to="/ao-vivo"
      class="md:hidden pointer-events-auto inline-block bg-white/10 backdrop-blur-2xl rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/20 px-4 py-3 hover:bg-white/20 transition-all"
    >
      <div class="flex items-center gap-2 text-black whitespace-nowrap">
        <span class="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-full w-full bg-red-500"></span>
        </span>
        <span class="text-xs font-bold uppercase tracking-wider">Ao Vivo</span>
        <Icon name="mdi:chevron-right" class="text-lg flex-shrink-0" />
      </div>
    </NuxtLink>
  </div>
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

// Desktop: starts expanded
const isExpanded = ref(true)

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
