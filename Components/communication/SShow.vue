<template>
  <div class="flex flex-col xl:flex-row relative">
    <div class="xl:order-1 order-2 xl:w-3/5">
      <div
        class="PoppinsLight min-[1700px]:px-36 min-[1535px]:px-24 px-8 py-4 font-bold xl:text-xl text-lg"
        :class="$i18n.locale === 'es' ? '' : 'aid-res'"
      >
        <p class="text-black 2xl:px-16 res-space-aid">
          {{
            $t(
              "Centraliza toda la comunicación del colegio desde un mismo lugar y agiliza el envío de circulares, notificaciones e información importante."
            )
          }}
        </p>
        <p class="text-black 2xl:px-16 res-space-aid py-8">
          {{
            $t(
              "Single sign-in para otras plataformas, consultas de notas o estados de cuenta con integraciones a portal de pagos, redes sociales, página web, Colegium, Facts, PowerSchool, Homeland, iSams, y otras plataformas."
            )
          }}
        </p>
      </div>
      <div
        class="PoppinsLight bg-[#537FF7] lg:rounded-r-lg min-[1669px]:px-36 min-[1535px]:px-24 px-8 2xl:py-24 py-16 xl:text-xl text-lg text-white"
      >
        <div class="2xl:px-16 res-space-aid">
          <div class="bg-[#18D3AF] rounded-xl px-4 py-4 w-max">
            <img src="/assets/icons/Vector.png" class="w-8" />
          </div>
          <div>
            <h1 class="PoppinsBold text-3xl py-8">
              {{ $t("Características") }}
            </h1>
            <ul class="PoppinsLight list-disc pl-8 xl:pr-24">
              <li class="pb-10">
                {{
                  $t(
                    "Envío de mensajes a través de notificaciones push a la app."
                  )
                }}
              </li>
              <li class="pb-10">
                {{
                  $t(
                    "Filtros de segmentación por niveles de grado, grados, grupos específicos o por estudiante."
                  )
                }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="order-2 xl:order-1 xl:w-1/2">
      <img
        src="/assets/bg/Communication-admin.png"
        class="xl:block hidden xl:absolute w-[50%] absolute bottom-0 right-0"
      />
      <img
        src="/assets/bg/Communication-admin.png"
        class="xl:hidden w-full pt-4"
      />
    </div>
  </div>
</template>
<style>
@media (min-width: 1502px) and (max-width: 1517px) {
  .aid-res {
    padding-right: 4rem;
  }
}
</style>
