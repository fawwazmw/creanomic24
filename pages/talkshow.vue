<template>
  <div class="app-container flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-grow">
      <!-- Hero Section -->
      <Talkshow/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Talkshow from "~/components/Talkshow.vue";

export default {
  components: {
    Talkshow,
    Header,
    Footer,
  },
};
</script>
