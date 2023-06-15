<script setup>
import AppHeaderVue from "~/Layouts/AppHeader.vue";
import SShow from "~/Components/communication/SShow.vue";
import AppFooter from "~/Layouts/AppFooter.vue";
import SCommunication from "~/Components/communication/SCommunication.vue";
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
          title="Communication Aid"
          image="/assets/aids/Communication.png"
        />
      </div>
      <div>
        <SShow />
        <SCommunication />
      </div>
    </div>
  </section>
  <section>
    <div>
      <AppFooter />
    </div>
  </section>
</template>
