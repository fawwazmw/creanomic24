<template>
  <section
      class="mediapartner-section relative bg-white h-auto md:h-[804px] flex flex-col items-center justify-start px-4 md:px-0"
  >
    <!-- Title -->
    <div
        class="absolute flex items-center justify-center top-[30px] w-full mainmedia z-10"
    >
      <h1
          class="text-center text-[40px] sm:text-[50px] md:text-[70px] font-bold font-poppins bg-gradient-to-r from-[#201169] to-[#7840C9] bg-clip-text text-transparent textmedia"
      >
        Media Partner
      </h1>
    </div>

    <!-- Media Partner Grid with adjusted margin for spacing -->
    <div
        class="grid grid-cols-10 gap-x-4 gap-y-20 mt-[150px] mx-4 justify-center mediagrid z-0"
        :style="{
        gridTemplateRows: isMobile ? 'repeat(2, 100px)' : 'repeat(1, 150px)',
      }"
    >
      <img
          src="assets/medpart1.svg"
          alt="Media Partner 1"
          class="medpart-image image-size"
      />
      <img
          src="assets/medpart2.svg"
          alt="Media Partner 2"
          class="medpart-image image-size"
      />
      <img
          src="assets/medpart3.svg"
          alt="Media Partner 3"
          class="medpart-image image-size"
      />
      <img
          src="assets/medpart4.svg"
          alt="Media Partner 4"
          class="medpart-image image-size"
      />
      <img
          src="assets/medpart5.svg"
          alt="Media Partner 5"
          class="medpart-image image-size"
      />
      <img
          src="assets/medpart6.svg"
          alt="Media Partner 6"
          class="medpart-image image-size"
      />
      <img
          src="assets/medpart7.svg"
          alt="Media Partner 7"
          class="medpart-image image-size"
      />
      <img
          src="assets/medpart8.svg"
          alt="Media Partner 8"
          class="medpart-image image-size"
      />
      <img
          src="assets/medpart9.svg"
          alt="Media Partner 9"
          class="medpart-image image-size"
      />
      <img
          src="assets/medpart10.svg"
          alt="Media Partner 10"
          class="medpart-image image-size"
      />
    </div>

    <!-- Positioned Image at the bottom -->
    <img
        src="assets/callingout.svg"
        alt="Positioned Image"
        class="w-full mt-[20px] object-cover callingout"
    />
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Medpart",
  data() {
    return {
      isMobile: false, // Default to false; will be set correctly on mount.
    };
  },
  mounted() {
    this.isMobile = window.innerWidth <= 425;
    window.addEventListener("resize", this.handleResize);
    this.initAnimations();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 425;
    },
    initAnimations() {
      gsap.from(".mainmedia", {
        y: -20, // Start from slightly above within viewport
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mainmedia",
          start: "top 80%",
          end: "center center",
          scrub: true,
        },
      });

      gsap.from(".medpart-image", {
        y: -50, // Slide from top
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".mediagrid",
          start: "top 90%",
          end: "center center",
          scrub: true,
          onComplete: () => this.startInfiniteScroll(".medpart-image", -200),
        },
      });

      gsap.from(".callingout", {
        y: 20, // Start slightly from below within viewport
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".callingout",
          start: "top 100%",
          end: "center center",
          scrub: true,
        },
      });
    },
    startInfiniteScroll(target, distance) {
      gsap.to(target, {
        x: distance,
        duration: 10,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % window.innerWidth),
        },
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}

.mediapartner-section {
  padding-bottom: 50px;
}

.mediagrid {
  margin-top: 120px;
  margin-bottom: 20px;
}

.callingout {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.medpart-image {
  transition: width 0.3s ease, height 0.3s ease;
  width: 150px;
  height: 150px;
}

@media (max-width: 1920px) {
  .mediapartner-section {
    height: 1100px;
  }
  .textmedia {
    font-size: 4vw;
  }
  .mediagrid {
    margin-top: 16vh;
  }
  .image-size {
    width: 12vw;
    height: 18vh;
  }
  .callingout {
    margin-top: 10vh;
  }
}

@media (max-width: 1600px) {
  .mediapartner-section {
    height: 1100px;
  }
  .textmedia {
    font-size: 4vw;
  }
  .mediagrid {
    margin-top: 16vh;
  }
  .image-size {
    width: 12vw;
    height: 18vh;
  }
  .callingout {
    margin-top: 10vh;
  }
}

@media (max-width: 1440px) {
  .mediapartner-section {
    height: 1100px;
  }
  .textmedia {
    font-size: 4vw;
  }
  .mediagrid {
    margin-top: 16vh;
  }
  .image-size {
    width: 12vw;
    height: 18vh;
  }
  .callingout {
    margin-top: 10vh;
  }
}

@media (max-width: 1024px) {
  .mediapartner-section {
    height: 900px;
  }
  .textmedia {
    font-size: 4vw;
  }
  .mediagrid {
    margin-top: 16vh;
    gap: normal;
  }
  .image-size {
    width: 12vw;
    height: 18vh;
  }
  .callingout {
    margin-top: 10vh;
  }
}

@media (max-width: 768px) {
  .mediapartner-section {
    height: 900px;
  }
  .textmedia {
    font-size: 5vw;
  }
  .mediagrid {
    margin-top: 16vh;
    gap: normal;
  }
  .image-size {
    width: 12vw;
    height: 18vh;
  }
  .callingout {
    margin-top: 10vh;
  }
}

@media (max-width: 425px) {
  .mediapartner-section {
    padding-bottom: 150px;
  }
  .medpart-image {
    width: 70px;
    height: 70px;
  }
  .mediagrid {
    grid-template-columns: repeat(4, 1fr); /* 4 columns on mobile */
    gap-x: 10px;
    gap-y: 20px;
  }
}

@media (max-width: 375px) {
  .mediapartner-section {
    padding-bottom: 150px;
  }
  .medpart-image {
    width: 60px;
    height: 60px;
  }
  .mediagrid {
    grid-template-columns: repeat(4, 1fr);
    gap-x: 10px;
    gap-y: 20px;
  }
}

@media (max-width: 320px) {
  .mediapartner-section {
    padding-bottom: 150px;
  }
  .medpart-image {
    width: 50px;
    height: 50px;
  }
  .mediagrid {
    grid-template-columns: repeat(4, 1fr);
    gap-x: 10px;
    gap-y: 20px;
  }
}
</style>