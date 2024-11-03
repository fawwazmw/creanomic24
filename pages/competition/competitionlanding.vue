<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <CompetitionLanding/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import CompetitionLanding from "~/components/competition/CompetitionLanding.vue";

export default {
  components: {
    CompetitionLanding,
    Header,
    Footer,
  },
};
</script>
