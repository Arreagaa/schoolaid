<script setup>
import AppHeader from "~/Layouts/AppHeader.vue";
import SHero from "~/Components/SHero.vue";
import AppFooter from "~/Layouts/AppFooter.vue";
import Sbanner from "~/Components/landing/Sbanner.vue";
</script>
<template>
  <section id="Welcome">
    <div>
      <AppHeader />
    </div>
    <div class="bg-[url('/assets/bg/Header.png')] bg-cover xl:bg-center bg-left">
      <SHero />
      <div class="xl:py-56 py-28"></div>
    </div>
  </section>
  <section>
    <Sbanner />
  </section>
  <section class="pt-12">
    <AppFooter />
  </section>
</template>
