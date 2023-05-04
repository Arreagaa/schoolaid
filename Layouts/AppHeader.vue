<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>
<template>
  <div class="max-w-custom text-zinc-900 bg-transparant">
    <nav id="header" class="w-full z-30 top-0 py-1">
      <div
        class="w-full flex-row flex-wrap xl:flex-nowrap md:flex-nowrap sm:flex-nowrap mx-auto flex items-center justify-between py-3 px-6 xl:px-12 xl:py-2 sm:py-8"
      >
        <label
          for="menu-toggle"
          class="cursor-pointer md:hidden block"
          @click="menuOpen = !menuOpen"
        >
          <svg
            class="fill-current text-zinc-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            v-if="!menuOpen"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            v-else
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div
          class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav class="lg:hidden PoppinsMedium font-semibold">
            <ul
              class="md:flex items-center justify-between text-xl text-zinc-900"
            >
              <li>
                <a
                  class="inline-block no-underline py-2 px-4 navLink"
                  href="/#About"
                  >Quienes somos</a
                >
              </li>
              <li>
                <a
                  class="inline-block no-underline py-2 px-4 navLink"
                  href="/#Values"
                  >Ecosistemas Aids</a
                >
              </li>
              <li>
                <a
                  class="inline-block no-underline py-2 px-4 navLink"
                  href="/#Products"
                  >Comunidad</a
                >
              </li>
              <li>
                <a
                  class="inline-block no-underline py-2 px-4 navLink"
                  href="/#Contact"
                  >Instituciones</a
                >
              </li>
              <li>
                <a
                  class="inline-block no-underline py-2 px-4 navLink"
                  href="/#Contact"
                  >Socios</a
                >
              </li>
              <li>
                <a
                  class="inline-block no-underline py-2 px-4 navLink"
                  href="/#Contact"
                  >Contacto</a
                >
              </li>
              <li>
                <a
                  class="inline-block no-underline py-2 px-4 navLink"
                  href="/#Contact"
                  >Idioma</a
                >
              </li>
              <li>
                <div class="inline-block no-underline pl-1 py-2">
                  <a
                    href="https://www.facebook.com/schoolaidapp"
                    target="_blank"
                    class="inline-block no-underline px-2 text-3xl text-[#537ff7]"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/schoolaid.app/"
                    target="_blank"
                    class="inline-block no-underline text-3xl text-[#537ff7]"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div class="py-8 px-2 flex items-center">
          <a class="2xl:w-48 xl:w-40 md:w-32 w-56" href="/">
            <img src="/assets/schoolaid.ico" />
          </a>
        </div>
        <div
          class="PoppinsMedium font-semibold  max-[1165px]:text-base text-lg flex items-center lg:flex hidden"
          id="nav-content"
        >
          <a class="inline-block no-underline navLink">
            <a
              class="inline-block no-underline py-2 xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#About"
              >Quienes somos</a
            >
          </a>
          <a class="inline-block no-underline navLink">
            <a
              class="inline-block no-underline py-2 xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Values"
              >Ecosistema Aids</a
            >
          </a>
          <a class="inline-block no-underline navLink">
            <a
              class="inline-block no-underline py-2 xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Products"
              >Comunidad</a
            >
          </a>
          <a class="inline-block no-underline navLink">
            <a
              class="inline-block no-underline py-2 xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Contact"
              >Instituciones</a
            >
          </a>
          <a class="inline-block no-underline navLink">
            <a
              class="inline-block no-underline py-2 xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Contact"
              >Socios</a
            >
          </a>
          <a class="inline-block no-underline navLink">
            <a
              class="inline-block no-underline py-2 xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Contact"
              >Contacto</a
            >
          </a>
        </div>
        <div
          class="PoppinsMedium font-semibold  text-lg flex items-center lg:flex hidden"
          id="nav-content"
        >
          <a class="inline-block no-underline navLink">
            <a
              class="inline-block no-underline xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Contact"
              >Idioma</a
            >
          </a>
          <a class="inline-block no-underline navLink">
            <a
              class="inline-block no-underline xl:mx-4 lg:mx-4 mx-2 navLink"
              href="/#Contact"
              >Select</a
            >
          </a>
          <a class="inline-block no-underline">
            <a
              href="https://www.facebook.com/schoolaidapp"
              target="_blank"
              class="inline-block no-underline px-2 text-3xl text-[#537ff7]"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/schoolaid.app/"
              target="_blank"
              class="inline-block no-underline px-2 text-3xl text-[#537ff7]"
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

<style>
#menu-toggle:checked + #menu {
  display: block;
}

.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}
</style>
