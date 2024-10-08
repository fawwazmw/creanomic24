<template>
  <footer class="footer-background font-montserrat">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex justify-center">
      <span class="block text-2xl text-gray-200 text-center dark:text-gray-400">
        © 2024, Tim DDM-IT Creanomic Vokasi UB 2024
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"); /* Montserrat font from Google Fonts */

.font-montserrat {
  @apply font-medium; /* Use Tailwind for font-weight */
  font-family: "Montserrat", sans-serif;
}

.footer-background {
  @apply w-full flex justify-center items-end relative bg-cover bg-center; /* Items aligned to the bottom */
  background-image: url("assets/creafooter.svg"); /* Custom background image */
  min-height: 613px; /* Fallback for larger screens */
  background-repeat: no-repeat;
}

.footer-background div {
  @apply relative w-full z-10; /* Ensuring div is positioned and responsive */
}

.footer-background span {
  @apply mb-[20px] text-gray-200; /* Margin from the bottom set to 53px */
}

@media (max-width: 768px) {
  .footer-background {
    min-height: 450px; /* Adjust height for smaller screens */
  }

  .footer-background span {
    @apply text-xl; /* Smaller font size for smaller screens */
  }
}
</style>
