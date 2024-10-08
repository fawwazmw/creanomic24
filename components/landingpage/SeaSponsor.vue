<template>
  <section
    class="sea-sponsor-section relative flex flex-col items-center justify-start h-[3236px]"
  >
    <!-- Single Image Content -->
    <div class="image-container w-full flex flex-col items-center mt-12">
      <img
        src="assets/gelombang.svg"
        alt="Requested Image"
        class="w-full h-auto mt-[71px] object-cover"
      />
    </div>

    <!-- New Image with Specific Positioning -->
    <img
      src="assets/jobfair.svg"
      alt="Positioned Image"
      class="absolute top-[427px] right-[136px] object-cover"
    />

    <img
      src="assets/ikan1.svg"
      alt="Positioned Image"
      class="absolute top-[497px] right-[473px] object-cover"
    />

    <img
      src="assets/exhibition.svg"
      alt="Positioned Image"
      class="absolute top-[647px] left-[133px] object-cover"
    />

    <img
      src="assets/market.svg"
      alt="Positioned Image"
      class="absolute top-[936px] right-[133px] object-cover"
    />

    <img
      src="assets/ikan2.svg"
      alt="Positioned Image"
      class="absolute top-[988px] left-[186px] object-cover"
    />

    <img
      src="assets/bungakiri.svg"
      alt="Positioned Image"
      class="absolute top-[1042px] left-[0px] object-cover"
    />

    <img
      src="assets/talkshow.svg"
      alt="Positioned Image"
      class="absolute top-[1271px] left-[268px] object-cover"
    />

    <img
      src="assets/ikan3.svg"
      alt="Positioned Image"
      class="absolute top-[1166px] right-[46px] object-cover"
    />

    <img
      src="assets/performance.svg"
      alt="Positioned Image"
      class="absolute bottom-[1539px] right-[136px] object-cover"
    />

    <img
      src="assets/ikan4.svg"
      alt="Positioned Image"
      class="absolute bottom-[1247px] right-[253px] object-cover"
    />

    <img
      src="assets/creafest.svg"
      alt="Positioned Image"
      class="absolute bottom-[1295px] left-[142px] object-cover"
    />

    <img
      src="assets/ikan5.svg"
      alt="Positioned Image"
      class="absolute bottom-[930px] left-[160px] object-cover"
    />

    <img
      src="assets/competition.svg"
      alt="Positioned Image"
      class="absolute bottom-[1029px] right-[167px] object-cover"
    />

    <img
      src="assets/bungakanan.svg"
      alt="Positioned Image"
      class="absolute bottom-[924px] right-[0px] object-cover"
    />

    <img
      src="assets/bungatengah.svg"
      alt="Positioned Image"
      class="absolute justify-center bottom-[407px] object-cover"
    />

    <div class="absolute bottom-[270px] flex items-center justify-center">
      <h1
        class="text-center text-[70px] font-bold font-poppins bg-gradient-to-r from-[#201169] to-[#7840C9] bg-clip-text text-transparent"
      >
        Sponsorship
      </h1>
    </div>

    <img
      src="assets/sponsortengah.svg"
      alt="Positioned Image"
      class="absolute justify-center bottom-[44px] object-cover"
    />

    <img
      src="assets/sponsorkanantengah.svg"
      alt="Positioned Image"
      class="absolute bottom-[53px] right-[425px] object-cover"
    />

    <img
      src="assets/sponsorkanan.svg"
      alt="Positioned Image"
      class="absolute bottom-[53px] right-[228px] object-cover"
    />

    <img
      src="assets/sponsorkiritengah.svg"
      alt="Positioned Image"
      class="absolute bottom-[53px] left-[425px] object-cover"
    />

    <img
      src="assets/sponsorkiri.svg"
      alt="Positioned Image"
      class="absolute bottom-[53px] left-[228px] object-cover"
    />

    <!-- Gradient Background Section -->
    <div class="gradient-background w-full -mt-1"></div>
  </section>
</template>

<script>
export default {
  name: "SeaSponsor",
};
</script>

<style scoped>
/* Importing Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

/* Applying necessary height and gradient background via custom CSS */
.gradient-background {
  height: 2979px;
  background: linear-gradient(
    180deg,
    #201169 0%,
    #2c4ab7 39%,
    #3572ef 65%,
    #ffffff 100%
  );
}

.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
