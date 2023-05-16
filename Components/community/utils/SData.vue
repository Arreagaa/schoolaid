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
    class="flex flex-col items-center text-center"
    :class="idItem === 2 ? 'p-16 min-[1282px]:px-28' : `p-16`"
  >
    <p
      class="ModeratBlack text-7xl py-3"
      :class="idItem === 2 ? 'text-[#F3BE18]' : `text-[${item.color}]`"
    >
      {{ item.title }}
    </p>
    <p class="PoppinsLight font-bold mt-2 text-xl text-black">
      {{ $t(item.description) }}
    </p>
  </div>
</template>
