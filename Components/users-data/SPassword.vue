<script>
import axios from "axios";
import SInput from "~/Components/contact/utils/SInput.vue";
import SSend from "~/Components/contact/utils/SSend.vue";

export default {
  data() {
    return {
      email: "",
      errorMessage: "",
      successMessage: "",
    };
  },
  components: { SInput, SSend },
  methods: {
    async sendForm() {
      this.errorMessage = "";
      this.successMessage = "";

      const formData = {
        email: this.email,
      };

      if (this.email === "") {
        this.errorMessage = "Por favor introduzca su username";
        return;
      }

      try {
        const response = await axios.post(
          "https://backend.schoolaid.app/sendPasswordMail",
          formData,
          {
            headers: {
              "x-api-key": "HYbEtoDcUt7woFlQecsIp1xlRvjDCzwka30dJNe0",
            },
          }
        );

        this.successMessage =
          "Hemos enviado un link de restablecimiento de contraseña a tu correo";
      } catch (error) {
        this.errorMessage = "Ocurrió un error al enviar el correo";
      }
    },
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
};
</script>
<template>
  <div class="md:py-40 py-16">
    <div class="text-center w-full">
      <div class="ModeratBlack text-2xl mb-4">
        {{ $t("Recuperar contraseña") }}
      </div>
      <p class="PoppinsMedium text-md">
        {{ $t("Ingresa tu nombre de usuario") }}
      </p>
      <div class="flex justify-center">
        <div class="w-80 px-4 py-4">
          <SInput
            id="grid-first-name"
            placeholder=""
            type="text"
            :value="email"
            @update:value="email = $event"
          />
        </div>
      </div>
      <div class="flex justify-center">
        <SSend @click="sendForm" />
      </div>
      <div class="flex justify-center pt-8">
        <div v-if="translatedErrorMessage">
          <span class="alert-danger">{{ translatedErrorMessage }}</span>
        </div>
        <div v-if="translatedSuccesMessage !== ''">
          <span class="alert-success">{{ translatedSuccesMessage }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
