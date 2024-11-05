// nuxt.config.js
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
  compatibility: {
    compatibilityDate: "2024-04-03",
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/reset.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "This is the Official Creanomic Brawijaya University Website",
        },
        { name: "author", content: "FWZ.dev" },
        { name: "theme-color", content: "#5a47cc" },
        { hid: "keywords", name: "keywords", content: "Creanomic, Brawijaya University, Official Website" },
        { hid: "robots", name: "robots", content: "index, follow" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: "Creanomic UB | Home" },
        { hid: "og:description", property: "og:description", content: "Welcome to the official landing page of Creanomic Brawijaya University." },
        { hid: "og:image", property: "og:image", content: "https://example.com/crea-icon.svg" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:title", name: "twitter:title", content: "Creanomic UB | Home" },
        { hid: "twitter:description", name: "twitter:description", content: "The official landing page of Creanomic Brawijaya University." },
        { hid: "twitter:image", name: "twitter:image", content: "https://example.com/crea-icon.svg" },
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
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js",
          defer: true,
        },
      ],
    },
  },

  compatibilityDate: "2024-11-06"
});