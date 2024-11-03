<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Merchandise/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Merchandise from "~/components/Merchandise.vue";

export default {
  components: {
    Merchandise,
    Header,
    Footer,
  },
};
</script>
