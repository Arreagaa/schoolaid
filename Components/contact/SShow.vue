<script>
import SInput from "./utils/SInput.vue";
import SButtom from "./utils/SButtom.vue";
import SSend from "./utils/SSend.vue";
import STextarea from "./utils/STextarea.vue";
import SBagTitleCustomers from "../utils/SBagTitleCustomers.vue";

export default {
  components: {
    SInput,
    SButtom,
    STextarea,
    SSend,
    SBagTitleCustomers,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      institution: "",
      body: "",
    };
  },
};
</script>
<template>
  <section class="md:bg-[url('/assets/bg/Contacto.png')] bg-cover bg-center">
    <div class="max-w-custom flex flex-col md:flex-row">
      <div class="md:order-1 order-2 md:w-1/2">
        <div class="xl:px-8 px-4">
          <SBagTitleCustomers :title="$t('Contáctanos')" />
        </div>
        <div class="PoppinsLight xl:px-12 px-8 pb-8 font-bold text-xl">
          <p class="text-black">
            {{
              $t(
                "Envíanos tus datos para asesorarte con la mejor solución para ti"
              )
            }}
          </p>
        </div>
        <div
          class="PoppinsLight text-[#537FF7] font-bold xl:px-12 xl:pr-40 px-8 py-4 pb-16 text-base"
        >
          <div class="flex flex-col">
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <SInput
                  id="grid-first-name"
                  type="text"
                  :placeholder="$t('Nombre')"
                  :value="firstName"
                  @update:value="firstName = $event"
                />
              </div>
              <div class="md:w-1/2 px-3">
                <SInput
                  id="grid-last-name"
                  type="text"
                  :placeholder="$t('Apellido')"
                  :value="lastName"
                  @update:value="lastName = $event"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <SInput
                  id="grid-text"
                  type="text"
                  :placeholder="$t('Correo electrónico')"
                  :value="email"
                  @update:value="email = $event"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-2">
              <div class="md:w-full px-3">
                <SInput
                  id="grid-texe-1"
                  type="text"
                  :placeholder="$t('Institución de contacto')"
                  :value="institution"
                  @update:value="institution = $event"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="PoppinsLight xl:px-12 px-8 font-bold text-xl">
          <p class="text-black">
            {{ $t("¿Qué tipo de solución funciona mejor para ti?") }}
          </p>
          <div class="md:block hidden space-x-4 space-y-4">
            <SButtom
              img="/assets/aids/Transportation_1.png"
              title="Transportation Aid"
              :hasHover="true"
            />
            <SButtom img="/assets/aids/Control.png" title="Control Aid" />
            <SButtom
              img="/assets/aids/Communication.png"
              title="Communication Aid"
            />
            <SButtom img="/assets/aids/Chat.png" title="Chat Center Aid" />
            <SButtom
              img="/assets/aids/Transportation_1.png"
              title="Wellness Aid"
              :hasHover="true"
            />
            <SButtom img="/assets/aids/Market.png" title="Market Aid" />
          </div>
          <div
            class="md:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 pt-8"
          >
            <SButtom
              img="/assets/aids/Transportation_1.png"
              title="Transportation Aid"
              :hasHover="true"
            />
            <SButtom img="/assets/aids/Control.png" title="Control Aid" />
            <SButtom
              img="/assets/aids/Communication.png"
              title="Communication Aid"
            />
            <SButtom img="/assets/aids/Chat.png" title="Chat Center Aid" />
            <SButtom
              img="/assets/aids/Transportation_1.png"
              title="Wellness Aid"
              :hasHover="true"
            />
            <SButtom img="/assets/aids/Market.png" title="Market Aid" />
          </div>
        </div>
        <div
          class="PoppinsLight text-[#537FF7] font-bold xl:px-12 xl:pr-40 px-8 pt-16 text-xl"
        >
          <p class="text-black pb-4">{{ $t("Cuéntanos más") }}</p>
          <div>
            <STextarea id="body" :value="body" @update:value="body = $event" />
          </div>
        </div>
        <div class="PoppinsLight md:px-10 px-8 pt-4 md:pb-56">
          <div class="flex">
            <SSend />
          </div>
        </div>
      </div>
      <div class="order-2 md:order-1 md:w-1/2">
        <div class="md:hidden">
          <img src="/assets/bg/Contacto_1.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
