<template>
  <div class="flex flex-col md:flex-row">
    <div class="md:order-1 order-2 md:w-1/2">
      <div
        class="PoppinsLight min-[1535px]:px-24 px-8 py-4 pb-10 font-bold text-xl"
      >
        <div class="2xl:px-16 res-space-aid">
          <p class="text-black">
            {{
              $t(
                "Crea y administra un mercado totalmente digital para vender de manera fácil."
              )
            }}
          </p>
          <div>
            <ul class="PoppinsLight list-disc pl-8">
              <li class="py-4">
                {{ $t("Uniformes.") }}
              </li>
              <li class="pb-4">
                {{ $t("Útiles escolares.") }}
              </li>
              <li>
                {{ $t("Cafetería.") }}
              </li>
            </ul>
          </div>
        </div>
        <div class="2xl:px-16 pt-12 res-space-aid">
          <p class="text-black">
            {{
              $t(
                "Crea membresías de cobro automático para facilitar los procesos de pago de:"
              )
            }}
          </p>
          <div>
            <ul class="PoppinsLight list-disc pl-8">
              <li class="py-4">
                {{ $t("Colegiaturas.") }}
              </li>
              <li class="pb-4">
                {{ $t("Cuota de bus escolar.") }}
              </li>
              <li>
                {{ $t("Servicios mensuales.") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col bg-[#537FF7] PoppinsLight min-[1535px]:px-24 px-8 py-16 md:pb-72 text-xl text-white"
      >
        <div class="2xl:px-16 res-space-aid">
          <div class="bg-[#18D3AF] rounded-lg px-4 py-4 w-max">
            <img src="/assets/icons/Vector.png" class="w-8" />
          </div>
          <div>
            <h1 class="PoppinsBold text-3xl py-8">
              {{ $t("Reportes") }}
            </h1>
            <ul class="PoppinsLight list-disc pl-8 md:pr-24">
              <li class="pb-10">
                {{
                  $t(
                    "Plataforma administrativa para gestionar cobros, moras, estados de cuenta, membresías, productos, inventario, etc."
                  )
                }}
              </li>
              <li class="pb-10">
                {{ $t("Historial de todos los cobros, pagos, etc.") }}
              </li>
              <li class="pb-10">
                {{ $t("Genera reportes.") }}
              </li>
              <li class="pb-10">
                {{ $t("Personalización según necesidades del colegio.") }}
              </li>
              <li class="pb-10">
                {{ $t("Recordatorios de pago a papas.") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="order-2 md:order-1 md:w-1/2">
      <div class="md:flex hidden md:-ml-[200px] relative pt-96 overflow-hidden">
        <img src="/assets/bg/aid_1.png" alt="" />
        <div class="md:pb-32 pb-16">
          <img
            src="/assets/bg/market.png"
            class="z-50 md:ml-36 absolute md:top-60 md:pt-72 top-20 left-0 rounded-lg img-size"
            alt=""
          />
        </div>
      </div>
      <div class="md:hidden relative py-10 pb-36 overflow-hidden">
        <img src="/assets/bg/aid_1.png" alt="" />
        <div class="pt-4">
          <img
            src="/assets/bg/market.png"
            class="z-50 absolute top-20 left-0 rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.img-size {
  width: 80%;
  height: auto;
}
</style>
