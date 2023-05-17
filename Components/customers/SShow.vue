<script setup>
import SIntegrations from "./utils/SIntegrations.vue";
import SClients from "./utils/SClients.vue";
</script>
<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 pb-4">
      <div>
        <div class="py-4 md:px-0 px-4">
          <SIntegrations />
        </div>
        <div class="pt-24">
          <SClients />
        </div>
      </div>
      <div class="md:py-0 py-16">
        <img src="/assets/bg/Instituciones.png" alt="" />
      </div>
    </div>
  </section>
</template>
