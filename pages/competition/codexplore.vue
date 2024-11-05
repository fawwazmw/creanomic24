<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Codexplore/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Codexplore from "~/components/competition/Codexplore.vue";

// Define metadata untuk halaman ini
definePageMeta({
  head: {
    title: "Codexplore" // Judul khusus untuk halaman home
  }
});

// Tambahkan metadata SEO jika diperlukan
useSeoMeta({
  title: "Creanomic UB | Competition | Codexplore",
  ogTitle: "Creanomic UB | Competition | Codexplore",
  description: "Official competition Codexplore of Creanomic Brawijaya University.",
  ogDescription: "Welcome to the official competition Codexplore of Creanomic Brawijaya University.",
  ogImage: "https://example.com/crea-icon.svg",
  twitterCard: "summary_large_image",
});
</script>
