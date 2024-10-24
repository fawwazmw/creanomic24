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
      class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-x-[10px] gap-y-[10px] mt-[150px] justify-center mediagrid z-0"
      :style="{
        gridTemplateRows: isMobile ? 'repeat(3, 100px)' : 'repeat(2, 150px)',
      }"
    >
      <img
        v-for="n in 14"
        :key="n"
        src="assets/medpart.svg"
        :alt="`Media Partner ${n}`"
        :class="[
          'medpart-image w-[100px] sm:w-[130px] md:w-[150px] h-[100px] sm:h-[130px] md:h-[150px] object-cover',
          n <= 7 ? 'row1' : 'row2',
        ]"
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
      isMobile: window.innerWidth <= 425,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.initAnimations();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 425;
    },
    initAnimations() {
      // Animate mainmedia text from top to bottom
      gsap.from(".mainmedia", {
        y: -100,
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

      // Animate row1 images from right to left
      gsap.from(".row1", {
        x: 100,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".mediagrid",
          start: "top 90%",
          end: "center center",
          scrub: true,
          onComplete: () => this.startInfiniteScroll(".row1", -200),
        },
      });

      // Animate row2 images from left to right
      gsap.from(".row2", {
        x: -100,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".mediagrid",
          start: "top 80%",
          end: "center center",
          scrub: true,
          onComplete: () => this.startInfiniteScroll(".row2", 200),
        },
      });

      // Animate callingout.svg from bottom to top
      gsap.from(".callingout", {
        y: 100,
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
/* Importing Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}

.mediapartner-section {
  padding-bottom: 50px; /* Ensure there's space for callingout.svg */
}

.mediagrid {
  margin-top: 120px; /* Add spacing between title and grid */
  margin-bottom: 20px; /* Ensure some space before callingout.svg */
}

.callingout {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.medpart-image {
  transition: width 0.3s ease, height 0.3s ease; /* Smooth transition for resizing */
}

@media (max-width: 1920px) {
  .textmedia {
    font-size: 5vw;
  }
}

@media (max-width: 425px) {
  .mediapartner-section {
    padding-bottom: 150px; /* Adjust space for callingout.svg */
  }

  .medpart-image {
    width: 70px;
    height: 70px;
  }

  .mediagrid {
    gap-x: 5px; /* Reduce gap for better spacing */
    gap-y: 10px;
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
    gap-x: 5px; /* Reduce gap for better spacing */
    gap-y: 10px;
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
    gap-x: 5px; /* Reduce gap for better spacing */
    gap-y: 10px;
  }
}
</style>
