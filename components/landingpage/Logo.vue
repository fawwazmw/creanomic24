<template>
  <section
    class="logo-section relative bg-white h-auto md:h-[1080px] flex flex-col items-center justify-start px-4 md:px-0 overflow-hidden"
  >
    <!-- Background and Foreground Images -->
    <img
      src="assets/guritakananbelakang.svg"
      alt="Gurita Kanan Belakang"
      class="absolute top-[74px] right-[15px] object-contain z-0 max-w-[30%] md:max-w-none guritakananbelakang"
    />
    <img
      src="assets/guritakanandepan.svg"
      alt="Gurita Kanan Depan"
      class="absolute top-[130px] right-[173px] object-contain z-10 max-w-[30%] md:max-w-none guritakanandepan"
    />
    <img
      src="assets/logo.svg"
      alt="Logo Utama"
      class="object-contain mt-[48px] relative z-20 max-w-[90%] md:max-w-none logogurita"
    />
    <img
      src="assets/guritakiribelakang.svg"
      alt="Gurita Kiri Belakang"
      class="absolute top-[78px] left-[163px] object-contain z-0 max-w-[30%] md:max-w-none guritakiribelakang"
    />
    <img
      src="assets/guritakiridepan.svg"
      alt="Gurita Kiri Depan"
      class="absolute top-[93px] left-[41px] object-contain z-10 max-w-[30%] md:max-w-none guritakiridepan"
    />
    <img
      src="assets/logokanan.svg"
      alt="Logo Kanan"
      class="absolute bottom-[201px] right-[238px] object-contain z-10 max-w-[30%] md:max-w-none logokanan"
    />
    <div
      class="absolute bottom-[32px] right-[10px] md:right-[192px] w-[90%] md:w-[298px] h-auto md:h-[151px] flex items-center justify-center maintextkanan"
    >
      <p
        class="text-center text-sm sm:text-lg font-poppins leading-relaxed md:leading-normal textkanan"
      >
        2 Tentakel di bawah menggambarkan kolaborasi antara mahasiswa vokasi
        dengan dosen vokasi
      </p>
    </div>
    <img
      src="assets/kanantengah.svg"
      alt="Logo Kanan Tengah"
      class="absolute bottom-[177px] right-[50px] md:right-[501px] object-contain z-10 max-w-[30%] md:max-w-none logokanantengah"
    />
    <div
      class="absolute bottom-[57px] right-[50px] md:right-[502px] w-[90%] md:w-[197px] h-auto md:h-[104px] flex items-center justify-center maintextkanantengah"
    >
      <p
        class="text-center text-sm sm:text-lg font-poppins leading-relaxed md:leading-normal textkanantengah"
      >
        5 Tentakel keatas menggambarkan 5 prodi dari vokasi
      </p>
    </div>
    <img
      src="assets/kiritengah.svg"
      alt="Foreground Background Decoration"
      class="absolute bottom-[203px] left-[50px] md:left-[515px] object-contain z-10 max-w-[30%] md:max-w-none logokiritengah"
    />
    <div
      class="absolute bottom-[57px] left-[50px] md:left-[493px] w-[90%] md:w-[215px] h-auto md:h-[126px] flex items-center justify-center maintextkiritengah"
    >
      <p
        class="text-center text-sm sm:text-lg font-poppins leading-relaxed md:leading-normal textkiritengah"
      >
        Kepala gurita menggambarkan kecerdasan, inovasi serta kreativitas
      </p>
    </div>
    <img
      src="assets/logokiri.svg"
      alt="Logo Kiri"
      class="absolute bottom-[175px] left-[50px] md:left-[274px] object-contain z-10 max-w-[30%] md:max-w-none logokiri"
    />
    <div
      class="absolute bottom-[57px] left-[50px] md:left-[247px] w-[90%] md:w-[215px] h-auto md:h-[104px] flex items-center justify-center maintextkiri"
    >
      <p
        class="text-center text-sm sm:text-lg font-poppins leading-relaxed md:leading-normal textkiri"
      >
        Tameng berbentuk V melambangkan fakultas Vokasi
      </p>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Logo",
  mounted() {
    // Hide all elements initially by setting opacity to 0
    gsap.set(
      [
        ".guritakananbelakang",
        ".guritakiribelakang",
        ".guritakanandepan",
        ".guritakiridepan",
        ".logogurita",
        ".logokanan",
        ".maintextkanan",
        ".logokiri",
        ".maintextkiri",
        ".logokanantengah",
        ".maintextkanantengah",
        ".logokiritengah",
        ".maintextkiritengah",
      ],
      { opacity: 0 }
    );

    // Function to create animations with common settings
    const createAnimation = (
      element,
      fromProps,
      toProps,
      trigger = element
    ) => {
      gsap.fromTo(element, fromProps, {
        ...toProps,
        ease: "power3.out",
        scrollTrigger: {
          trigger: trigger,
          start: "top 85%",
          end: "top 20%",
          scrub: true,
        },
      });
    };

    // Adjusted animations to keep elements within the viewport
    createAnimation(
      ".guritakananbelakang",
      { x: "30%", opacity: 0 },
      { x: "0%", opacity: 1 }
    );
    createAnimation(
      ".guritakiribelakang",
      { x: "-30%", opacity: 0 },
      { x: "0%", opacity: 1 }
    );
    createAnimation(
      ".guritakanandepan",
      { x: "30%", opacity: 0 },
      { x: "0%", opacity: 1 }
    );

    // Animation for logogurita
    createAnimation(
      ".logogurita",
      { y: "30%", opacity: 0 },
      { y: "0%", opacity: 1 },
      ".guritakanandepan"
    );

    createAnimation(
      ".guritakiridepan",
      { x: "-30%", opacity: 0 },
      { x: "0%", opacity: 1 }
    );
    createAnimation(
      [".logokanan", ".maintextkanan"],
      { x: "30%", opacity: 0 },
      { x: "0%", opacity: 1 }
    );
    createAnimation(
      [".logokiri", ".maintextkiri"],
      { x: "-30%", opacity: 0 },
      { x: "0%", opacity: 1 }
    );
    createAnimation(
      [".logokanantengah", ".maintextkanantengah"],
      { x: "30%", opacity: 0 },
      { x: "0%", opacity: 1 }
    );
    createAnimation(
      [".logokiritengah", ".maintextkiritengah"],
      { x: "-30%", opacity: 0 },
      { x: "0%", opacity: 1 }
    );
  },
};
</script>

