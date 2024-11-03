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

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Codexplore from "~/components/competition/Codexplore.vue";

export default {
  components: {
    Codexplore,
    Header,
    Footer,
  },
};
</script>
