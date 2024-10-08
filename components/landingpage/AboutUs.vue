<template>
  <section
    class="about-section bg-white h-auto md:h-[1009px] flex flex-col items-center justify-start relative px-4 md:px-0"
  >
    <!-- Centered Text -->
    <div
      class="absolute w-full md:w-[1030px] h-auto md:h-[242px] top-[191px] left-1/2 transform -translate-x-1/2 text-center font-poppins"
    >
      <p class="text-[16px] md:text-[20px] font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        temporibus numquam quas reiciendis maxime aspernatur consectetur, sit
        harum iste, tempora error minus corporis at? Quod autem, cum aut,
        aspernatur cumque officia sint, nisi quasi saepe placeat ratione neque
        odio delectus nihil ut magnam! Blanditiis illo cupiditate deserunt
        accusamus facere iste, iure voluptate dolorum dolore enim aut nesciunt,
        nam quaerat necessitatibus laudantium nisi consequuntur fuga laboriosam
        dignissimos, nobis sapiente expedita?
      </p>
    </div>

    <!-- Image placed at the top -->
    <img
      src="assets/aboutus.svg"
      alt="About Section Image"
      class="object-contain mx-auto mt-8 w-full md:w-auto"
    />

    <!-- Responsive Images (Right and Left) -->
    <img
      src="assets/ombakbelakangkanan.png"
      alt="Right Sticky Image Back"
      class="absolute right-0 top-[363px] object-contain w-[250px] md:w-auto"
    />

    <img
      src="assets/ombakbelakangkiri.png"
      alt="Left Sticky Image Back"
      class="absolute left-0 top-[363px] object-contain w-[250px] md:w-auto"
    />

    <img
      src="assets/ombakdepankanan.png"
      alt="Right Sticky Image Front"
      class="absolute right-0 top-[500px] object-contain z-10 w-[250px] md:w-auto"
    />

    <img
      src="assets/ombakdepankiri.png"
      alt="Left Sticky Image Front"
      class="absolute left-0 top-[500px] object-contain z-10 w-[250px] md:w-auto"
    />
  </section>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.about-section {
  position: relative; /* Make sure the text is positioned relative to the section */
}

.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
