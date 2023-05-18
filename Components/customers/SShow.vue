<script setup>
import SIntegrations from "./utils/SIntegrations.vue";
import SClients from "./utils/SClients.vue";
</script>
<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 pb-4">
      <div class="max-w-custom 2xl:px-36 clients-responsive">
        <div class="xl:py-4 md:px-0 px-4">
          <SIntegrations />
        </div>
        <div class="pt-16">
          <SClients />
        </div>
      </div>
      <div class="md:pt-0 pt-16">
        <img src="/assets/bg/Instituciones.png" alt="" />
      </div>
    </div>
  </section>
</template>
<style>
@media (min-width: 1100px) and (max-width: 1669px) {
  .clients-responsive {
    padding-left: 36px;
    padding-right: 36px;
  }
}
</style>
