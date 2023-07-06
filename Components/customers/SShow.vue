<script setup>
import SIntegrations from "./utils/SIntegrations.vue";
import SClients from "./utils/SClients.vue";
</script>
<template>
  <section>
    <div class="grid grid-cols-1 lg:grid-cols-2 pb-4">
      <div class="max-w-custom 2xl:px-36 clients-responsive">
        <div class="xl:py-4 lg:px-0 px-4">
          <SIntegrations />
        </div>
        <div class="pt-16 lg:px-0 md:px-6">
          <SClients />
        </div>
      </div>
      <div class="pt-16">
        <img src="/assets/bg/Instituciones.png" alt="" />
      </div>
    </div>
  </section>
</template>
<style scoped>
@media (min-width: 1536px) and (max-width: 1669px) {
  .clients-responsive {
    padding-left: 36px;
  }
}
@media (min-width: 1016px) and (max-width: 1536px) {
  .clients-responsive {
    padding-left: 15px;
  }
}
</style>
