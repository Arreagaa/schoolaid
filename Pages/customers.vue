<script setup>
import AppHeaderVue from "~/Layouts/AppHeader.vue";
import SBagTitleCustomers from "~/Components/utils/SBagTitleCustomers.vue";
import SShow from "~/Components/customers/SShow.vue";
import AppFooter from "~/Layouts/AppFooter.vue";
</script>
<template>
  <section>
    <div>
      <AppHeaderVue />
    </div>
  </section>
  <section>
    <div class="max-w-custom px-6">
      <SBagTitleCustomers :title="$t('Integraciones')" />
    </div>
    <div>
      <SShow />
    </div>
  </section>
  <section>
    <div>
      <AppFooter />
    </div>
  </section>
</template>
