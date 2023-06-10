<template>
  <div class="flex flex-col lg:flex-row">
    <div class="lg:order-1 order-2 lg:w-1/2">
      <div
        class="PoppinsLight min-[1535px]:px-24 px-8 py-4 pb-16 font-bold text-xl"
      >
        <p class="text-black 2xl:px-16 res-space-aid">
          {{
            $t(
              "Módulo de encuestas y formularios personalizados para responder a través de la App de padres."
            )
          }}
        </p>
      </div>
      <div
        class="flex flex-col bg-[#537FF7] PoppinsLight min-[1535px]:px-24 px-8 py-16 lg:pb-96 text-xl text-white"
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
                    "Monitorea la salud mental de los niños, detecta bullying, o haz encuestas de satisfacción por nivel de grado, sección o grupo específico."
                  )
                }}
              </li>
              <li class="pb-10">
                {{
                  $t(
                    "Recopila registros medicos, vacunación o permisos de administración de medicamentos."
                  )
                }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="order-2 lg:order-1 lg:w-1/2">
      <div class="lg:-ml-[72px] overflow-hidden">
        <img src="/assets/bg/wellnes_aid.png" alt="" />
      </div>
    </div>
  </div>
</template>
