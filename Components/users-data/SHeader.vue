<script setup>
import STranlate from "~/Layouts/utils/STranslate.vue";
</script>
<template>
  <div
    class="PoppinsMedium font-semibold flex justify-center max-[320px]:items-center pt-16 md:space-x-4"
  >
    <NuxtLink to="/">
      <img
        src="/assets/schoolaid.png"
        class="md:w-64 w-56 max-[320px]:w-48"
        alt=""
      />
    </NuxtLink>
    <STranlate />
  </div>
</template>
