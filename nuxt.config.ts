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
      script: [
        {
          src: "https://widget.intercom.io/widget/csz7m2co",
          async: true,
        },
      ],
    },
  },
  css: ["@fortawesome/fontawesome-free/css/all.min.css"],
});
