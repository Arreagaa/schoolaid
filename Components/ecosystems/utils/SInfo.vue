<script setup>
import SCard from "./SCard.vue";
const ecosystems = [
  {
    title: "Transportation Aid",
    image: "/assets/img/Mask-group.png",
    description:
      "Gestiona y administra el transporte escolar. Ubicación en tiempo real, reportes y más.",
    icon: "/assets/aids/Transportation.png",
    link: "/transportation-aid",
  },
  {
    title: "Control Aid",
    image: "/assets/img/Control-Aid.png",
    description:
      "Mantén el control de los accesos, salidas y cambios. Administra solicitudes de padres y asistencia en clases.",
    icon: "/assets/aids/Control.png",
    link: "/control-aid",
  },
  {
    title: "Communication Aid",
    image: "/assets/img/Commuication-Aid.png",
    description:
      "Centraliza todas las herramientas y la comunicación en un solo lugar.",
    icon: "/assets/aids/Communication.png",
    link: "/communication-aid",
  },
  {
    title: "Chat Center",
    image: "/assets/img/Chat-center.png",
    description:
      "Atención a padres a través de chat. Crea y administra canales de servicio al cliente.",
    icon: "/assets/aids/Chat.png",
    link: "/chat-center",
  },
  {
    title: "Wellness Aid",
    image: "/assets/img/Wellness-Aid.png",
    description:
      "Crea encuestas y formularios personalizados. Administra registros médicos y más.",
    icon: "/assets/aids/Transportation.png",
    link: "/wellness-aid",
  },
  {
    title: "Market Aid",
    image: "/assets/img/Market-Aid.png",
    description: "Punto de venta digital. Administra cobros, membresías y más.",
    icon: "/assets/aids/Market.png",
    link: "/market",
  },
];
</script>
<template>
  <div
    class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:px-16 lg:px-4 md:px-4"
  >
    <SCard
      v-for="(item, index) in ecosystems"
      :key="index"
      :id-item="index"
      :item="item"
    />
  </div>
</template>
