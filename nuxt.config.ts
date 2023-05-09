export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  app: {
    head: {
      title: "Schoolaid",
      link: [
        {
          rel: "icon",
          type: "image",
          href: "/assets/aid_white.png",
        },
      ],
    },
  },
  css: ["@fortawesome/fontawesome-free/css/all.min.css"],
});
