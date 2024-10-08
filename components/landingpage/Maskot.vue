<template>
  <section
    class="maskot-section h-[1009px] bg-white flex items-center justify-center relative"
  >
    <!-- Existing Maskot Text Image -->
    <img
      src="assets/maskottext.svg"
      alt="Maskot Text"
      class="absolute top-[124px] object-contain left-1/2 -translate-x-1/2"
    />

    <!-- New Maskot Image -->
    <img
      src="assets/maskot.svg"
      alt="Maskot Banner"
      class="absolute top-[277px] left-1/2 -translate-x-1/2 object-contain"
    />

    <!-- New Text Section -->
    <div
      class="absolute top-[370px] right-[135px] w-[350px] h-[231px] p-4 flex items-center justify-center"
    >
      <p class="text-center text-lg font-poppins">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        distinctio tempore quas beatae et, magni eius itaque commodi
        necessitatibus maxime qui. Iure, doloribus?
      </p>
    </div>

    <!-- Additional New Image -->
    <img
      src="assets/tentaclekanan.svg"
      alt="Tentacle Right"
      class="absolute top-[492px] right-[94px] object-contain"
    />

    <!-- Left Text Section -->
    <div
      class="absolute top-[370px] left-[135px] w-[350px] h-[231px] p-4 flex items-center justify-center"
    >
      <p class="text-center text-lg font-poppins">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        distinctio tempore quas beatae et, magni eius itaque commodi
        necessitatibus maxime qui. Iure, doloribus?
      </p>
    </div>

    <!-- Tentacle Left Image -->
    <img
      src="assets/tentaclekiri.svg"
      alt="Tentacle Left"
      class="absolute top-[492px] left-[94px] object-contain"
    />
  </section>
</template>

<script>
export default {
  name: "Maskot",
};
</script>

<style scoped>
/* Scoped styles for Maskot section */
.maskot-section {
  @apply relative h-[1009px];
}

.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
