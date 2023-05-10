<script>
export default {
  data() {
    return {
      isPlaying: false,
      videoLink: "https://www.youtube.com/embed/j0DyAQlewws?autoplay=1",
    };
  },
  methods: {
    playVideo() {
      this.isPlaying = true;
    },
    localeVideo() {
      if (this.$i18n.locale === "es") {
        this.videoLink = "https://www.youtube.com/embed/j0DyAQlewws?autoplay=1";
      } else {
        this.videoLink = "https://www.youtube.com/embed/zh4GX_9utBM?autoplay=1";
      }
    },
  },
  watch: {
    "$i18n.locale": function () {
      this.localeVideo();
    },
  },
};
</script>
<template>
  <div class="flex flex-col md:flex-row">
    <div class="md:w-3/4 md:order-1 order-2">
      <div class="relative overflow-hidden pb-[90%]">
        <iframe
          v-if="isPlaying"
          class="absolute inset-0 w-full h-full"
          :src="videoLink"
          allowfullscreen
          allow="autoplay"
        ></iframe>
        <img
          v-else
          class="absolute inset-0 object-cover w-full h-full cursor-pointer"
          src="/assets/img/Video-1.png"
          alt=""
          @click="playVideo"
        />
      </div>
    </div>
    <div
      class="md:w-1/2 md:order-2 flex items-center justify-center bg-[url('/assets/aids/Video.png')] bg-cover bg-center"
    >
      <div
        class="flex flex-col items-start justify-center w-full h-full xl:px-4 xl:py-6 px-6 py-28 mb-6 md:mb-0 md:w-3/4"
      >
        <div
          class="flex flex-col items-start justify-center h-full space-y-3 transform md:space-y-5 2xl:pr-16 responsive-size text-white"
        >
          <a
            class="ModeratBlack xl:text-4xl text-3xl font-bold leading-none xl:mb-6 mb-2 tracking-wider"
            >¿Cómo funciona?</a
          >
          <p class="PoppinsMedium md:text-xl text-lg leading-6">
            SchoolAid es un SaaS que facilita y automatiza las gestiones diarias
            entre padres de familia y colegio, y centraliza todas las
            plataformas en un mismo lugar.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
