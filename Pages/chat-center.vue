<script setup>
import AppHeaderVue from "~/Layouts/AppHeader.vue";
import SShow from "~/Components/chat-center/SShow.vue";
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
        <SBagTitleAid title="Chat Center" image="/assets/aids/Chat.png" />
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
