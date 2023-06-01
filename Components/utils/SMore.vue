<template>
  <NuxtLink
    class="PoppinsLight text-base border-2 border-white rounded-full py-2 px-4 text-white font-bold flex items-center gap-4 transition duration-200 bg-[#537FF7]"
  >
    {{ $t("Conoce más") }}
    <div class="arrow-wrapper">
      <div class="arrow"></div>
    </div>
  </NuxtLink>
</template>
<style>
a {
  --secondary-color: #fff;
}
a .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
a .arrow {
  margin-top: 3px;
  width: 10px;
  background: var(--primary-color);
  height: 2px;
  position: relative;
  transition: 0.2s;
}
a .arrow::before {
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
a:hover .arrow {
  background: var(--secondary-color);
}
a:hover .arrow:before {
  right: 0;
}
</style>
