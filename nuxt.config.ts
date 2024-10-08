// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  // Tambahkan CSS global
  css: ["~/assets/css/reset.css"],

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap",
        },
        {
          // Tambahkan CSS Flowbite dari CDN
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css",
        },
      ],
      script: [
        {
          // Tambahkan JavaScript Flowbite dari CDN dengan defer
          src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js",
          defer: true, // Jalankan script setelah HTML termuat
        },
      ],
    },
  },
});
