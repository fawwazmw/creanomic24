<template>
  <section
      class="maskot-section relative bg-white h-auto md:h-[1009px] flex flex-col items-center justify-start px-4 md:px-0"
  >
    <!-- Existing Maskot Text Image -->
    <img
        src="assets/maskottext.svg"
        alt="Text Maskot"
        class="absolute top-[124px] md:top-[124px] object-contain left-1/2 transform -translate-x-1/2 max-w-[80%] md:max-w-none maskottext"
    />

    <!-- New Maskot Image -->
    <img
        src="assets/maskot.svg"
        alt="Gambar Maskot"
        class="absolute top-[277px] md:top-[277px] left-1/2 transform -translate-x-1/2 object-contain max-w-[80%] md:max-w-none maskotlogo"
    />

    <!-- New Text Section (Right) -->
    <div
        class="absolute top-[370px] md:top-[370px] right-[10px] md:right-[135px] w-[90%] md:w-[350px] h-auto md:h-[231px] p-4 flex items-center justify-center text-kanan"
    >
      <p
          class="text-center text-sm sm:text-lg font-poppins leading-relaxed md:leading-normal text-kanan-font"
      >
        <span
            v-for="(word, index) in kananWords"
            :key="index"
            class="kanan-word"
        >{{ word }}</span
        >
      </p>
    </div>

    <!-- Additional New Image (Right Tentacle) -->
    <img
        src="assets/tentaclekanan.svg"
        alt="Tentacle Kanan"
        class="absolute top-[492px] md:top-[492px] right-[10px] md:right-[94px] object-contain max-w-[50%] md:max-w-none tentacle-kanan"
    />

    <!-- Left Text Section -->
    <div
        class="absolute top-[370px] md:top-[370px] left-[10px] md:left-[135px] w-[90%] md:w-[350px] h-auto md:h-[231px] p-4 flex items-center justify-center text-kiri"
    >
      <p
          class="text-center text-sm sm:text-lg font-poppins leading-relaxed md:leading-normal text-kiri-font"
      >
        <span
            v-for="(word, index) in kiriWords"
            :key="index"
            class="kiri-word"
        >{{ word }}</span
        >
      </p>
    </div>

    <!-- Tentacle Left Image -->
    <img
        src="assets/tentaclekiri.svg"
        alt="Tentacle Kiri"
        class="absolute top-[492px] md:top-[492px] left-[10px] md:left-[94px] object-contain max-w-[50%] md:max-w-none tentacle-kiri"
    />
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Maskot",
  data() {
    return {
      kananWords:
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio tempore quas beatae et, magni eius itaque commodi necessitatibus maxime qui. Iure, doloribus?`.split(
              " "
          ),
      kiriWords:
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio tempore quas beatae et, magni eius itaque commodi necessitatibus maxime qui. Iure, doloribus?`.split(
              " "
          ),
    };
  },
  mounted() {
    gsap.from(".maskottext", {
      y: -30, // Slightly above the starting position
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".maskottext",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.from(".maskotlogo", {
      y: 30, // Slightly below the starting position
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".maskotlogo",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.from(".text-kanan", {
      x: 15, // Start from edge of viewport on the right side
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".text-kanan",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.from(".text-kiri", {
      x: -15, // Start from edge of viewport on the left side
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".text-kiri",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.from(".tentacle-kanan", {
      y: 30, // Slightly below the starting position
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".tentacle-kanan",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.from(".tentacle-kiri", {
      y: 30, // Slightly below the starting position
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".tentacle-kiri",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.fromTo(
        ".kanan-word",
        { color: "#A0A0A0" },
        {
          color: "#121212",
          ease: "none",
          scrollTrigger: {
            trigger: ".text-kanan",
            start: "top 90%",
            end: "center center",
            scrub: true,
          },
          stagger: {
            each: 0.1,
          },
        }
    );

    gsap.fromTo(
        ".kiri-word",
        { color: "#A0A0A0" },
        {
          color: "#121212",
          ease: "none",
          scrollTrigger: {
            trigger: ".text-kiri",
            start: "top 90%",
            end: "center center",
            scrub: true,
          },
          stagger: {
            each: 0.1,
          },
        }
    );
  },
};
</script>

<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}

.kanan-word,
.kiri-word {
  display: inline-block;
  margin-right: 0.3em;
}

@media (max-width: 1024px) {
  .maskot-section {
    height: 800px;
  }
  .maskotlogo {
    width: 30vw;
  }
  .text-kanan {
    top: 40vh;
    right: 4vw;
  }
  .text-kiri {
    top: 40vh;
    left: 4vw;
  }
  .tentacle-kanan {
    top: 58vh;
    right: 0vw;
  }
  .tentacle-kiri {
    top: 58vh;
    left: 0vw;
  }
}

@media (max-width: 768px) {
  .maskot-section {
    height: 700px;
  }
  .maskottext {
    width: 50vw;
    top: 10vh;
  }
  .maskotlogo {
    width: 30vw;
    top: 25vh;
  }
  .text-kanan {
    top: 30vh;
    right: 4vw;
    width: 35vw;
  }
  .text-kiri {
    top: 30vh;
    left: 4vw;
    width: 35vw;
  }
  .text-kanan-font {
    font-size: small;
  }
  .text-kiri-font {
    font-size: small;
  }
  .tentacle-kanan {
    top: 46vh;
    right: 0vw;
    width: 42vw;
  }
  .tentacle-kiri {
    top: 46vh;
    left: 0vw;
    width: 42vw;
  }
}

@media (max-width: 425px) {
  .maskot-section {
    height: 900px;
  }
  .maskottext {
    width: 50vw;
    top: 5vh;
  }
  .maskotlogo {
    width: 35vw;
    top: 12vh;
  }
  .text-kanan {
    top: 32vh;
    right: 15vw;
    width: 70vw;
  }
  .text-kiri {
    top: 64vh;
    left: 15vw;
    width: 70vw;
  }
  .text-kanan-font {
    font-size: smaller;
  }
  .text-kiri-font {
    font-size: smaller;
  }
  .tentacle-kanan {
    top: 48vh;
    right: 25vw;
    width: 120vw;
  }
  .tentacle-kiri {
    top: 80vh;
    left: 25vw;
    width: 120vw;
  }
}

@media (max-width: 320px) {
  .maskot-section {
    height: 800px;
  }
  .maskottext {
    width: 50vw;
    top: 5vh;
  }
  .maskotlogo {
    width: 35vw;
    top: 12vh;
  }
  .text-kanan {
    top: 32vh;
    right: 15vw;
    width: 70vw;
  }
  .text-kiri {
    top: 64vh;
    left: 15vw;
    width: 70vw;
  }
  .text-kanan-font {
    font-size: smaller;
  }
  .text-kiri-font {
    font-size: smaller;
  }
  .tentacle-kanan {
    top: 52vh;
    right: 25vw;
    width: 120vw;
  }
  .tentacle-kiri {
    top: 82vh;
    left: 25vw;
    width: 120vw;
  }
}
</style>
