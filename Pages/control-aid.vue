<script setup>
import AppHeaderVue from "~/Layouts/AppHeader.vue";
import SShow from "~/Components/control/SShow.vue";
import AppFooter from "~/Layouts/AppFooter.vue";
import SControl from "~/Components/control/SControl.vue";
import SBagTitleAid from "~/Components/utils/SBagTitleAid.vue";
</script>
<template>
  <section>
    <div>
      <AppHeaderVue />
    </div>
  </section>
  <section>
    <div>
      <div class="max-w-custom 2xl:px-8">
        <SBagTitleAid title="Control Aid" image="/assets/aids/Control.png" />
      </div>
      <div>
        <SShow />
        <SControl />
      </div>
    </div>
  </section>
  <section>
    <div>
      <AppFooter />
    </div>
  </section>
</template>
