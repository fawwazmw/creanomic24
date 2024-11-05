<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Lkti/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Lkti from "~/components/competition/Lkti.vue";

// Define metadata untuk halaman ini
definePageMeta({
  head: {
    title: "LKTI" // Judul khusus untuk halaman home
  }
});

// Tambahkan metadata SEO jika diperlukan
useSeoMeta({
  title: "Creanomic UB | Competition | LKTI",
  ogTitle: "Creanomic UB | Competition | LKTI",
  description: "Official competition LKTI of Creanomic Brawijaya University.",
  ogDescription: "Welcome to the official competition LKTI of Creanomic Brawijaya University.",
  ogImage: "https://example.com/crea-icon.svg",
  twitterCard: "summary_large_image",
});
</script>
