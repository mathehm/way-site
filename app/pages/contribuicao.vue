<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <section class="relative p-20 bg-primary text-white overflow-hidden">
      <div class="container mx-auto relative z-10">
        <h1 class="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
          Contribua com a Obra
        </h1>
        <p class="text-lg md:text-xl text-white/90 leading-relaxed">
          Sua generosidade nos permite continuar impactando vidas, servindo a comunidade e levando esperança através do evangelho.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <!-- Versículo bíblico -->
          <div class="bg-primary/5 border-l-4 border-primary rounded-lg p-4 md:p-6 mb-8 md:mb-12">
            <p class="text-base md:text-lg text-gray-700 italic mb-2">
              "Cada um contribua segundo propôs no seu coração, não com tristeza ou por necessidade; porque Deus ama ao que dá com alegria."
            </p>
            <p class="text-primary font-semibold text-sm md:text-base">2 Coríntios 9:7</p>
          </div>

          <!-- Formas de contribuição -->
          <div class="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <!-- PIX -->
            <div class="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="mdi:qrcode" class="text-xl md:text-2xl text-primary" />
                </div>
                <h2 class="text-xl md:text-2xl font-bold text-gray-900">PIX</h2>
              </div>

              <p class="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                Use o QR Code abaixo ou copie a chave PIX para fazer sua contribuição de forma rápida e segura.
              </p>

              <!-- QR Code placeholder -->
              <div class="bg-gray-100 rounded-xl p-6 md:p-8 mb-4 md:mb-6 flex items-center justify-center">
                <div class="w-40 h-40 md:w-48 md:h-48 bg-white rounded-lg shadow-inner flex items-center justify-center">
                  <p class="text-gray-400 text-xs md:text-sm">QR Code PIX</p>
                </div>
              </div>

              <!-- Chave PIX -->
              <div class="bg-gray-50 rounded-lg p-3 md:p-4 mb-3 md:mb-4">
                <p class="text-xs text-gray-500 mb-1">Chave PIX</p>
                <p class="font-mono text-xs md:text-sm text-gray-900 break-all">
                  contribuicao@igrejaway.com.br
                </p>
              </div>

              <button
                @click="copyPixKey"
                class="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 md:py-3 px-4 md:px-6 rounded-lg transition-all flex items-center justify-center gap-2 hover:scale-105 text-sm md:text-base"
              >
                <Icon name="mdi:content-copy" class="text-lg md:text-xl" />
                Copiar Chave PIX
              </button>
            </div>

            <!-- Transferência Bancária -->
            <div class="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="mdi:bank" class="text-xl md:text-2xl text-primary" />
                </div>
                <h2 class="text-xl md:text-2xl font-bold text-gray-900">Transferência Bancária</h2>
              </div>

              <p class="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                Faça uma transferência bancária diretamente para nossa conta oficial.
              </p>

              <div class="space-y-3 md:space-y-4">
                <div class="border-b border-gray-100 pb-2 md:pb-3">
                  <p class="text-xs text-gray-500 mb-1">Banco</p>
                  <p class="text-sm md:text-base text-gray-900 font-semibold">Banco do Brasil</p>
                </div>

                <div class="border-b border-gray-100 pb-2 md:pb-3">
                  <p class="text-xs text-gray-500 mb-1">Agência</p>
                  <p class="text-sm md:text-base text-gray-900 font-semibold">1234-5</p>
                </div>

                <div class="border-b border-gray-100 pb-2 md:pb-3">
                  <p class="text-xs text-gray-500 mb-1">Conta Corrente</p>
                  <p class="text-sm md:text-base text-gray-900 font-semibold">12345-6</p>
                </div>

                <div class="border-b border-gray-100 pb-2 md:pb-3">
                  <p class="text-xs text-gray-500 mb-1">CNPJ</p>
                  <p class="text-sm md:text-base text-gray-900 font-mono">00.000.000/0001-00</p>
                </div>

                <div class="pb-2 md:pb-3">
                  <p class="text-xs text-gray-500 mb-1">Favorecido</p>
                  <p class="text-sm md:text-base text-gray-900 font-semibold">{{ churchName }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Como a contribuição é usada -->
          <div class="mb-12 md:mb-16">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">
              Como Sua Contribuição é Usada
            </h2>

            <div class="grid md:grid-cols-3 gap-6 md:gap-8">
              <div class="text-center">
                <div class="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon name="mdi:account-group" class="text-2xl md:text-3xl text-primary" />
                </div>
                <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">Ministérios</h3>
                <p class="text-sm md:text-base text-gray-600">
                  Apoio aos diversos ministérios da igreja que servem nossa comunidade.
                </p>
              </div>

              <div class="text-center">
                <div class="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon name="mdi:church" class="text-2xl md:text-3xl text-primary" />
                </div>
                <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">Infraestrutura</h3>
                <p class="text-sm md:text-base text-gray-600">
                  Manutenção e melhoria de nossos espaços para melhor servir você.
                </p>
              </div>

              <div class="text-center">
                <div class="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon name="mdi:earth" class="text-2xl md:text-3xl text-primary" />
                </div>
                <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">Missões</h3>
                <p class="text-sm md:text-base text-gray-600">
                  Alcançar mais pessoas com a mensagem do evangelho localmente e globalmente.
                </p>
              </div>
            </div>
          </div>

          <!-- Perguntas Frequentes -->
          <div class="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-12">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Perguntas Frequentes</h2>

            <div class="space-y-5 md:space-y-6">
              <div>
                <h3 class="text-base md:text-lg font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <Icon name="mdi:help-circle" class="text-primary text-lg md:text-xl flex-shrink-0 mt-0.5" />
                  Quanto devo contribuir?
                </h3>
                <p class="text-sm md:text-base text-gray-600 ml-6 md:ml-7">
                  A Bíblia ensina sobre o princípio do dízimo (10% da renda) e ofertas voluntárias. O importante é contribuir com alegria e segundo o que cada um propôs em seu coração.
                </p>
              </div>

              <div>
                <h3 class="text-base md:text-lg font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <Icon name="mdi:help-circle" class="text-primary text-lg md:text-xl flex-shrink-0 mt-0.5" />
                  Minha contribuição é segura?
                </h3>
                <p class="text-sm md:text-base text-gray-600 ml-6 md:ml-7">
                  Sim! Todas as formas de contribuição são seguras e os valores são gerenciados com total transparência e responsabilidade pela administração da igreja.
                </p>
              </div>

              <div>
                <h3 class="text-base md:text-lg font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <Icon name="mdi:help-circle" class="text-primary text-lg md:text-xl flex-shrink-0 mt-0.5" />
                  Posso contribuir mesmo não sendo membro?
                </h3>
                <p class="text-sm md:text-base text-gray-600 ml-6 md:ml-7">
                  Absolutamente! Sua contribuição é muito bem-vinda independentemente de você ser membro ou visitante. Agradecemos seu coração generoso.
                </p>
              </div>

              <div>
                <h3 class="text-base md:text-lg font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <Icon name="mdi:help-circle" class="text-primary text-lg md:text-xl flex-shrink-0 mt-0.5" />
                  Como posso saber como minha contribuição está sendo usada?
                </h3>
                <p class="text-sm md:text-base text-gray-600 ml-6 md:ml-7">
                  A igreja mantém total transparência em suas finanças. Para mais informações sobre nossos relatórios financeiros, entre em contato conosco.
                </p>
              </div>
            </div>
          </div>

          <!-- Footer da página -->
          <div class="text-center mt-8 md:mt-12 p-5 md:p-6 bg-gray-50 rounded-lg">
            <Icon name="mdi:shield-check" class="text-3xl md:text-4xl text-primary mx-auto mb-2 md:mb-3" />
            <p class="text-sm md:text-base text-gray-600">
              <strong class="text-gray-900">Suas informações estão seguras conosco.</strong><br>
              Todas as transações são processadas de forma segura e confidencial.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { churchName } = useChurchMeta()

// SEO
useHead({
  title: 'Contribuição'
})

function copyPixKey() {
  const pixKey = 'contribuicao@igrejaway.com.br' // TODO: pegar do banco de dados da igreja
  navigator.clipboard.writeText(pixKey)
  alert('Chave PIX copiada para a área de transferência!')
}
</script>
