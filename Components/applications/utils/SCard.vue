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
  <div
    class="bg-white rounded-2xl px-8 pt-10 pb-2 sm:px-12 lg:px-6 border border-[#537FF7]"
  >
    <div class="flex items-left text-left px-4 pb-2">
      <div class="rounded-full bg-[#F3BE18] text-center px-4 py-4">
        <img :src="item.icon" class="w-8 object-cover rounded-xl" alt="" />
      </div>
    </div>
    <div class="text-black pt-6 pb-8 px-4">
      <h3
        class="ModeratBlack text-3xl xl:h-20"
        :class="$i18n.locale === 'es' ? '2xl:pr-0' : '2xl:pr-16'"
      >
        {{ $t(item.title) }}
      </h3>
      <p class="PoppinsMedium text-lg py-4 2xl:pr-4 pr-0 xl:h-36 res-h">
        {{ $t(item.description) }}
      </p>
      <div class="flex items-center text-center pt-4">
        <SMore :to="item.link" />
      </div>
    </div>
  </div>
</template>
<style>
@media (min-width: 1519px) and (max-width: 1535px) {
  .res-btnap {
    padding-bottom: 28px;
  }
}
@media (min-width: 1280px) and (max-width: 1430px) {
  .res-h {
    height: 11rem;
  }
}
</style>
