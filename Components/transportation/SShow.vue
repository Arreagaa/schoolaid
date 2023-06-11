<template>
  <div class="flex flex-col xl:flex-row relative">
    <div class="xl:order-1 order-2 xl:w-3/5">
      <div
        class="PoppinsLight min-[1700px]:px-36 min-[1535px]:px-24 px-8 py-4 font-bold xl:text-xl text-lg"
        :class="$i18n.locale === 'es' ? '' : 'aid-res'"
      >
        <p class="text-black 2xl:px-16 res-space-aid pb-8">
          {{
            $t(
              "Plataforma web para mejor administración del transporte escolar. Ubicación y tráfico en tiempo real. Alertas y notificaciones de proximidad."
            )
          }}
        </p>
      </div>
      <div
        class="PoppinsLight bg-[#537FF7] min-[1669px]:px-36 min-[1535px]:px-24 px-8 2xl:py-24 py-16 xl:text-xl text-lg text-white"
      >
        <div class="2xl:px-16 res-space-aid">
          <div class="bg-[#18D3AF] rounded-xl px-4 py-4 w-max">
            <img src="/assets/icons/Vector.png" class="w-8" />
          </div>
          <div>
            <h1 class="PoppinsBold text-3xl py-8">
              {{ $t("Reportes") }}
            </h1>
            <ul class="list-disc pl-8">
              <li class="pb-2">{{ $t("Trazabilidad.") }}</li>
              <li class="pb-2">{{ $t("Asistencia en rutas.") }}</li>
              <li class="pb-2">{{ $t("Alertas de velocidad.") }}</li>
              <li class="pb-2">{{ $t("Horas en parada.") }}</li>
              <li class="pb-2">{{ $t("Tráfico.") }}</li>
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
        <p class="text-black pt-6 2xl:px-16 res-space-aid md:pb-16 pb-8">
          {{
            $t(
              "Visualiza los tiempos de llegada estimados por parada, recibe notificaciones push durante la ruta y alertas de proximidad."
            )
          }}
        </p>
      </div>
    </div>
    <div class="order-2 xl:order-1 xl:w-1/2 2xl:-ml-[40px]">
      <img
        src="/assets/bg/Transportation.png"
        class="xl:block hidden xl:absolute min-[1400px]:w-[55%] w-[60%] absolute min-[1700px]:bottom-0 bottom-20 right-0"
      />
      <img src="/assets/bg/Transportation.png" class="xl:hidden w-full" />
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
@media (min-width: 1502px) and (max-width: 1517px) {
  .aid-res {
    padding-right: 4rem;
  }
}
</style>
