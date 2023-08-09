<script>
import axios from "axios";
import SInput from "~/Components/contact/utils/SInput.vue";
import SSend from "~/Components/contact/utils/SSend.vue";

export default {
  data() {
    return {
      email: this.$route.params.email,
      password: "",
      confirmPassword: "",
      token: this.$route.params.token,
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
        password: this.password,
        confirmPassword: this.confirmPassword,
        token: this.token,
      };

      if (this.password === "") {
        this.errorMessage = "Por favor introduzca su contraseña";
        return;
      }

      if (this.confirmPassword === "") {
        this.errorMessage = "Por favor confirme su contraseña";
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Las contraseñas no coinciden";
        return;
      }

      try {
        const response = await axios.post(
          "https://backend.schoolaid.app/resetPassword",
          formData,
          {
            headers: {
              "x-api-key": "HYbEtoDcUt7woFlQecsIp1xlRvjDCzwka30dJNe0",
            },
          }
        );

        this.successMessage = "Contraseña actualizada correctamente";
      } catch (error) {
        this.errorMessage = "Está solicitud ha expirado o no existe";
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
  <div class="lg:py-52 md:py-40 py-16">
    <div class="text-center w-full">
      <div class="ModeratBlack text-2xl mb-4">
        {{ $t("Recuperar contraseña") }}
      </div>
      <p class="PoppinsMedium text-md">{{ $t("Correo electrónico") }}</p>
      <div class="flex justify-center">
        <div class="w-80 px-4 py-4">
          <SInput
            id="grid-first-name"
            placeholder=""
            type="text"
            :value="email"
            @update:value="email = $event"
            :disabled="true"
          />
        </div>
      </div>
      <p class="PoppinsMedium text-md">{{ $t("new_password") }}</p>
      <div class="flex justify-center">
        <div class="w-80 px-4 py-4">
          <SInput
            id="grid-first-password"
            placeholder=""
            type="password"
            :value="password"
            @update:value="password = $event"
          />
        </div>
      </div>
      <p class="PoppinsMedium text-md">
        {{ $t("confirm_password") }}
      </p>
      <div class="flex justify-center">
        <div class="w-80 px-4 py-4">
          <SInput
            id="grid-first-confirmPassword"
            placeholder=""
            type="password"
            :value="confirmPassword"
            @update:value="confirmPassword = $event"
          />
        </div>
      </div>
      <div class="flex justify-center">
        <SSend @click="sendForm" />
      </div>
      <div class="flex justify-center pt-10">
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
