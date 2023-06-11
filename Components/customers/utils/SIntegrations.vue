<script setup>
import SBagTitleCustomers from '~/Components/utils/SBagTitleCustomers.vue';
</script>
<template>
  <div>
    <SBagTitleCustomers :title="$t('Integraciones')" />
  </div>
  <div
    class="flex items-center text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0"
  >
    <div class="p-4">
      <img src="/assets/integrations/logo-facts.png" class="w-36" alt="" />
    </div>
    <div class="p-4">
      <img src="/assets/integrations/power.png" class="w-36" alt="" />
    </div>
    <div class="p-4">
      <img src="/assets/integrations/odoo.png" class="w-36" alt="" />
    </div>
    <div class="p-4">
      <img src="/assets/integrations/isams.png" class="w-36" alt="" />
    </div>
  </div>

  <div
    class="flex items-center text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3"
  >
    <div class="p-4">
      <img src="/assets/integrations/homeland.png" class="w-36" alt="" />
    </div>
    <div class="p-4">
      <img src="/assets/integrations/classroom.png" class="w-36" alt="" />
    </div>
    <div class="p-4 md:flex hidden">
      <img src="/assets/integrations/logoM.png" class="w-48" alt="" />
    </div>
  </div>

  <div
    class="md:hidden flex items-center justify-center text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1"
  >
    <div class="p-4 flex justify-center">
      <img src="/assets/integrations/logoM.png" class="w-48" alt="" />
    </div>
  </div>
</template>
