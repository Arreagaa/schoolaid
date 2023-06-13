<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    bgClass: {
      type: String,
      default:
        "bg-[#537FF7] flex items-center border border-[#537FF7] leading-none rounded-full px-4 py-3 hover:bg-white inline text-base text-white hover:text-[#537FF7]",
    },
    bgSelected: {
      type: String,
      default:
        "flex items-center border border-[#537FF7] leading-none rounded-full px-4 py-3 bg-white inline text-base text-[#537FF7]",
    },
    imgClass: {
      type: String,
      default: "w-6 mr-2",
    },
    hasHover: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hover: false,
      isSelected: false,
    };
  },
  methods: {
    toggleSelection() {
      this.isSelected = !this.isSelected;
    },
    applyHoverEffect() {
      if (this.hasHover) {
        this.hover = true;
      }
    },
    removeHoverEffect() {
      if (this.hasHover) {
        this.hover = false;
      }
    },
    getImageSource() {
      if (this.hover || this.isSelected && this.hasHover) {
        return "/assets/aids/Transportation.png";
      }
      return this.img;
    },
  },
};
</script>
<template>
  <button @click="toggleSelection">
    <div
      :class="[isSelected ? bgSelected : bgClass]"
      @mouseover="applyHoverEffect"
      @mouseleave="removeHoverEffect"
    >
      <img :src="getImageSource()" :class="imgClass" />
      <p>{{ title }}</p>
    </div>
  </button>
</template>
