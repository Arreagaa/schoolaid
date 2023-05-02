<script setup>
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
  <div
    class="bg-white rounded-2xl px-8 pt-10 sm:px-12 lg:px-6 border border-[#537FF7]"
  >
    <div class="flex items-left text-left px-4 pb-2">
      <div class="rounded-full bg-[#F3BE18] text-center px-4 py-4">
        <img :src="item.icon" class="w-8 object-cover rounded-xl" alt="" />
      </div>
    </div>
    <div class="text-black pt-6 pb-8 px-4">
      <h3 class="ModeratBlack text-3xl">{{ item.title }}</h3>
      <p class="text-lg py-4 2xl:pr-8 pr-0 md:pr-16">
        {{ item.description }}
      </p>
      <div v-if="idItem === 2 || idItem === 3" class="xl:pt-2" />
      <div class="flex items-center text-center pt-4">
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
    </div>
  </div>
</template>
