<template>
  <section
    class="sea-sponsor-section relative bg-white h-auto md:h-[3236px] flex flex-col items-center justify-start md:px-0 overflow-hidden"
  >
    <!-- Single Image Content -->
    <div class="image-container w-full flex flex-col items-center mt-12">
      <img
        src="assets/gelombang.svg"
        alt="Requested Image"
        class="w-full h-auto mt-[71px] object-cover gelombang"
      />
    </div>

<!--    &lt;!&ndash; Positioned Images &ndash;&gt;-->
<!--    <img-->
<!--      src="assets/jobfair.svg"-->
<!--      alt="Positioned Image"-->
<!--      class="absolute top-[427px] right-[20px] md:right-[136px] object-cover max-w-[40%] md:max-w-none jobfair"-->
<!--    />-->

    <img
      src="assets/ikan1.svg"
      alt="Positioned Image"
      class="absolute top-[497px] right-[30px] md:right-[473px] object-cover max-w-[40%] md:max-w-none ikan1"
    />

    <img
      src="assets/exhibition.svg"
      alt="Positioned Image"
      class="absolute top-[647px] left-[20px] md:left-[133px] object-cover max-w-[40%] md:max-w-none exhibition"
    />

    <img
      src="assets/market.svg"
      alt="Positioned Image"
      class="absolute top-[936px] right-[20px] md:right-[133px] object-cover max-w-[50%] md:max-w-none market"
    />

    <img
      src="assets/ikan2.svg"
      alt="Positioned Image"
      class="absolute top-[988px] left-[30px] md:left-[186px] object-cover max-w-[40%] md:max-w-none ikan2"
    />

    <img
      src="assets/bungakiri.svg"
      alt="Positioned Image"
      class="absolute top-[1042px] left-[0px] object-cover max-w-[50%] md:max-w-none bungakiri"
    />

    <img
      src="assets/talkshow.svg"
      alt="Positioned Image"
      class="absolute top-[1271px] left-[20px] md:left-[268px] object-cover max-w-[40%] md:max-w-none talkshow"
    />

    <img
      src="assets/ikan3.svg"
      alt="Positioned Image"
      class="absolute top-[1166px] right-[30px] md:right-[46px] object-cover max-w-[40%] md:max-w-none ikan3"
    />

    <img
      src="assets/performance.svg"
      alt="Positioned Image"
      class="absolute bottom-[1539px] right-[20px] md:right-[136px] object-cover max-w-[50%] md:max-w-none performance"
    />

    <img
      src="assets/ikan4.svg"
      alt="Positioned Image"
      class="absolute bottom-[1247px] right-[20px] md:right-[253px] object-cover max-w-[40%] md:max-w-none ikan4"
    />

    <img
      src="assets/creafest.svg"
      alt="Positioned Image"
      class="absolute bottom-[1295px] left-[20px] md:left-[142px] object-cover max-w-[40%] md:max-w-none creafest"
    />

    <img
      src="assets/ikan5.svg"
      alt="Positioned Image"
      class="absolute bottom-[930px] left-[30px] md:left-[160px] object-cover max-w-[40%] md:max-w-none ikan5"
    />

    <img
      src="assets/competition.svg"
      alt="Positioned Image"
      class="absolute bottom-[1029px] right-[20px] md:right-[167px] object-cover max-w-[50%] md:max-w-none competition"
    />

    <img
      src="assets/bungakanan.svg"
      alt="Positioned Image"
      class="absolute bottom-[924px] right-[0px] object-cover max-w-[50%] md:max-w-none bungakanan"
    />

    <img
      src="assets/bungatengah.svg"
      alt="Positioned Image"
      class="absolute justify-center bottom-[407px] object-cover max-w-[100%] md:max-w-none bungatengah"
    />

    <div
      class="absolute bottom-[300px] flex items-center justify-center mainsponsor"
    >
      <h1
        class="text-center text-[40px] sm:text-[50px] md:text-[70px] font-bold font-poppins bg-gradient-to-r from-[#201169] to-[#7840C9] bg-clip-text text-transparent textsponsor"
      >
        Sponsorship
      </h1>
    </div>

