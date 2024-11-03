<template>
  <section
      class="lkti-section relative bg-white flex flex-col items-center justify-start md:px-0 overflow-hidden"
  >

    <!-- New Image Below Header with Positioning Using Top-[50vh] -->
    <div class="w-full absolute flex justify-center top-[35vh] lkti">
      <img
          src="assets/lktihead.svg"
          alt="Header Image"
          class="new-header-image object-cover"
      />
    </div>

    <!-- New Text Above Gelombang.svg -->
    <div
        class="absolute top-[100vh] flex items-center justify-center w-[1030px] h-[292px] text-center text-container maintext"
    >
      <h2 class="text-2xl font-medium font-poppins text-white textmain">
        <span v-for="(word, index) in textWords" :key="index" class="word"
        >{{ word }}
        </span>
      </h2>
    </div>

    <!-- Row of Images Below the Text -->
    <div class="absolute flex justify-center items-center w-full top-[140vh] mainimage">
      <!-- First Image (270x76) -->
      <img
          src="assets/tingkat.svg"
          alt="First Image"
          class="w-[270px] h-[76px] object-cover mx-2 tingkat"
      />

      <!-- Second Image (370x76) -->
      <img
          src="assets/sma.svg"
          alt="Second Image"
          class="w-[370px] h-[76px] object-cover mx-2 sma"
      />

      <!-- Third Image (270x76) -->
      <img
          src="assets/team.svg"
          alt="Third Image"
          class="w-[270px] h-[76px] object-cover mx-2 team"
      />

      <!-- Fourth Image (170x76) -->
      <img
          src="assets/gratis.svg"
          alt="Fourth Image"
          class="w-[170px] h-[76px] object-cover mx-2 gratis"
      />
    </div>

    <!-- Center Perform -->
    <img
        src="assets/timeline.svg"
        alt="Center Timeline"
        class="absolute w-[1400px] h-auto object-cover justify-center top-[180vh] timeline"
    />

    <!-- Guidebook with Hover Effect -->
    <a href="#guidebook-link" class="hoverable-icon absolute w-[170px] h-auto top-[260vh] left-[20vw] z-10 guidebook">
      <img
          src="assets/guidebook.svg"
          alt="Guidebook"
          class="object-cover w-full h-auto"
      />
    </a>

    <!-- CP with Hover Effect -->
    <a href="#cp-link" class="hoverable-icon absolute w-[170px] h-auto top-[260vh] left-[40vw] z-10 cp_image">
      <img
          src="assets/cp.svg"
          alt="CP"
          class="object-cover w-full h-auto"
      />
    </a>

    <img
        src="assets/qr_code.svg"
        alt="Center Timeline"
        class="absolute w-[1170px] h-auto object-cover justify-center top-[250vh] qr_code"
    />

    <img
        src="assets/bungabawah.svg"
        alt="Positioned Image"
        class="absolute justify-center bottom-[0vh] object-cover max-w-[100%] md:max-w-none bungabawah"
    />

    <!-- Gradient Background Section -->
    <div class="gradient-background w-full -mt-1"></div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Lkti",
  data() {
    return {
      textWords:
          `Lomba Karya Tulis Ilmiah (LKTI) adalah sebuah kompetisi yang mengajak para peserta untuk menuangkan ide-ide kreatif dan hasil penelitian mereka ke dalam bentuk tulisan ilmiah. Ajang ini bertujuan untuk mencetak generasi muda yang cerdas, kreatif, dan inovatif, serta mendorong kemajuan ilmu pengetahuan.`.split(
              " "
          ),
    };
  },
  mounted() {
    // Animasi untuk lkti dari bawah ke atas
    gsap.from(".lkti", {
      duration: 2, // Durasi animasi
      y: 100, // Memulai dari 100px di bawah posisinya
      opacity: 0, // Mulai dengan opacity 0 (tidak terlihat)
      ease: "power2.out", // Easing untuk animasi yang halus
    });

    // Animasi perubahan warna per kata pada text
    gsap.fromTo(
        ".word",
        { color: "#1D3557" }, // Warna awal: biru muda
        {
          color: "#8AB6D6", // Warna akhir: biru tua yang lebih gelap
          ease: "none",
          scrollTrigger: {
            trigger: ".textmain",
            start: "top 90%",
            end: "center center",
            scrub: true,
          },
          stagger: {
            each: 0.1,
          },
        }
    );

    // Animate aboutus.svg with scale and from bottom for smooth entrance
    gsap.from(".tingkat", {
      y: 50, // Move slightly up from below
      scale: 1.1, // Start slightly scaled up
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".tingkat",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    // Animate aboutus.svg with scale and from bottom for smooth entrance
    gsap.from(".sma", {
      y: 50, // Move slightly up from below
      scale: 1.1, // Start slightly scaled up
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".sma",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    // Animate aboutus.svg with scale and from bottom for smooth entrance
    gsap.from(".team", {
      y: 50, // Move slightly up from below
      scale: 1.1, // Start slightly scaled up
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".team",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    // Animate aboutus.svg with scale and from bottom for smooth entrance
    gsap.from(".gratis", {
      y: 50, // Move slightly up from below
      scale: 1.1, // Start slightly scaled up
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".gratis",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    // Animasi ombak kiri dari kiri
    gsap.from(".timeline", {
      x: -50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    // Animasi ombak kanan dari kanan
    gsap.from(".qr_code", {
      x: 50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".qr_code",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    // Animasi ombak kanan dari kanan
    gsap.from(".guidebook", {
      x: 50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".guidebook",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    // Animasi ombak kanan dari kanan
    gsap.from(".cp_image", {
      x: 50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cp_image",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    // Animate aboutus.svg with scale and from bottom for smooth entrance
    gsap.from(".bungabawah", {
      y: 50, // Move slightly up from below
      scale: 1.1, // Start slightly scaled up
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bungabawah",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });
  },
};

</script>

<style scoped>
/* Importing Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

/* Applying necessary height and gradient background via custom CSS */
.gradient-background {
  height: 3000px;
  background: linear-gradient(
      180deg,
      #201169 0%,
      #2c4ab7 39%,
      #3572ef 65%,
      #ffffff 100%
  );
}

.lkti-section {
  overflow-x: hidden; /* Prevents horizontal scrolling */
}

.font-poppins {
  font-family: "Poppins", sans-serif;
}

.word {
  display: inline-block;
  margin-right: 0.3em; /* Ensures proper spacing between words */
}

/* Hover Effect for Guidebook and CP Images */
.hoverable-icon img {
  transition: transform 0.3s ease, filter 0.3s ease;
}

.hoverable-icon:hover img {
  transform: scale(1.1); /* Slight enlargement */
  filter: brightness(0.7); /* Darken for a color change effect */
}

@media (max-width: 1920px) {
  .lkti-section {
    background-size: 100% 4800px;
    height: 4800px;
  }
  .lkti {

  }
  .lkti {
    width: 1500px;
    height: auto;
  }

  .maintext {
    width: 80vw;
  }
  .textmain {
    font-size: xx-large;
  }
  .mainimage {

  }
  .tingkat {
    width: 20vw;
    height: auto;
  }
  .sma {
    width: 26vw;
    height: auto;
  }
  .team {
    width: 20vw;
    height: auto;
  }
  .gratis {
    width: 13vw;
    height: auto;
  }
  .timeline {
    width: 100vw;
  }
  .guidebook {
    width: 12vw;
    top: 285vh;
  }
  .cp_image {
    width: 12vw;
    top: 285vh;
  }
  .qr_code {
    width: 82vw;
    top: 280vh;
  }
  .bungabawah {
    width: 90vw;
  }
}

@media (max-width: 1600px) {
  .lkti-section {
    background-size: 100% 4300px;
    height: 4300px;
  }

  .lkti {

  }
  .maintext {
    width: 80vw;
  }
  .textmain {
    font-size: xx-large;
  }
  .mainimage {

  }
  .tingkat {
    width: 20vw;
    height: auto;
  }
  .sma {
    width: 26vw;
    height: auto;
  }
  .team {
    width: 20vw;
    height: auto;
  }
  .gratis {
    width: 13vw;
    height: auto;
  }
  .timeline {
    width: 100vw;
  }
  .guidebook {
    width: 12vw;
    top: 308vh;
  }
  .cp_image {
    width: 12vw;
    top: 308vh;
  }
  .qr_code {
    width: 82vw;
    top: 300vh;
  }
  .bungabawah {
    width: 90vw;
  }
}

@media (max-width: 1440px) {
  .lkti-section {
    background-size: 100% 3200px;
    height: 3200px;
  }
  .lkti {

  }
  .maintext {
    width: 80vw;
  }
  .textmain {
    font-size: xx-large;
  }
  .mainimage {

  }
  .tingkat {
    width: 20vw;
    height: auto;
  }
  .sma {
    width: 26vw;
    height: auto;
  }
  .team {
    width: 20vw;
    height: auto;
  }
  .gratis {
    width: 13vw;
    height: auto;
  }
  .timeline {
    width: 100vw;
  }
  .guidebook {
    width: 12vw;
    top: 275vh;
  }
  .cp_image {
    width: 12vw;
    top: 275vh;
  }
  .qr_code {
    width: 82vw;
    top: 270vh;
  }
}

@media (max-width: 1024px) {
  .lkti-section {
    background-size: 100% 2700px;
    height: 2700px;
  }

  .lkti {
    width: 100vw;
  }
  .maintext {
    width: 80vw;
  }
  .textmain {
    font-size: xx-large;
  }
  .mainimage {
    top: 150vh;
  }
  .tingkat {
    width: 20vw;
    height: auto;
  }
  .sma {
    width: 26vw;
    height: auto;
  }
  .team {
    width: 20vw;
    height: auto;
  }
  .gratis {
    width: 13vw;
    height: auto;
  }
  .timeline {
    width: 100vw;
  }
  .guidebook {
    width: 12vw;
    top: 260vh;
  }
  .cp_image {
    width: 12vw;
    top: 260vh;
  }
  .qr_code {
    width: 82vw;
    top: 255vh;
  }
  .bungabawah {
    width: 90vw;
  }
}

@media (max-width: 768px) {
  .lkti-section {
    background-size: 100% 2500px;
    height: 2500px;
  }

  .lkti {
  }
  .maintext {
    width: 80vw;
  }
  .textmain {
    font-size: x-large;
  }
  .mainimage {
    top: 150vh;
  }
  .tingkat {
    width: 20vw;
    height: auto;
  }
  .sma {
    width: 26vw;
    height: auto;
  }
  .team {
    width: 20vw;
    height: auto;
  }
  .gratis {
    width: 13vw;
    height: auto;
  }
  .timeline {
    width: 100vw;
  }
  .guidebook {
    width: 12vw;
    top: 250vh;
  }
  .cp_image {
    width: 12vw;
    top: 250vh;
  }
  .qr_code {
    width: 82vw;
    top: 245vh;
  }
  .bungabawah {
    width: 90vw;
  }
}

@media (max-width: 425px) {
  .lkti-section {
    background-size: 100% 2800px;
    height: 2800px;
  }

  .lkti {
  }
  .maintext {
    width: 80vw;
    top: 120vh;
  }
  .textmain {
    font-size: x-large;
  }
  .mainimage {
    top: 180vh;
    display: flex;
    flex-direction: column; /* Stack images vertically */
    align-items: center; /* Center each image */
  }
  .mainimage img {
    margin: 30px 0; /* Adds spacing between the images */
  }
  .tingkat {
    width: 60vw;
    height: auto;
  }
  .sma {
    width: 80vw;
    height: auto;
  }
  .team {
    width: 55vw;
    height: auto;
  }
  .gratis {
    width: 35vw;
    height: auto;
  }
  .timeline {
    width: 100vw;
    top: 250vh;
  }
  .guidebook {
    width: 16vw;
    top: 292vh;
    left: 15vw;
  }
  .cp_image {
    width: 16vw;
    top: 292vh;
  }
  .qr_code {
    width: 82vw;
    top: 290vh;
  }
  .bungabawah {
    width: 90vw;
  }
}

@media (max-width: 375px) {
  .lkti-section {
    background-size: 100% 2800px;
    height: 2800px;
  }

  .lkti {
  }
  .maintext {
    width: 80vw;
    top: 120vh;
  }
  .textmain {
    font-size: x-large;
  }
  .mainimage {
    top: 180vh;
    display: flex;
    flex-direction: column; /* Stack images vertically */
    align-items: center; /* Center each image */
  }
  .mainimage img {
    margin: 30px 0; /* Adds spacing between the images */
  }
  .tingkat {
    width: 60vw;
    height: auto;
  }
  .sma {
    width: 80vw;
    height: auto;
  }
  .team {
    width: 55vw;
    height: auto;
  }
  .gratis {
    width: 35vw;
    height: auto;
  }
  .timeline {
    width: 100vw;
    top: 250vh;
  }
  .guidebook {
    width: 16vw;
    top: 292vh;
    left: 15vw;
  }
  .cp_image {
    width: 16vw;
    top: 292vh;
  }
  .qr_code {
    width: 82vw;
    top: 290vh;
  }
  .bungabawah {
    width: 90vw;
  }
}

@media (max-width: 320px) {
  .lkti-section {
    background-size: 100% 2800px;
    height: 2800px;
  }

  .lkti {
  }
  .maintext {
    width: 80vw;
    top: 120vh;
  }
  .textmain {
    font-size: x-large;
  }
  .mainimage {
    top: 180vh;
    display: flex;
    flex-direction: column; /* Stack images vertically */
    align-items: center; /* Center each image */
  }
  .mainimage img {
    margin: 30px 0; /* Adds spacing between the images */
  }
  .tingkat {
    width: 60vw;
    height: auto;
  }
  .sma {
    width: 80vw;
    height: auto;
  }
  .team {
    width: 55vw;
    height: auto;
  }
  .gratis {
    width: 35vw;
    height: auto;
  }
  .timeline {
    width: 100vw;
    top: 250vh;
  }
  .guidebook {
    width: 16vw;
    top: 292vh;
    left: 15vw;
  }
  .cp_image {
    width: 16vw;
    top: 292vh;
  }
  .qr_code {
    width: 82vw;
    top: 290vh;
  }
  .bungabawah {
    width: 90vw;
  }
}
</style>