<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}

.logo-section {
  overflow-x: hidden;
}

@media (max-width: 1920px) {
  .logo-section {
    background-size: 100% 1100px;
    height: 1200px;
  }

  .guritakananbelakang {
  }
  .guritakiridepan {
  }
  .logogurita {
  }
  .guritakiribelakang {
  }
  .guritakiridepan {
  }
  .logokanan {
    right: 15vw;
    width: 14vw;
  }
  .maintextkanan {
    right: 14vw;
  }
  .textkanan {
  }
  .logokanantengah {
    right: 33vw;
    width: 14vw;
  }
  .maintextkanantengah {
    right: 35vw;
  }
  .textkanantengah {
  }
  .logokiritengah {
    left: 35vw;
    width: 12vw;
  }
  .maintextkiritengah {
    left: 35vw;
  }
  .textkiritengah {
  }
  .logokiri {
    left: 15vw;
    width: 12vw;
  }
  .maintextkiri {
    left: 15vw;
  }
  .textkiri {
  }
}

@media (max-width: 1600px) {
  .logo-section {
    background-size: 100% 1100px;
    height: 1100px;
  }

  .guritakananbelakang {
  }
  .guritakiridepan {
  }
  .logogurita {
  }
  .guritakiribelakang {
  }
  .guritakiridepan {
  }
  .logokanan {
    right: 15vw;
    width: 14vw;
  }
  .maintextkanan {
  }
  .textkanan {
  }
  .logokanantengah {
    width: 14vw;
    right: 33vw;
  }
  .maintextkanantengah {
    right: 34vw;
  }
  .textkanantengah {
  }
  .logokiritengah {
    left: 35vw;
  }
  .maintextkiritengah {
    left: 34vw;
  }
  .textkiritengah {
  }
  .logokiri {
    left: 15vw;
  }
  .maintextkiri {
    left: 14vw;
  }
  .textkiri {
  }
}

@media (max-width: 1440px) {
  .logo-section {
    background-size: 100% 1100px;
    height: 1100px;
  }
  .guritakananbelakang {
  }
  .guritakiridepan {
  }
  .logogurita {
  }
  .guritakiribelakang {
  }
  .guritakiridepan {
  }
  .logokanan {
    width: 14vw;
  }
  .maintextkanan {
    right: 11vw;
  }
  .textkanan {
  }
  .logokanantengah {
    width: 14vw;
    right: 34vw;
  }
  .maintextkanantengah {
    right: 34vw;
  }
  .textkanantengah {
  }
  .logokiritengah {
  }
  .maintextkiritengah {
    left: 34vw;
  }
  .textkiritengah {
  }
  .logokiri {
  }
  .maintextkiri {
  }
  .textkiri {
  }
}

@media (max-width: 1024px) {
  .logo-section {
    background-size: 100% 900px;
    height: 1000px;
  }

  .guritakananbelakang {
    width: 38vw;
    right: 0vw;
    top: 14vh;
  }
  .guritakanandepan {
    width: 30vw;
    right: 12vw;
    top: 24vh;
  }
  .logogurita {
    width: 50vw;
    margin-top: 24vh;
  }
  .guritakiribelakang {
    width: 36vw;
    left: 8vw;
    top: 16vh;
  }
  .guritakiridepan {
    width: 31vw;
    left: 0vw;
    top: 20vh;
  }
  .logokanan {
    right: 12vw;
    width: 14vw;
  }
  .maintextkanan {
    right: 9vw;
    width: 20vw;
    top: 94vh;
  }
  .textkanan {
    font-size: small;
  }
  .logokanantengah {
    right: 31vw;
    width: 14vw;
  }
  .maintextkanantengah {
    right: 32vw;
    width: 12vw;
    top: 96vh;
  }
  .textkanantengah {
    font-size: small;
  }
  .logokiritengah {
    left: 35vw;
    width: 14vw;
    top: 78vh;
  }
  .maintextkiritengah {
    left: 35vw;
    width: 14vw;
  }
  .textkiritengah {
    font-size: small;
  }
  .logokiri {
    left: 15vw;
    width: 14vw;
    top: 78vh;
  }
  .maintextkiri {
    left: 15vw;
    width: 14vw;
    top: 97vh;
  }
  .textkiri {
    font-size: small;
  }
}

