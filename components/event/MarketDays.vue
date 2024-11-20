<template>
  <section
      class="marketdays-section relative bg-white h-auto md:h-[3236px] flex flex-col items-center justify-start md:px-0 overflow-hidden"
  >

    <!-- New Image Below Header -->
    <div class="w-full flex justify-center mt-[28vh] marketdayshead">
      <img
          src="assets/marketdayshead.svg"
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
        <span v-for="(word, index) in textWords" :key="index" class="word"
        >{{ word }}
        </span>
      </h2>
    </div>

    <!-- Row of Images Below the Text -->
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

<!--    &lt;!&ndash; Left Image Top &ndash;&gt;-->
<!--    <img-->
<!--        src="assets/left_image.svg"-->
<!--        alt="Left Image"-->
<!--        class="absolute w-[370px] h-[370px] object-cover left-[10vw] bottom-[900px] rounded-2xl border-8 leftimagetop"-->
<!--    />-->

<!--    &lt;!&ndash; Center Image Top &ndash;&gt;-->
<!--    <img-->
<!--        src="assets/center_image.svg"-->
<!--        alt="Center Image"-->
<!--        class="absolute w-[370px] h-[370px] object-cover justify-center bottom-[900px] rounded-2xl border-8 centerimagetop"-->
<!--    />-->

<!--    &lt;!&ndash; Right Image Top &ndash;&gt;-->
<!--    <img-->
<!--        src="assets/right_image.svg"-->
<!--        alt="Right Image"-->
<!--        class="absolute w-[370px] h-[370px] object-cover right-[10vw] bottom-[900px] rounded-2xl border-8 rightimagetop"-->
<!--    />-->

<!--    &lt;!&ndash; Left Image Bottom &ndash;&gt;-->
<!--    <img-->
<!--        src="assets/left_image.svg"-->
<!--        alt="Left Image"-->
<!--        class="absolute w-[370px] h-[370px] object-cover left-[10vw] bottom-[500px] rounded-2xl border-8 leftimagebottom"-->
<!--    />-->

<!--    &lt;!&ndash; Center Image Bottom &ndash;&gt;-->
<!--    <img-->
<!--        src="assets/center_image.svg"-->
<!--        alt="Center Image"-->
<!--        class="absolute w-[370px] h-[370px] object-cover justify-center bottom-[500px] rounded-2xl border-8 centerimagebottom"-->
<!--    />-->

