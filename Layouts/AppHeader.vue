<script>
import STranslate from "./utils/STranslate.vue";
export default {
  data() {
    return {
      menuOpen: false,
      links: [
        { title: "Quienes somos", url: "/" },
        { title: "Ecosistemas Aids", url: "/#Values" },
        { title: "Comunidad", url: "/#Products" },
        { title: "Instituciones", url: "/#Contact" },
        { title: "Socios", url: "/#Contact" },
        { title: "Contacto", url: "/#Contact" },
      ],
    };
  },
  components: { STranslate },
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
    <nav id="header" class="w-full z-30 top-0 xl:py-4 py-1">
      <div
        class="w-full flex-row flex-wrap xl:flex-nowrap md:flex-nowrap sm:flex-nowrap mx-auto flex items-center justify-between py-3 px-6 2xl:px-12 xl:py-2 sm:py-8"
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
              <li v-for="link in links" :key="link.id">
                <a :href="link.url" class="inline-block py-4 px-4 navLink">{{
                  link.title
                }}</a>
              </li>
              <li>
                <div class="inline-block py-2">
                  <STranslate />
                </div>
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
          class="PoppinsMedium font-semibold xl:text-lg text-base flex items-center lg:flex hidden"
          id="nav-content"
        >
          <ul class="flex">
            <li v-for="(link, index) in links" :key="index">
              <a
                :href="link.url"
                class="inline-block py-2 xl:mx-4 mx-2 navLink"
                >{{ link.title }}</a
              >
            </li>
          </ul>
        </div>
        <div class="flex items-center lg:flex hidden">
          <div
            class="PoppinsMedium font-semibold xl:text-lg text-base flex items-center"
          >
            <a class="inline-block navLink">
              <a class="inline-block navLink">Idioma</a>
            </a>
            <a class="inline-block navLink">
              <STranslate />
            </a>
          </div>
          <div class="flex items-center">
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
          </div>
        </div>

        <div
          class="order-2 md:order-3 flex items-center lg:hidden"
          id="nav-content"
        ></div>
      </div>
    </nav>
  </div>
</template>
