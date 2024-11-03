<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Performance/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Performance from "~/components/event/Performance.vue";

export default {
  components: {
    Performance,
    Header,
    Footer,
  },
};
</script>