<!--    <img-->
<!--      src="assets/sponsortengah.svg"-->
<!--      alt="Positioned Image"-->
<!--      class="absolute justify-center bottom-[44px] object-cover max-w-[50%] md:max-w-none sponsortengah"-->
<!--    />-->

    <img
      src="assets/sponsorkanantengah.svg"
      alt="Positioned Image"
      class="absolute bottom-[53px] right-[20px] md:right-[425px] object-cover max-w-[40%] md:max-w-none sponsorkanantengah"
    />

<!--    <img-->
<!--      src="assets/sponsorkanan.svg"-->
<!--      alt="Positioned Image"-->
<!--      class="absolute bottom-[53px] right-[20px] md:right-[228px] object-cover max-w-[40%] md:max-w-none sponsorkanan"-->
<!--    />-->

    <img
      src="assets/sponsorkiritengah.svg"
      alt="Positioned Image"
      class="absolute bottom-[53px] left-[20px] md:left-[425px] object-cover max-w-[40%] md:max-w-none sponsorkiritengah"
    />

<!--    <img-->
<!--      src="assets/sponsorkiri.svg"-->
<!--      alt="Positioned Image"-->
<!--      class="absolute bottom-[53px] left-[20px] md:left-[228px] object-cover max-w-[40%] md:max-w-none sponsorkiri"-->
<!--    />-->

    <!-- Gradient Background Section -->
    <div class="gradient-background w-full -mt-1"></div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "SeaSponsor",
  mounted() {
    const animations = [
      { target: ".jobfair", x: "30%", y: "0" },
      { target: ".ikan1", x: "0", y: "30%" },
      { target: ".exhibition", x: "-30%", y: "0" },
      { target: ".market", x: "30%", y: "0" },
      { target: ".ikan2", x: "0", y: "30%" },
      { target: ".bungakiri", x: "-30%", y: "0" },
      { target: ".talkshow", x: "-30%", y: "0" },
      { target: ".ikan3", x: "0", y: "30%" },
      { target: ".performance", x: "30%", y: "0" },
      { target: ".ikan4", x: "0", y: "30%" },
      { target: ".creafest", x: "-30%", y: "0" },
      { target: ".ikan5", x: "0", y: "30%" },
      { target: ".competition", x: "30%", y: "0" },
      { target: ".bungakanan", x: "30%", y: "0" },
      { target: ".bungatengah", x: "0", y: "30%" },
      { target: ".mainsponsor", x: "0", y: "-30%" },
      {
        target: [
          ".sponsortengah",
          ".sponsorkanantengah",
          ".sponsorkanan",
          ".sponsorkiritengah",
          ".sponsorkiri",
        ],
        x: "0",
        y: "30%",
      },
    ];

    animations.forEach(({ target, x, y }) => {
      gsap.fromTo(
        target,
        { x, y, opacity: 0 },
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: target,
            start: "top 90%",
            end: "center center",
            scrub: true,
          },
        }
      );
    });
  },
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

.sea-sponsor-section {
  overflow-x: hidden; /* Prevents horizontal scrolling */
}

.font-poppins {
  font-family: "Poppins", sans-serif;
}

@media (max-width: 1920px) {
  .sea-sponsor-section {
    background-size: 100% 3236px;
    height: 3236px;
  }

  .gelomabang {
  }
  .jobfair {
  }
  .ikan1 {
  }
  .exhibition {
  }
  .market {
  }
  .ikan2 {
  }
  .bungakiri {
  }
  .talkshow {
  }
  .ikan3 {
  }
  .performance {
  }
  .ikan4 {
  }
  .creafest {
  }
  .ikan5 {
  }
  .competition {
  }
  .bungakanan {
  }
  .bungatengah {
  }
  .sponsorship {
  }
  .sponsortengah {
  }
  .sponsorkanantengah {
    right: 35vw;
  }
  .sponsorkanan {
    right: 25vw;
  }
  .sponsorkiritengah {
    left: 35vw;
  }
  .sponsorkiri {
    left: 25vw;
  }
}

