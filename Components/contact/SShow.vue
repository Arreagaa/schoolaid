<script>
import axios from "axios";
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
      errorMessage: "",
      successMessage: "",
      selectedModules: [],
    };
  },
  computed: {
    translatedErrorMessage() {
      if (this.errorMessage === "") {
        return "";
      }

      return this.$t(this.errorMessage);
    },
    translatedSuccesMessage() {
      if (this.successMessage === "") {
        return "";
      }

      return this.$t(this.successMessage);
    },
  },
  methods: {
    async contactForm() {
      this.errorMessage = "";
      this.successMessage = "";

      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        institution: this.institution,
        body: this.body,
        selectedModules: this.selectedModules,
      };

      if (
        this.firstName === "" &&
        this.lastName === "" &&
        this.email === "" &&
        this.institution === "" &&
        this.body === ""
      ) {
        this.errorMessage = "Debes completar todos los campos.";
        return;
      }

      if (this.firstName === "") {
        this.errorMessage = "El campo Nombre es requerido.";
        return;
      }

      if (this.lastName === "") {
        this.errorMessage = "El campo Apellido es requerido.";
        return;
      }

      if (this.email === "") {
        this.errorMessage = "El campo Correo electrónico es requerido.";
        return;
      }

      if (this.institution === "") {
        this.errorMessage = "El campo Nombre de la institución es requerido.";
        return;
      }

      if (this.body === "") {
        this.errorMessage = "¡Cuéntanos más!";
        return;
      }
      try {
        const response = await axios.post(
          "https://im602gpbnb.execute-api.us-east-1.amazonaws.com/prod/landingForm",
          formData,
          {
            headers: {
              "x-api-key": "HYbEtoDcUt7woFlQecsIp1xlRvjDCzwka30dJNe0",
            },
          }
        );

        this.successMessage = "El correo fue enviado correctamente";
        console.log(response.data);
      } catch (error) {
        this.errorMessage = "Ocurrió un error al enviar el correo";
        console.error(error);
      }
    },
  },
};
</script>
<template>
  <section class="xl:bg-[url('/assets/bg/Contacto.png')] bg-cover bg-center">
    <div class="max-w-custom flex flex-col xl:flex-row">
      <div class="xl:order-1 order-2 xl:w-1/2 contact-res">
        <div class="min-[1535px]:px-8 px-2">
          <SBagTitleCustomers :title="$t('Contáctanos')" />
        </div>
        <div
          class="PoppinsLight min-[1535px]:px-12 px-6 pl-8 pb-8 font-bold text-xl"
        >
          <p class="text-black">
            {{
              $t(
                "Envíanos tus datos para asesorarte con la mejor solución para ti"
              )
            }}
          </p>
        </div>
        <div
          class="PoppinsLight font-bold min-[1535px]:pl-12 min-[1553px]:pr-40 px-6 py-4 pb-16 text-base"
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
        <div
          class="PoppinsLight px-6 contact-btn 2xl:px-12 font-bold text-xl"
        >
          <p class="text-black">
            {{ $t("¿Qué módulos te interesan?") }}
          </p>
          <div class="md:block hidden space-x-4 space-y-4">
            <SButtom
              img="/assets/aids/Transportation1.png"
              title="Transportation Aid"
              :hasHover="true"
            />
            <SButtom img="/assets/aids/Control.png" title="Control Aid" />
            <SButtom
              img="/assets/aids/Communication.png"
              title="Communication Aid"
            />
            <SButtom img="/assets/aids/Chat.png" title="Chat Center" />
            <SButtom
              img="/assets/aids/Transportation1.png"
              title="Wellness Aid"
              :hasHover="true"
            />
            <SButtom img="/assets/aids/Market.png" title="Market Aid" />
          </div>
          <div
            class="md:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 pt-8"
          >
            <SButtom
              img="/assets/aids/Transportation1.png"
              title="Transportation Aid"
              :hasHover="true"
            />
            <SButtom img="/assets/aids/Control.png" title="Control Aid" />
            <SButtom
              img="/assets/aids/Communication.png"
              title="Communication Aid"
            />
            <SButtom img="/assets/aids/Chat.png" title="Chat Center" />
            <SButtom
              img="/assets/aids/Transportation1.png"
              title="Wellness Aid"
              :hasHover="true"
            />
            <SButtom img="/assets/aids/Market.png" title="Market Aid" />
          </div>
        </div>
        <div
          class="PoppinsLight text-[#537FF7] font-bold min-[1535px]:pl-12 min-[1553px]:pr-40 px-6 pt-16 text-xl"
        >
          <p class="text-black pb-4">{{ $t("Cuéntanos más") }}</p>
          <div>
            <STextarea id="body" :value="body" @update:value="body = $event" />
          </div>
        </div>
        <div class="PoppinsLight min-[1535px]:px-10 px-6 pt-4 xl:pb-56">
          <div class="flex">
            <SSend @click="contactForm" />
          </div>
          <div v-if="translatedErrorMessage" class="flex py-8">
            <span class="alert-danger">{{ translatedErrorMessage }}</span>
          </div>
          <div v-if="translatedSuccesMessage !== ''" class="flex py-8">
            <span class="alert-success">{{ translatedSuccesMessage }}</span>
          </div>
        </div>
      </div>
      <div class="order-2 xl:order-1 xl:w-1/2">
        <div class="xl:hidden">
          <img src="/assets/bg/Contacto_1.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
