<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  image: String,
});
</script>
<template>
  <div class="w-full lg:pt-8 flex justify-start top-6 right-0 left-0">
    <div class="p-4 text-black flex items-center block">
      <img
        :src="image"
        class="xl:w-12 xl:h-12 w-8 h-8 mr-4 object-contain"
        alt=""
      />
      <div>
        <h1 class="ModeratBlack xl:text-4xl text-3xl text-black py-2">
          {{ title }}
        </h1>
      </div>
    </div>
  </div>
</template>
