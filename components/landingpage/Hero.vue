<template>
  <section
    class="hero-section relative h-auto md:h-[2200px] flex flex-col items-center justify-start px-4 md:px-0"
  >
    <img
      src="assets/creatext.svg"
      alt="Text Creanomic"
      class="absolute flex items-center justify-center top-[20vh] z-10 max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] creatext"
    />

    <img
      src="assets/wavebelakang1.svg"
      alt="Wave Paling Belakang"
      class="absolute left-0 top-[20vh] w-full h-auto z-0 wavebelakang1"
    />

    <img
      src="assets/karangkanan.svg"
      alt="Karang Sebelah Kanan"
      class="absolute right-0 top-[25vh] z-10 max-w-[40vw] sm:max-w-[30vw] md:max-w-[25vw] lg:max-w-[20vw] karangkanan"
    />

    <img
      src="assets/karangkiri.svg"
      alt="Karang Sebelah Kiri"
      class="absolute left-0 top-[40vh] z-10 max-w-[40vw] sm:max-w-[30vw] md:max-w-[25vw] lg:max-w-[20vw] karangkiri"
    />

    <img
      src="assets/wavebelakang2.svg"
      alt="Wave Kedua dari Belakang"
      class="absolute top-[50vh] w-full h-auto z-20 wavebelakang2"
    />

    <img
      src="assets/karangkanandepan.svg"
      alt="Karang Kanan Depan"
      class="absolute right-[10vw] top-[55vh] z-30 max-w-[40vw] sm:max-w-[30vw] md:max-w-[25vw] lg:max-w-[20vw] karangkanandepan"
    />

    <img
      src="assets/karangkiridepan.svg"
      alt="Karang Kiri Depan"
      class="absolute left-[10vw] top-[70vh] z-30 max-w-[40vw] sm:max-w-[30vw] md:max-w-[25vw] lg:max-w-[20vw] karangkiridepan"
    />

    <img
      src="assets/wavebelakang3.svg"
      alt="Wave Ketiga dari Belakang"
      class="absolute top-[55vh] w-full h-auto z-40 wavebelakang3"
    />
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Hero",
  mounted() {
    const tl = gsap.timeline();

    // Animasi Creatext (zoom out)
    tl.from(".creatext", {
      duration: 1.5,
      scale: 0,
      ease: "power2.out",
    })
      // Wave belakang 1 dari bawah ke atas
      .from(".wavebelakang1", {
        duration: 1,
        y: "100vh",
        ease: "power2.out",
      })
      // Karang kanan dari bawah ke atas
      .from(".karangkanan", {
        duration: 1,
        y: "100vh",
        ease: "power2.out",
      })
      // Karang kiri dari bawah ke atas
      .from(".karangkiri", {
        duration: 1,
        y: "100vh",
        ease: "power2.out",
      })
      // Wave belakang 2 dari bawah ke atas
      .from(".wavebelakang2", {
        duration: 1,
        y: "100vh",
        ease: "power2.out",
      })
      // Karang kanan depan dari bawah ke atas
      .from(".karangkanandepan", {
        duration: 1,
        y: "100vh",
        ease: "power2.out",
      })
      // Karang kiri depan dari bawah ke atas
      .from(".karangkiridepan", {
        duration: 1,
        y: "100vh",
        ease: "power2.out",
      })
      // Wave belakang 3 dari bawah ke atas
      .from(".wavebelakang3", {
        duration: 1,
        y: "100vh",
        ease: "power2.out",
      })
      // Setelah GSAP animasi selesai, tambahkan kelas hoverable
      .call(() => {
        document
          .querySelectorAll(
            ".karangkanan, .karangkiri, .karangkanandepan, .karangkiridepan"
          )
          .forEach((el) => {
            el.classList.add("hoverable");
          });
      });
  },
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #3572ef 28%,
    #2939a0 63%,
    #201169 100%
  );
  background-size: 100% 1439px; /* Gradient covers 1439px height */
  background-repeat: no-repeat; /* Ensure the gradient doesn't repeat */
}

.hoverable {
  transition: transform 0.5s ease-in-out;
}

.hoverable:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}

@media (max-width: 1920px) {
  .hero-section {
    background-size: 100% 1300px;
    height: 2700px;
  }

  .wavebelakang1 {
    top: 8vh;
  }
  .wavebelakang2 {
    top: 42vh;
  }
  .wavebelakang3 {
    top: 46vh;
  }
  .karangkiri {
    top: 36vh;
    left: 0vw;
  }
  .karangkanan {
    top: 10vh;
    width: 15vw;
  }
  .karangkiridepan {
    top: 62vh;
    left: 12vw;
  }
  .karangkanandepan {
    top: 46vh;
    right: 6vw;
  }
}

@media (max-width: 1600px) {
  .hero-section {
    background-size: 100% 1100px;
    height: 2400px;
  }

  .wavebelakang1 {
    top: 12vh;
  }
  .wavebelakang2 {
    top: 48vh;
  }
  .wavebelakang3 {
    top: 50vh;
  }
  .karangkiri {
    top: 42vh;
    left: 0vw;
  }
  .karangkanan {
    top: 20vh;
  }
  .karangkiridepan {
    top: 66vh;
    left: 12vw;
  }
  .karangkanandepan {
    top: 52vh;
    right: 8vw;
  }
}

@media (max-width: 1440px) {
  .hero-section {
    background-size: 100% 1100px;
    height: 2200px;
  }
  .karangkanandepan {
    right: 8vw;
    top: 50vh;
  }
  .karangkiri {
    left: 0vw;
    top: 40vh;
  }
}

@media (max-width: 1024px) {
  .hero-section {
    background-size: 100% 900px;
    height: 1600px;
  }
  .wavebelakang1 {
    top: 25vh;
  }
  .wavebelakang2 {
    top: 48vh;
  }
  .wavebelakang3 {
    top: 50vh;
  }
  .karangkiri {
    top: 42vh;
    left: 0vw;
  }
  .karangkiridepan {
    top: 62vh;
    left: 12vw;
  }
  .karangkanandepan {
    top: 48vh;
    right: 6vw;
  }
}

@media (max-width: 768px) {
  .hero-section {
    background-size: 100% 800px;
    height: 1300px;
  }
  .wavebelakang1 {
    top: 28vh;
  }
  .wavebelakang3 {
    top: 48vh;
  }
  .wavebelakang2 {
    top: 45vh;
  }
  .karangkanan {
    top: 30vh;
  }
  .karangkiri {
    top: 40vh;
    left: 0vw;
  }
  .karangkiridepan {
    top: 56vh;
    left: 12vw;
  }
  .karangkanandepan {
    top: 48vh;
    right: 14vw;
  }
}

@media (max-width: 425px) {
  .hero-section {
    background-size: 100% 600px;
    height: 850px;
  }
  .wavebelakang1 {
    top: 28vh;
  }
  .wavebelakang2 {
    top: 38vh;
  }
  .wavebelakang3 {
    top: 40vh;
  }
  .karangkiri {
    top: 36vh;
    left: 0vw;
    width: 25vw;
  }
  .karangkanan {
    width: 28vw;
    top: 30vh;
  }
  .karangkiridepan {
    top: 44vh;
    left: 12vw;
    width: 25vw;
  }
  .karangkanandepan {
    top: 40vh;
    right: 18vw;
    width: 25vw;
  }
}

@media (max-width: 375px) {
  .hero-section {
    background-size: 100% 500px;
    height: 750px;
  }
}

@media (max-width: 320px) {
  .hero-section {
    background-size: 100% 500px;
    height: 700px;
  }
}
</style>
