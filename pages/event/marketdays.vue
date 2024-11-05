<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <MarketDays/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import MarketDays from "~/components/event/MarketDays.vue";

// Define metadata untuk halaman ini
definePageMeta({
  head: {
    title: "Marketdays" // Judul khusus untuk halaman home
  }
});

// Tambahkan metadata SEO jika diperlukan
useSeoMeta({
  title: "Creanomic UB | Event | Marketdays",
  ogTitle: "Creanomic UB | Event | Marketdays",
  description: "Official event Marketdays of Creanomic Brawijaya University.",
  ogDescription: "Welcome to the official event Marketdays of Creanomic Brawijaya University.",
  ogImage: "https://example.com/crea-icon.svg",
  twitterCard: "summary_large_image",
});
</script>
