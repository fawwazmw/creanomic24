<template>
  <header>
    <nav
      id="navbar"
      class="bg-transparent border-gray-200 dark:bg-transparent fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out"
    >
      <div
        class="container mx-auto max-w-screen-xl flex flex-wrap items-center justify-between p-4"
      >
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="assets/creanomiclogo.svg"
            class="h-20"
            alt="Creanomic Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-xl text-gray-900 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full lg:block lg:w-auto" id="navbar-default">
          <ul
            class="font-medium text-xl flex flex-col lg:flex-row p-4 lg:p-0 mt-4 lg:space-x-8 lg:mt-0 lg:border-0 font-poppins"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 transition-colors duration-500 rounded lg:p-0 dark:text-white link-underline active navbar-link"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 px-3 text-gray-900 transition-colors duration-500 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-900 lg:p-0 dark:text-white link-underline navbar-link"
              >
                Event<svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal bg-transparent divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-transparent dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-xl text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Job Fair</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Exhibition</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Market Days</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Performance</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Creafest</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 transition-colors duration-500 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-900 lg:p-0 dark:text-white link-underline navbar-link"
              >
                Merchandise
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 transition-colors duration-500 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-white link-underline navbar-link"
              >
                Competition
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 transition-colors duration-500 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-white link-underline navbar-link"
              >
                Talkshow
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navbar = document.getElementById("navbar");
      const navbarLinks = document.querySelectorAll(".navbar-link");

      if (window.scrollY > 50) {
        navbar.classList.add("bg-[#201169]/80", "shadow-lg");
        navbar.classList.remove("bg-transparent");

        // Change text color to white after scrolling, except on hover
        navbarLinks.forEach((link) => {
          link.classList.add("text-white");
          link.classList.remove("text-gray-900");
        });
      } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-[#201169]/80", "shadow-lg");

        // Reset text color to default before scrolling
        navbarLinks.forEach((link) => {
          link.classList.add("text-gray-900");
          link.classList.remove("text-white");
        });
      }
    },
  },
};
</script>

<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}

.link-underline {
  position: relative;
}

.link-underline::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #910a67;
  transition: width 0.3s ease;
}

.link-underline:hover::after {
  width: 100%;
}

/* Override hover effect when scrolled */
.navbar-link:hover {
  color: inherit !important; /* Prevent color change on hover after scroll */
}

.link-underline.active::after {
  width: 100%;
}
</style>
