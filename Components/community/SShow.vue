<script setup>
import SText from "./utils/SText.vue";
import SInfo from "./utils/SInfo.vue";
</script>
<template>
  <div class="xl:flex hidden flex-col-reverse xl:flex-row">
    <div class="xl:w-1/2">
      <img src="/assets/img/Community.png" />
    </div>
    <div class="xl:w-1/2 bg-[url('/assets/bg/Community.png')] bg-cover">
      <SText />
    </div>
  </div>
  <div>
    <div class="px-3 xl:xl:px-72 res-space-x">
      <SInfo />
    </div>
  </div>
  <div class="xl:hidden">
    <div class="bg-[url('/assets/bg/Community.png')] bg-cover">
      <SText />
    </div>
    <img src="/assets/img/Community.png" />
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
