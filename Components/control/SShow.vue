<template>
  <div class="flex flex-col xl:flex-row relative">
    <div class="xl:order-1 order-2 xl:w-3/5">
      <div
        class="PoppinsLight min-[1700px]:px-36 min-[1535px]:px-24 px-8 py-4 font-bold xl:text-xl text-lg"
      >
        <p class="text-black 2xl:px-16 res-space-aid pb-8">
          {{
            $t(
              "Optimiza la gestión de solicitudes de padres de familia y mejora la seguridad del colegio con seguimiento y documentación."
            )
          }}
        </p>
      </div>
      <div
        class="PoppinsLight bg-[#537FF7] rounded-r-lg min-[1669px]:px-36 min-[1535px]:px-24 px-8 py-16 xl:text-xl text-lg text-white"
      >
        <div class="2xl:px-16 res-space-aid">
          <div class="bg-[#18D3AF] rounded-xl px-4 py-4 w-max">
            <img src="/assets/icons/Vector.png" class="w-8" />
          </div>
          <div>
            <h1 class="PoppinsBold text-3xl py-8">
              {{ $t("Características") }}
            </h1>
            <ul class="PoppinsLight list-disc pl-8 2xl:pr-24 md:pr-32">
              <li class="pb-10">
                {{
                  $t(
                    "Registro de todos los cambios, ausencias y solicitudes de todos los estudiantes."
                  )
                }}
              </li>
              <li class="pb-10">
                {{ $t("Trazabilidad de check-ins y check-outs.") }}
              </li>
              <li class="pb-10">
                {{
                  $t(
                    "Personalización de solicitudes según necesidades de la institución."
                  )
                }}
              </li>
              <li class="pb-10">
                {{ $t("Gestiona y automatizar la asistencia.") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="order-2 xl:order-1 xl:w-1/2">
      <div v-if="$i18n.locale === 'es'" class="xl:pt-0 pt-8">
        <img
          src="/assets/bg/control-es.png"
          class="xl:block hidden xl:absolute w-[55%] absolute bottom-0 right-0"
        />
        <img src="/assets/bg/control-es.png" class="xl:hidden w-full" />
      </div>
      <div v-else class="xl:pt-0 pt-8">
        <img
          src="/assets/bg/control-en.png"
          class="xl:block hidden xl:absolute w-[55%] absolute bottom-0 right-0"
        />
        <img src="/assets/bg/control-en.png" class="xl:hidden w-full" />
      </div>
    </div>
  </div>
</template>
