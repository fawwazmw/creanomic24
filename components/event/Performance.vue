<template>
  <section
      class="performance-section relative bg-white h-auto md:h-[3236px] flex flex-col items-center justify-start md:px-0 overflow-hidden"
  >

    <!-- New Image Below Header -->
    <div class="w-full flex justify-center mt-[28vh] performancehead">
      <img
          src="assets/performancehead.svg"
          alt="Header Image"
          class="new-header-image object-cover"
      />
    </div>

    <!-- Single Image Content -->
    <div class="image-container w-full flex flex-col items-center mt-[13vh]">
      <img
          src="assets/gelombang.svg"
          alt="Requested Image"
          class="w-full h-auto object-cover gelombang"
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
    <!-- Left Image -->
    <img
        src="assets/left_image.svg"
        alt="Left Image"
        class="absolute w-[300px] h-[11vh] object-cover left-[10vw] top-[150vh] leftimage"
    />

    <!-- Center Image -->
    <img
        src="assets/center_image.svg"
        alt="Center Image"
        class="absolute w-[434px] h-[11vh] object-cover justify-center top-[150vh] centerimage"
    />

    <!-- Right Image -->
    <img
        src="assets/right_image.svg"
        alt="Right Image"
        class="absolute w-[300px] h-[11vh] object-cover right-[10vw] top-[150vh] rightimage"
    />

    <!-- Center Perform -->
    <img
        src="assets/center_perform.svg"
        alt="Center Perform"
        class="absolute w-[1170px] h-auto object-cover justify-center bottom-[500px] centerperform"
    />

    <img
        src="assets/bungatengah.svg"
        alt="Positioned Image"
        class="absolute justify-center bottom-[0vh] object-cover max-w-[100%] md:max-w-none bungatengah scale-y-[-1]"
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
  name: "Performance",
  data() {
    return {
      textWords:
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur dolores aliquam quis, molestiae ullam ad reiciendis dolorem amet. Quibusdam quam molestias expedita inventore animi odio tempore accusantium reiciendis et vero, harum nam impedit repellendus odit quos laborum rerum ea ex placeat esse quis labore ipsum! Cumque dolorem, quibusdam minus delectus unde mollitia voluptatibus a quod, eius, accusamus officia voluptatem natus cum incidunt error at. A reprehenderit repellendus, illum alias nulla sint. Quae nisi distinctio asperiores pariatur ea veniam eveniet aliquam odio deserunt itaque.`.split(
              " "
          ),
    };
  },
  mounted() {
    // Animasi untuk performancehead dari bawah ke atas
    gsap.from(".performancehead", {
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

    // Animasi ombak kiri dari kiri
    gsap.from(".leftimage", {
      x: -50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".leftimage",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    // Animate aboutus.svg with scale and from bottom for smooth entrance
    gsap.from(".centerimage", {
      y: 50, // Move slightly up from below
      scale: 1.1, // Start slightly scaled up
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".centerimage",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    // Animasi ombak kanan dari kanan
    gsap.from(".rightimage", {
      x: 50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".rightimage",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    // Animate aboutus.svg with scale and from bottom for smooth entrance
    gsap.from(".centerperform", {
      y: 50, // Move slightly up from below
      scale: 1.1, // Start slightly scaled up
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".centerperform",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.from(".bungatengah", {
      y: 80, // Slightly below for a smooth entrance
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bungatengah",
        start: "top 100%",
        end: "center center",
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
  height: 2078px;
  background: linear-gradient(
      180deg,
      #201169 0%,
      #2c4ab7 39%,
      #3572ef 65%,
      #ffffff 100%
  );
}

.performance-section {
  overflow-x: hidden; /* Prevents horizontal scrolling */
}

.font-poppins {
  font-family: "Poppins", sans-serif;
}

.word {
  display: inline-block;
  margin-right: 0.3em; /* Ensures proper spacing between words */
}

@media (max-width: 1920px) {
  .performance-section {
    background-size: 100% 3300px;
    height: 3300px;
  }

  .performancehead {

  }
  .gelomabang {
  }
  .maintext {
    width: 70vw;
    height: auto;
  }
  .textmain {
    font-size: xx-large;
  }
  .leftimage {
    width: 20vw;
    height: auto;
    top: 140vh;
  }
  .centerimage {
    width: 30vw;
    height: auto;
    top: 140vh;
  }
  .rightimage {
    width: 20vw;
    height: auto;
    top: 140vh;
  }
  .centerperform {
    width: 80vw;
    height: 66vh;
  }
  .leftimagetop {

  }
  .centerimagetop {

  }
  .rightimagetop {

  }
  .leftimagebottom {

  }
  .centerimagebottom {

  }
  .rightimagebottom {

  }
  .bungatengah {
  }
}

@media (max-width: 1600px) {
  .performance-section {
    background-size: 100% 3300px;
    height: 3300px;
  }

  .performancehead {

  }
  .gelomabang {
  }
  .maintext {
    width: 70vw;
    height: auto;
  }
  .textmain {
    font-size: xx-large;
  }
  .leftimage {
    width: 20vw;
    height: auto;
    top: 160vh;
  }
  .centerimage {
    width: 30vw;
    height: auto;
    top: 160vh;
  }
  .rightimage {
    width: 20vw;
    height: auto;
    top: 160vh;
  }
  .centerperform {

  }
  .leftimagetop {

  }
  .centerimagetop {

  }
  .rightimagetop {

  }
  .leftimagebottom {

  }
  .centerimagebottom {

  }
  .rightimagebottom {

  }
  .bungatengah {
  }
}

@media (max-width: 1440px) {
  .performance-section {
    background-size: 100% 2900px;
    height: 2900px;
  }
  .performancehead {

  }
  .gelomabang {
  }
  .maintext {

  }
  .textmain {

  }
  .leftimage {

  }
  .centerimage {

  }
  .rightimage {

  }
  .centerperform {

  }
  .bungatengah {
  }
}

@media (max-width: 1024px) {
  .performance-section {
    background-size: 100% 2600px;
    height: 2600px;
  }

  .performancehead {
    width: 40vw;
    height: auto;
  }
  .gelomabang {
  }
  .maintext {
    width: 85vw;
  }
  .textmain {
    font-size: larger;
  }
  .leftimage {
    left: 10vw;
    width: 20vw;
    height: auto;
  }
  .centerimage {
    width: 30vw;
    height: auto;
  }
  .rightimage {
    right: 10vw;
    width: 20vw;
    height: auto;
  }
  .centerperform {
    width: 80vw;
    height: auto;
    bottom: 80vh;
  }
  .bungatengah {
    width: 90vw;
    height: auto;
    bottom: 10vh;
  }
}

@media (max-width: 768px) {
  .performance-section {
    background-size: 100% 2200px;
    height: 2200px;
  }

  .performancehead {
    width: 50vw;
    height: auto;
  }
  .gelomabang {
  }
  .maintext {
    width: 85vw;
  }
  .textmain {
    font-size: larger;
  }
  .leftimage {
    left: 10vw;
    width: 20vw;
    height: auto;
  }
  .centerimage {
    width: 30vw;
    height: auto;
  }
  .rightimage {
    right: 10vw;
    width: 20vw;
    height: auto;
  }
  .centerperform {
    width: 90vw;
    height: auto;
    bottom: 40vh;
  }
  .bungatengah {
    width: 90vw;
    height: auto;
    bottom: 10vh;
  }
}

@media (max-width: 425px) {
  .performance-section {
    background-size: 100% 2900px;
    height: 2900px;
  }

  .performancehead {
    width: 60vw;
    height: auto;
    margin-top: 20vh;
  }
  .gelomabang {
  }
  .maintext {
    width: 85vw;
    top: 120vh;
  }
  .textmain {
    font-size: large;
  }
  .leftimage {
    width: 50vw;
    height: auto;
    top: 210vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .centerimage {
    width: 70vw;
    height: auto;
    top: 230vh;
  }
  .rightimage {
    width: 50vw;
    height: auto;
    top: 250vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .centerperform {
    width: 85vw;
    height: auto;
    bottom: 60vh;
  }
  .bungatengah {
    width: 100vw;
    height: auto;
    bottom: 10vh;
  }

}

@media (max-width: 375px) {
  .performance-section {
    background-size: 100% 2900px;
    height: 2900px;
  }

  .performancehead {
    width: 60vw;
    height: auto;
    margin-top: 20vh;
  }
  .gelomabang {
  }
  .maintext {
    width: 85vw;
    top: 120vh;
  }
  .textmain {
    font-size: large;
  }
  .leftimage {
    width: 50vw;
    height: auto;
    top: 220vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .centerimage {
    width: 70vw;
    height: auto;
    top: 240vh;
  }
  .rightimage {
    width: 50vw;
    height: auto;
    top: 260vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .centerperform {
    width: 85vw;
    height: auto;
    bottom: 60vh;
  }
  .bungatengah {
    width: 100vw;
    height: auto;
    bottom: 10vh;
  }
}

@media (max-width: 320px) {
  .performance-section {
    background-size: 100% 2900px;
    height: 2900px;
  }
  .performancehead {
    width: 60vw;
    height: auto;
    margin-top: 20vh;
  }
  .gelomabang {
  }
  .maintext {
    width: 85vw;
    top: 120vh;
  }
  .textmain {
    font-size: large;
  }
  .leftimage {
    width: 50vw;
    height: auto;
    top: 230vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .centerimage {
    width: 70vw;
    height: auto;
    top: 250vh;
  }
  .rightimage {
    width: 50vw;
    height: auto;
    top: 270vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .centerperform {
    width: 85vw;
    height: auto;
    bottom: 50vh;
  }
  .bungatengah {
    width: 100vw;
    height: auto;
    bottom: 10vh;
  }
}
</style>
