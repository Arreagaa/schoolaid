<template>
  <div>
    <div
      class="w-full max-w-custom mx-auto flex items-center justify-between py-3 min-[1536px]:px-12 max-[375px]:px-2 px-4 xl:py-10 max-[1279px]:px-4 sm:py-8"
    >
      <div
        class="flex flex-col w-full md:w-2/5 justify-center text-center md:text-left xl:px-0 px-1"
      >
        <h1
          class="ModeratBlack my-4 xl:text-6xl size-responsive text-4xl max-[375px]:text-3xl font-bold leading-tight"
          :class="$i18n.locale === 'es' ? 'xl:pr-0' : 'xl:pr-16'"
        >
          {{ $t("Simplificamos procesos") }}
          <span class="text-[#F66750] underline">{{
            $t("mejoramos relaciones")
          }}</span>
        </h1>
        <p
          class="PoppinsRegular leading-normal xl:text-xl text-lg my-4 xl:my-4 mb-8 xl:pr-16"
        >
          {{
            $t(
              "Automatiza y simplifica los procesos diarios entre colegio y padres de familia."
            )
          }}
        </p>
      </div>
    </div>
    <div class="xl:py-56 py-28" />
  </div>
</template>
<style>
@media (min-width: 1284px) and (max-width: 1553px) {
  .size-responsive {
    font-size: 48px;
  }
}
</style>
