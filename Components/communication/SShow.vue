<template>
  <div class="flex flex-col xl:flex-row">
    <div class="xl:order-1 order-2 xl:w-3/5">
      <div
        class="PoppinsLight min-[1669px]:px-24 max-[1669px]:pr-48 max-[1100px]:pr-0 px-8 py-4 font-bold xl:text-xl text-lg"
      >
        <p class="text-black 2xl:px-16 res-space-aid">
          {{
            $t(
              "Branding y personalización de pantalla inicial con logo de colegio."
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
        class="PoppinsLight bg-[#537FF7] min-[1535px]:px-24 px-8 py-16 xl:text-xl text-lg text-white"
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
                    "Envía mensajes a través de notificaciones push a la App de padres y centraliza toda la comunicación de manera simple, utilizando filtros de segmentación para enviar mensajes por niveles de grado, grados, grupos específicos o por estudiante."
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
        src="/assets/bg/Frame 1.png"
        class="w-full xl:absolute xl:w-[50%] 2xl:-mt-[6.1rem] xl:right-[0px] res-pt"
      />
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 1668px) and (max-width: 1669px) {
  .res-pt {
    padding-top: 110px;
  }
}
@media (min-width: 1665px) and (max-width: 1668px) {
  .res-pt {
    padding-top: 110px;
  }
}
@media (min-width: 1626px) and (max-width: 1650px) {
  .res-pt {
    padding-top: 120px;
  }
}
@media (min-width: 1596px) and (max-width: 1625px) {
  .res-pt {
    padding-top: 130px;
  }
}
@media (min-width: 1535px) and (max-width: 1595px) {
  .res-pt {
    padding-top: 140px;
  }
}
@media (min-width: 1470px) and (max-width: 1534px) {
  .res-pt {
    padding-top: 43px;
  }
}
@media (min-width: 1450px) and (max-width: 1469px) {
  .res-pt {
    padding-top: 128px;
  }
}
@media (min-width: 1440px) and (max-width: 1450px) {
  .res-pt {
    padding-top: 50px;
  }
}
@media (min-width: 1400px) and (max-width: 1439px) {
  .res-pt {
    padding-top: 140px;
  }
}
@media (min-width: 1300px) and (max-width: 1399px) {
  .res-pt {
    padding-top: 140px;
  }
}
</style>
