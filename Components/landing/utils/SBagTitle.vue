<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: String,
});
</script>
<template>
  <div class="w-full lg:pt-8 flex justify-start top-6 right-0 left-0">
    <div class="p-4 text-black flex items-center block">
      <img
        :src="image"
        class="md:w-20 md:h-20 w-14 h-14 mr-4 object-contain"
        alt=""
      />
      <div>
        <h1 class="ModeratBlack md:text-4xl text-3xl text-black py-2">
          {{ title }}
        </h1>
        <p class="PoppinsMedium text-lg text-black">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
