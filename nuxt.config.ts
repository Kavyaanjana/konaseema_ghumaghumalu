export default defineNuxtConfig({
  compatibilityDate: '2025-06-11',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Konaseema Ghumaghumalu - Authentic Andhra Flavors',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Savor the rich, traditional flavors of coastal Andhra. Our menu features time-honored dishes prepared with fresh, local ingredients.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})

