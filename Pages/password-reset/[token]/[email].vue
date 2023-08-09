<script>
import SHeader from "~/Components/users-data/SHeader.vue";
import SEmail from "~/Components/users-data/SEmail.vue";
import AppFooter from "~/Layouts/AppFooter.vue";

export default {
  components: {
    SHeader,
    SEmail,
    AppFooter,
  },
};
</script>
<template>
  <div>
    <SHeader />
    <SEmail />
    <AppFooter />
  </div>
</template>
