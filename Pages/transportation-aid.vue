<script setup>
import AppHeaderVue from "~/Layouts/AppHeader.vue";
import SShow from "~/Components/transportation/SShow.vue";
import STransportation from "~/Components/transportation/STransportation.vue";
import AppFooter from "~/Layouts/AppFooter.vue";
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
        <SBagTitleAid
          title="Transportation Aid"
          image="/assets/aids/Transportation.png"
        />
      </div>
      <div>
        <SShow />
        <STransportation />
      </div>
    </div>
  </section>
  <section>
    <div>
      <AppFooter />
    </div>
  </section>
</template>
