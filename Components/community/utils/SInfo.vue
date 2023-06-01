<script setup>
import SData from "./SData.vue";
const data = [
  {
    title: "+50",
    description: "Colegios, Empresas y Academias",
    color: "#F66750",
  },
  {
    title: "+50K",
    description: "Usuarios satisfechos con opiniones positivas",
    color: "#537FF7",
  },
  {
    title: "+35K",
    description: "Familias que usan la app a diario",
    color: "#F3BE18",
  },
];
</script>
<template>
  <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group">
    <SData
      v-for="(item, index) in data"
      :key="index"
      :id-item="index"
      :item="item"
    />
  </div>
</template>
