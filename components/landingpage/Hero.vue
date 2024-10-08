<template>
  <section class="hero-section relative h-[2090px]">
    <!-- Gambar pertama -->
    <img
      src="assets/creatext.svg"
      alt="Desain dari Figma"
      class="absolute left-1/2 transform -translate-x-1/2 top-[240px] md:top-60 z-10"
    />

    <!-- Gambar kedua yang full-width dan 173px dari atas -->
    <img
      src="assets/wavebelakang1.svg"
      alt="Background Image"
      class="absolute left-0 top-[173px] w-full h-auto z-0"
    />

    <!-- Gambar ketiga ukuran 292 x 698 yang stick di kanan dan 173px dari atas -->
    <img
      src="assets/karangkanan.svg"
      alt="Image Right"
      class="absolute right-0 top-[173px] z-10 max-w-[292px] md:max-w-md lg:max-w-lg"
    />

    <!-- Gambar baru ukuran 370x698 yang stick di kiri dan 38px dari atas -->
    <img
      src="assets/karangkiri.svg"
      alt="Image Left"
      class="absolute left-0 top-[384px] z-10 max-w-[370px] md:max-w-md lg:max-w-lg"
    />

    <img
      src="assets/wavebelakang2.svg"
      alt="Image Belakang 2"
      class="absolute top-[442px] w-full h-auto z-20"
    />

    <img
      src="assets/karangkanandepan.svg"
      alt="Image Right Front"
      class="absolute right-[149px] top-[448px] z-30 max-w-[292px] md:max-w-md lg:max-w-lg"
    />

    <img
      src="assets/karangkiridepan.svg"
      alt="Image Left Front"
      class="absolute left-[157px] top-[641px] z-30 max-w-[370px] md:max-w-md lg:max-w-lg"
    />

    <img
      src="assets/wavebelakang3.svg"
      alt="Image Belakang 3"
      class="absolute top-[527px] w-full h-auto z-40"
    />
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #3572ef 28%,
    #2939a0 63%,
    #201169 100%
  );
  background-size: 100% 1439px; /* Gradient covers 1439px height */
  background-repeat: no-repeat; /* Ensure the gradient doesn't repeat */
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}
</style>
