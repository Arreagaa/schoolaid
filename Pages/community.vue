<script setup>
import AppHeaderVue from "~/Layouts/AppHeader.vue";
import SShow from "~/Components/community/SShow.vue";
import AppFooter from "~/Layouts/AppFooter.vue";
</script>
<template>
  <section>
    <div>
      <AppHeaderVue />
    </div>
  </section>
  <section class="py-8">
    <div>
      <div class="md:pt-8">
        <SShow />
      </div>
    </div>
  </section>
  <section>
    <div>
      <AppFooter />
    </div>
  </section>
</template>
