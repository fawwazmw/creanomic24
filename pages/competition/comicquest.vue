<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <ComicQuest/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import ComicQuest from "~/components/competition/ComicQuest.vue";

// Define metadata untuk halaman ini
definePageMeta({
  head: {
    title: "Comic Quest" // Judul khusus untuk halaman home
  }
});

// Tambahkan metadata SEO jika diperlukan
useSeoMeta({
  title: "Creanomic UB | Competition | Comic Quest",
  ogTitle: "Creanomic UB | Competition | Comic Quest",
  description: "Official competition Comic Quest of Creanomic Brawijaya University.",
  ogDescription: "Welcome to the official competition Comic Quest of Creanomic Brawijaya University.",
  ogImage: "https://example.com/crea-icon.svg",
  twitterCard: "summary_large_image",
});
</script>
