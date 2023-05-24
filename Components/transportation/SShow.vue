<script setup>
import SBagTitleAid from "../utils/SBagTitleAid.vue";
</script>
<template>
  <div class="flex flex-col md:flex-row">
    <div class="md:order-1 order-2 md:w-1/2">
      <div
        class="PoppinsLight min-[1535px]:px-24 px-8 py-4 pb-16 font-bold text-xl"
      >
        <p class="text-black 2xl:px-16 res-space-aid">
          {{
            $t(
              "Plataforma web para mejor administración del transporte escolar. Ubicación y tráfico en tiempo real. Alertas y notificaciones de proximidad."
            )
          }}
        </p>
      </div>
      <div
        class="flex flex-col bg-[#537FF7] PoppinsLight min-[1535px]:px-24 px-8 py-16 text-xl text-white"
      >
        <div class="2xl:px-16 res-space-aid">
          <div class="bg-[#18D3AF] rounded-lg px-4 py-4 w-max">
            <img src="/assets/icons/Vector.png" class="w-8" />
          </div>
          <div>
            <h1 class="PoppinsBold text-3xl py-6">{{ $t("Reportes") }}</h1>
            <ul class="list-disc pl-8">
              <li class="pb-2">{{ $t("Trazabilidad.") }}</li>
              <li class="pb-2">{{ $t("Asistencia en rutas.") }}</li>
              <li class="pb-2">{{ $t("Alertas de velocidad.") }}</li>
              <li class="pb-2">{{ $t("Horas en parada.") }}</li>
              <li class="pb-2">{{ $t("Tráfico.") }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="PoppinsLight min-[1535px]:px-24 px-8 pt-8 font-bold text-xl">
        <p class="text-black 2xl:px-16 res-space-aid">
          {{
            $t(
              "Permite a los padres ver la ubicación exacta del transporte escolar en tiempo real a través de la app."
            )
          }}
        </p>
        <p class="text-black pt-6 2xl:px-16 res-space-aid pb-16">
          {{
            $t(
              "Visualiza los tiempos de llegada estimados por parada, recibe notificaciones push durante la ruta y alertas de proximidad."
            )
          }}
        </p>
      </div>
      <div class="PoppinsLight xl:px-16 px-8">
        <div class="flex items-center text-center">
          <img src="/assets/bg/img+.png" alt="" />
        </div>
      </div>
    </div>
    <div class="order-2 md:order-1 md:w-1/2">
      <div class="md:-ml-[72px] relative overflow-hidden">
        <img src="/assets/bg/aid_1.png" alt="" />
        <div class="md:pb-32 pb-16">
          <img
            src="/assets/img/transport.png"
            class="z-50 md:ml-16 absolute md:top-60 top-20 left-0 rounded-lg"
            alt=""
          />
        </div>
      </div>
      <div class="PoppinsLight font-bold text-xl md:pt-0 pt-8">
        <SBagTitleAid
          title="Transportation Aid+"
          image="/assets/aids/Transportation.png"
        />
        <h1 class="text-black 2xl:px-8 md:px-0 px-8 res-space-aid">
          {{ $t("Nueva Alianza con Grupo Golán") }}
        </h1>
        <p
          class="text-black pt-6 min-[1669px]:px-8 min-[1669px]:pr-36 xl:pr-36 min-[1669px]:pb-36 md:px-0 px-8 pb-16 text-justify"
        >
          {{
            $t(
              "Ahora los colegios en Guatemala y El Salvador pueden optar por incluir un botón de pánico en el transporte escolar y ante cualquier situación de riesgo, un Especialista en Atención de Seguridad de Golán, atenderá la señal de emergencia desde la App de SchoolAid y una Patrulla REDIPAT se despachará de inmediato hacia la ubicación del bus."
            )
          }}
        </p>
      </div>
    </div>
  </div>
</template>
<style>
@media (min-width: 1536px) and (max-width: 1669px) {
  .res-space-aid {
    padding-left: 0%;
    padding-right: 0%;
  }
}
</style>
