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

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import BussinessPlan from "~/components/competition/BussinessPlan.vue";

export default {
  components: {
    BussinessPlan,
    Header,
    Footer,
  },
};
</script>
