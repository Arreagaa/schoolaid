<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    },
  },
};
</script>

<template>
  <div class="max-w-custom text-zinc-900 bg-transparant">
    <nav id="header" class="w-full z-30 top-0 py-1">
      <div
        class="w-full flex-row flex-wrap xl:flex-nowrap md:flex-nowrap sm:flex-nowrap mx-auto flex items-center justify-between py-3 px-6 xl:px-12 xl:py-2 sm:py-8"
        :class="{ 'slide-in-left': menuOpen }"
      >
        <label
          for="menu-toggle"
          class="cursor-pointer md:hidden block text-2xl text-[#537FF7]"
          @click="toggleMenu"
        >
          <i v-if="!menuOpen" class="fa-solid fa-bars"></i>

          <i v-else class="fa-solid fa-xmark"></i>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div
          class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1 overflow-y-hidden"
          id="menu"
        >
          <nav class="lg:hidden PoppinsMedium font-semibold h-screen">
            <ul class="md:flex items-center justify-between text-xl text-black">
              <li>
                <a class="inline-block py-4 px-4 navLink" href="/"
                  >Quienes somos</a
                >
              </li>
              <li>
                <a class="inline-block py-4 px-4 navLink" href="/#Values"
                  >Ecosistemas Aids</a
                >
              </li>
              <li>
                <a class="inline-block py-4 px-4 navLink" href="/#Products"
                  >Comunidad</a
                >
              </li>
              <li>
                <a class="inline-block py-4 px-4 navLink" href="/#Contact"
                  >Instituciones</a
                >
              </li>
              <li>
                <a class="inline-block py-4 px-4 navLink" href="/#Contact"
                  >Socios</a
                >
              </li>
              <li>
                <a class="inline-block py-4 px-4 navLink" href="/#Contact"
                  >Contacto</a
                >
              </li>
              <li>
                <a class="inline-block py-4 px-4 navLink" href="/#Contact"
                  >Idioma</a
                >
              </li>
              <li>
                <div class="inline-block pl-1 py-4 text-3xl text-[#537ff7]">
                  <a
                    href="https://www.facebook.com/schoolaidapp"
                    target="_blank"
                    class="px-2"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/schoolaid.app/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div class="xl:py-8 py-6 px-2 flex items-center">
          <a class="2xl:w-48 xl:w-40 md:w-32 w-56" href="/">
            <img src="/assets/schoolaid.png" />
          </a>
        </div>
        <div
          class="PoppinsMedium font-semibold max-[1165px]:text-base text-lg flex items-center lg:flex hidden"
          id="nav-content"
        >
          <a class="inline-block navLink">
            <a class="inline-block py-2 xl:mx-4 lg:mx-4 mx-2 navLink" href="/"
              >Quienes somos</a
            >
          </a>
          <a class="inline-block navLink">
            <a
              class="inline-block py-2 xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Values"
              >Ecosistema Aids</a
            >
          </a>
          <a class="inline-block navLink">
            <a
              class="inline-block py-2 xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Products"
              >Comunidad</a
            >
          </a>
          <a class="inline-block navLink">
            <a
              class="inline-block py-2 xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Contact"
              >Instituciones</a
            >
          </a>
          <a class="inline-block navLink">
            <a
              class="inline-block py-2 xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Contact"
              >Socios</a
            >
          </a>
          <a class="inline-block navLink">
            <a
              class="inline-block py-2 xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Contact"
              >Contacto</a
            >
          </a>
        </div>
        <div
          class="PoppinsMedium font-semibold text-lg flex items-center lg:flex hidden"
          id="nav-content"
        >
          <a class="inline-block navLink">
            <a
              class="inline-block xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Contact"
              >Idioma</a
            >
          </a>
          <a class="inline-block navLink">
            <a
              class="inline-block xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Contact"
              >Select</a
            >
          </a>
          <a class="inline-block">
            <a
              href="https://www.facebook.com/schoolaidapp"
              target="_blank"
              class="inline-block px-2 text-3xl text-[#537ff7]"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/schoolaid.app/"
              target="_blank"
              class="inline-block px-2 text-3xl text-[#537ff7]"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </a>
        </div>
        <div
          class="order-2 md:order-3 flex items-center lg:hidden"
          id="nav-content"
        ></div>
      </div>
    </nav>
  </div>
</template>
