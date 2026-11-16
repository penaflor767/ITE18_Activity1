// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      'tailwindcss/nesting': false
    }
  },
  app: {
    head: {
      title: 'Nicko James A. Peñaflor | Personal Portfolio',
      meta: [
        {
          name: 'description',
          content: 'The personal portfolio and profile of Nicko James A. Peñaflor, an Information Technology student.'
        }
      ]
    }
  }
})
