<template>
  <div class="flex flex-col xl:flex-row">
    <div class="flex items-center xl:order-1 order-2 xl:w-1/2">
      <div
        class="PoppinsLight font-bold xl:text-xl text-lg 2xl:px-12 md:px-6 px-8 text-black"
      >
        <h1 class="PoppinsBold lg:text-3xl text-2xl text-black py-8">
          {{ $t("¿Qué es?") }}
        </h1>
        <p>
          {{
            $t(
              "Market Aid es una solución de punto de venta para academias, gimnasios, colegios y otras instituciones que brindan servicios de suscripción, clases, eventos o bookings."
            )
          }}
        </p>
        <br />
        <p>
          {{
            $t(
              " Automatiza las gestiones de cobro, y facilita la administración de pagos, venta de productos, servicios y membresías."
            )
          }}
        </p>
      </div>
    </div>
    <div class="order-2 xl:order-1 xl:w-1/2">
      <div class="flex md:py-16 py-4">
        <img
          v-if="$i18n.locale === 'es'"
          src="/assets/bg/market-es.png"
          class="min-[1669px]:w-[80%] min-[1280px]:w-[75%] max-[1280px]:w-[55%] max-[760px]:w-full mx-auto"
          alt=""
        />
        <img
          v-else
          src="/assets/bg/market-en.png"
          class="min-[1669px]:w-[80%] min-[1280px]:w-[75%] max-[1280px]:w-[55%] max-[760px]:w-full mx-auto"
          alt=""
        />
      </div>
    </div>
  </div>
</template>