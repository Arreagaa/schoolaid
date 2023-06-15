<script setup>
import SInfo from "./utils/SInfo.vue";
</script>
<template>
  <div
    class="2xl:container md:container-none max-[1430px]:container m-auto md:px-6 px-10 max-[375px]:px-6 xl:pt-8 text-gray-500"
  >
    <div class="PoppinsMedium text-black xl:text-xl text-lg xl:px-10 pb-4">
      <p class="pb-4">
        {{
          $t(
            "SchoolAid es una plataforma (SaaS) que automatiza y simplifica las operaciones diarias de instituciones educativas."
          )
        }}
      </p>
      <p class="pb-4">
        {{
          $t(
            "Nos enfocamos en cuatro áreas clave para hacer más eficiente la gestión de procesos y mejorar la relación con los padres de familia."
          )
        }}
      </p>
    </div>
    <SInfo />
  </div>
</template>