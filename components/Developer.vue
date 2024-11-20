<template>
  <section class="developer-section relative bg-white flex flex-col items-center md:px-0 overflow-hidden">
    <!-- Grid Container for Card Images with href links -->
    <div class="card-grid w-full absolute flex flex-col items-center gap-y-6 maingrid">
      <a href="https://www.instagram.com/fwzmwrdy/profilecard/?igsh=MWx5dW9uMXhycWJtbw==" class="grid-item">
        <img src="../assets/fawwaz.svg" alt="Grid Image 1" class="grid-image object-cover w-full h-auto fawwaz" />
      </a>
      <a href="https://www.instagram.com/caaagt/profilecard/?igsh=MXF2dTB3aGJzN29hZg==" class="grid-item">
        <img src="../assets/cagita.svg" alt="Grid Image 2" class="grid-image object-cover w-full h-auto cagita" />
      </a>
      <a href="https://www.instagram.com/widodo5864/profilecard/?igsh=MW41czFkZjFoajA3NA==" class="grid-item">
        <img src="../assets/sugeng.svg" alt="Grid Image 3" class="grid-image object-cover w-full h-auto sugeng" />
      </a>
      <a href="https://www.instagram.com/alvianvedaa_/profilecard/?igsh=Y3NxamQ1cTlhMnd2" class="grid-item">
        <img src="../assets/alfian.svg" alt="Grid Image 4" class="grid-image object-cover w-full h-auto alfian" />
      </a>
      <a href="https://www.instagram.com/afifsatrio_/profilecard/?igsh=MW94OG12YXVoY3VmdQ==" class="grid-item">
        <img src="../assets/afif.svg" alt="Grid Image 5" class="grid-image object-cover w-full h-auto afif" />
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
  name: "Developer",

  mounted() {
    // Animating each grid item individually on scroll with GSAP and ScrollTrigger
    gsap.utils.toArray(".grid-item").forEach((item, index) => {
      gsap.from(item, {
        y: 50,
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

.gradient-background {
  min-height: 2000px;
  background: linear-gradient(
      180deg,
      #201169 0%,
      #2c4ab7 39%,
      #3572ef 65%,
      #ffffff 100%
  );
}

.developer-section {
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
}

.card-grid {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 1030px;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
}

.grid-item {
  width: 100%;
}

@media (max-width: 1920px) {
  .developer-section {
    background-size: 100% 2000px;
    height: 2000px;
  }
  .card-grid {
    top: 60vh;
  }
}

@media (max-width: 1600px) {
  .developer-section {
    background-size: 100% 2000px;
    height: 2000px;
  }
  .card-grid {
    top: 70vh;
  }
}

@media (max-width: 1440px) {
  .developer-section {
    background-size: 100% 2000px;
    height: 2000px;
  }
  .card-grid {
    top: 70vh;
  }
}

@media (max-width: 1024px) {
  .developer-section {
    background-size: 100% 2000px;
    height: 2000px;
  }
  .card-grid {
    top: 60vh;
  }
}

@media (max-width: 768px) {
  .developer-section {
    background-size: 100% 2000px;
    height: 2000px;
  }
  .card-grid {
    top: 60vh;
  }
}

@media (max-width: 425px) {
  .developer-section {
    background-size: 100% 2600px;
    height: 2600px;
  }
  .card-grid {
    top: 50vh;
  }
}

@media (max-width: 375px) {
  .developer-section {
    background-size: 100% 2800px;
    height: 2800px;
  }
  .card-grid {
    top: 50vh;
  }
}

@media (max-width: 320px) {
  .developer-section {
    background-size: 100% 2800px;
    height: 2800px;
  }
  .card-grid {
    top: 50vh;
  }
}
</style>
