<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Poster/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Poster from "~/components/competition/Poster.vue";

// Define metadata untuk halaman ini
definePageMeta({
  head: {
    title: "Poster" // Judul khusus untuk halaman home
  }
});

// Tambahkan metadata SEO jika diperlukan
useSeoMeta({
  title: "Creanomic UB | Competition | Poster",
  ogTitle: "Creanomic UB | Competition | Poster",
  description: "Official competition Poster of Creanomic Brawijaya University.",
  ogDescription: "Welcome to the official competition Poster of Creanomic Brawijaya University.",
  ogImage: "https://example.com/crea-icon.svg",
  twitterCard: "summary_large_image",
});
</script>
