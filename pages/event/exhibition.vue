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

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Exhibition from "~/components/event/Exhibition.vue";

export default {
  components: {
    Exhibition,
    Header,
    Footer,
  },
};
</script>
