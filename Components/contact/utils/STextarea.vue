<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    textClasses() {
      return "text-base w-full border border-2 border-[#537FF7] rounded-lg px-4 pt-2 pb-16 placeholder-[#537FF7] focus:outline-none focus:ring-1 focus:ring-[#537FF7] focus:border-[#537FF7]";
    },
  },
};
</script>
<template>
  <div>
    <textarea
      :class="textClasses"
      :id="id"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>
