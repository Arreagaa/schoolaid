<script setup>
import SText from "./utils/SText.vue";
import SInfo from "./utils/SInfo.vue";
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
    <div class="px-3 md:lg:xl:px-72 res-space-x">
      <SInfo />
    </div>
  </div>
</template>
<style>
@media (min-width: 1282px) and (max-width: 1669px) {
  .res-space-x {
    padding-left: 0%;
    padding-right: 0%;
  }
}
</style>
