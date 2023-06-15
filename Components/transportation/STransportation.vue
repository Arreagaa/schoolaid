<script setup>
import SBagTitleAid from "../utils/SBagTitleAid.vue";
</script>
<template>
  <div class="flex flex-col xl:flex-row">
    <div class="xl:order-2 order-2 xl:w-1/2">
      <div class="md:py-8 pb-8">
        <video
          v-if="$i18n.locale === 'es'"
          src="/assets/videos/TRANS-ES.mp4"
          class="min-[1450px]:w-[70%] max-[1280px]:w-[55%] max-[760px]:w-full mx-auto"
          autoplay
          loop
        />
        <video
          v-else
          src="/assets/videos/TRANS-EN.mp4"
          class="min-[1450px]:w-[70%] max-[1280px]:w-[55%] max-[760px]:w-full mx-auto"
          autoplay
          loop
        />
      </div>
    </div>
    <div class="order-1 xl:order-2 xl:w-1/2">
      <div class="PoppinsLight font-bold xl:text-xl text-lg xl:pt-0">
        <SBagTitleAid
          title="Transportation Aid+"
          image="/assets/aids/Transportation.png"
        />
        <div class="text-black px-8 2xl:pr-36">
          <h1>
            {{ $t("Nueva Alianza con Grupo Golán") }}
          </h1>
          <p class="py-6">
            {{
              $t(
                "Ahora los colegios en Guatemala y El Salvador pueden optar por incluir un botón de pánico en el transporte escolar y ante cualquier situación de riesgo, un Especialista en Atención de Seguridad de Golán, atenderá la señal de emergencia desde la App de SchoolAid y una Patrulla REDIPAT se despachará de inmediato hacia la ubicación del bus."
              )
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
