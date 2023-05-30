<template>
    <Head>
      <Title>StudentBank - Download</Title>
      <Meta name="description" content="Une banque pour les étudiants" />
    </Head>
	<section class="relative bg-white dark:bg-brown-dark dark:text-white p-16">
        <h2 class="text-3xl font-bold leading-none text-center">Télécharger l’application</h2>
        <div class="flex px-3 mt-2 pb-20">            
            <div class="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md text-left space-y-6">
                <div>
                 <a href="#" target="_blank" rel="noopener noreferrer">
                    <img class="h-14 mx-auto" src="~/assets/images/other/playstore_download.png" alt="">
                 </a>
                </div>
                 <div>
                 <a href="#" target="_blank" rel="noopener noreferrer">
                    <img class="h-14 mx-auto" src="~/assets/images/other/appstore_download.png" alt="">
                 </a>
                </div>
            </div>
        </div>
        <img class="absolute top-0 mx-auto right-0 object-cover w-full h-full z-0" src="~/assets/images/other/wave_1_dark.png" alt="">
	</section>
    <img class="absolute top-28 z-0" src="~/assets/images/other/logo_transparent.png" alt="">
    <div>
        <section-FooterSection/>
    </div>
</template>
<script>
import store from "@/store"

export default {
    data() {
      return {
        isDark: store.getters.getIsDark,
	  }
    },
    computed: {
        myDarkModeState:function(){
            return store.state.isDark; // return the state value in `myDarkModeState`
        }
    },
    watch: {
    myDarkModeState:function(){
      // this function will trigger when ever the value of `myDarkModeState` changes
      this.isDark = store.state.isDark;
        console.log(this.isDark);
    },
    mounted() {},
    methods: {},
  }
}
</script>

<style scoped>

</style>