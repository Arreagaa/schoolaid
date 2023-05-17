<script>
import SBagTitleCustomers from "~/Components/utils/SBagTitleCustomers.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default {
  data() {
    return {
      data: [
        [
          {
            image: "/assets/clients/elroble.jpg",
          },
          {
            image: "/assets/clients/Logo_ValleVerde.png",
          },
          {
            image: "/assets/clients/orsameaj-mx.jpg",
          },
          {
            image: "/assets/clients/cig.jpg",
          },
          {
            image: "/assets/clients/CAG-LOGO.png",
          },
          {
            image: "/assets/clients/dsg.png",
          },
          {
            image: "/assets/clients/internacional.png",
          },
          {
            image: "/assets/clients/IAG2.png",
          },
        ],
        [
          {
            image: "/assets/clients/CAG-LOGO.png",
          },
          {
            image: "/assets/clients/dsg.png",
          },
          {
            image: "/assets/clients/internacional.png",
          },
          {
            image: "/assets/clients/IAG2.png",
          },
          {
            image: "/assets/clients/CAG-LOGO.png",
          },
          {
            image: "/assets/clients/dsg.png",
          },
          {
            image: "/assets/clients/internacional.png",
          },
          {
            image: "/assets/clients/IAG2.png",
          },
        ],
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    SBagTitleCustomers,
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
  <section>
    <div>
      <div class="pb-8">
        <SBagTitleCustomers :title="$t('Clientes satisfechos')" />
      </div>
      <div class="md:px-0 px-4">
        <div class="swiper">
          <swiper :modules="modules" :navigation="navigation" class="mySwiper">
            <swiper-slide
              v-for="(slideData, slideIndex) in data"
              :key="slideIndex"
            >
              <div
                class="flex items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 space-y-8"
              >
                <div
                  v-for="(item, index) in slideData"
                  :key="index"
                  class="p-4"
                >
                  <img :src="item.image" class="w-36" alt="" />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>
