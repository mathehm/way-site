<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border transition-all duration-300">
    <nav class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0">
          <NuxtImg
            v-if="logo?.main"
            :src="logo.main"
            :alt="churchName"
            class="h-12 w-auto"
            loading="eager"
          />
          <span v-else class="text-2xl font-heading font-bold text-primary">
            {{ churchName }}
          </span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.label"
            :to="item.link"
            class="text-foreground hover:text-primary transition-colors text-lg font-semibold"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:block">
          <NuxtLink to="/connect" class="btn-primary">
            Conecte-se
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <Icon :name="mobileMenuOpen ? 'mdi:close' : 'mdi:menu'" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="mobileMenuOpen"
          class="lg:hidden py-4 border-t border-border"
        >
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.label"
              :to="item.link"
              class="text-foreground hover:text-primary transition-colors font-medium py-2"
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </NuxtLink>
            <NuxtLink
              to="/connect"
              class="btn-primary text-center mt-4"
              @click="closeMobileMenu"
            >
              Conecte-se
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { logo } = useChurchLogo()
const { churchName } = useChurchMeta()

const mobileMenuOpen = ref(false)

const menuItems = [
  { label: 'Localizações', link: '/locations' },
  { label: 'Assistir', link: '/watch' },
  { label: 'Sobre', link: '/about' },
  { label: 'Cuidado', link: '/care' },
  { label: 'Doar', link: '/give' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Fecha menu mobile ao redimensionar para desktop
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      mobileMenuOpen.value = false
    }
  }

  window.addEventListener('resize', handleResize)

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>
