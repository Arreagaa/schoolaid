<template>
  <div class="flex flex-col lg:flex-row">
    <div class="lg:order-1 order-2 lg:w-1/2">
      <div class="PoppinsLight font-bold lg:text-xl text-base px-12 text-black">
        <h1 class="ModeratBlack xl:text-5xl text-3xl text-black pb-8 pt-2">
          ¿Qué es?
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
        <p class="PoppinsBold text-3xl py-8">
          {{ $t("Incluye:") }}
        </p>
        <ul class="px-4 custom-list">
          <li class="pb-8">
            {{ $t("Control de accesos y salidas a través de Código QR.") }}
          </li>
          <li class="pb-8">
            {{
              $t(
                "Generación de códigos para personas autorizadas para recoger niños, y compartirlos por cualquier medio."
              )
            }}
          </li>
          <li class="pb-8">
            {{ $t("Invitaciones para proveedores y visitas provisionales.") }}
          </li>
          <li class="pb-8">
            {{
              $t("Botón para eficientizar colas en horario de salida en auto.")
            }}
          </li>
          <li class="pb-8">
            {{
              $t(
                "Trazabilidad de entradas y salidas y reportes en tiempo real."
              )
            }}
          </li>
        </ul>
      </div>
    </div>
    <div class="order-2 lg:order-1 lg:w-1/2"></div>
  </div>
</template>
<style>
.custom-list {
  list-style-type: none;
  margin-left: 1.25rem;
  position: relative;
}

.custom-list li:before {
  content: "";
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: #f3be18;
  position: absolute;
  left: -1rem;
  margin-top: 3px;
}
</style>
