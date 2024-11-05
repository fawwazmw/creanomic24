<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Exhibition/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Exhibition from "~/components/event/Exhibition.vue";

// Define metadata untuk halaman ini
definePageMeta({
  head: {
    title: "Exhibition" // Judul khusus untuk halaman home
  }
});

// Tambahkan metadata SEO jika diperlukan
useSeoMeta({
  title: "Creanomic UB | Event | Exhibition",
  ogTitle: "Creanomic UB | Event | Exhibition",
  description: "Official event Exhibition of Creanomic Brawijaya University.",
  ogDescription: "Welcome to the official event Exhibition of Creanomic Brawijaya University.",
  ogImage: "https://example.com/crea-icon.svg",
  twitterCard: "summary_large_image",
});
</script>