@media (max-width: 1600px) {
  .sea-sponsor-section {
    background-size: 100% 3236px;
    height: 3236px;
  }

  .gelomabang {
  }
  .jobfair {
  }
  .ikan1 {
  }
  .exhibition {
  }
  .market {
  }
  .ikan2 {
  }
  .bungakiri {
  }
  .talkshow {
  }
  .ikan3 {
  }
  .performance {
  }
  .ikan4 {
  }
  .creafest {
  }
  .ikan5 {
  }
  .competition {
  }
  .bungakanan {
  }
  .bungatengah {
  }
  .sponsorship {
  }
  .sponsortengah {
  }
  .sponsorkanantengah {
    right: 32vw;
  }
  .sponsorkanan {
    right: 20vw;
  }
  .sponsorkiritengah {
    left: 32vw;
  }
  .sponsorkiri {
    left: 20vw;
  }
}

@media (max-width: 1440px) {
  .sea-sponsor-section {
    background-size: 100% 3236px;
    height: 3236px;
  }

  .gelomabang {
  }
  .jobfair {
  }
  .ikan1 {
  }
  .exhibition {
  }
  .market {
  }
  .ikan2 {
  }
  .bungakiri {
  }
  .talkshow {
  }
  .ikan3 {
  }
  .performance {
  }
  .ikan4 {
  }
  .creafest {
  }
  .ikan5 {
  }
  .competition {
  }
  .bungakanan {
  }
  .bungatengah {
  }
  .sponsorship {
  }
  .sponsortengah {
  }
  .sponsorkanantengah {
    right: 31vw;
  }
  .sponsorkanan {
    right: 19vw;
  }
  .sponsorkiritengah {
    left: 31vw;
  }
  .sponsorkiri {
    left: 19vw;
  }
}

@media (max-width: 1024px) {
  .sea-sponsor-section {
    background-size: 100% 3236px;
    height: 3236px;
  }

  .gelomabang {
  }
  .jobfair {
    width: 32vw;
    right: 10vw;
  }
  .ikan1 {
    width: 20vw;
    right: 34vw;
  }
  .exhibition {
    width: 37vw;
    left: 10vw;
  }
  .market {
    width: 46vw;
    right: 10vw;
  }
  .ikan2 {
    width: 16vw;
  }
  .bungakiri {
    width: 28vw;
  }
  .talkshow {
    width: 38vw;
    left: 20vw;
  }
  .ikan3 {
    width: 18vw;
  }
  .performance {
    width: 44vw;
    bottom: 190vh;
  }
  .ikan4 {
    width: 12vw;
    bottom: 164vh;
  }
  .creafest {
    width: 35vw;
    left: 10vw;
  }
  .ikan5 {
    width: 12vw;
    bottom: 120vh;
  }
  .competition {
    width: 45vw;
  }
  .bungakanan {
  }
  .bungatengah {
    width: 90vw;
  }
  .mainsponsor {
  }
  .textsponsor {
    font-size: 4vw;
  }
  .sponsortengah {
    width: 16vw;
    bottom: 8vh;
  }
  .sponsorkanantengah {
    width: 14vw;
    bottom: 9vh;
    right: 28vw;
  }
  .sponsorkanan {
    width: 14vw;
    bottom: 9vh;
    right: 14vw;
  }
  .sponsorkiritengah {
    width: 14vw;
    bottom: 9vh;
    left: 28vw;
  }
  .sponsorkiri {
    width: 14vw;
    bottom: 9vh;
    left: 14vw;
  }
}

