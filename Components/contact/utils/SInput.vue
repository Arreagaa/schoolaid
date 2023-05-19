<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    inputClasses() {
      return "w-full border border-2 border-[#537FF7] rounded-full py-3 px-6 mb-3 placeholder-[#537FF7] focus:outline-none focus:ring-2 focus:ring-[#537FF7] focus:border-[#537FF7]";
    },
  },
};
</script>
<template>
  <div>
    <input
      :class="inputClasses"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>
