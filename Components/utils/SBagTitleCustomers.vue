<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="w-full lg:pt-8 flex justify-start top-6 right-0 left-0">
    <div class="p-4 text-black flex items-center block">
      <div>
        <h1 class="ModeratBlack xl:text-6xl text-3xl text-black py-2">
          {{ title }}
        </h1>
      </div>
    </div>
  </div>
</template>
