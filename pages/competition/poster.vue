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

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Poster from "~/components/competition/Poster.vue";

export default {
  components: {
    Poster,
    Header,
    Footer,
  },
};
</script>
