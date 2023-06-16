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
  <section class="pb-8 max-w-custom 2xl:px-8">
    <SBagTitle
      title="Market Aid"
      description="Business solution"
      image="/assets/aids/aid_market.png"
    />
    <div>
      <SMarket />
    </div>
  </section>
  <section>
    <div>
      <AppFooter />
    </div>
  </section>
</template>
