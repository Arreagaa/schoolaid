<script setup>
import SMore from "~/Components/utils/SMore.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  idItem: {
    type: Number,
    default: 0,
  },
});
</script>
<template>
  <div class="container mx-auto text-left text-white">
    <div class="flex items-center">
      <div class="xl:flex hidden w-1/3 py-8 pr-8">
        <img :src="item.image" class="object-cover" alt="" />
      </div>
      <div>
        <div class="mx-auto xl:px-0 px-6 py-6 xl:py-0">
          <p class="PoppinsRegular font-bold text-xl xl:mb-6 mb-4">
            {{ $t(item.title) }}
          </p>
          <h1
            class="PoppinsBold max-[375px]:pr-4 text-3xl"
            :class="
              idItem === 1
                ? 'xl:text-[36px] banner-description'
                : 'xl:text-[40px]'
            "
          >
            {{ $t(item.description) }}
          </h1>
          <p
            class="PoppinsExtraLight font-bold xl:my-6 my-4"
            :class="
              idItem === 1
                ? 'xl:text-2xl text-xl banner-text'
                : 'xl:text-2xl text-xl'
            "
          >
            {{ $t(item.text) }}
          </p>
          <div class="flex items-center text-center xl:pt-0 py-4">
            <SMore :to="item.url" />
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
            :src="item.image"
            class="w-3/4 sm:w-1/2 object-cover rounded-xl"
            alt=""
          />
        </div>
      </div>
      <div
        v-if="idItem !== 1"
        class="absolute top-0 -right-6 image-aid xl:flex hidden items-end text-end pt-28 hidden-below-1520"
      >
        <img src="/assets/aids/Rectangle-48.png" class="w-40" alt="" />
      </div>
    </div>
  </div>
</template>
<style>
@media (max-width: 1520px) {
  .hidden-below-1520 {
    display: none;
  }
}
@media (min-width: 1280px) and (max-width: 1535px) {
  .banner-description {
    font-size: 32px;
  }
}
@media (min-width: 1280px) and (max-width: 1535px) {
  .banner-text {
    font-size: 20px;
  }
}
</style>
