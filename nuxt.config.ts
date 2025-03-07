// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  head: {
    title: 'Forestiffy copy', 
    meta: [
      { name: 'forestiffy', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/tree_icon.ico' },
    ]
  },

  modules: [
    "nuxt-quasar-ui"
  ],

  quasar: {
    config: {
      extras: ["material-icons"], 
      lang: "es", 
      components: {
        defaults: {
          QBtn: { dense: true, flat: true },
          QInput: { dense: true }
        }
      }
    }
  },

  css: [
    // 'quasar/src/css/index.sass',
    "quasar/dist/quasar.css" 
  ],

  build: {
    transpile: ["quasar"]
  }
})
