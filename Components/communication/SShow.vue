<template>
  <div class="flex flex-col md:flex-row">
    <div class="md:order-1 order-2 md:w-1/2">
      <div
        class="PoppinsLight min-[1535px]:px-24 max-[1535px]:pr-24 px-8 py-4 font-bold text-xl"
      >
        <p class="text-black 2xl:px-16 res-space-aid">
          {{
            $t(
              "Branding y personalización de pantalla inicial con logo de colegio."
            )
          }}
        </p>
      </div>
      <div
        class="PoppinsLight min-[1535px]:px-24 max-[1535px]:pr-24 px-8 py-4 pb-16 font-bold text-xl"
      >
        <p class="text-black 2xl:px-16 res-space-aid">
          {{
            $t(
              "Single sign-in para otras plataformas, consultas de notas o estados de cuenta con integraciones a portal de pagos, redes sociales, página web, Colegium, Facts, PowerSchool, Homeland, iSams, y otras plataformas."
            )
          }}
        </p>
      </div>
      <div
        class="flex flex-col bg-[#537FF7] PoppinsLight min-[1535px]:px-24 px-8 py-16 md:pb-56 text-xl text-white"
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
                {{
                  $t(
                    "Envía mensajes a través de notificaciones push a la App de padres y centraliza toda la comunicación de manera simple, utilizando filtros de segmentación para enviar mensajes por niveles de grado, grados, grupos específicos o por estudiante."
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
        <img src="/assets/bg/Communication.png" alt="" />
      </div>
    </div>
  </div>
</template>
