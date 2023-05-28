<template>
	<section class="relative bg-white dark:bg-brown-dark dark:text-white p-16">
        <div class="flex mt-2 pb-20 space-x-10">            
           <div class="space-y-4 w-6/12">
            <h2 class="text-3xl font-bold leading-none">Pourquoi ?</h2>
            <div>La crise sanitaire du Covid, qui fut un vrai révélateur de la situation déjà 
              précaire des étudiants, a considérablement dégradé leurs conditions de vie.
            </div>
            <div>
              Depuis, l’équipe de StudentBank travaille d’arrache-pied afin de combattre les inégalités sociales et
              d’éradiquer définitivement la précarité estudiantine.
            </div>
           </div>
           <img class="w-6/12" src="~/assets/images/other/blank_img.png" alt="">           
        </div>
        <div class="flex mt-2 pb-20 space-x-10"> 
          <img class="w-6/12" src="~/assets/images/other/blank_img.png" alt="">           
           <div class="space-y-4 w-6/12">
            <h2 class="text-3xl font-bold leading-none">Comment ?</h2>
            <div>Afin d’accompagner efficacement les étudiants, nous centralisons sur une seule et même plateforme
              des services financiers (ouverture de compte bancaire, prêts étudiant…), des services de logement 
              (caution, garantie immo…) et des services de mobilité internationale.
            </div>
            <div>
              StudentBank est une plateforme faite par des étudiants sensibles aux inégalités sociales, pour les
              étudiants en situation de précarité.
            </div>
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