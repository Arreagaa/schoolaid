<template>
  <div class="flex flex-col xl:flex-row relative">
    <div class="xl:order-1 order-2 xl:w-3/5">
      <div
        class="PoppinsLight min-[1700px]:px-36 min-[1535px]:px-24 px-8 py-4 font-bold xl:text-xl text-lg"
        :class="$i18n.locale === 'es' ? '' : 'aid-res'"
      >
        <p class="text-black 2xl:px-16 res-space-aid 2xl:pr-16 md:pr-28 pb-8">
          {{
            $t(
              "Mejora la comunicación entre el colegio y padres de familia. Crea canales de chat por departamento, área, o nivel de grado para mejorar tiempos de respuesta y atención al cliente para padres. Gestiona chats de entre padres, maestros y personal administrativo."
            )
          }}
        </p>
      </div>
      <div
        class="PoppinsLight bg-[#537FF7] rounded-r-lg min-[1669px]:px-36 min-[1535px]:px-24 px-8 2xl:py-24 py-16 xl:text-xl text-lg text-white"
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
                {{ $t("Establece horarios de atención.") }}
              </li>
              <li class="pb-10">
                {{ $t("Obtén el registro de todas las conversaciones.") }}
              </li>
              <li class="pb-10">
                {{
                  $t(
                    "Mantén la privacidad de las familias sin tener que compartir contactos telefónicos."
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
        src="/assets/bg/chat.png"
        class="xl:block hidden xl:absolute min-[1578px]:w-[50%] md:w-[55%] xl:right-[0px] absolute bottom-0 right-0"
      />
      <img src="/assets/bg/chat.png" class="xl:hidden w-full" />
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
