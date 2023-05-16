<script setup>
import AppHeaderVue from "~/Layouts/AppHeader.vue";
import AppFooter from "~/Layouts/AppFooter.vue";
import SMarket from "~/Components/banner/SMarket.vue";
import SBagTitle from "~/Components/landing/utils/SBagTitle.vue";
</script>
<template>
  <section>
    <div>
      <AppHeaderVue />
    </div>
  </section>
  <section class="pb-8 xl:px-6">
    <div class="max-w-custom">
      <SBagTitle
        title="Market Aid"
        description="Business solution"
        image="/assets/aids/aid_market.png"
      />
      <div>
        <SMarket />
      </div>
    </div>
  </section>
  <section>
    <div>
      <AppFooter />
    </div>
  </section>
</template>
