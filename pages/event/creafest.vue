<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Creafest/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Creafest from "~/components/event/Creafest.vue";

// Define metadata untuk halaman ini
definePageMeta({
  head: {
    title: "Creafest" // Judul khusus untuk halaman home
  }
});

// Tambahkan metadata SEO jika diperlukan
useSeoMeta({
  title: "Creanomic UB | Event | Creafest",
  ogTitle: "Creanomic UB | Event | Creafest",
  description: "Official event Creafest of Creanomic Brawijaya University.",
  ogDescription: "Welcome to the official event Creafest of Creanomic Brawijaya University.",
  ogImage: "https://example.com/crea-icon.svg",
  twitterCard: "summary_large_image",
});
</script>
