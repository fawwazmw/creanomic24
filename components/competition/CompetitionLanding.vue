<template>
  <section
      class="competition-section relative bg-white flex flex-col items-center justify-start md:px-0 overflow-hidden"
  >

    <!-- New Image Below Header with Positioning Using Top-[50vh] -->
    <div class="w-full absolute flex justify-center top-[20vh] competition">
      <img
          src="../../assets/competitionhead.svg"
          alt="Header Image"
          class="new-header-image object-cover"
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

    <!-- Grid Container for Card Images with href links -->
    <div class="card-grid w-full absolute flex flex-col items-center gap-y-6 top-[150vh] maingrid">
      <a href="/competition/poster" class="grid-item">
        <img src="../../assets/poster.svg" alt="Grid Image 1" class="grid-image object-cover w-[1030px] h-[332px] poster" />
      </a>
      <a href="/competition/lkti" class="grid-item">
        <img src="../../assets/lkti.svg" alt="Grid Image 2" class="grid-image object-cover w-[1030px] h-[332px] lkti" />
      </a>
      <a href="/competition/codexplore" class="grid-item">
        <img src="../../assets/codexplore.svg" alt="Grid Image 3" class="grid-image object-cover w-[1030px] h-[332px] codexplore" />
      </a>
      <a href="/competition/comicquest" class="grid-item">
        <img src="../../assets/comic_quest.svg" alt="Grid Image 4" class="grid-image object-cover w-[1030px] h-[332px] comic_quest" />
      </a>
      <a href="/competition/bussinessplan" class="grid-item">
        <img src="../../assets/bussiness.svg" alt="Grid Image 5" class="grid-image object-cover w-[1030px] h-[332px] bussiness" />
      </a>
    </div>

    <!-- Gradient Background Section -->
    <div class="gradient-background w-full -mt-1"></div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "CompetitionLanding",
  data() {
    return {
      textWords: `Competition merupakan acara inti Creanomic yang mana merupakan platform kompetisi yang dirancang untuk menggali potensi, menumbuhkan inovasi, serta mengasah keterampilan peserta dalam berbagai bidang. Dengan berbagai cabang lomba yang relevan dan menarik, kompetisi ini tidak hanya bertujuan untuk memacu semangat kompetisi positif, tetapi juga menjadi ruang bagi generasi muda untuk menunjukkan ide-ide terbaik mereka.`.split(
          " "
      ),
    };
  },
  mounted() {
    // Animasi untuk competition dari bawah ke atas
    gsap.from(".competition", {
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

    // Animating each grid item individually on scroll with GSAP and ScrollTrigger
    gsap.utils.toArray(".grid-item").forEach((item, index) => {
      const direction = index % 2 === 0 ? -50 : 50; // Alternate left and right directions

      gsap.from(item, {
        x: direction,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      // Hover animation for scaling effect
      item.addEventListener("mouseenter", () => {
        gsap.to(item.querySelector("img"), { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item.querySelector("img"), { scale: 1, duration: 0.3, ease: "power2.out" });
      });
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

.competition-section {
  overflow-x: hidden; /* Prevents horizontal scrolling */
}

.card-grid .grid-item {
  display: flex;
}

.font-poppins {
  font-family: "Poppins", sans-serif;
}

.word {
  display: inline-block;
  margin-right: 0.3em; /* Ensures proper spacing between words */
}

@media (max-width: 1920px) {
  .competition-section {
    background-size: 100% 4800px;
    height: 4800px;
  }
  .competition {

  }
  .maintext {
    width: 70vw;
    height: auto;
  }
  .textmain {
    font-size: xx-large;
  }
  .maingrid {
    top: 140vh;
  }
  .poster {
    width: 1500px;
    height: auto;
  }
  .lkti {
    width: 1500px;
    height: auto;
  }
  .codexplore {
    width: 1500px;
    height: auto;
  }
  .comic_quest {
    width: 1500px;
    height: auto;
  }
  .bussiness {
    width: 1500px;
    height: auto;
  }
}

@media (max-width: 1600px) {
  .competition-section {
    background-size: 100% 4300px;
    height: 4300px;
  }

  .competition {

  }
  .maintext {
  }
  .textmain {
  }
  .maingrid {
    top: 160vh;
  }
  .poster {
    width: 1200px;
    height: auto;
  }
  .lkti {
    width: 1200px;
    height: auto;
  }
  .codexplore {
    width: 1200px;
    height: auto;
  }
  .comic_quest {
    width: 1200px;
    height: auto;
  }
  .bussiness {
    width: 1200px;
    height: auto;
  }
}

@media (max-width: 1440px) {
  .competition-section {
    background-size: 100% 4000px;
    height: 4000px;
  }
  .competition {

  }
  .maintext {
  }
  .textmain {
  }
  .maingrid {

  }
  .poster {

  }
  .lkti {

  }
  .codexplore {

  }
  .comic_quest {

  }
  .bussiness {

  }
}

@media (max-width: 1024px) {
  .competition-section {
    background-size: 100% 3200px;
    height: 3200px;
  }

  .competition {
  }
  .maintext {
    width: 85vw;
  }
  .textmain {
    font-size: larger;
  }
  .maingrid {
    top: 160vh;
  }
  .poster {
    width: 800px;
    height: auto;
  }
  .lkti {
    width: 800px;
    height: auto;
  }
  .codexplore {
    width: 800px;
    height: auto;
  }
  .comic_quest {
    width: 800px;
    height: auto;
  }
  .bussiness {
    width: 800px;
    height: auto;
  }
}

@media (max-width: 768px) {
  .competition-section {
    background-size: 100% 2800px;
    height: 2800px;
  }

  .competition {
  }
  .maintext {
    width: 85vw;
    top: 110vh;
  }
  .textmain {
    font-size: larger;
  }
  .maingrid {
    top: 170vh;
  }
  .poster {
    width: 600px;
    height: auto;
  }
  .lkti {
    width: 600px;
    height: auto;
  }
  .codexplore {
    width: 600px;
    height: auto;
  }
  .comic_quest {
    width: 600px;
    height: auto;
  }
  .bussiness {
    width: 600px;
    height: auto;
  }
}

@media (max-width: 425px) {
  .competition-section {
    background-size: 100% 2600px;
    height: 2600px;
  }

  .competition {
  }
  .maintext {
    width: 85vw;
    top: 120vh;
  }
  .textmain {
    font-size: large;
  }
  .maingrid {
    top: 200vh;
  }
  .poster {
    width: 350px;
    height: auto;
  }
  .lkti {
    width: 350px;
    height: auto;
  }
  .codexplore {
    width: 350px;
    height: auto;
  }
  .comic_quest {
    width: 350px;
    height: auto;
  }
  .bussiness {
    width: 350px;
    height: auto;
  }
}

@media (max-width: 375px) {
  .competition-section {
    background-size: 100% 2800px;
    height: 2800px;
  }

  .competition {
  }
  .maintext {
    width: 85vw;
    top: 130vh;
  }
  .textmain {
    font-size: large;
  }
  .maingrid {
    top: 210vh;
  }
  .poster {
    width: 300px;
    height: auto;
  }
  .lkti {
    width: 300px;
    height: auto;
  }
  .codexplore {
    width: 300px;
    height: auto;
  }
  .comic_quest {
    width: 300px;
    height: auto;
  }
  .bussiness {
    width: 300px;
    height: auto;
  }
}

@media (max-width: 320px) {
  .competition-section {
    background-size: 100% 2800px;
    height: 2800px;
  }

  .competition {
  }
  .maintext {
    width: 85vw;
    top: 140vh;
  }
  .maintext {
    width: 85vw;
    top: 140vh;
  }
  .textmain {
    font-size: large;
  }
  .maingrid {
    top: 240vh;
  }
  .poster {
    width: 250px;
    height: auto;
  }
  .lkti {
    width: 250px;
    height: auto;
  }
  .codexplore {
    width: 250px;
    height: auto;
  }
  .comic_quest {
    width: 250px;
    height: auto;
  }
  .bussiness {
    width: 250px;
    height: auto;
  }
}
</style>