<!--    &lt;!&ndash; Right Image Bottom &ndash;&gt;-->
<!--    <img-->
<!--        src="assets/right_image.svg"-->
<!--        alt="Right Image"-->
<!--        class="absolute w-[370px] h-[370px] object-cover right-[10vw] bottom-[500px] rounded-2xl border-8 rightimagebottom"-->
<!--    />-->

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
  name: "MarketDays",
  data() {
    return {
      textWords:
          `Market Days adalah sebuah acara yang dibuat untuk memberikan wadah bagi Usaha Mikro, Kecil, dan Menengah (UMKM) serta mahasiswa wirausaha untuk mempromosikan dan menjual produk mereka secara langsung kepada masyarakat. Acara ini bertujuan tidak hanya untuk mendukung pertumbuhan ekonomi lokal, tetapi juga untuk mendorong semangat wirausaha di kalangan generasi muda.`.split(
              " "
          ),
    };
  },
  mounted() {
    // Animasi untuk marketdayshead dari bawah ke atas
    gsap.from(".marketdayshead", {
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

    // Animate aboutus.svg with scale and from bottom for smooth entrance
    gsap.from(".centerimage", {
      y: 50, // Move slightly up from below
      scale: 1.1, // Start slightly scaled up
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".centerimage",
        start: "top 90%",
        end: "bottom 50%",
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

    // Animasi ombak kiri dari kiri image top
    gsap.from(".leftimagetop", {
      x: -50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".leftimagetop",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    // Animate aboutus.svg with scale and from bottom for smooth entrance
    gsap.from(".centerimagetop", {
      y: 50, // Move slightly up from below
      scale: 1.1, // Start slightly scaled up
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".centerimagetop",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    // Animasi ombak kanan dari kanan
    gsap.from(".rightimagetop", {
      x: 50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".rightimagetop",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    // Animasi ombak kiri dari kiri image top
    gsap.from(".leftimagebottom", {
      x: -50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".leftimagebottom",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    // Animate aboutus.svg with scale and from bottom for smooth entrance
    gsap.from(".centerimagebottom", {
      y: 50, // Move slightly up from below
      scale: 1.1, // Start slightly scaled up
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".centerimagebottom",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    // Animasi ombak kanan dari kanan
    gsap.from(".rightimagebottom", {
      x: 50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".rightimagebottom",
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

.marketdays-section {
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
  .marketdays-section {
    background-size: 100% 3300px;
    height: 3300px;
  }

  .marketdayshead {

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
  .leftimagetop {

  }
  .centerimagetop {

  }
  .rightimagetop {

  }
  .leftimagebottom {

  }
  .centerimagebottom {

  }
  .rightimagebottom {

  }
  .bungatengah {
  }
}

@media (max-width: 1600px) {
  .marketdays-section {
    background-size: 100% 3300px;
    height: 3300px;
  }

  .marketdayshead {

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
    top: 165vh;
  }
  .rightimage {
    width: 432px;
    height: 98px;
    top: 165vh;
  }
  .leftimagetop {

  }
  .centerimagetop {

  }
  .rightimagetop {

  }
  .leftimagebottom {

  }
  .centerimagebottom {

  }
  .rightimagebottom {

  }
  .bungatengah {
  }
}

@media (max-width: 1440px) {
  .marketdays-section {
    background-size: 100% 2900px;
    height: 2900px;
  }
  .marketdayshead {

  }
  .gelomabang {
  }
  .maintext {

  }
  .textmain {

  }
  .leftimage {

  }
  .centerimage {

  }
  .rightimage {

  }
  .bungatengah {
  }
}

@media (max-width: 1024px) {
  .marketdays-section {
    background-size: 100% 2600px;
    height: 2600px;
  }

  .marketdayshead {
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
  .leftimagetop {
    width: 220px;
    height: 220px;
    top: 190vh;
  }
  .centerimagetop {
    width: 220px;
    height: 220px;
    top: 190vh;
  }
  .rightimagetop {
    width: 220px;
    height: 220px;
    top: 190vh;
  }
  .leftimagebottom {
    width: 220px;
    height: 220px;
    top: 220vh;
  }
  .centerimagebottom {
    width: 220px;
    height: 220px;
    top: 220vh;
  }
  .rightimagebottom {
    width: 220px;
    height: 220px;
    top: 220vh;
  }
  .bungatengah {
    bottom: 20vh;
  }
}

@media (max-width: 768px) {
  .marketdays-section {
    background-size: 100% 2500px;
    height: 2500px;
  }

  .marketdayshead {
    width: 50vw;
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
  .leftimagetop {
    width: 180px;
    height: 180px;
    top: 190vh;
  }
  .centerimagetop {
    width: 180px;
    height: 180px;
    top: 190vh;
  }
  .rightimagetop {
    width: 180px;
    height: 180px;
    top: 190vh;
  }
  .leftimagebottom {
    width: 180px;
    height: 180px;
    top: 220vh;
  }
  .centerimagebottom {
    width: 180px;
    height: 180px;
    top: 220vh;
  }
  .rightimagebottom {
    width: 180px;
    height: 180px;
    top: 220vh;
  }
  .bungatengah {
    width: 90vw;
    height: auto;
    bottom: 10vh;
  }
}

@media (max-width: 425px) {
  .marketdays-section {
    background-size: 100% 3800px;
    height: 3800px;
  }

  .marketdayshead {
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
  .leftimagetop {
    width: 180px;
    height: 180px;
    top: 200vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .centerimagetop {
    width: 180px;
    height: 180px;
    top: 300vh;
  }
  .rightimagetop {
    width: 180px;
    height: 180px;
    top: 320vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .leftimagebottom {
    width: 180px;
    height: 180px;
    top: 330vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .centerimagebottom {
    width: 180px;
    height: 180px;
    top: 390vh;
  }
  .rightimagebottom {
    width: 180px;
    height: 180px;
    top: 430vh;
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
  .marketdays-section {
    background-size: 100% 4200px;
    height: 4200px;
  }

  .marketdayshead {
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
  .leftimagetop {
    width: 180px;
    height: 180px;
    top: 190vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .centerimagetop {
    width: 180px;
    height: 180px;
    top: 320vh;
  }
  .rightimagetop {
    width: 180px;
    height: 180px;
    top: 305vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .leftimagebottom {
    width: 180px;
    height: 180px;
    top: 310vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .centerimagebottom {
    width: 180px;
    height: 180px;
    top: 405vh;
  }
  .rightimagebottom {
    width: 180px;
    height: 180px;
    top: 425vh;
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
  .marketdays-section {
    background-size: 100% 4200px;
    height: 4200px;
  }

  .marketdayshead {
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
  .leftimagetop {
    width: 180px;
    height: 180px;
    top: 200vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .centerimagetop {
    width: 180px;
    height: 180px;
    top: 325vh;
  }
  .rightimagetop {
    width: 180px;
    height: 180px;
    top: 315vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .leftimagebottom {
    width: 180px;
    height: 180px;
    top: 325vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .centerimagebottom {
    width: 180px;
    height: 180px;
    top: 415vh;
  }
  .rightimagebottom {
    width: 180px;
    height: 180px;
    top: 450vh;
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
</style>
