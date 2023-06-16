<script>
export default {
  data() {
    return {
      isPlaying: false,
      videoLink: "https://www.youtube.com/embed/j0DyAQlewws?autoplay=1&rel=0",
    };
  },
  methods: {
    playVideo() {
      this.isPlaying = true;
    },
    localeVideo() {
      if (this.$i18n.locale === "es") {
        this.videoLink = "https://www.youtube.com/embed/j0DyAQlewws?autoplay=1&rel=0";
      } else {
        this.videoLink = "https://www.youtube.com/embed/zh4GX_9utBM?autoplay=1&rel=0";
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
  <div class="flex flex-col lg:flex-row">
    <div class="lg:w-3/4 lg:order-1 order-2">
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
      class="lg:w-1/2 lg:order-2 flex items-center justify-center bg-[url('/assets/aids/Video.png')] bg-cover bg-center"
    >
      <div
        class="flex flex-col items-start justify-center w-full h-full xl:px-4 xl:py-6 max-[320px]:px-2 px-6 py-28 mb-6 lg:mb-0 lg:w-3/4"
      >
        <div
          class="flex flex-col items-start justify-center h-full space-y-3 transform lg:space-y-5 2xl:pr-16 responsive-size text-white"
        >
          <a
            class="ModeratBlack xl:text-4xl text-3xl font-bold leading-none mb-2 tracking-wider"
            >{{ $t("¿Cómo funciona?") }}</a
          >
          <p class="PoppinsMedium lg:text-xl text-lg leading-6">
            {{
              $t(
                "Nuestro software tiene soluciones modulares, que pueden integrarse o utilizarse de forma individual, según las necesidades de cada institución."
              )
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@media (min-width: 1536px) and (max-width: 1669px) {
  .responsive-size {
    padding-right: 0%;
  }
}
</style>
