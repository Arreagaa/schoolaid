<script setup>
import SBagTitleAid from "../utils/SBagTitleAid.vue";
</script>
<template>
  <div class="flex flex-col xl:flex-row py-8">
    <div class="xl:order-2 order-2 xl:w-1/2">
      <div class="md:py-8 pb-8">
        <video
          v-if="$i18n.locale === 'es'"
          src="/assets/videos/QR-ES.mp4"
          class="mx-auto sm:w-[70%]"
          autoplay
          loop
        />
        <video
          v-else
          src="/assets/videos/QR-EN.mp4"
          class="mx-auto sm:w-[70%]"
          autoplay
          loop
        />
      </div>
    </div>
    <div class="order-1 xl:order-2 xl:w-1/2">
      <div class="PoppinsLight font-bold text-xl xl:pt-0">
        <SBagTitleAid title="Control Aid+" image="/assets/aids/Control.png" />
        <div class="text-black px-8 2xl:pr-36">
          <p class="pt-4 pb-8 min-[1700px]:pr-36">
            {{
              $t(
                "Automatización de línea de automóvil mediante verificación de código QR individual. Los códigos se actualizan automáticamente con los cambios realizados por los padres, para que la salida de alumnos sea efectiva y más rápida."
              )
            }}
          </p>
          <ul class="custom-list-market px-4">
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
                $t(
                  "Botón para eficientizar colas en horario de salida en auto."
                )
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
    </div>
  </div>
</template>
