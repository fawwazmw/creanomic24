<template>
  <section
      class="jobfair-section relative bg-white h-auto md:h-[3236px] flex flex-col items-center justify-start md:px-0 overflow-hidden"
  >
    <!-- New Image Below Header -->
    <div class="w-full flex justify-center mt-[28vh] jobfairhead">
      <img
          src="assets/jobfairhead.svg"
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
        <span v-for="(word, index) in textWords" :key="index" class="word">{{ word }}</span>
      </h2>
    </div>

    <!-- Row of Images Below the Text -->
    <!-- Left Image -->
    <img
        src="assets/left_image.svg"
        alt="Left Image"
        class="absolute w-[432px] h-[98px] object-cover left-[10vw] top-[150vh] leftimage"
    />

    <!-- Right Image -->
    <img
        src="assets/right_image.svg"
        alt="Right Image"
        class="absolute w-[432px] h-[98px] object-cover right-[10vw] top-[150vh] rightimage"
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
  name: "Jobfair",
  data() {
    return {
      textWords: `Job Fair merupakan sebuah kegiatan yang dirancang untuk memfasilitasi pertemuan antara mahasiswa fakultas vokasi dan berbagai perusahaan terkemuka. Acara ini bertujuan memberikan ruang bagi para pencari kerja untuk mengeksplorasi peluang karir, memahami kebutuhan dunia kerja, dan berinteraksi langsung dengan para perekrut dari berbagai industri. Dalam kegiatan ini, peserta memiliki kesempatan untuk mengikuti sesi career counseling dan networking.`.split(
          " "
      ),
    };
  },
  mounted() {
    // Animasi untuk jobfairhead dari bawah ke atas
    gsap.from(".jobfairhead", {
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

.jobfair-section {
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
  .jobfair-section {
    background-size: 100% 2400px;
    height: 2400px;
  }

  .jobfairhead {
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
    width: 432px;
    height: 98px;
    top: 140vh;
  }
  .rightimage {
    width: 432px;
    height: 98px;
    top: 140vh;
  }
  .bungatengah {
    bottom: 0vh;
  }
}

@media (max-width: 1600px) {
  .jobfair-section {
    background-size: 100% 2400px;
    height: 2400px;
  }
  .jobfairhead {
  }
  .gelomabang {
  }
  .maintext {
  }
  .textmain {
  }
  .leftimage {
    width: 432px;
    height: 98px;
    top: 165vh;
  }
  .rightimage {
    width: 432px;
    height: 98px;
    top: 165vh;
  }
  .bungatengah {
  }
}

@media (max-width: 1440px) {
  .jobfair-section {
    background-size: 100% 2078px;
    height: 2078px;
  }
  .jobfairhead {
  }
  .gelomabang {
  }
  .maintext {
  }
  .textmain {
  }
  .leftimage {
  }
  .rightimage {
  }
  .bungatengah {
  }
}

@media (max-width: 1024px) {
  .jobfair-section {
    background-size: 100% 2000px;
    height: 2000px;
  }

  .jobfairhead {
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
    width: 35vw;
    height: auto;
  }
  .rightimage {
    right: 10vw;
    width: 35vw;
    height: auto;
  }
  .bungatengah {
    width: 90vw;
    height: auto;
    bottom: 10vh;
  }
}

@media (max-width: 768px) {
  .jobfair-section {
    background-size: 100% 2000px;
    height: 2000px;
  }

  .jobfairhead {
    width: 40vw;
    height: auto;
    margin-top: 20vh;
  }
  .gelomabang {
  }
  .maintext {
    width: 85vw;
    top: 110vh;
  }
  .textmain {
    font-size: larger;
  }
  .leftimage {
    width: 50vw;
    height: auto;
    top: 160vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightimage {
    width: 50vw;
    height: auto;
    top: 190vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .bungatengah {
    width: 90vw;
    height: auto;
    bottom: 10vh;
  }
}

@media (max-width: 425px) {
  .jobfair-section {
    background-size: 100% 2300px;
    height: 2300px;
  }

  .jobfairhead {
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
    width: 70vw;
    height: auto;
    top: 200vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightimage {
    width: 70vw;
    height: auto;
    top: 230vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .bungatengah {
    width: 100vw;
    height: auto;
    bottom: 10vh;
  }
}

@media (max-width: 375px) {
  .jobfair-section {
    background-size: 100% 2400px;
    height: 2400px;
  }

  .jobfairhead {
    width: 60vw;
    height: auto;
    margin-top: 20vh;
  }
  .gelomabang {
  }
  .maintext {
    width: 85vw;
    top: 130vh;
  }
  .textmain {
    font-size: large;
  }
  .leftimage {
    width: 70vw;
    height: auto;
    top: 220vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightimage {
    width: 70vw;
    height: auto;
    top: 250vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .bungatengah {
    width: 100vw;
    height: auto;
    bottom: 10vh;
  }
}

@media (max-width: 320px) {
  .jobfair-section {
    background-size: 100% 2600px;
    height: 2600px;
  }

  .jobfairhead {
    width: 60vw;
    height: auto;
    margin-top: 20vh;
  }
  .gelomabang {
  }
  .maintext {
    width: 85vw;
    top: 140vh;
  }
  .textmain {
    font-size: large;
  }
  .leftimage {
    width: 70vw;
    height: auto;
    top: 250vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightimage {
    width: 70vw;
    height: auto;
    top: 275vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .bungatengah {
    width: 100vw;
    height: auto;
    bottom: 15vh;
  }
}
</style>