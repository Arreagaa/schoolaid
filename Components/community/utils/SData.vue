<script setup>
import { defineProps, ref, watchEffect, computed } from "vue";

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

const animatedNumber = ref(0);

watchEffect(() => {
  const targetNumber = parseNumber(props.item.title);
  const increment = Math.ceil(targetNumber / 50);

  let current = 0;

  const animation = setInterval(() => {
    current += increment;
    if (current >= targetNumber) {
      animatedNumber.value = targetNumber;
      clearInterval(animation);
    } else {
      animatedNumber.value = current;
    }
  }, 10);
});

function parseNumber(title) {
  const numberString = title.replace(/[^\d.]/g, "");
  if (title.includes("K")) {
    return parseFloat(numberString) * 1000;
  } else {
    return parseInt(numberString);
  }
}

const formattedNumber = computed(() => {
  const number = animatedNumber.value;
  if (props.item.title.includes("K")) {
    return number / 1000 + "K";
  } else {
    return number.toString();
  }
});
</script>
<template>
  <div
    class="flex flex-col items-center text-center max-[320px]:p-12"
    :class="idItem === 2 ? 'p-16 min-[1282px]:px-28' : `p-16`"
  >
    <transition name="number-transition">
      <p
        class="ModeratBlack text-7xl py-3"
        :class="idItem === 2 ? 'text-[#F3BE18]' : `text-[${item.color}]`"
        :key="currentNumber"
      >
        {{ formattedNumber }}
      </p>
    </transition>
    <p class="PoppinsLight font-bold mt-2 text-xl text-black">
      {{ $t(item.description) }}
    </p>
  </div>
</template>
<style>
.number-transition-enter-active,
.number-transition-leave-active {
  transition: 0.5s;
}

.number-transition-enter-from,
.number-transition-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
