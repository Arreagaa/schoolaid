<script>
import SMore from "../utils/SMore.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
    SMore,
  },
  setup() {
    return {
      modules: [Navigation],
      navigation: {
        prevEl: "#prevButton",
        nextEl: "#nextButton",
      },
    };
  },
};
</script>
<template>
  <div class="overflow-hidden bg-[#537FF7] flex items-center py-8">
    <section class="bg-cover bg-center w-full relative">
      <div class="swiper">
        <swiper :navigation="navigation" :modules="modules" class="mySwiper">
          <swiper-slide>
            <div class="container mx-auto text-left text-white">
              <div class="flex items-center">
                <div class="xl:flex hidden w-1/3 py-8 pr-8">
                  <img
                    src="/assets/img/Group-7.png"
                    class="object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <div class="mx-auto xl:px-0 px-6 py-6 xl:py-0">
                    <p class="PoppinsRegular font-bold text-xl xl:mb-6 mb-4">
                      {{ $t("¡Nuevo socio de integración!") }}
                    </p>
                    <h1
                      class="PoppinsBold xl:text-[40px] max-[375px]:pr-4 text-3xl"
                    >
                      {{ $t("Alianza estratégica con Grupo Golán") }}
                    </h1>
                    <p
                      class="PoppinsExtraLight text-lg xl:text-2xl font-bold text-xl xl:my-6 my-4"
                    >
                      {{
                        $t("Ahora las rutas escolares están más protegidas.")
                      }}
                    </p>
                    <div class="flex items-center text-center xl:pt-0 py-4">
                      <SMore />
                    </div>
                    <div class="flex items-center text-center pt-4 block">
                      <a class="pr-2" id="prevButton"
                        ><img
                          src="/assets/aids/Send-Square.png"
                          class="w-10 cursor-pointer object-cover rounded-xl"
                          alt=""
                      /></a>
                      <a
                        ><img
                          id="nextButton"
                          src="/assets/aids/Recive-Square.png"
                          class="w-10 cursor-pointer object-cover rounded-xl"
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
                  <img
                    src="/assets/aids/Rectangle-48.png"
                    class="w-40"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="container mx-auto text-left text-white">
              <div class="flex items-center">
                <div class="xl:flex hidden w-1/3 py-8 pr-8">
                  <img
                    src="/assets/img/Group-7.png"
                    class="object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <div class="mx-auto xl:px-0 px-6 py-6 xl:py-0">
                    <p class="PoppinsRegular font-bold text-xl xl:mb-6 mb-4">
                      {{ $t("¡Nuevo módulo!") }}
                    </p>
                    <h1
                      class="PoppinsBold xl:text-[40px] max-[375px]:pr-4 text-3xl"
                    >
                      {{
                        $t(
                          "Punto de venta digital para colegios, academias y gimnasios"
                        )
                      }}
                    </h1>
                    <p
                      class="PoppinsExtraLight text-lg xl:text-2xl font-bold text-xl xl:my-6 my-4"
                    >
                      {{
                        $t(
                          "Facilita la automatización y gestión de pagos, venta de productos y membresías."
                        )
                      }}
                    </p>
                    <NuxtLink to="/market-aid" class="flex items-center text-center xl:pt-0 py-4">
                      <SMore />
                    </NuxtLink>
                    <div class="flex items-center text-center pt-4 block">
                      <a class="pr-2"
                        ><img
                          id="prevButton"
                          src="/assets/aids/Send-Square.png"
                          class="w-10 cursor-pointer object-cover rounded-xl"
                          alt=""
                      /></a>
                      <a
                        ><img
                          id="nextButton"
                          src="/assets/aids/Recive-Square.png"
                          class="w-10 cursor-pointer object-cover rounded-xl"
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
              </div>
            </div>
          </swiper-slide>
        </swiper>
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
