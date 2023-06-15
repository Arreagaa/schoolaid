<script setup>
import SBagTitleAid from "../utils/SBagTitleAid.vue";
</script>
<template>
  <div class="flex flex-col xl:flex-row py-8">
    <div class="xl:order-2 order-2 xl:w-1/2">
      <div class="md:py-8 pb-8">
        <img src="/assets/bg/communication.png" class="mx-auto sm:w-[70%]" />
      </div>
    </div>
    <div class="order-1 xl:order-2 xl:w-1/2">
      <div class="PoppinsLight font-bold xl:text-xl text-lg xl:pt-0">
        <SBagTitleAid
          title="Communication Aid+"
          image="/assets/aids/Communication.png"
        />
        <div class="text-black px-8 2xl:pr-36">
          <p class="pt-4 pb-8 min-[1700px]:pr-36">
            {{
              $t(
                "Personalización de la pantalla inicial con el logotipo de la institución."
              )
            }}
          </p>
          <ul class="custom-list-communication px-4 lg:pb-0 pb-4">
            <li class="pb-8">
              {{ $t("Consulta de calificaciones o estados de cuenta.") }}
            </li>
            <li class="pb-8">
              {{
                $t(
                  "Integraciones a portal de pagos, redes sociales, página web y Learning Management Systems."
                )
              }}
            </li>
            <li class="pb-8">
              {{ $t("Recepción de mensajes a través del inbox.") }}
            </li>
            <li class="pb-8">
              {{ $t("Consulta de documentos y otra información importante.") }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.custom-list-communication {
  list-style-type: none;
  margin-left: 1.25rem;
  position: relative;
}
.custom-list-communication li:before {
  content: "";
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: #f66750;
  position: absolute;
  left: -1rem;
  margin-top: 3px;
}
</style>
