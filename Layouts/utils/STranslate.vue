<script>
import SDropdown from "~/Components/utils/SDropdown.vue";
export default {
  data() {
    return {
      supportedLanguagesFlagIcons: {
        es: "/assets/icons/ES.svg",
        en: "/assets/icons/en.svg",
      },
    };
  },
  components: {
    SDropdown,
  },
  computed: {
    currentLanguage() {
      return this.$i18n.locale;
    },
  },
  created() {
    if (typeof localStorage !== "undefined") {
      const selectedLanguage = localStorage.getItem("selectedLanguage");
      if (selectedLanguage) {
        this.$i18n.locale = selectedLanguage;
      }
      this.setupClearLocalStorageOnExit();
    }
  },
  methods: {
    setLanguage(languageCode) {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("selectedLanguage", languageCode);
        this.$i18n.locale = languageCode;
      }
    },
    setupClearLocalStorageOnExit() {
      if (typeof localStorage !== "undefined") {
        const clearLocalStorage = () => {
          localStorage.removeItem("selectedLanguage");
        };

        window.addEventListener("pagehide", clearLocalStorage);

        this.$options.beforeUnmount = () => {
          window.removeEventListener("pagehide", clearLocalStorage);
        };
      }
    },
  },
};
</script>
<template>
  <SDropdown align="right" width="48">
    <template #trigger>
      <button
        class="inline-flex text-sm border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
      ></button>

      <span class="inline-flex rounded-md">
        <button
          type="button"
          class="inline-flex items-center text-xl no-underline py-2 px-4 navLink leading-4 transition capitalize"
        >
          <img
            class="w-10"
            :src="supportedLanguagesFlagIcons[currentLanguage]"
            :alt="$t(currentLanguage)"
          />
          <svg
            class="ml-2 -mr-0.5 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </span>
    </template>
    <template #content>
      <a
        href="#"
        class="block px-3 py-2 text-sm text-gray-700 no-underline navLink"
        @click.prevent="setLanguage('es')"
      >
        <img
          class="w-8 inline-block mr-2"
          :src="supportedLanguagesFlagIcons.es"
        />
        Español
      </a>
      <a
        href="#"
        class="block px-3 py-2 text-sm text-gray-700 no-underline navLink"
        @click.prevent="setLanguage('en')"
      >
        <img
          class="w-8 inline-block mr-2"
          :src="supportedLanguagesFlagIcons.en"
        />
        English
      </a>
    </template>
  </SDropdown>
</template>
