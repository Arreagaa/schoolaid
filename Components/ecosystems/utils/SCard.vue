<script>
import SMore from "~/Components/utils/SMore.vue";
export default {
  components: { SMore },
  data() {
    return {
      excludedIds: [1, 3, 4, 5],
      excludedIdsEn: [0, 1, 2],
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
        <div class="flex items-center justify-center pt-4">
          <img :src="item.icon" class="xl:w-8 w-6" />
        </div>
        <h3
          class="ModeratBlack font-semibold xl:text-4xl text-3xl text-black pt-4"
        >
          {{ item.title }}
        </h3>
        <div class="pt-4">
          <div
            v-if="idItem === 5"
            class="bg-[#F66750] flex items-center leading-none rounded-full px-6 py-2 animate-bounce"
          >
            <p class="inline text-base text-white font-medium">
              {{ $t("¡Nuevo!") }}
            </p>
          </div>
        </div>
      </div>
      <p class="paragraph-normal font-semibold text-[#333333] pt-6 text-xl">
        {{ $t(item.description) }}
      </p>
      <div class="flex items-center text-center pt-8">
        <div
          v-if="!excludedIds.includes(idItem)"
          :class="$i18n.locale === 'es' ? 'xl:py-12' : 'xl:py-0'"
        />
        <div
          v-if="excludedIdsEn.includes(idItem)"
          :class="
            $i18n.locale === 'es' ? 'xl:py-0 lg:py-0' : 'xl:py-12 lg:py-8'
          "
        ></div>
        <SMore :to="item.link" />
      </div>
    </div>
  </div>
</template>