@media (max-width: 768px) {
  .sea-sponsor-section {
    background-size: 100% 2500px;
    height: 2500px;
  }

  .gelomabang {
  }
  .jobfair {
    width: 32vw;
    right: 10vw;
  }
  .ikan1 {
    width: 20vw;
    right: 34vw;
  }
  .exhibition {
    width: 37vw;
    left: 10vw;
  }
  .market {
    width: 46vw;
    right: 10vw;
    top: 95vh;
  }
  .ikan2 {
    width: 16vw;
    top: 100vh;
  }
  .bungakiri {
    width: 28vw;
    top: 100vh;
  }
  .talkshow {
    width: 38vw;
    left: 20vw;
    top: 120vh;
  }
  .ikan3 {
    width: 18vw;
    top: 115vh;
  }
  .performance {
    width: 44vw;
    top: 140vh;
  }
  .ikan4 {
    width: 12vw;
    top: 150vh;
    right: 25vw;
  }
  .creafest {
    width: 35vw;
    left: 10vw;
    top: 165vh;
  }
  .ikan5 {
    width: 14vw;
    top: 175vh;
    left: 12vw;
  }
  .competition {
    width: 45vw;
    top: 200vh;
  }
  .bungakanan {
    width: 28vw;
    top: 170vh;
  }
  .bungatengah {
    width: 90vw;
  }
  .mainsponsor {
  }
  .textsponsor {
    font-size: 5vw;
  }
  .sponsortengah {
    width: 16vw;
    bottom: 14vh;
  }
  .sponsorkanantengah {
    width: 20vw;
    bottom: 10vh;
    right: 28vw;
  }
  .sponsorkanan {
    width: 14vw;
    bottom: 15vh;
    right: 14vw;
  }
  .sponsorkiritengah {
    width: 20vw;
    bottom: 10vh;
    left: 28vw;
  }
  .sponsorkiri {
    width: 14vw;
    bottom: 15vh;
    left: 14vw;
  }
}

@media (max-width: 425px) {
  .sea-sponsor-section {
    background-size: 100% 1200px;
    height: 1200px;
  }

  .gelomabang {
  }
  .jobfair {
    width: 40vw;
    right: 10vw;
    top: 30vh;
  }
  .ikan1 {
    width: 24vw;
    right: 36vw;
    top: 35vh;
  }
  .exhibition {
    width: 50vw;
    left: 10vw;
    top: 46vh;
  }
  .market {
    width: 50vw;
    right: 10vw;
    top: 58vh;
  }
  .ikan2 {
    width: 16vw;
    top: 60vh;
    left: 15vw;
  }
  .bungakiri {
    width: 28vw;
    top: 60vh;
  }
  .talkshow {
    width: 40vw;
    left: 20vw;
    top: 72vh;
  }
  .ikan3 {
    width: 20vw;
    top: 68vh;
  }
  .performance {
    width: 50vw;
    top: 84vh;
    right: 14vw;
  }
  .ikan4 {
    width: 14vw;
    top: 90vh;
    right: 25vw;
  }
  .creafest {
    width: 35vw;
    left: 10vw;
    top: 96vh;
  }
  .ikan5 {
    width: 14vw;
    top: 105vh;
    left: 12vw;
  }
  .competition {
    width: 48vw;
    top: 108vh;
    right: 18vw;
  }
  .bungakanan {
    width: 28vw;
    top: 90vh;
  }
  .bungatengah {
    width: 90vw;
    bottom: 14vh;
  }
  .mainsponsor {
    bottom: 12vh;
  }
  .textsponsor {
    font-size: 5vw;
  }
  .sponsortengah {
    width: 16vw;
    bottom: 1vh;
  }
  .sponsorkanantengah {
    width: 18vw;
    bottom: 0vh;
    right: 28vw;
  }
  .sponsorkanan {
    width: 14vw;
    bottom: 1.5vh;
    right: 14vw;
  }
  .sponsorkiritengah {
    width: 18vw;
    bottom: 0vh;
    left: 28vw;
  }
  .sponsorkiri {
    width: 14vw;
    bottom: 1.5vh;
    left: 14vw;
  }
}

