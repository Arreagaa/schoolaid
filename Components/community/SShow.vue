<script setup>
import SText from "./utils/SText.vue";
import SData from "./utils/SData.vue";
</script>
<template>
  <div class="flex flex-col-reverse md:flex-row">
    <div class="md:w-1/2">
      <img src="/assets/img/Community.png" alt="Imagen" />
    </div>
    <div class="md:w-1/2 bg-[url('/assets/bg/Community.png')] bg-cover">
      <SText />
    </div>
  </div>
  <div>
    <div>
      <SData />
    </div>
  </div>
</template>
