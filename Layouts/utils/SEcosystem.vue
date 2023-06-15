<script>
import SDropdown from "~/Components/utils/SDropdown.vue";

export default {
  data() {
    return {
      links: [
        {
          url: "/transportation-aid",
          text: "Transportation Aid",
          image: "/assets/aids/Transportation.png",
        },
        {
          url: "/control-aid",
          text: "Control Aid",
          image: "/assets/aids/Control.png",
        },
        {
          url: "/chat-center",
          text: "Chat Center",
          image: "/assets/aids/Chat.png",
        },
        {
          url: "/wellness-aid",
          text: "Wellness Aid",
          image: "/assets/aids/Transportation.png",
        },
        {
          url: "/market-aid",
          text: "Market Aid",
          image: "/assets/aids/Market.png",
        },
        {
          url: "/communication-aid",
          text: "Communication Aid",
          image: "/assets/aids/Communication.png",
        },
      ],
    };
  },
  components: { SDropdown },
  computed: {
    isActive() {
      const currentPath = this.$route.path;
      return this.links.some((link) => link.url === currentPath);
    },
  },
};
</script>
<template>
  <SDropdown align="right" width="56">
    <template #trigger>
      <button
        class="inline-flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
      ></button>

      <span class="inline-flex rounded-md">
        <button
          type="button"
          class="inline-flex items-center leading-4 transition"
          :class="{ 'text-[#537FF7]': isActive }"
        >
          <NuxtLink to="/#ecosystem">
            {{ $t("Ecosistema Aid") }}
          </NuxtLink>
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
      <div>
        <NuxtLink
          v-for="link in links"
          :to="link.url"
          :exact-active-class="'text-[#537FF7]'"
          class="block px-3 py-2 text-sm text-gray-700 navLink"
        >
          <img :src="link.image" class="w-6 inline-block mr-2" />
          {{ link.text }}
        </NuxtLink>
      </div>
    </template>
  </SDropdown>
</template>
