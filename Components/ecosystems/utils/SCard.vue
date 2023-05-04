<script>
export default {
  data() {
    return {
      excludedIds: [1, 3, 4, 5],
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    idItem: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<template>
  <div class="max-w-xs md:max-w-none overflow-hidden py-4">
    <img class="h-56 lg:h-72 object-cover rounded" :src="item.image" />
    <div class="py-3 xl:px-2">
      <div class="flex items-center gap-4">
        <h3 class="ModeratBlack font-semibold text-4xl text-black pt-4">
          {{ item.title }}
        </h3>
        <div class="pt-4">
          <div
            v-if="idItem === 5"
            class="bg-[#F66750] flex items-center leading-none rounded-full px-6 py-2 animate-bounce"
          >
            <p class="inline text-base text-white font-medium">¡Nuevo!</p>
          </div>
        </div>
      </div>
      <p class="paragraph-normal font-semibold text-[#333333] pt-6 text-xl">
        {{ item.description }}
      </p>
      <div class="flex items-center text-center pt-8">
        <div v-if="!excludedIds.includes(idItem)" class="xl:py-12" />
        <a
          :href="item.link"
          class="xl:text-lg text-base rounded-full bg-[#537FF7] py-2 px-4 text-white font-bold flex items-center gap-4 transition duration-200"
        >
          Conoce más
          <div class="arrow-wrapper">
            <div class="arrow"></div>
          </div>
        </a>
      </div>
      <div v-if="idItem === 5">
        <p class="text-[#537FF7] underline text-xl pt-4">Business solution</p>
      </div>
    </div>
  </div>
</template>
