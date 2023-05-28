<template>
	<section class="relative bg-white dark:bg-brown-dark dark:text-white p-16">
        <!-- <h2 class="text-3xl font-bold leading-none text-center">Télécharger l’application</h2> -->
        <div class=" mt-2 pb-20">            
            <div class="flex space-x-5 relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-4xl">
              <modules-cards-team v-for="n in 5" :key="n"/>
            </div>
        </div>
        <img class="absolute bottom-0 mx-auto right-0 left-0 object-contain w-full z-0" src="~/assets/images/other/BG_waves_4.png" alt="">
	</section>
    <!-- <img class="absolute top-44 z-0" src="~/assets/images/other/logo_transparent.png" alt=""> -->
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
.__left_tab{
    -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 111%, 82% 0);
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 111%, 82% 0);
}
.__right_tab{
    -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 101%, 83% 0);
    clip-path: polygon(0 0, 0 1%, 16% 100%, 214% 110%, 99% 0);
}
</style>