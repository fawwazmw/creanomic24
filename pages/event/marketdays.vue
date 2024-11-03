<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <MarketDays/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import MarketDays from "~/components/event/MarketDays.vue";

export default {
  components: {
    MarketDays,
    Header,
    Footer,
  },
};
</script>
