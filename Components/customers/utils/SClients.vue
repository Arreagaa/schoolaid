<script>
import SBagTitleCustomers from "~/Components/utils/SBagTitleCustomers.vue";

export default {
  data() {
    return {
      currentIndex: 0,
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
            image: "/assets/clients/schule.PNG",
          },
        ],
        [
          {
            image: "/assets/clients/ameritec-logo.png",
          },
          {
            image: "/assets/clients/antiguagreen.png",
          },
          {
            image: "/assets/clients/principe-asturias.gif",
          },
          {
            image: "/assets/clients/liceo-javier.png",
          },
          {
            image: "/assets/clients/epic.jpg",
          },
          {
            image: "/assets/clients/montemaria-logo.jpeg",
          },
          {
            image: "/assets/clients/fmt.jpeg",
          },
          {
            image: "/assets/clients/integral-americano-logo.png",
          },
        ],
        [
          {
            image: "/assets/clients/viena.PNG",
          },
          {
            image: "/assets/clients/ens-logo.png",
          },
          {
            image: "/assets/clients/logo-bep.png",
          },
          {
            image: "/assets/clients/Logo-sefa.png",
          },
          {
            image: "/assets/clients/maya.png",
          },
          {
            image: "/assets/clients/metropolitano.png",
          },
          {
            image: "/assets/clients/tarbut-mx.jpg",
          },
          {
            image: "/assets/clients/montessori.png",
          },
        ],
        [
          {
            image: "/assets/clients/connections-apde-logo.png",
          },
          {
            image: "/assets/clients/entrevalles.jpg",
          },
          {
            image: "/assets/clients/Campoalegre.jpg",
          },
          {
            image: "/assets/clients/lascharcas.jpg",
          },
          {
            image: "/assets/clients/lascolinas.jpg",
          },
          {
            image: "/assets/clients/solalto.jpg",
          },
          {
            image: "/assets/clients/lavilla.jpg",
          },
          {
            image: "/assets/clients/sagrado-logo.png",
          },
        ],
        [
          {
            image: "/assets/clients/Boston.png",
          },
          {
            image: "/assets/clients/olami-mx.png",
          },
          {
            image: "/assets/clients/equity.png",
          },
          {
            image: "/assets/clients/julioverne.png",
          },
          {
            image: "/assets/clients/waldorf.png",
          },
          {
            image: "/assets/clients/Telus-Symbol.png",
          },
          {
            image: "/assets/clients/colgate.png",
          },
          {
            image: "/assets/clients/genius.jpeg",
          },
        ],
      ],
    };
  },
  components: {
    SBagTitleCustomers,
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.data.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.data.length) % this.data.length;
    },
    startAutoSlide() {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    stopAutoSlide() {
      clearInterval(this.slideInterval);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
};
</script>
<template>
  <section>
    <div>
      <div class="pb-4 md:-ml-3 md:px-0 px-5">
        <SBagTitleCustomers :title="$t('Clientes satisfechos')" />
      </div>
      <div class="md:px-0 px-4">
        <div class="swiper-container">
          <div
            class="swiper-wrapper"
            :style="`transform: translateX(-${currentIndex * 100}%)`"
          >
            <div
              v-for="(slideData, slideIndex) in data"
              :key="slideIndex"
              class="swiper-slide flex items-center justify-center h-full"
            >
              <div
                class="flex items-center justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0"
              >
                <div
                  v-for="(item, index) in slideData"
                  :key="index"
                  class="p-4 md:py-16"
                >
                  <img :src="item.image" class="w-36" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="swiper-button-container">
              <button @click="prevSlide" class="swiper-button-prev">
                <img
                  src="/assets/aids/Send-Square.png"
                  class="w-[32px] h-[32px]"
                  alt="Prev"
                />
              </button>
              <button @click="nextSlide" class="swiper-button-next">
                <img
                  src="/assets/aids/Recive-Square.png"
                  class="w-[32px] h-[32px]"
                  alt="Next"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.swiper-container {
  overflow: hidden;
  position: relative;
}
.swiper-wrapper {
  display: flex;
  transition: transform 0.3s ease;
}
.swiper-slide {
  flex: 0 0 100%;
}
.swiper-button-prev:after {
  content: "" !important;
}
.swiper-button-next:after {
  content: "" !important;
}
@media (max-width: 767px) {
  .swiper-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: static;
    margin: 0 10px;
  }
}
</style>
