<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Hero />

      <!-- About Us Section -->
      <AboutUs />

      <!-- Maskot Section -->
      <Maskot />

      <!-- Logo Section -->
      <Logo />

      <!-- Sea & Sponsor Section -->
      <SeaSponsor />

      <!-- Media Partner Section -->
      <Medpart />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Hero from "~/components/landingpage/Hero.vue";
import AboutUs from "~/components/landingpage/AboutUs.vue";
import Maskot from "~/components/landingpage/Maskot.vue";
import Logo from "~/components/landingpage/Logo.vue";
import SeaSponsor from "~/components/landingpage/SeaSponsor.vue";
import Medpart from "~/components/landingpage/Medpart.vue";

// Define metadata untuk halaman ini
definePageMeta({
  head: {
    title: "Home" // Judul khusus untuk halaman home
  }
});

// Tambahkan metadata SEO jika diperlukan
useSeoMeta({
  title: "Creanomic UB | Home",
  ogTitle: "Creanomic UB | Home",
  description: "Official landing page of Creanomic Brawijaya University.",
  ogDescription: "Welcome to the official landing page of Creanomic Brawijaya University.",
  ogImage: "https://example.com/crea-icon.svg",
  twitterCard: "summary_large_image",
});
</script>
