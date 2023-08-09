<script>
import AppFooter from "~/Layouts/AppFooter.vue";
import SHeader from "~/Components/users-data/SHeader.vue";
import SPassword from "~/Components/users-data/SPassword.vue";

export default {
  components: {
    AppFooter,
    SHeader,
    SPassword,
  },
};
</script>
<template>
  <div>
    <SHeader />
    <SPassword />
    <AppFooter />
  </div>
</template>
