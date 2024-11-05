<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Jobfair />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Jobfair from "~/components/event/Jobfair.vue";

// Define metadata untuk halaman ini
definePageMeta({
  head: {
    title: "Jobfair" // Judul khusus untuk halaman home
  }
});

// Tambahkan metadata SEO jika diperlukan
useSeoMeta({
  title: "Creanomic UB | Event | Jobfair",
  ogTitle: "Creanomic UB | Event | Jobfair",
  description: "Official event Jobfair of Creanomic Brawijaya University.",
  ogDescription: "Welcome to the official event Jobfair of Creanomic Brawijaya University.",
  ogImage: "https://example.com/crea-icon.svg",
  twitterCard: "summary_large_image",
});
</script>
