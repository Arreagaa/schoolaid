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
      return "w-full border border-2 border-[#537FF7] rounded-full py-3 px-6 mb-3 placeholder-transparent focus:outline-none focus:ring-1 focus:ring-[#537FF7] focus:border-[#537FF7]";
    },
  },
};
</script>
<template>
  <div class="relative">
    <label
      :for="id"
      class="absolute top-[-1.3rem] left-4 text-[#537FF7] text-sm pointer-events-none transition-all duration-200"
      :class="{
        'text-[#537FF7]': value === '',
        'text-gray-400': value !== '',
      }"
    >
      {{ placeholder }}
    </label>
    <input
      :class="inputClasses"
      :id="id"
      :type="type"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>
