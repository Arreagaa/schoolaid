<script setup>
import SInstitution from "./SInstitution.vue";
const institution = [
  {
    title: "Academias",
    icon: "/assets/icons/Academias.png",
  },
  {
    title: "Colegios",
    icon: "/assets/icons/Colegios.png",
  },
  {
    title: "Empresas de Transporte",
    icon: "/assets/icons/Empresas-Transporte.png",
  },
  {
    title: "Guarderías",
    icon: "/assets/icons/Guarderias.png",
  },
  {
    title: "Instituciones educativas",
    icon: "/assets/icons/Instituciones-educativas.png",
  },
];
</script>
<template>
  <div
    class="flex flex-col items-center py-8 md:px-12 mx-auto xl:flex-row bg-[#537FF7] bg-opacity-10 rounded-3xl"
  >
    <SInstitution
      v-for="(item, index) in institution"
      :key="index"
      :id-item="index"
      :item="item"
    />
  </div>
</template>
