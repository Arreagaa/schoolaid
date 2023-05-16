<script setup>
import AppHeaderVue from "~/Layouts/AppHeader.vue";
import SShow from "~/Components/transportation/SShow.vue";
import AppFooter from "~/Layouts/AppFooter.vue";
import SBagTitleAid from "~/Components/utils/SBagTitleAid.vue";
</script>
<template>
  <section>
    <div>
      <AppHeaderVue />
    </div>
  </section>
  <section class="pb-8">
    <div>
      <div class="2xl:px-16">
        <SBagTitleAid
          title="Transportation Aid"
          image="/assets/aids/Transportation.png"
        />
      </div>
      <div>
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
