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
  <div class="relative group border-b-2 border-[#F3BE18] xl:pb-8 pb-4">
    <div class="inline-flex items-center lg:gap-12 gap-6">
      <div class="rounded-full px-6 py-6" :class="'bg-[' + item.color + ']'">
        <img :src="item.icon" class="w-10" alt="" />
      </div>
      <div class="space-y-2">
        <h5 class="PoppinsLight font-bold xl:text-lg text-base text-black">
          {{ $t(item.description) }}
        </h5>
      </div>
    </div>
  </div>
</template>
