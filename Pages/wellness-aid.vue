<script setup>
import AppHeaderVue from "~/Layouts/AppHeader.vue";
import SShow from "~/Components/wellness/SShow.vue";
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
          title="Wellness Aid"
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
