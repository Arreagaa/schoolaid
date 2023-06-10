<script>
import SData from "./SData.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

export default {
  data() {
    return {
      data: [
        {
          title: "¡Nuevo socio de integración!",
          description: "Alianza estratégica con Grupo Golán",
          text: "Ahora las rutas escolares están más protegidas.",
          url: "/transportation-aid",
          image: "/assets/img/Golan.png",
        },
        {
          title: "¡Nuevo módulo!",
          description:
            "Punto de venta digital para colegios, academias y gimnasios",
          text: "Facilita la automatización y gestión de pagos, venta de productos y membresías.",
          url: "/market-aid",
          image: "/assets/img/Group-7.png",
        },
      ],
      autoplayOptions: {
        delay: 5000,
        disableOnInteraction: false,
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    SData,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
      navigation: {
        prevEl: "#prevButton",
        nextEl: "#nextButton",
      },
    };
  },
};
</script>
<template>
  <section class="w-full">
    <div class="swiper">
      <swiper
        :navigation="navigation"
        :modules="modules"
        :autoplay="autoplayOptions"
        :loop="true"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in data" :key="index">
          <SData :id-item="index" :item="item" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
