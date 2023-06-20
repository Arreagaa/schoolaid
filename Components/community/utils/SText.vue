<script>
export default {
  methods: {
    getTranslatedText(messageKey) {
      const translatedMessage = this.$t(messageKey);
      return translatedMessage.replace(
        "SchoolAid",
        "<span class='text-[#537FF7]'>SchoolAid</span>"
      );
    },
  },
};
</script>
<template>
  <section>
    <div class="flex items-center md:py-48 py-28 md:px-20 px-16">
      <div
        class="ModeratBlack 2xl:text-7xl res-font md:text-5xl text-4xl leading-serif"
      >
        <h1 v-html="getTranslatedText('community_text')"></h1>
      </div>
    </div>
  </section>
</template>
<style>
@media (min-width: 1536px) and (max-width: 1669px) {
  .res-font {
    font-size: 48px;
  }
}
</style>
