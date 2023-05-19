<template>
  <div class="flex items-center text-center">
    <button
      class="xl:text-lg text-base border-2 border-white rounded-full py-2 px-6 text-white font-bold flex items-center gap-4 transition duration-200 bg-[#18D3AF]"
    >
      {{ $t("Enviar") }}
      <div class="arrow-wrapper">
        <div class="arrow"></div>
      </div>
    </button>
  </div>
</template>
<style>
button {
  --secondary-color: #fff;
}
button .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
button .arrow {
  margin-top: 3px;
  width: 10px;
  background: var(--primary-color);
  height: 2px;
  position: relative;
  transition: 0.2s;
}
button .arrow::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  border-width: 0 2px 2px 0;
  display: inline-block;
  top: -3px;
  right: 3px;
  transition: 0.2s;
  padding: 3px;
  transform: rotate(-45deg);
}
button:hover .arrow {
  background: var(--secondary-color);
}
button:hover .arrow:before {
  right: 0;
}
</style>
