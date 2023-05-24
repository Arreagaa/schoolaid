<template>
  <div class="flex flex-col md:flex-row">
    <div class="md:order-1 order-2 md:w-1/2">
      <div class="PoppinsLight min-[1535px]:px-24 px-8 py-4 pb-10 font-bold text-xl">
        <p class="text-black 2xl:px-16 res-space-aid">
          {{
            $t(
              "Mejora la comunicación entre el colegio y padres de familia. Crea canales de chat por departamento, área, o nivel de grado para mejorar tiempos de respuesta y atención al cliente para padres. Gestiona chats de entre padres, maestros y personal administrativo."
            )
          }}
        </p>
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
              {{ $t("Características") }}
            </h1>
            <ul class="PoppinsLight list-disc pl-8 md:pr-24">
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
    <div class="order-2 md:order-1 md:w-1/2">
      <div class="md:-ml-[72px] overflow-hidden">
        <img src="/assets/bg/chat.png" alt="" />
      </div>
    </div>
  </div>
</template>
