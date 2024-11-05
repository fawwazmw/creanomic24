<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Talkshow/>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Talkshow from "~/components/Talkshow.vue";

// Define metadata untuk halaman ini
definePageMeta({
  head: {
    title: "Talkshow" // Judul khusus untuk halaman home
  }
});

// Tambahkan metadata SEO jika diperlukan
useSeoMeta({
  title: "Creanomic UB | Talkshow",
  ogTitle: "Creanomic UB | Talkshow",
  description: "Official Talkshow of Creanomic Brawijaya University.",
  ogDescription: "Welcome to the official Talkshow of Creanomic Brawijaya University.",
  ogImage: "https://example.com/crea-icon.svg",
  twitterCard: "summary_large_image",
});
</script>
