<script>
import SMore from "~/Components/utils/SMore.vue";
export default {
  components: { SMore },
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
    <img class="object-cover rounded" :src="item.image" />
    <div class="py-3 px-2">
      <div class="flex items-center">
        <div class="flex items-center justify-center pt-4 pr-2">
          <img :src="item.icon" class="xl:w-8 w-6" />
        </div>
        <h3
          class="ModeratBlack font-semibold min-[1536px]:text-4xl text-3xl text-black pt-4"
        >
          {{ item.title }}
        </h3>
        <div v-if="idItem === 5" class="pl-4 pt-4">
          <div
            class="bg-[#F66750] flex items-center leading-none rounded-full px-6 py-2 animate-bounce"
          >
            <p class="inline text-base text-white font-medium">
              {{ $t("¡Nuevo!") }}
            </p>
          </div>
        </div>
      </div>
      <p
        class="PoppinsLight paragraph-normal font-semibold text-[#333333] lg:pr-4 pt-6 min-[1536px]:text-lg text-base h-28"
      >
        {{ $t(item.description) }}
      </p>
      <div class="flex items-center text-center pt-8">
        <SMore :to="item.link" />
      </div>
    </div>
  </div>
</template>
