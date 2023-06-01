<script setup>
import SCard from "./SCard.vue";
const applications = [
  {
    title: "Seguridad en Campus",
    icon: "/assets/icons/Seguridad.png",
    description:
      "Gestión de visitantes, seguridad, control y seguridad de los alumnos.",
    link: "/control-aid#plus",
  },
  {
    title: "Automatizar operaciones",
    icon: "/assets/icons/Automatizar.png",
    description: "Asistencia, solicitudes de los padres y cambios de horario.",
    link: "/control-aid",
  },
  {
    title: "Transporte",
    icon: "/assets/icons/Transporte.png",
    description:
      "Gestión de pasajeros, automatización, seguimiento y trazabilidad en tiempo real.",
    link: "/transportation-aid",
  },
  {
    title: "Comunicación",
    icon: "/assets/icons/Comunicacion.png",
    description:
      "Centro de chat y herramientas de comunicación eficientes e inmediatas.",
    link: "/communication-aid",
  },
];
</script>

<template>
  <div
    class="mx-auto grid gap-6 md:w-3/4 lg:w-full md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 grid-below-1535"
  >
    <SCard
      v-for="(item, index) in applications"
      :key="index"
      :id-item="index"
      :item="item"
    />
  </div>
</template>
<style>
@media (min-width: 1080px) and (max-width: 1535px){
  .grid-below-1535 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
