<template>
  <footer class="bg-gray-100 border-t border-border">
    <!-- Stay Connected Section -->
    <div class="bg-white py-12 border-b border-border">
      <div class="container mx-auto px-4">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-heading font-bold mb-4">Mantenha-se Conectado</h3>
          <p class="text-muted">Siga-nos nas redes sociais e baixe nosso app</p>
        </div>

        <!-- Social Links -->
        <div v-if="social" class="flex justify-center items-center gap-6 mb-8">
          <a
            v-if="social.instagram"
            :href="social.instagram"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary text-foreground hover:text-white transition-all duration-200"
            aria-label="Instagram"
          >
            <Icon name="mdi:instagram" class="w-6 h-6" />
          </a>
          <a
            v-if="social.facebook"
            :href="social.facebook"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary text-foreground hover:text-white transition-all duration-200"
            aria-label="Facebook"
          >
            <Icon name="mdi:facebook" class="w-6 h-6" />
          </a>
          <a
            v-if="social.youtube"
            :href="social.youtube"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary text-foreground hover:text-white transition-all duration-200"
            aria-label="YouTube"
          >
            <Icon name="mdi:youtube" class="w-6 h-6" />
          </a>
          <a
            v-if="social.spotify"
            :href="social.spotify"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary text-foreground hover:text-white transition-all duration-200"
            aria-label="Spotify"
          >
            <Icon name="mdi:spotify" class="w-6 h-6" />
          </a>
          <a
            v-if="social.twitter"
            :href="social.twitter"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary text-foreground hover:text-white transition-all duration-200"
            aria-label="Twitter"
          >
            <Icon name="mdi:twitter" class="w-6 h-6" />
          </a>
        </div>

        <!-- App Download (Placeholder) -->
        <div class="text-center">
          <p class="text-sm text-muted mb-4">Baixe nosso app</p>
          <div class="flex justify-center gap-4">
            <a href="#" class="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              <Icon name="mdi:apple" class="w-5 h-5 inline mr-2" />
              App Store
            </a>
            <a href="#" class="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              <Icon name="mdi:google-play" class="w-5 h-5 inline mr-2" />
              Google Play
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Links -->
    <div class="py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <!-- Column 1 -->
          <div>
            <h4 class="font-semibold mb-4">Participar</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/adults" class="text-muted hover:text-primary transition-colors">Adultos</NuxtLink></li>
              <li><NuxtLink to="/family" class="text-muted hover:text-primary transition-colors">Família</NuxtLink></li>
              <li><NuxtLink to="/volunteer" class="text-muted hover:text-primary transition-colors">Voluntários</NuxtLink></li>
            </ul>
          </div>

          <!-- Column 2 -->
          <div>
            <h4 class="font-semibold mb-4">Cuidado</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/prayer" class="text-muted hover:text-primary transition-colors">Oração</NuxtLink></li>
              <li><NuxtLink to="/recovery" class="text-muted hover:text-primary transition-colors">Recuperação</NuxtLink></li>
              <li><NuxtLink to="/counseling" class="text-muted hover:text-primary transition-colors">Aconselhamento</NuxtLink></li>
            </ul>
          </div>

          <!-- Column 3 -->
          <div>
            <h4 class="font-semibold mb-4">Recursos</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/growth" class="text-muted hover:text-primary transition-colors">Crescimento</NuxtLink></li>
              <li><NuxtLink to="/studies" class="text-muted hover:text-primary transition-colors">Estudos</NuxtLink></li>
              <li><NuxtLink to="/podcasts" class="text-muted hover:text-primary transition-colors">Podcasts</NuxtLink></li>
            </ul>
          </div>

          <!-- Column 4 -->
          <div>
            <h4 class="font-semibold mb-4">Mais</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/stories" class="text-muted hover:text-primary transition-colors">Histórias</NuxtLink></li>
              <li><NuxtLink to="/careers" class="text-muted hover:text-primary transition-colors">Carreiras</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-muted hover:text-primary transition-colors">Contato</NuxtLink></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-muted">
            &copy; {{ currentYear }} {{ churchName }}. Todos os direitos reservados.
          </p>
          <div class="flex gap-6 text-sm">
            <NuxtLink to="/privacy" class="text-muted hover:text-primary transition-colors">
              Privacidade
            </NuxtLink>
            <NuxtLink to="/terms" class="text-muted hover:text-primary transition-colors">
              Termos
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { social } = useChurchSocial()
const { churchName } = useChurchMeta()

const currentYear = new Date().getFullYear()
</script>
