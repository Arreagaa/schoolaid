<template>
  <footer class="regularFont bg-[#537FF7] py-8">
    <div class="max-w-custom mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <img src="/assets/aid_white.png" alt="image" class="w-12" />
          <span
            class="PoppinsMedium text-lg block text-white text-base lg:py-20 py-10 xl:px-14"
          >
            © 2020 Schoolaid {{ $t("Todos los derechos") }}
          </span>
        </div>
        <div class="w-full lg:w-6/12 px-4 xl:pt-28">
          <hr class="my-6 border-blueGray-300" />
          <div class="flex flex-wrap items-top pt-6">
            <div class="w-full lg:w-1/8 md:w-1/2">
              <h2
                class="PoppinsMedium block uppercase text-white text-lg font-bold mb-2"
              >
                FAQ
              </h2>
              <ul class="list-unstyled PoppinsRegular">
                <li class="flex py1">
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    class="text-white block pb-2 text-base"
                    >{{
                      $t("Políticas de Privacidad y Protección de Datos")
                    }}</a
                  >
                </li>
                <li class="flex py1">
                  <a
                    href="/terms"
                    target="_blank"
                    class="text-white block pb-2 text-base"
                    >{{ $t("Términos y Condiciones de uso") }}</a
                  >
                </li>
                <li class="flex py1">
                  <a
                    href="/cookies"
                    target="_blank"
                    class="text-white block pb-2 text-base"
                    >{{ $t("Política de cookies") }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="w-full md:pl-12 lg:w-1/8 md:w-1/2 md:pt-0 pt-4">
              <h2 class="PoppinsMedium block text-white text-lg font-bold mb-2">
                {{ $t("Contacto") }}
              </h2>
              <ul class="mb-10 list-unstyled PoppinsRegular">
                <li class="flex py1">
                  <a
                    href="mailto:info@schoolaid.app"
                    class="text-white block pb-2 text-base"
                    >info@schoolaid.app</a
                  >
                </li>
              </ul>
            </div>
            <div class="w-full">
              <div class="text-right text-white pt-8">
                <a
                  href="https://www.facebook.com/schoolaidapp"
                  target="_blank"
                  class="inline-block no-underline py-2 px-2 text-3xl"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/schoolaid.app/"
                  target="_blank"
                  class="inline-block no-underline py-2 px-2 text-3xl"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
