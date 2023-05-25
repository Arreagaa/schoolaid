<script>
import STranslate from "./utils/STranslate.vue";
import SEcosystem from "./utils/SEcosystem.vue";
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  components: { STranslate, SEcosystem },
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
  <div class="max-w-custom text-zinc-900">
    <nav id="header" class="w-full z-30 top-0 py-1">
      <div
        class="w-full flex-row flex-wrap mx-auto lg:flex-nowrap flex items-center justify-between py-3 px-6 res-padding-r 2xl:px-12 xl:py-2 sm:py-8"
        :class="{ 'slide-in-left': menuOpen }"
      >
        <label
          for="menu-toggle"
          class="cursor-pointer lg:hidden block text-2xl text-[#537FF7]"
          @click="toggleMenu"
        >
          <i v-if="!menuOpen" class="fa-solid fa-bars"></i>

          <i v-else class="fa-solid fa-xmark"></i>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />
        <div
          class="hidden lg:flex lg:items-center lg:w-auto w-full order-3 lg:order-1 overflow-y-hidden"
          id="menu"
        >
          <nav
            class="lg:hidden PoppinsMedium font-semibold max-[767px]:h-screen"
          >
            <ul class="lg:flex items-center justify-between text-lg text-black">
              <li>
                <NuxtLink
                  to="/"
                  :exact-active-class="'text-[#537FF7]'"
                  class="inline-block py-4 px-4 navLink"
                  >{{ $t("Quienes somos") }}</NuxtLink
                >
              </li>
              <div class="inline-block py-4 px-3 navLink">
                <SEcosystem :exact-active-class="'text-[#537FF7]'" />
              </div>
              <li>
                <NuxtLink
                  to="/community"
                  :exact-active-class="'text-[#537FF7]'"
                  class="inline-block py-4 px-4 navLink"
                  >{{ $t("Comunidad") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/customers"
                  :exact-active-class="'text-[#537FF7]'"
                  class="inline-block py-4 px-4 navLink"
                  >{{ $t("Instituciones") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/customers"
                  :exact-active-class="'text-[#537FF7]'"
                  class="inline-block py-4 px-4 navLink"
                  >{{ $t("Socios") }}</NuxtLink
                >
              </li>

              <li></li>
              <li>
                <NuxtLink
                  to="/contact"
                  :exact-active-class="'text-[#537FF7]'"
                  class="inline-block py-4 px-4 navLink"
                  >{{ $t("Contacto") }}</NuxtLink
                >
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
          <NuxtLink class="2xl:w-48 xl:w-40 lg:w-32 w-56" to="/">
            <img src="/assets/schoolaid.png" />
          </NuxtLink>
        </div>
        <div
          class="PoppinsMedium font-semibold min-[1340px]:text-lg max-[1132px]:text-sm text-base flex items-center lg:flex hidden"
          id="nav-content"
        >
          <ul class="flex">
            <li>
              <NuxtLink
                to="/"
                :exact-active-class="'text-[#537FF7]'"
                class="inline-block py-2 xl:mx-4 mx-2 navLink"
                >{{ $t("Quienes somos") }}</NuxtLink
              >
              <div class="inline-block py-2 xl:mx-4 mx-2">
                <SEcosystem />
              </div>
              <NuxtLink
                to="/community"
                :exact-active-class="'text-[#537FF7]'"
                class="inline-block py-2 xl:mx-4 mx-2 navLink"
                >{{ $t("Comunidad") }}</NuxtLink
              >
              <NuxtLink
                to="/customers"
                :exact-active-class="'text-[#537FF7]'"
                class="inline-block py-2 xl:mx-4 mx-2 navLink"
                >{{ $t("Instituciones") }}</NuxtLink
              >
              <NuxtLink
                to="/customers"
                :exact-active-class="'text-[#537FF7]'"
                class="inline-block py-2 xl:mx-4 mx-2 navLink"
                >{{ $t("Socios") }}</NuxtLink
              >
              <NuxtLink
                to="/contact"
                :exact-active-class="'text-[#537FF7]'"
                class="inline-block py-2 xl:mx-4 mx-2 navLink"
                >{{ $t("Contacto") }}</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="flex items-center lg:flex hidden">
          <div
            class="PoppinsMedium font-semibold min-[1340px]:text-lg max-[1132px]:text-sm text-base flex items-center"
          >
            <a class="inline-block">
              <a class="inline-block">{{ $t("Idioma") }}</a>
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
          class="order-2 lg:order-3 flex items-center lg:hidden"
          id="nav-content"
        ></div>
      </div>
    </nav>
  </div>
</template>
<style>
@media (min-width: 1023px) and (max-width: 1055px) {
  .res-padding-r {
    padding-right: 0%;
    padding-left: 0%;
  }
}
</style>
