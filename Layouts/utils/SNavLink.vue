<script>
export default {
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    linkClasses() {
      return "inline-block py-2 xl:mx-4 mx-2 navLink";
    },
  },
};
</script>
<template>
  <NuxtLink
    :to="to"
    :exact-active-class="'text-[#537FF7]'"
    :class="linkClasses"
  >
    {{ text }}
  </NuxtLink>
</template>
