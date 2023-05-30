<template>
<div class="hidden md:block">
	<section class="relative bg-white dark:bg-brown-dark dark:text-white p-20">
        <h2 class="text-3xl font-bold leading-none text-center">Aide à la location</h2>
        <div class="flex px-3 mt-16"> 
            <div class="text-left w-6/12">
                <h2 class="text-xl font-bold leading-none">Louer</h2>
                <div class="space-y-5 mt-6">
                    <div>Studentbank n’est pas qu’une carte bancaire pour étudiant, vos problématiques sont au cœur de nos priorités, nous vous accompagnons dans vos recherches, la location et la gestion de votre logement étudiant.</div>
                    <div>Vous pourriez souscrire à la caution, la garantie et l’assurance immobilière sur notre plateforme. Les étudiants étrangers et internationaux ! Réservez votre logement étudiant dans votre pays de destination avant votre départ.</div>
                </div>
                <div class="mt-8 flex justify-center">
                    <modules-buttons-secondary>Louer un bien</modules-buttons-secondary>
                </div>
            </div>
            <!-- if dark mode -->
           <div class="dark:block hidden">
             <img class="w-full object-contain h-[500px]"  src="~/assets/images/other/3droom_dark.png" alt="">
           </div>   
           <div class="dark:hidden block">
             <img  class="w-full object-contain h-[500px]" src="~/assets/images/other/3droom_light.png" alt="">
           </div>
        </div>
        <img class="dark:block hidden absolute top-0 right-0 object-cover h-full z-0" src="~/assets/images/other/waves_dark.png" alt="">
	</section>
  </div>
  <!-- for mobile -->
  <div class="block md:hidden">
      <section-RentMobileSection/>
  </div>
  <!--/ for mobile -->


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