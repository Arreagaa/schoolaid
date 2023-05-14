<template>
  <div class="px-3 md:lg:xl:px-72 res-space-x">
    <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group">
      <div class="p-16 flex flex-col items-center text-center">
        <p class="ModeratBlack text-7xl text-[#F66750] py-3">+50</p>
        <p class="PoppinsLight font-bold mt-2 text-xl text-black">
          {{ $t("Colegios, Empresas y Academias") }}
        </p>
      </div>

      <div class="p-16 flex flex-col items-center text-center">
        <p class="ModeratBlack text-7xl text-[#537FF7] py-3">+50K</p>
        <p class="PoppinsLight font-bold mt-2 text-xl text-black">
          {{ $t("Usuarios satisfechos con opiniones positivas") }}
        </p>
      </div>

      <div
        class="p-16 min-[1282px]:px-28 flex flex-col items-center text-center"
      >
        <p class="ModeratBlack text-7xl text-[#F3BE18] py-3">+35K</p>
        <p class="PoppinsLight font-bold mt-2 text-xl text-black">
          {{ $t("Familias que usan la app a diario") }}
        </p>
      </div>
    </div>
  </div>
</template>
<style>
@media (min-width: 1282px) and (max-width: 1669px) {
  .res-space-x {
    padding-left: 0%;
    padding-right: 0%;
  }
}
</style>