@media (max-width: 375px) {
  .sea-sponsor-section {
    background-size: 100% 1200px;
    height: 1200px;
  }

  .gelomabang {
  }
  .jobfair {
    width: 40vw;
    right: 10vw;
    top: 30vh;
  }
  .ikan1 {
    width: 24vw;
    right: 36vw;
    top: 35vh;
  }
  .exhibition {
    width: 50vw;
    left: 10vw;
    top: 46vh;
  }
  .market {
    width: 50vw;
    right: 10vw;
    top: 58vh;
  }
  .ikan2 {
    width: 16vw;
    top: 60vh;
    left: 15vw;
  }
  .bungakiri {
    width: 28vw;
    top: 60vh;
  }
  .talkshow {
    width: 40vw;
    left: 20vw;
    top: 72vh;
  }
  .ikan3 {
    width: 20vw;
    top: 68vh;
  }
  .performance {
    width: 50vw;
    top: 84vh;
    right: 14vw;
  }
  .ikan4 {
    width: 14vw;
    top: 90vh;
    right: 25vw;
  }
  .creafest {
    width: 35vw;
    left: 10vw;
    top: 96vh;
  }
  .ikan5 {
    width: 14vw;
    top: 105vh;
    left: 12vw;
  }
  .competition {
    width: 48vw;
    top: 108vh;
    right: 18vw;
  }
  .bungakanan {
    width: 28vw;
    top: 90vh;
  }
  .bungatengah {
    width: 90vw;
    bottom: 14vh;
  }
  .mainsponsor {
    bottom: 11vh;
  }
  .textsponsor {
    font-size: 5vw;
  }
  .sponsortengah {
    width: 16vw;
    bottom: 1vh;
  }
  .sponsorkanantengah {
    width: 18vw;
    bottom: 0vh;
    right: 28vw;
  }
  .sponsorkanan {
    width: 14vw;
    bottom: 1.5vh;
    right: 14vw;
  }
  .sponsorkiritengah {
    width: 18vw;
    bottom: 0vh;
    left: 28vw;
  }
  .sponsorkiri {
    width: 14vw;
    bottom: 1.5vh;
    left: 14vw;
  }
}

@media (max-width: 320px) {
  .sea-sponsor-section {
    background-size: 100% 1200px;
    height: 1200px;
  }

  .gelomabang {
  }
  .jobfair {
    width: 40vw;
    right: 10vw;
    top: 30vh;
  }
  .ikan1 {
    width: 24vw;
    right: 36vw;
    top: 35vh;
  }
  .exhibition {
    width: 50vw;
    left: 10vw;
    top: 46vh;
  }
  .market {
    width: 50vw;
    right: 10vw;
    top: 58vh;
  }
  .ikan2 {
    width: 16vw;
    top: 60vh;
    left: 15vw;
  }
  .bungakiri {
    width: 28vw;
    top: 60vh;
  }
  .talkshow {
    width: 40vw;
    left: 20vw;
    top: 72vh;
  }
  .ikan3 {
    width: 20vw;
    top: 68vh;
  }
  .performance {
    width: 50vw;
    top: 84vh;
    right: 14vw;
  }
  .ikan4 {
    width: 14vw;
    top: 90vh;
    right: 25vw;
  }
  .creafest {
    width: 35vw;
    left: 10vw;
    top: 96vh;
  }
  .ikan5 {
    width: 14vw;
    top: 105vh;
    left: 12vw;
  }
  .competition {
    width: 48vw;
    top: 108vh;
    right: 18vw;
  }
  .bungakanan {
    width: 28vw;
    top: 90vh;
  }
  .bungatengah {
    width: 90vw;
    bottom: 14vh;
  }
  .mainsponsor {
    bottom: 10vh;
  }
  .textsponsor {
    font-size: 5vw;
  }
  .sponsortengah {
    width: 16vw;
    bottom: 1vh;
  }
  .sponsorkanantengah {
    width: 18vw;
    bottom: 0vh;
    right: 28vw;
  }
  .sponsorkanan {
    width: 18vw;
    bottom: 0vh;
    right: 14vw;
  }
  .sponsorkiritengah {
    width: 18vw;
    bottom: 0vh;
    left: 28vw;
  }
  .sponsorkiri {
    width: 14vw;
    bottom: 1.5vh;
    left: 14vw;
  }
}
</style>
