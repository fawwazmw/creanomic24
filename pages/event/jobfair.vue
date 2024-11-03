<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Jobfair />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Jobfair from "~/components/event/Jobfair.vue";

export default {
  components: {
    Jobfair,
    Header,
    Footer,
  },
};
</script>
