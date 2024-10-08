<template>
  <section
    class="mediapartner-section relative flex flex-col items-center justify-start h-[804px]"
  >
    <!-- Title -->
    <div class="absolute flex items-center justify-center top-[30px]">
      <h1
        class="text-center text-[70px] font-bold font-poppins bg-gradient-to-r from-[#201169] to-[#7840C9] bg-clip-text text-transparent"
      >
        Media Partner
      </h1>
    </div>

    <!-- Media Partner Grid -->
    <div
      class="absolute grid grid-cols-7 gap-x-[10px] gap-y-[10px] top-[171px] justify-center"
      style="grid-template-rows: repeat(2, 150px)"
    >
      <img
        src="assets/medpart.svg"
        alt="Media Partner 1"
        class="w-[150px] h-[150px] object-cover"
      />
      <img
        src="assets/medpart.svg"
        alt="Media Partner 2"
        class="w-[150px] h-[150px] object-cover"
      />
      <img
        src="assets/medpart.svg"
        alt="Media Partner 3"
        class="w-[150px] h-[150px] object-cover"
      />
      <img
        src="assets/medpart.svg"
        alt="Media Partner 4"
        class="w-[150px] h-[150px] object-cover"
      />
      <img
        src="assets/medpart.svg"
        alt="Media Partner 5"
        class="w-[150px] h-[150px] object-cover"
      />
      <img
        src="assets/medpart.svg"
        alt="Media Partner 6"
        class="w-[150px] h-[150px] object-cover"
      />
      <img
        src="assets/medpart.svg"
        alt="Media Partner 7"
        class="w-[150px] h-[150px] object-cover"
      />
      <img
        src="assets/medpart.svg"
        alt="Media Partner 8"
        class="w-[150px] h-[150px] object-cover"
      />
      <img
        src="assets/medpart.svg"
        alt="Media Partner 9"
        class="w-[150px] h-[150px] object-cover"
      />
      <img
        src="assets/medpart.svg"
        alt="Media Partner 10"
        class="w-[150px] h-[150px] object-cover"
      />
      <img
        src="assets/medpart.svg"
        alt="Media Partner 11"
        class="w-[150px] h-[150px] object-cover"
      />
      <img
        src="assets/medpart.svg"
        alt="Media Partner 12"
        class="w-[150px] h-[150px] object-cover"
      />
      <img
        src="assets/medpart.svg"
        alt="Media Partner 13"
        class="w-[150px] h-[150px] object-cover"
      />
      <img
        src="assets/medpart.svg"
        alt="Media Partner 14"
        class="w-[150px] h-[150px] object-cover"
      />
    </div>

    <img
      src="assets/callingout.svg"
      alt="Positioned Image"
      class="absolute justify-center bottom-[0px] object-cover"
    />
  </section>
</template>

<script>
export default {
  name: "Medpart",
};
</script>

<style scoped>
/* Importing Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
