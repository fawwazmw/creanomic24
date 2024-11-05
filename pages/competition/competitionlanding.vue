<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <CompetitionLanding/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import CompetitionLanding from "~/components/competition/CompetitionLanding.vue";

// Define metadata untuk halaman ini
definePageMeta({
  head: {
    title: "Competition Landing" // Judul khusus untuk halaman home
  }
});

// Tambahkan metadata SEO jika diperlukan
useSeoMeta({
  title: "Creanomic UB | Competition Landing",
  ogTitle: "Creanomic UB | Competition Landing",
  description: "Official Competition Landing of Creanomic Brawijaya University.",
  ogDescription: "Welcome to the official Competition Landing of Creanomic Brawijaya University.",
  ogImage: "https://example.com/crea-icon.svg",
  twitterCard: "summary_large_image",
});
</script>
