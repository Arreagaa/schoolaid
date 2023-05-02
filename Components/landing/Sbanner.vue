<template>
  <div class="overflow-hidden bg-[#537FF7] flex items-center py-8">
    <section class="bg-cover bg-center w-full relative">
      <div class="container mx-auto text-left text-white">
        <div class="flex items-center">
          <div class="xl:flex hidden w-1/3 py-8 pr-8">
            <img src="/assets/img/Group-7.png" class="object-cover" alt="" />
          </div>
          <div>
            <div class="mx-auto xl:px-0 px-6 py-6 xl:py-0">
              <p class="ModeratBlack xl:text-2xl text-xl xl:mb-6 mb-4">
                ¡Nuevo socio de integración!
              </p>
              <h1 class="ModeratBlack xl:text-[40px] max-[375px]:pr-4 text-3xl">
                Monitoreo de Seguridad Privada con Golan
              </h1>
              <p class="text-lg xl:text-2xl text-xl xl:my-6 my-4">
                Gestión de visitantes, seguridad, control y seguridad de los
                alumnos.
              </p>
              <div class="flex items-center text-center xl:pt-0 py-4">
                <a
                  class="xl:text-lg text-base border-2 border-white rounded-full py-2 px-4 text-white font-bold flex items-center gap-4 transition duration-200"
                >
                  Conoce más
                  <div class="arrow-wrapper">
                    <div class="arrow"></div>
                  </div>
                </a>
              </div>
              <div class="flex items-center text-center pt-4">
                <a href="" class="pr-2"
                  ><img
                    src="/assets/aids/Send-Square.png"
                    class="w-8 object-cover rounded-xl"
                    alt=""
                /></a>
                <a href=""
                  ><img
                    src="/assets/aids/Recive-Square.png"
                    class="w-8 object-cover rounded-xl"
                    alt=""
                /></a>
              </div>
            </div>
            <div class="flex justify-center xl:hidden pb-2">
              <img
                src="/assets/img/Group-7.png"
                class="w-3/4 sm:w-1/2 object-cover rounded-xl"
                alt=""
              />
            </div>
          </div>
          <div
            class="absolute top-0 -right-6 image-aid xl:flex hidden items-end text-end pt-28 hidden-below-1520"
          >
            <img src="/assets/aids/Rectangle-48.png" class="w-48" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
@media (max-width: 1520px) {
  .hidden-below-1520 {
    display: none;
  }
}
</style>