@media (max-width: 768px) {
  .logo-section {
    background-size: 100% 800px;
    height: 800px;
  }

  .guritakananbelakang {
    width: 38vw;
    right: 0vw;
    top: 12vh;
  }
  .guritakanandepan {
    width: 32vw;
    right: 10vw;
    top: 19vh;
  }
  .logogurita {
    width: 50vw;
    margin-top: 20vh;
  }
  .guritakiribelakang {
    width: 34vw;
    left: 8vw;
    top: 16vh;
  }
  .guritakiridepan {
    width: 30vw;
    left: 0vw;
    top: 18vh;
  }
  .logokanan {
    right: 12vw;
    width: 14vw;
  }
  .maintextkanan {
    right: 8vw;
    width: 22vw;
    top: 68vh;
  }
  .textkanan {
    font-size: x-small;
  }
  .logokanantengah {
    right: 31vw;
    width: 14vw;
  }
  .maintextkanantengah {
    right: 32vw;
    width: 12vw;
    top: 71vh;
  }
  .textkanantengah {
    font-size: x-small;
  }
  .logokiritengah {
    left: 32vw;
    width: 14vw;
    top: 59vh;
  }
  .maintextkiritengah {
    left: 32vw;
    width: 14vw;
    top: 70vh;
  }
  .textkiritengah {
    font-size: x-small;
  }
  .logokiri {
    left: 12vw;
    width: 14vw;
    top: 59vh;
  }
  .maintextkiri {
    left: 12vw;
    width: 14vw;
    top: 72vh;
  }
  .textkiri {
    font-size: x-small;
  }
}

@media (max-width: 425px) {
  .logo-section {
    background-size: 100% 600px;
    height: 1400px;
  }

  .guritakananbelakang {
    width: 38vw;
    right: 0vw;
    top: 2vh;
  }
  .guritakanandepan {
    width: 28vw;
    right: 8vw;
    top: 4vh;
  }
  .logogurita {
    width: 50vw;
    margin-top: 2vh;
  }
  .guritakiribelakang {
    width: 34vw;
    left: 8vw;
    top: 4vh;
  }
  .guritakiridepan {
    width: 30vw;
    left: 0vw;
    top: 2vh;
  }
  .logokanan {
    right: 35vw;
    width: 30vw;
    top: 28vh;
  }
  .maintextkanan {
    right: 25vw;
    width: 52vw;
    top: -66vh;
  }
  .textkanan {
    font-size: small;
  }
  .logokanantengah {
    right: 35vw;
    width: 30vw;
    top: 60vh;
  }
  .maintextkanantengah {
    right: 35vw;
    width: 30vw;
    top: 4vh;
  }
  .textkanantengah {
    font-size: small;
  }
  .logokiritengah {
    left: 35vw;
    width: 30vw;
    top: 94vh;
  }
  .maintextkiritengah {
    left: 33vw;
    width: 34vw;
    top: 74vh;
  }
  .textkiritengah {
    font-size: small;
  }
  .logokiri {
    left: 35vw;
    width: 30vw;
    top: 130vh;
  }
  .maintextkiri {
    left: 33vw;
    width: 34vw;
    top: 148vh;
  }
  .textkiri {
    font-size: small;
  }
}

@media (max-width: 375px) {
  .guritakananbelakang {
    width: 38vw;
    right: 0vw;
    top: 2vh;
  }
  .guritakanandepan {
    width: 28vw;
    right: 8vw;
    top: 4vh;
  }
  .logogurita {
    width: 50vw;
    margin-top: 2vh;
  }
  .guritakiribelakang {
    width: 34vw;
    left: 10vw;
    top: 3vh;
  }
  .guritakiridepan {
    width: 30vw;
    left: 0vw;
    top: 2vh;
  }
}

@media (max-width: 320px) {
  .guritakananbelakang {
    width: 38vw;
    right: 0vw;
    top: 2vh;
  }
  .guritakanandepan {
    width: 28vw;
    right: 8vw;
    top: 4vh;
  }
  .logogurita {
    width: 50vw;
    margin-top: 2vh;
  }
  .guritakiribelakang {
    width: 34vw;
    left: 10vw;
    top: 3vh;
  }
  .guritakiridepan {
    width: 30vw;
    left: 0vw;
    top: 3vh;
  }
}
</style>
