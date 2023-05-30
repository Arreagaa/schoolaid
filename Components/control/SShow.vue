<script setup>
import SBagTitleAid from "../utils/SBagTitleAid.vue";
</script>
<template>
  <div class="flex flex-col lg:flex-row">
    <div class="lg:order-1 order-2 lg:w-1/2">
      <div class="PoppinsLight min-[1535px]:px-24 px-8 py-4 font-bold text-xl">
        <p class="text-black 2xl:px-16 res-space-aid pb-8">
          {{
            $t(
              "Plataforma administrativa para eficientizar solicitudes de padres. Trazabilidad de todos los cambios, ausencias y solicitudes."
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
            <h1 class="PoppinsBold text-3xl py-8">
              {{ $t("Características") }}
            </h1>
            <ul class="PoppinsLight list-disc pl-8 lg:pr-24">
              <li class="pb-10">
                {{
                  $t(
                    "Agiliza las solicitudes de los padres y los cambios en la salida de alumnos."
                  )
                }}
              </li>
              <li class="pb-10">
                {{
                  $t(
                    "Obtener el registro de todos los cambios, ausencias y solicitudes de todos los estudiantes."
                  )
                }}
              </li>
              <li class="pb-16">
                {{ $t("Reportes por fecha, nivel, grado o por alumno.") }}
              </li>
              <li class="pb-16">
                {{ $t("Genera pases digitales o físicos.") }}
              </li>
              <li class="pb-16">
                {{ $t("Gestiona y automatizar la asistencia.") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="PoppinsLight xl:px-16 lg:py-16 px-8">
        <div class="lg:flex hidden items-center text-center">
          <img src="/assets/bg/img+.png" alt="" />
        </div>
      </div>
    </div>
    <div class="order-2 lg:order-1 lg:w-1/2">
      <div class="lg:-ml-[72px] overflow-hidden">
        <img src="/assets/bg/aids.png" alt="" />
      </div>
      <div class="PoppinsLight font-bold text-xl pt-4">
        <SBagTitleAid title="Control Aid+" image="/assets/aids/Control.png" />
        <div class="text-black px-8 res-space-aid">
          <p class="pt-4 pb-8 min-[166px]:pr-36">
            {{
              $t(
                "Automatización de línea de automóvil mediante verificación de código QR individual. Los códigos se actualizan automáticamente con los cambios realizados por los padres, para que la salida de alumnos sea efectiva y más rápida."
              )
            }}
          </p>
          <ul class="custom-list min-[1669px]:pl-4 min-[1669px]:pr-64">
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
        <div class="lg:hidden items-center text-center">
          <img src="/assets/bg/img+.png" alt="" />
        </div>
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
  left: -2rem;
}
</style>
