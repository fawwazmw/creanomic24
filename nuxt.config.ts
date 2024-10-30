// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  // Tambahkan CSS global
  css: ["~/assets/css/reset.css"],

  app: {
    head: {
      title: "Creanomic UB | Landing Page",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "This is Official Of Creanomic Brawijaya University Website",
        },
        { name: "author", content: "FWZ.dev" },
        { name: "theme-color", content: "#5a47cc" }, // Optional for mobile browsers
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/crea-icon.svg",
        },
        {
          rel: "apple-touch-icon",
          href: "/crea-icon.svg",
        },
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
