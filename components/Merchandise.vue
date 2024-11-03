<template>
  <section
      class="merchandise-section relative bg-white flex flex-col items-center justify-start md:px-0 overflow-hidden"
  >

    <!-- Single Image Content -->
    <div class="image-container w-full flex flex-col items-center mt-[13vh]">
      <img
          src="assets/gelombang.svg"
          alt="Requested Image"
          class="w-full h-auto object-cover gelombang"
      />
    </div>

    <!-- New Image Below Header with Positioning Using Top-[50vh] -->
    <div class="w-full absolute flex justify-center top-[50vh] merchandise">
      <img
          src="assets/merchandise.svg"
          alt="Header Image"
          class="new-header-image object-cover"
      />
    </div>

    <!-- Card Images -->
    <img
        src="assets/card_merchandise.svg"
        alt="Left Card Top"
        class="absolute w-[570px] h-auto object-cover left-[10vw] leftcardtop"
    />

    <img
        src="assets/card_merchandise.svg"
        alt="Right Card Top"
        class="absolute w-[570px] h-auto object-cover right-[10vw] rightcardtop"
    />

    <img
        src="assets/card_merchandise.svg"
        alt="Left Card Center"
        class="absolute w-[570px] h-auto object-cover left-[10vw] leftcardcenter"
    />

    <img
        src="assets/card_merchandise.svg"
        alt="Right Card Center"
        class="absolute w-[570px] h-auto object-cover right-[10vw] rightcardcenter"
    />

    <img
        src="assets/card_merchandise.svg"
        alt="Left Card Bottom"
        class="absolute w-[570px] h-auto object-cover left-[10vw] leftcardbottom"
    />

    <img
        src="assets/card_merchandise.svg"
        alt="Right Card Bottom"
        class="absolute w-[570px] h-auto object-cover right-[10vw] rightcardbottom"
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
  name: "Merchandise",
  mounted() {
    // Animasi untuk merchandise dari bawah ke atas
    gsap.from(".merchandise", {
      duration: 2, // Durasi animasi
      y: 100, // Memulai dari 100px di bawah posisinya
      opacity: 0, // Mulai dengan opacity 0 (tidak terlihat)
      ease: "power2.out", // Easing untuk animasi yang halus
    });

    // Animasi ombak kiri dari kiri
    gsap.from(".leftcardtop", {
      x: -50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".leftcardtop",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    // Animasi ombak kanan dari kanan
    gsap.from(".rightcardtop", {
      x: 50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".rightcardtop",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    // Animasi ombak kiri dari kiri
    gsap.from(".leftcardcenter", {
      x: -50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".leftcardcenter",
        start: "top 90%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    // Animasi ombak kanan dari kanan
    gsap.from(".rightcardcenter", {
      x: 50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".rightcardcenter",
        start: "top 90%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    // Animasi ombak kiri dari kiri
    gsap.from(".leftcardbottom", {
      x: -50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".leftcardbottom",
        start: "top 90%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    // Animasi ombak kanan dari kanan
    gsap.from(".rightcardbottom", {
      x: 50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".rightcardbottom",
        start: "top 90%",
        end: "bottom 40%",
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

.merchandise-section {
  overflow-x: hidden; /* Prevents horizontal scrolling */
}

@media (max-width: 1920px) {
  .merchandise-section {
    background-size: 100% 3400px;
    height: 3400px;
  }
  .gelomabang {
  }
  .merchandise {

  }
  .leftcardtop {
    width: 700px;
    height: auto;
    top: 1200px;
  }
  .rightcardtop {
    width: 700px;
    height: auto;
    top: 1200px;
  }
  .leftcardcenter {
    width: 700px;
    height: auto;
    top: 1800px;
  }
  .rightcardcenter {
    width: 700px;
    height: auto;
    top: 1800px;
  }
  .leftcardbottom {
    width: 700px;
    height: auto;
    top: 2400px;
  }
  .rightcardbottom {
    width: 700px;
    height: auto;
    top: 2400px;
  }
}

@media (max-width: 1600px) {
  .merchandise-section {
    background-size: 100% 3300px;
    height: 3300px;
  }

  .merchandise {

  }
  .gelomabang {
  }
  .leftcardtop {
    width: 600px;
    height: auto;
    top: 1200px;
  }
  .rightcardtop {
    width: 600px;
    height: auto;
    top: 1200px;
  }
  .leftcardcenter {
    width: 600px;
    height: auto;
    top: 1800px;
  }
  .rightcardcenter {
    width: 600px;
    height: auto;
    top: 1800px;
  }
  .leftcardbottom {
    width: 600px;
    height: auto;
    top: 2400px;
  }
  .rightcardbottom {
    width: 600px;
    height: auto;
    top: 2400px;
  }
  .bungatengah {
  }
}

@media (max-width: 1440px) {
  .merchandise-section {
    background-size: 100% 3200px;
    height: 3200px;
  }
  .merchandise {

  }
  .gelomabang {
  }
  .leftcardtop {
    width: 570px;
    height: auto;
    top: 1200px;
  }
  .rightcardtop {
    width: 570px;
    height: auto;
    top: 1200px;
  }
  .leftcardcenter {
    width: 570px;
    height: auto;
    top: 1800px;
  }
  .rightcardcenter {
    width: 570px;
    height: auto;
    top: 1800px;
  }
  .leftcardbottom {
    width: 570px;
    height: auto;
    top: 2400px;
  }
  .rightcardbottom {
    width: 570px;
    height: auto;
    top: 2400px;
  }
  .bungatengah {
  }
}

@media (max-width: 1024px) {
  .merchandise-section {
    background-size: 100% 2400px;
    height: 2400px;
  }

  .merchandise {
  }
  .leftcardtop {
    width: 400px;
    height: auto;
    top: 1000px;
  }
  .rightcardtop {
    width: 400px;
    height: auto;
    top: 1000px;
  }
  .leftcardcenter {
    width: 400px;
    height: auto;
    top: 1400px;
  }
  .rightcardcenter {
    width: 400px;
    height: auto;
    top: 1400px;
  }
  .leftcardbottom {
    width: 400px;
    height: auto;
    top: 1800px;
  }
  .rightcardbottom {
    width: 400px;
    height: auto;
    top: 1800px;
  }
  .bungatengah {
    bottom: 20vh;
  }
}

@media (max-width: 768px) {
  .merchandise-section {
    background-size: 100% 4000px;
    height: 4000px;
  }

  .merchandise {
  }
  .leftcardtop {
    width: 460px;
    height: auto;
    top: 1000px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightcardtop {
    width: 460px;
    height: auto;
    top: 1400px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .leftcardcenter {
    width: 460px;
    height: auto;
    top: 1800px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightcardcenter {
    width: 460px;
    height: auto;
    top: 2200px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .leftcardbottom {
    width: 460px;
    height: auto;
    top: 2600px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightcardbottom {
    width: 460px;
    height: auto;
    top: 3000px;
    left: 0;
    right: 0;
    margin: auto;
  }
}

@media (max-width: 425px) {
  .merchandise-section {
    background-size: 100% 3800px;
    height: 3800px;
  }

  .merchandise {
  }
  .gelomabang {
  }
  .leftcardtop {
    width: 350px;
    height: auto;
    top: 1000px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightcardtop {
    width: 350px;
    height: auto;
    top: 1400px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .leftcardcenter {
    width: 350px;
    height: auto;
    top: 1800px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightcardcenter {
    width: 350px;
    height: auto;
    top: 2200px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .leftcardbottom {
    width: 350px;
    height: auto;
    top: 2600px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightcardbottom {
    width: 350px;
    height: auto;
    top: 3000px;
    left: 0;
    right: 0;
    margin: auto;
  }
}

@media (max-width: 375px) {
  .merchandise-section {
    background-size: 100% 3900px;
    height: 3900px;
  }

  .merchandise {
  }
  .gelomabang {
  }
  .leftcardtop {
    width: 320px;
    height: auto;
    top: 1000px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightcardtop {
    width: 320px;
    height: auto;
    top: 1400px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .leftcardcenter {
    width: 320px;
    height: auto;
    top: 1800px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightcardcenter {
    width: 320px;
    height: auto;
    top: 2200px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .leftcardbottom {
    width: 320px;
    height: auto;
    top: 2600px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightcardbottom {
    width: 320px;
    height: auto;
    top: 3000px;
    left: 0;
    right: 0;
    margin: auto;
  }
}

@media (max-width: 320px) {
  .merchandise-section {
    background-size: 100% 3800px;
    height: 3800px;
  }

  .merchandise {
  }
  .gelomabang {
  }
  .leftcardtop {
    width: 260px;
    height: auto;
    top: 1000px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightcardtop {
    width: 260px;
    height: auto;
    top: 1400px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .leftcardcenter {
    width: 260px;
    height: auto;
    top: 1800px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightcardcenter {
    width: 260px;
    height: auto;
    top: 2200px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .leftcardbottom {
    width: 260px;
    height: auto;
    top: 2600px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .rightcardbottom {
    width: 260px;
    height: auto;
    top: 3000px;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
