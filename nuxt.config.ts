export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
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
