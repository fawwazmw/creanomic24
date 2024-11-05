<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Performance/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Performance from "~/components/event/Performance.vue";

// Define metadata untuk halaman ini
definePageMeta({
  head: {
    title: "Performance" // Judul khusus untuk halaman home
  }
});

// Tambahkan metadata SEO jika diperlukan
useSeoMeta({
  title: "Creanomic UB | Event | Performance",
  ogTitle: "Creanomic UB | Event | Performance",
  description: "Official event Performance of Creanomic Brawijaya University.",
  ogDescription: "Welcome to the official event Performance of Creanomic Brawijaya University.",
  ogImage: "https://example.com/crea-icon.svg",
  twitterCard: "summary_large_image",
});
</script>
