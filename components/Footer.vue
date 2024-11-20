<template>
  <footer class="footer-background font-montserrat">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex justify-center">
      <span class="block text-2xl text-gray-200 text-center dark:text-gray-400">
        © 2024, Tim <a href="/developer" class="text-gray-200 underline hover:text-blue-400 transition-colors duration-300">DDM-IT</a> Creanomic Vokasi UB 2024
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
  min-height: 72vh; /* Set height in vh for responsiveness */
  background-repeat: no-repeat;
  background-size: cover;
}

.footer-background div {
  @apply relative w-full z-10; /* Ensuring div is positioned and responsive */
}

.footer-background span {
  @apply text-gray-200; /* Font color remains the same */
  margin-bottom: 1vh; /* Margin-bottom in vh to adjust position lower */
}

@media (max-width: 1920px) {
  .footer-background {
    min-height: 86vh; /* Adjust height for smaller screens in vh */
  }

  .footer-background span {
    @apply text-3xl; /* Smaller font size for smaller screens */
    margin-bottom: 2vh; /* Adjust the margin-bottom for smaller screens */
  }
}

@media (max-width: 1600px) {
  .footer-background {
    min-height: 78vh; /* Adjust height for smaller screens in vh */
  }

  .footer-background span {
    @apply text-2xl; /* Smaller font size for smaller screens */
    margin-bottom: 2vh; /* Adjust the margin-bottom for smaller screens */
  }
}

@media (max-width: 1440px) {
  .footer-background {
    min-height: 72vh; /* Adjust height for smaller screens in vh */
  }

  .footer-background span {
    @apply text-xl; /* Smaller font size for smaller screens */
    margin-bottom: 2vh; /* Adjust the margin-bottom for smaller screens */
  }
}

@media (max-width: 1024px) {
  .footer-background {
    min-height: 52vh; /* Adjust height for smaller screens in vh */
  }

  .footer-background span {
    @apply text-xl; /* Smaller font size for smaller screens */
    margin-bottom: 0vh; /* Adjust the margin-bottom for smaller screens */
  }
}

@media (max-width: 768px) {
  .footer-background {
    min-height: 38vh; /* Adjust height for smaller screens in vh */
  }

  .footer-background span {
    @apply text-base; /* Smaller font size for smaller screens */
    margin-bottom: -1vh; /* Adjust the margin-bottom for smaller screens */
  }
}

@media (max-width: 425px) {
  .footer-background {
    min-height: 22vh; /* Adjust height for smaller screens in vh */
  }

  .footer-background span {
    @apply text-xs; /* Smaller font size for smaller screens */
    margin-bottom: -1vh; /* Adjust the margin-bottom for smaller screens */
  }
}

@media (max-width: 375px) {
  .footer-background {
    min-height: 20vh; /* Adjust height for smaller screens in vh */
  }

  .footer-background span {
    @apply text-xs; /* Smaller font size for smaller screens */
    margin-bottom: -1vh; /* Adjust the margin-bottom for smaller screens */
  }
}

@media (max-width: 320px) {
  .footer-background {
    min-height: 16vh; /* Adjust height for smaller screens in vh */
  }

  .footer-background span {
    @apply text-[0.6rem]; /* Smaller font size for smaller screens */
    margin-bottom: -1vh; /* Adjust the margin-bottom for smaller screens */
  }
}
</style>
