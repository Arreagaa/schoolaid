<script setup>
import SInfo from "./utils/SInfo.vue";
import SMarketPlus from "./utils/SMarketPlus.vue";
</script>
<template>
  <div class="flex flex-col-reverse xl:flex-row">
    <div class="xl:w-1/2">
      <img src="/assets/img/Market_solution.png" class="xl:w-full md:w-[60%] mx-auto" />
    </div>
    <div class="xl:w-1/2 2xl:pr-48 xl:px-0 px-6 xl:pt-0 py-8">
      <SInfo />
    </div>
  </div>
  <div>
    <SMarketPlus />
  </div>
</template>
