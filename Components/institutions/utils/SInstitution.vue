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
  <div class="2xl:px-12 padding-responsive px-10 py-10">
    <div class="flex flex-col items-center">
      <div v-if="idItem === 2 || idItem === 4" class="2xl:pb-10"></div>
      <div class="text-white text-center px-8 py-8 bg-[#537FF7] rounded-full">
        <img :src="item.icon" class="w-10 object-cover rounded-xl" />
      </div>
      <p
        class="ModeratBlack block 2xl:max-w-[175px] mt-10 text-2xl res-size text-[#537FF7]"
      >
        {{ item.title }}
      </p>
    </div>
  </div>
</template>
<style>
@media (min-width: 1538px) and (max-width: 1669px) {
  .padding-responsive {
    padding-left: 12px;
    padding-right: 12px;
  }
  .res-size{
    font-size: 22px;
  }
}
</style>
