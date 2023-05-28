<template>
  <div>
    <div class="dark:bg-gray-800 dark:text-white p-3 rounded-b-lg shadow sm:shadow-md bg-white cursor-pointer">
      <!-- {{ $t('hello', { name: 'vue-i18n' }) }} -->
      <nuxt-img @click="showLangs = !showLangs" class="" :src="`../../../img/lang/${currentLang.icon}`" />
    </div>
</div>
<div v-show="showLangs" class="absolute right-0 -bottom-14 w-28 dark:bg-gray-800 dark:text-white p-3 rounded-b-lg shadow sm:shadow-md bg-white cursor-pointer">
<div class="flex space-x-2 justify-center">
  <nuxt-img class="cursor-pointer" @click="toggleLang(lang)" v-for="lang in langs" :key="lang" :src="`../../../img/lang/${lang.icon}`" />
</div>
</div>

</template>

<script>
// import { useDark, useToggle } from "@vueuse/core";
import store from "@/store"

export default {
  components: {},
  data() {
    return {
      isDark: null,
      showLangs: false,
      currentLang: { name: "English", code: "en", icon:"Anglais.png"},
      langs: [
        { name: "English", code: "en", icon:"Anglais.png"},
        { name: "Français", code: "fr", icon:"Francais.png" },
        { name: "Espagnol", code: "es", icon:"Espagnol.png" },
      ],
    };
  },
    // watcher on the language changes
    watch: {
    "$i18n.locale": function (newLang) {
      localStorage.setItem("last-locale", newLang);
      console.log("new local => ", newLang);
    },
  },
  created() {
    // get the team preference from store when component is created
    this.isDark = store.getters.getIsDark;
  },
  methods: {
    toggleLang(payload) {
     this.currentLang = payload; //setting preview object
     console.log(this.currentLang);
     this.$i18n.locale = this.currentLang.code; //setting code to local
     this.showLangs = !this.showLangs;

    },
  },
};
</script>

<style lang="scss" scoped></style>
