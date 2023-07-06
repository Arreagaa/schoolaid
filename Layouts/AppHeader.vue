<script>
import SEcosystem from "./utils/SEcosystem.vue";
import STranslate from "./utils/STranslate.vue";
import SResNavLink from "./utils/SResNavLink.vue";
import SNavLink from "./utils/SNavLink.vue";
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  components: { SEcosystem, STranslate, SResNavLink, SNavLink },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
<template>
  <div class="max-w-custom 2xl:px-10 px-4 pt-8">
    <nav class="relative px-4 res-spa py-4 flex items-center bg-white h-full">
      <div class="flex items-center justify-center w-full xl:w-auto">
        <NuxtLink class="2xl:w-48 xl:w-40 xl:w-32 w-56 xl:ml-0 ml-12" to="/">
          <img src="/assets/schoolaid.png" />
        </NuxtLink>
        <div class="xl:hidden">
          <button
            class="navbar-burger flex items-center text-2xl text-[#537FF7] py-3 ml-8"
            @click="toggleMenu"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      <ul
        class="PoppinsMedium font-semibold min-[1372px]:text-lg max-[1200px]:text-sm text-base hidden xl:flex xl:mx-auto xl:flex xl:items-center flex items-center 2xl:space-x-2"
        :class="{ hidden: !isMenuOpen }"
      >
        <li>
          <SNavLink to="/#about" :text="$t('Quienes somos')" />
        </li>
        <li>
          <SEcosystem />
        </li>
        <li>
          <SNavLink to="/community" :text="$t('Comunidad')" />
        </li>
        <li>
          <SNavLink to="/customers" :text="$t('Instituciones')" />
        </li>
        <li>
          <SNavLink to="/customers" :text="$t('Socios')" />
        </li>
        <li>
          <SNavLink to="/contact" :text="$t('Contacto')" />
        </li>
      </ul>
      <div class="flex items-center xl:flex hidden">
        <div
          class="PoppinsMedium font-semibold min-[1372px]:text-lg max-[1200px]:text-sm text-base flex items-center"
        >
          <a class="inline-block">{{ $t("Idioma") }}</a>
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
    </nav>
    <div class="navbar-menu relative z-50" :class="{ hidden: !isMenuOpen }">
      <div
        class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
        @click="toggleMenu"
      ></div>
      <nav
        class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
      >
        <div class="flex items-center pb-8">
          <a class="w-14">
            <img src="/assets/aid.png" />
          </a>
          <button
            class="navbar-close text-3xl text-[#537FF7] ml-auto"
            @click="toggleMenu"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="PoppinsMedium font-semibold text-lg">
          <ul>
            <li>
              <SResNavLink to="/" :text="$t('Quienes somos')" />
            </li>
            <div class="inline-block py-4 px-3 navLink">
              <SEcosystem />
            </div>
            <li>
              <SResNavLink to="/community" :text="$t('Comunidad')" />
            </li>
            <li>
              <SResNavLink to="/customers" :text="$t('Instituciones')" />
            </li>
            <li>
              <SResNavLink to="/customers" :text="$t('Socios')" />
            </li>
            <li>
              <SResNavLink to="/contact" :text="$t('Contacto')" />
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
        </div>
      </nav>
    </div>
  </div>
</template>
<style>
@media (min-width: 1023px) and (max-width: 1038px) {
  .res-spa {
    padding-right: 0%;
  }
}
</style>
