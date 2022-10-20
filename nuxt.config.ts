export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  build: {
    transpile: ['@headlessui/vue'],
  },

  // localization - i18n config
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.json',
      },
      { code: 'de', file: 'de-DE.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    vueI18n: {
      legacy: false,
      locale: 'tr',
      fallbackLocale: 'tr',
      availableLocales: ['en', 'tr'],
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', './type.d.ts'],
      },
    },
  },
  vite: {
    logLevel: 'info',
  },
})
