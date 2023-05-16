<template>
  <div class="flex flex-col md:flex-row">
    <div class="md:order-1 order-2 md:w-1/2">
      <div class="PoppinsLight xl:px-16 px-8 py-4 pb-16 font-bold text-xl">
        <p class="text-black 2xl:px-16">
          Plataforma web para mejor administración del transporte escolar.
          Ubicación y tráfico en tiempo real. Alertas y notificaciones de
          proximidad.
        </p>
      </div>
      <div
        class="flex flex-col bg-[#537FF7] PoppinsLight xl:px-16 px-8 py-16 font-bold text-xl text-white"
      >
        <div class="2xl:px-16">
          <div class="bg-[#18D3AF] rounded-lg px-4 py-4 w-max">
            <img src="/assets/icons/Vector.png" class="w-8" />
          </div>
          <div>
            <h1 class="PoppinsBold text-3xl py-6">Reportes</h1>
            <ul class="list-disc pl-8">
              <li class="pb-2">Trazabilidad.</li>
              <li class="pb-2">Asistencia en rutas.</li>
              <li class="pb-2">Alertas de velocidad.</li>
              <li class="pb-2">Horas en parada.</li>
              <li class="pb-2">Tráfico.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="PoppinsLight xl:px-16 px-8 py-8 pb-16 font-bold text-xl">
        <p class="text-black 2xl:px-16">
          Permite a los padres ver la ubicación exacta del transporte escolar en
          tiempo real a través de la app.
        </p>
        <p class="text-black pt-6 2xl:px-16">
          Visualiza los tiempos de llegada estimados por parada, recibe
          notificaciones push durante la ruta y alertas de proximidad.
        </p>
      </div>
    </div>
    <div class="order-2 md:order-1 md:w-1/2"></div>
  </div>
</template>
