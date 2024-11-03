<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Creafest/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Creafest from "~/components/event/Creafest.vue";

export default {
  components: {
    Creafest,
    Header,
    Footer,
  },
};
</script>
