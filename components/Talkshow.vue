<template>
  <section
      class="talkshow-section relative bg-white flex flex-col items-center justify-start md:px-0 overflow-hidden"
  >

    <!-- New Image Below Header with Positioning Using Top-[50vh] -->
    <div class="w-full absolute flex justify-center top-[40vh] talkshow">
      <img
          src="/assets/talkshowhead.svg"
          alt="Header Image"
          class="new-header-image object-cover"
      />
    </div>

    <img
        src="/assets/card_talkshow.svg"
        alt="Center Timeline"
        class="absolute w-[1170px] h-auto object-cover justify-center top-[250vh] card_talkshow"
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
  name: "Talkshow",
  mounted() {
    // Animasi untuk talkshow dari bawah ke atas
    gsap.from(".talkshow", {
      duration: 2, // Durasi animasi
      y: 100, // Memulai dari 100px di bawah posisinya
      opacity: 0, // Mulai dengan opacity 0 (tidak terlihat)
      ease: "power2.out", // Easing untuk animasi yang halus
    });

    // Animate aboutus.svg with scale and from bottom for smooth entrance
    gsap.from(".card_talkshow", {
      y: 50, // Move slightly up from below
      scale: 1.1, // Start slightly scaled up
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".card_talkshow",
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

.talkshow-section {
  overflow-x: hidden; /* Prevents horizontal scrolling */
}


@media (max-width: 1920px) {
  .talkshow-section {
    background-size: 100% 2800px;
    height: 2800px;
  }
  .talkshow {

  }
  .card_talkshow {
    top: 120vh;
  }
}

@media (max-width: 1600px) {
  .talkshow-section {
    background-size: 100% 2500px;
    height: 2500px;
  }

  .talkshow {

  }
  .card_talkshow {
    top: 120vh;
  }
}

@media (max-width: 1440px) {
  .talkshow-section {
    background-size: 100% 2800px;
    height: 2800px;
  }
  .talkshow {

  }
  .card_talkshow {
    top: 120vh;
  }
}

@media (max-width: 1024px) {
  .talkshow-section {
    background-size: 100% 2200px;
    height: 2200px;
  }

  .talkshow {
  }
  .card_talkshow {
    width: 80vw;
    height: auto;
  }
}

@media (max-width: 768px) {
  .talkshow-section {
    background-size: 100% 2200px;
    height: 2200px;
  }

  .talkshow {
  }
  .card_talkshow {
    width: 80vw;
    height: auto;
  }
}

@media (max-width: 425px) {
  .talkshow-section {
    background-size: 100% 1800px;
    height: 1800px;
  }

  .talkshow {
  }
  .card_talkshow {
    width: 90vw;
    height: auto;
  }
}

@media (max-width: 375px) {
  .talkshow-section {
    background-size: 100% 1800px;
    height: 1800px;
  }

  .talkshow {
  }
  .card_talkshow {
    width: 90vw;
    height: auto;
  }
}

@media (max-width: 320px) {
  .talkshow-section {
    background-size: 100% 1800px;
    height: 1800px;
  }

  .talkshow {
  }
  .card_talkshow {
    width: 90vw;
    height: auto;
  }
}
</style>
