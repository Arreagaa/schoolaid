<script setup>
import SCard from "./SCard.vue";
const aids = [
  {
    icon: "/assets/icons/1.png",
    description:
      "Crea y administra un mercado totalmente digital para vender de manera fácil.",
    color: "#F3BE18",
  },
  {
    icon: "/assets/icons/2.png",
    description:
      "Crea membresías de cobro automático para facilitar los procesos de pago.",
    color: "#537FF7",
  },
  {
    icon: "/assets/icons/3.png",
    description:
      "Gestiona cobros, estados de cuenta, productos, inventario, etc.",
    color: "#18D3AF",
  },
  {
    icon: "/assets/icons/4.png",
    description: "Personaliza el punto de venta según tus necesidades.",
    color: "#F66750",
  },
];
</script>
<template>
  <div
    class="grid overflow-hidden sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-y-10 xl:py-36"
  >
    <SCard
      v-for="(item, index) in aids"
      :key="index"
      :id-item="index"
      :item="item"
    />
  </div>
</template>
