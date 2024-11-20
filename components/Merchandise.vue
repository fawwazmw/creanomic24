<template>
  <section class="merchandise-section relative flex flex-col items-center justify-start md:px-0 overflow-hidden">
    <!-- Single Image Content -->
    <div class="image-container w-full flex flex-col items-center mt-[13vh]">
      <img
          src="assets/gelombang.svg"
          alt="Requested Image"
          class="w-full h-auto object-cover gelombang"
      />
    </div>

    <!-- Main Merchandise Image -->
    <div class="w-full absolute flex justify-center top-[50vh] merchandise">
      <img
          src="assets/merchandise.svg"
          alt="Header Image"
          class="new-header-image object-cover"
      />
    </div>

    <!-- Below Merchandise Images -->
    <div class="w-full flex flex-col items-center absolute top-[120vh]">
      <img
          src="assets/maintshirt.svg"
          alt="Large Image"
          class="w-[1170px] h-auto mx-auto maintshirt"
      />

      <div class="flex justify-center items-center w-full mt-8 gap-6">
        <img
            src="assets/tshirt_left.svg"
            alt="Left Image"
            class="w-[570px] h-auto tshirt-kiri"
        />
        <img
            src="assets/tshirt_right.svg"
            alt="Right Image"
            class="w-[570px] h-auto tshirt-kanan"
        />
      </div>

      <img
          src="assets/totebag.svg"
          alt="Second Large Image"
          class="w-[1170px] h-auto mx-auto mt-8 totebag"
      />

      <img
          src="assets/keychain.svg"
          alt="Third Large Image"
          class="w-[1170px] h-auto mx-auto mt-8 keychain"
      />

      <img
          src="assets/textbundling.svg"
          alt="Thin Image"
          class="w-[1170px] h-auto mx-auto mt-8 textbundling"
      />

      <div class="flex justify-center w-full gap-8 bundlinggroup">
        <img
            src="assets/bundling_left.svg"
            alt="Left Small Image"
            class="w-[370px] h-auto leftbundling"
        />
        <img
            src="assets/bundling_center.svg"
            alt="Center Small Image"
            class="w-[370px] h-auto centerbundling"
        />
        <img
            src="assets/bundling_right.svg"
            alt="Right Small Image"
            class="w-[370px] h-auto rightbundling"
        />
      </div>

      <img
          src="assets/bundling_main.svg"
          alt="Fourth Large Image"
          class="w-[1170px] h-auto mx-auto mt-8 mainbundling"
      />

      <div class="flex justify-center w-full mt-[50vh] gap-10 maincp">
        <a href="https://wa.me/6285602667927?text=Hello%20I%20am%20interested%20in%20your%20guidebook!" class="w-auto h-auto">
          <img
              src="assets/cp1.svg"
              alt="CP 1"
              class="object-cover w-full h-auto cp1"
          />
        </a>

        <a href="https://wa.me/6288224647288?text=Hello%20Saya%20tertarik%20dengan%20merch%20Creanomic%20ini!" class="w-auto h-auto">
          <img
              src="assets/cp2.svg"
              alt="CP 2"
              class="object-cover w-full h-auto cp2"
          />
        </a>

      </div>

      <img
          src="assets/footerimage.svg"
          alt="Footer Image"
          class="w-[1170px] h-auto mx-auto footerimage"
      />
    </div>
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
    // GSAP Animations
    gsap.from(".merchandise", {
      duration: 2,
      y: 100,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.utils.toArray(".image-group img").forEach((img) => {
      gsap.from(img, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
        },
      });
    });

    gsap.from(".maintshirt", {
      y: 100, // Slightly below the starting position
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".maintshirt",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    // Animasi ombak kanan dari kanan
    gsap.from(".tshirt-kanan", {
      x: 50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".tshirt-kanan",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    // Animasi ombak kiri dari kiri
    gsap.from(".tshirt-kiri", {
      x: -50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".tshirt-kiri",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    gsap.from(".totebag", {
      y: 100, // Slightly below the starting position
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".totebag",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.from(".keychain", {
      y: 100, // Slightly below the starting position
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".keychain",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.from(".textbundling", {
      y: 100, // Slightly below the starting position
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".textbundling",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.from(".bundlinggroup", {
      y: 100, // Slightly below the starting position
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bundlinggroup",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.from(".mainbundling", {
      y: 100, // Slightly below the starting position
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".mainbundling",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    // Animasi ombak kiri dari kiri
    gsap.from(".cp1", {
      x: -50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cp1",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    // Animasi ombak kanan dari kanan
    gsap.from(".cp2", {
      x: 50, // Start from a slight offset instead of fully outside the viewport
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cp2",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    gsap.from(".footerimage", {
      y: 100, // Slightly below the starting position
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footerimage",
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
  position: absolute;
  top: 34vh;
  left: 0;
  width: 100%;
  height: 2078px;
  background: linear-gradient(
      180deg,
      #201169 0%,
      #2c4ab7 39%,
      #3572ef 65%,
      #ffffff 100%
  );
  z-index: -1;
}

.merchandise-section {
  overflow-x: hidden; /* Prevents horizontal scrolling */
}

.merchandise-section {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-group img {
  display: block;
  margin-bottom: 2rem;
}

@media (max-width: 1920px) {
  .merchandise-section {
    background-size: 100% 5800px;
    height: 5800px;
  }
  .gradient-background {
    top: 32vh;
    height: 5400px;
  }
  .gelomabang {
  }
  .cp1 {
  }
  .cp2 {
  }
  .footerimage {
    width: 100vw;
    height: auto;
  }
  .merchandise {

  }
}

@media (max-width: 1600px) {
  .merchandise-section {
    background-size: 100% 5800px;
    height: 5800px;
  }
  .gradient-background {
    top: 32vh;
    height: 5400px;
  }

  .merchandise {

  }
  .gelomabang {
  }
}

@media (max-width: 1440px) {
  .merchandise-section {
    background-size: 100% 5800px;
    height: 5800px;
  }
  .gradient-background {
    top: 27vh;
    height: 5500px;
  }
  .merchandise {

  }
  .maintshirt {
  }
  .tshirt-kiri {
  }
  .tshirt-kanan {
  }
  .totebag {
  }
  .keychain {
  }
  textbundling {
  }
  .bundlinggroup {
  }
  .mainbundling {
  }
  .leftbundling {
  }
  .centerbundling {
  }
  .rightbundling {
  }
  .cp1 {
  }
  .cp2 {
  }
  .footerimage {
  }
  .gelomabang {
  }
}

@media (max-width: 1024px) {
  .merchandise-section {
    background-size: 100% 5200px;
    height: 5200px;
  }
  .gradient-background {
    top: 24vh;
    height: 5100px;
  }

  .maintshirt {
    width: 80vw;
    height: auto;
  }
  .tshirt-kiri {
    width: 38vw;
    height: auto;
  }
  .tshirt-kanan {
    width: 38vw;
    height: auto;
  }
  .totebag {
    width: 80vw;
    height: auto;
  }
  .keychain {
    width: 80vw;
    height: auto;
  }
  textbundling {
  }
  .bundlinggroup {
  }
  .mainbundling {
    width: 80vw;
    height: auto;
  }
  .leftbundling {
    width: 25vw;
    height: auto;
  }
  .centerbundling {
    width: 25vw;
    height: auto;
  }
  .rightbundling {
    width: 25vw;
    height: auto;
  }
  .cp1 {
  }
  .cp2 {
  }
  .footerimage {
  }
}

@media (max-width: 768px) {
  .merchandise-section {
    background-size: 100% 5200px;
    height: 5200px;
  }
  .gradient-background {
    top: 24vh;
    height: 5100px;
  }

  .maintshirt {
    width: 80vw;
    height: auto;
  }
  .tshirt-kiri {
    width: 38vw;
    height: auto;
  }
  .tshirt-kanan {
    width: 38vw;
    height: auto;
  }
  .totebag {
    width: 80vw;
    height: auto;
  }
  .keychain {
    width: 80vw;
    height: auto;
  }
  textbundling {
  }
  .bundlinggroup {
  }
  .mainbundling {
    width: 80vw;
    height: auto;
  }
  .leftbundling {
    width: 24vw;
    height: auto;
  }
  .centerbundling {
    width: 24vw;
    height: auto;
  }
  .rightbundling {
    width: 24vw;
    height: auto;
  }
  .cp1 {
    width: 30vw;
    height: auto;
  }
  .cp2 {
    width: 30vw;
    height: auto;
  }
  .footerimage {
  }
}

@media (max-width: 425px) {
  .merchandise-section {
    background-size: 100% 3800px;
    height: 3800px;
  }
  .gradient-background {
    top: 19vh;
    height: 3700px;
  }

  .maintshirt {
    width: 80vw;
    height: auto;
  }
  .tshirt-kiri {
    width: 37vw;
    height: auto;
  }
  .tshirt-kanan {
    width: 37vw;
    height: auto;
  }
  .totebag {
    width: 80vw;
    height: auto;
  }
  .keychain {
    width: 80vw;
    height: auto;
  }
  textbundling {
  }
  .bundlinggroup {
  }
  .mainbundling {
    width: 80vw;
    height: auto;
  }
  .leftbundling {
    width: 22vw;
    height: auto;
  }
  .centerbundling {
    width: 22vw;
    height: auto;
  }
  .rightbundling {
    width: 22vw;
    height: auto;
  }
  .cp1 {
    width: 30vw;
    height: auto;
  }
  .cp2 {
    width: 30vw;
    height: auto;
  }
  .maincp {
    margin-top: 30vh;
  }
  .footerimage {
  }
}

@media (max-width: 375px) {
  .merchandise-section {
    background-size: 100% 3800px;
    height: 3800px;
  }
  .gradient-background {
    top: 18vh;
    height: 3700px;
  }

  .maintshirt {
    width: 80vw;
    height: auto;
  }
  .tshirt-kiri {
    width: 37vw;
    height: auto;
  }
  .tshirt-kanan {
    width: 37vw;
    height: auto;
  }
  .totebag {
    width: 80vw;
    height: auto;
  }
  .keychain {
    width: 80vw;
    height: auto;
  }
  textbundling {
  }
  .bundlinggroup {
  }
  .mainbundling {
    width: 80vw;
    height: auto;
  }
  .leftbundling {
    width: 21vw;
    height: auto;
  }
  .centerbundling {
    width: 21vw;
    height: auto;
  }
  .rightbundling {
    width: 21vw;
    height: auto;
  }
  .cp1 {
    width: 30vw;
    height: auto;
  }
  .cp2 {
    width: 30vw;
    height: auto;
  }
  .maincp {
    margin-top: 30vh;
  }
  .footerimage {
  }
}

@media (max-width: 320px) {
  .merchandise-section {
    background-size: 100% 3800px;
    height: 3800px;
  }
  .gradient-background {
    top: 17vh;
    height: 3700px;
  }

  .maintshirt {
    width: 80vw;
    height: auto;
  }
  .tshirt-kiri {
    width: 37vw;
    height: auto;
  }
  .tshirt-kanan {
    width: 37vw;
    height: auto;
  }
  .totebag {
    width: 80vw;
    height: auto;
  }
  .keychain {
    width: 80vw;
    height: auto;
  }
  textbundling {
  }
  .bundlinggroup {
  }
  .mainbundling {
    width: 80vw;
    height: auto;
  }
  .leftbundling {
    width: 20vw;
    height: auto;
  }
  .centerbundling {
    width: 20vw;
    height: auto;
  }
  .rightbundling {
    width: 20vw;
    height: auto;
  }
  .cp1 {
    width: 30vw;
    height: auto;
  }
  .cp2 {
    width: 30vw;
    height: auto;
  }
  .maincp {
    margin-top: 30vh;
  }
  .footerimage {
  }
}
</style>
