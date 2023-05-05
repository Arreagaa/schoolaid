<script>
import AppHeader from "~/Layouts/AppHeader.vue";
import SHero from "~/Components/landing/SHero.vue";
import AppFooter from "~/Layouts/AppFooter.vue";
import Sbanner from "~/Components/landing/Sbanner.vue";
import SBagTitle from "~/Components/landing/utils/SBagTitle.vue";
import SShow from "~/Components/applications/SShow.vue";
import SInstitutions from "~/Components/institutions/SInstitutions.vue";
import SVideo from "~/Components/landing/SVideo.vue";
import SEcosystems from "~/Components/ecosystems/SShow.vue";

export default {
  components: {
    AppHeader,
    SHero,
    AppFooter,
    Sbanner,
    SBagTitle,
    SShow,
    SInstitutions,
    SVideo,
    SEcosystems,
  },
};
</script>
<template>
  <section>
    <div>
      <AppHeader />
    </div>
    <div
      class="bg-[url('/assets/bg/Header.png')] bg-cover xl:bg-center bg-left"
    >
      <SHero />
      <div class="xl:py-56 py-28"></div>
    </div>
  </section>
  <section>
    <Sbanner />
  </section>
  <section class="max-w-custom py-16">
    <SBagTitle title="¿Cómo te ayudamos?" image="/assets/aids/Ayuda.png" />
    <div class="py-8">
      <SShow />
    </div>
  </section>
  <section class="pt-8 mb-0 pb-0">
    <div class="max-w-custom">
      <SBagTitle
        title="Tipos de Instituciones"
        description="Quienes utilizan nuestros productos:"
        image="/assets/aids/Instituciones.png"
      />
    </div>
    <div class="pt-8">
      <div class="2xl:flex">
        <div
          class="2xl:flex hidden image-responsive lg:hidden w-full max-w-xl w-3/5"
        >
          <img class="object-cover" src="/assets/bg/Clientes.png" />
        </div>
        <div class="w-full h-auto">
          <SInstitutions />
        </div>
      </div>
      <div class="xl:hidden w-full m-0">
        <img class="object-cover" src="/assets/bg/Clientes.png" />
      </div>
    </div>
  </section>
  <section>
    <div>
      <SVideo />
    </div>
  </section>
  <section class="max-w-custom py-16">
    <SBagTitle title="Nuestro Ecosistema Aids" image="/assets/aids/Aid.png" />
    <div class="py-8">
      <SEcosystems />
    </div>
  </section>
  <section class="">
    <AppFooter />
  </section>
</template>
<style>
@media (min-width: 1536px) and (max-width: 1537px) {
  .image-responsive {
    display: none;
  }
}
</style>
