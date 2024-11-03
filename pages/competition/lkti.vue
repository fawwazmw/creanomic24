<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Lkti/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Lkti from "~/components/competition/Lkti.vue";

export default {
  components: {
    Lkti,
    Header,
    Footer,
  },
};
</script>
