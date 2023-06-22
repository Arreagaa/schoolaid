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
  mounted() {
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "csz7m2co",
    };

    (function () {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
      } else {
        var d = document;
        var i = function () {
          i.c(arguments);
        };
        i.q = [];
        i.c = function (args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function () {
          var s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.intercom.io/widget/csz7m2co";
          var x = d.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
        };
        if (document.readyState === "complete") {
          l();
        } else if (w.attachEvent) {
          w.attachEvent("onload", l);
        } else {
          w.addEventListener("load", l, false);
        }
      }
    })();
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
    </div>
  </section>
  <section>
    <Sbanner />
  </section>
  <section id="about" class="max-w-custom pt-16 pb-8">
    <SBagTitle
      :title="$t('¿Cómo te ayudamos?')"
      image="/assets/aids/Ayuda.png"
    />
    <div class="pb-8">
      <SShow />
    </div>
  </section>
  <section class="pt-8 mb-0 pb-0">
    <div class="max-w-custom">
      <SBagTitle
        :title="$t('Tipos de Instituciones')"
        :description="$t('Quienes utilizan nuestros productos:')"
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
  <section id="ecosystem" class="max-w-custom py-16">
    <SBagTitle
      :title="$t('Nuestro Ecosistema Aid')"
      image="/assets/aids/Aid.png"
    />
    <div class="md:py-8 md:pt-8 pt-0">
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
