<template>
	<section class="relative bg-white dark:bg-brown-dark dark:text-white">
        <h2 class="text-3xl font-bold leading-none text-left p-4 relative z-30">Location</h2>
        <div class="relative px-4 pb-6 z-30"> 
            <div class="text-left">
                <div class="space-y-5">
                    <div>Nous vous accompagnons dans vos recherches, la location et la gestion de votre logement étudiant.</div>
                    <div>Vous pourriez souscrire à la caution, la garantie et l’assurance immobilière sur notre plateforme. Réservez votre logement étudiant dans votre pays de destination avant votre départ.</div>
                </div>
                <div class="mt-8 flex justify-end">
                    <modules-buttons-secondary>Louer un bien</modules-buttons-secondary>
                </div>
            </div>
        </div>
            <!-- if dark mode -->
            <img class="dark:block hidden absolute top-0 w-full object-cover h-full"  src="~/assets/images/other/rent_mobile_dark.png" alt="">
            <img class="dark:hidden block absolute top-0 w-full object-cover h-full" src="~/assets/images/other/rent_mobile_light.png" alt="">
	</section>
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