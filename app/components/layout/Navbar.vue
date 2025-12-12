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
            v-for="item in simpleMenuItems"
            :key="item.label"
            :to="item.link"
            class="text-foreground hover:text-primary transition-colors text-lg font-semibold"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Conheça Dropdown -->
          <div
            class="relative"
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false"
          >
            <button
              class="text-foreground hover:text-primary transition-colors text-lg font-semibold flex items-center gap-1"
            >
              Conheça
              <Icon :name="showDropdown ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-xl" />
            </button>

            <!-- Dropdown Menu -->
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div
                v-show="showDropdown"
                class="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
              >
                <NuxtLink
                  v-for="subItem in conhecaItems"
                  :key="subItem.id"
                  :to="subItem.link"
                  class="block px-6 py-3 hover:bg-gray-50 transition-colors group"
                >
                  <div class="flex items-start gap-3">
                    <Icon :name="subItem.icon" class="text-2xl text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div class="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {{ subItem.title }}
                      </div>
                      <div class="text-sm text-gray-600">{{ subItem.subtitle }}</div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </Transition>
          </div>
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
              v-for="item in simpleMenuItems"
              :key="item.label"
              :to="item.link"
              class="text-foreground hover:text-primary transition-colors font-medium py-2"
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </NuxtLink>

            <!-- Conheça Mobile Dropdown -->
            <div>
              <button
                @click="showMobileDropdown = !showMobileDropdown"
                class="w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 flex items-center justify-between"
              >
                Conheça
                <Icon :name="showMobileDropdown ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-xl" />
              </button>

              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
              >
                <div v-show="showMobileDropdown" class="pl-4 mt-2 space-y-2">
                  <NuxtLink
                    v-for="subItem in conhecaItems"
                    :key="subItem.id"
                    :to="subItem.link"
                    class="block py-2 text-sm text-gray-700 hover:text-primary transition-colors"
                    @click="closeMobileMenu"
                  >
                    <Icon :name="subItem.icon" class="inline mr-2 text-primary" />
                    {{ subItem.title }}
                  </NuxtLink>
                </div>
              </Transition>
            </div>

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
const showDropdown = ref(false)
const showMobileDropdown = ref(false)

const simpleMenuItems = [
  { label: 'Sobre', link: '/sobre' },
  { label: 'Células', link: '/celulas' },
  { label: 'Eventos', link: '/eventos' },
  { label: 'Contribuição', link: '/contribuicao' }
]

const conhecaItems = [
  {
    id: 'primeira-vez',
    title: 'Primeira vez aqui?',
    subtitle: 'Descubra quem somos',
    icon: 'mdi:hand-wave',
    link: '/conheca#primeira-vez'
  },
  {
    id: 'proximos-passos',
    title: 'Próximos Passos',
    subtitle: 'Encontre seu propósito',
    icon: 'mdi:compass',
    link: '/conheca#proximos-passos'
  },
  {
    id: 'batismos',
    title: 'Batismos',
    subtitle: 'Declare sua fé publicamente',
    icon: 'mdi:water',
    link: '/conheca#batismos'
  },
  {
    id: 'pequenos-grupos',
    title: 'Pequenos Grupos',
    subtitle: 'Conecte-se com pessoas',
    icon: 'mdi:account-group',
    link: '/conheca#pequenos-grupos'
  },
  {
    id: 'servir',
    title: 'Servir',
    subtitle: 'Faça parte do time',
    icon: 'mdi:hand-heart',
    link: '/conheca#servir'
  }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  showMobileDropdown.value = false
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  showMobileDropdown.value = false
}

// Fecha menu mobile ao redimensionar para desktop
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      mobileMenuOpen.value = false
      showDropdown.value = false
      showMobileDropdown.value = false
    }
  }

  window.addEventListener('resize', handleResize)

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>
