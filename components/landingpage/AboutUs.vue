<template>
  <section
    class="about-section relative bg-white h-auto md:h-[1009px] flex flex-col items-center justify-start px-[4vw] md:px-0 overflow-hidden"
  >
    <!-- Centered Text -->
    <div
      class="absolute w-full md:w-[65vw] h-auto md:h-[24vh] top-[22vh] flex items-center justify-center text-center font-poppins textabout"
    >
      <p
        class="text-[3vw] sm:text-[2.5vw] md:text-[1.5vw] font-medium leading-relaxed md:leading-normal paragraph"
      >
        <span v-for="(word, index) in textWords" :key="index" class="word"
          >{{ word }}
        </span>
      </p>
    </div>

    <!-- Image placed at the top -->
    <img
      src="assets/aboutus.svg"
      alt="Text About Us"
      class="object-contain mx-auto mt-[5vh] w-[90vw] md:w-auto aboutus"
    />

    <!-- Responsive Images (Right and Left) -->
    <img
      src="assets/ombakbelakangkanan.png"
      alt="Gambar Ombak Belakang Kanan"
      class="absolute right-0 top-[40vh] object-contain w-[25vw] md:w-auto ombakbelakangkanan"
    />

    <img
      src="assets/ombakbelakangkiri.png"
      alt="Gambar Ombak Belakang Kiri"
      class="absolute left-0 top-[40vh] object-contain w-[25vw] md:w-auto ombakbelakangkiri"
    />

    <img
      src="assets/ombakdepankanan.png"
      alt="Gambar Ombak Depan Kanan"
      class="absolute right-0 top-[55vh] object-contain z-10 w-[25vw] md:w-auto ombakdepankanan"
    />

    <img
      src="assets/ombakdepankiri.png"
      alt="Gambar Ombak Depan Kiri"
      class="absolute left-0 top-[55vh] object-contain z-10 w-[25vw] md:w-auto ombakdepankiri"
    />
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "AboutUs",
  data() {
    return {
      textWords:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus numquam quas reiciendis maxime aspernatur consectetur sit harum iste, tempora error minus corporis at? Quod autem, cum aut, aspernatur cumque officia sint, nisi quasi saepe placeat ratione neque odio delectus nihil ut magnam! Blanditiis illo cupiditate deserunt accusamus facere iste, iure voluptate dolorum dolore enim aut nesciunt, nam quaerat necessitatibus laudantium nisi consequuntur fuga laboriosam dignissimos, nobis sapiente expedita?`.split(
          " "
        ),
    };
  },
  mounted() {
    // Animate aboutus.svg with scale and from bottom for smooth entrance
    gsap.from(".aboutus", {
      y: 50, // Move slightly up from below
      scale: 1.1, // Start slightly scaled up
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".aboutus",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    // Animasi perubahan warna per kata pada text
    gsap.fromTo(
      ".word",
      { color: "#8AB6D6" }, // Warna awal: biru muda
      {
        color: "#1D3557", // Warna akhir: biru tua yang lebih gelap
        ease: "none",
        scrollTrigger: {
          trigger: ".paragraph",
          start: "top 90%",
          end: "center center",
          scrub: true,
        },
        stagger: {
          each: 0.1,
        },
      }
    );

    // Animasi ombak kanan dari kanan
    gsap.from(".ombakbelakangkanan, .ombakdepankanan", {
      x: 50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".ombakbelakangkanan",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    // Animasi ombak kiri dari kiri
    gsap.from(".ombakbelakangkiri, .ombakdepankiri", {
      x: -50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".ombakbelakangkiri",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });
  },
};
</script>

<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}

.word {
  display: inline-block;
  margin-right: 0.3em; /* Ensures proper spacing between words */
}

.about-section {
  overflow-x: hidden; /* Prevents overflow to the right */
}

@media (max-width: 1920px) {
  .aboutus {
    margin-top: 3vh;
  }
  .ombakbelakangkanan {
    top: 40vh;
  }
  .ombakbelakangkiri {
  }
  .ombakdepankanan {
    top: 50vh;
  }
  .ombakdepankiri {
    top: 50vh;
  }
}

@media (max-width: 1600px) {
  .aboutus {
    margin-top: 3vh;
  }
  .textabout {
    top: 28vh;
  }
  .ombakbelakangkanan {
    top: 50vh;
  }
  .ombakbelakangkiri {
    top: 50vh;
  }
  .ombakdepankanan {
    top: 64vh;
  }
  .ombakdepankiri {
    top: 64vh;
  }
}

@media (max-width: 1440px) {
  .aboutus {
    margin-top: 2vh;
  }
}

@media (max-width: 1024px) {
  .about-section {
    height: 800px;
  }
  .aboutus {
    width: 45vw;
    margin-top: 1vh;
  }
  .textabout {
    top: 16vh;
    width: 70vw;
  }
  .ombakbelakangkanan {
    top: 36vh;
    width: 60vw;
  }
  .ombakbelakangkiri {
    top: 36vh;
    width: 60vw;
  }
  .ombakdepankanan {
    top: 46vh;
    width: 60vw;
  }
  .ombakdepankiri {
    top: 46vh;
    width: 60vw;
  }
}

@media (max-width: 768px) {
  .about-section {
    height: 600px;
  }
  .aboutus {
    width: 45vw;
  }
  .textabout {
    top: 10vh;
    width: 70vw;
  }
  .ombakbelakangkanan {
    top: 28vh;
    width: 60vw;
  }
  .ombakbelakangkiri {
    top: 28vh;
    width: 60vw;
  }
  .ombakdepankanan {
    top: 34vh;
    width: 60vw;
  }
  .ombakdepankiri {
    top: 34vh;
    width: 60vw;
  }
}

@media (max-width: 425px) {
  .about-section {
    height: 520px;
  }
  .aboutus {
    width: 50vw;
  }
  .textabout {
    top: 12vh;
    width: 75vw;
  }
  .ombakbelakangkanan {
    top: 40vh;
    width: 60vw;
  }
  .ombakbelakangkiri {
    top: 40vh;
    width: 60vw;
  }
  .ombakdepankanan {
    top: 44vh;
    width: 60vw;
  }
  .ombakdepankiri {
    top: 44vh;
    width: 60vw;
  }
}

@media (max-width: 375px) {
}

@media (max-width: 320px) {
  .about-section {
    height: 420px;
  }
  .aboutus {
    width: 50vw;
  }
  .textabout {
    top: 12vh;
    width: 75vw;
  }
  .ombakbelakangkanan {
    top: 32vh;
    width: 60vw;
  }
  .ombakbelakangkiri {
    top: 32vh;
    width: 60vw;
  }
  .ombakdepankanan {
    top: 36vh;
    width: 60vw;
  }
  .ombakdepankiri {
    top: 36vh;
    width: 60vw;
  }
}
</style>
