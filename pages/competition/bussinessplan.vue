<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <BussinessPlan/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import BussinessPlan from "~/components/competition/BussinessPlan.vue";

// Define metadata untuk halaman ini
definePageMeta({
  head: {
    title: "Bussiness Plan" // Judul khusus untuk halaman home
  }
});

// Tambahkan metadata SEO jika diperlukan
useSeoMeta({
  title: "Creanomic UB | Competition | Bussiness Plan",
  ogTitle: "Creanomic UB | Competition | Bussiness Plan",
  description: "Official competition Bussiness Plan of Creanomic Brawijaya University.",
  ogDescription: "Welcome to the official competition Bussiness Plan of Creanomic Brawijaya University.",
  ogImage: "https://example.com/crea-icon.svg",
  twitterCard: "summary_large_image",
});
</script>
