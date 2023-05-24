<template>
	<section class="relative bg-white dark:bg-brown-dark dark:text-white p-16">
        <h2 class="text-3xl font-bold leading-none text-center">Votre carte bancaire</h2>
        <div class="flex px-3 mt-16">            
            <div class="text-left w-6/12">
                <h2 class="text-xl font-bold leading-none">La carte bancaire</h2>
                <div class="space-y-5 mt-6">
                    <div>Choisissez une carte bancaire qui vous correspond, personnalisable à votre goût et vos envies.  </div>
                    <div>Payez en ligne, en magasin ou dans vos sites favoris, sans frais et en toute sécurité. Nos cartes ENKI, MAYA, HORIZON et EXOTIC vous assurent dans tous vos voyages et la gratuité des frais de retrait à l’international.</div>
                </div>
            </div>
            <!-- if dark mode -->
           <div v-if="isDark" class="">
             <img class="w-full object-contain h-[400px]"  src="~/assets/images/other/bank_card_dark.png" alt="">
           </div>  
           <div v-else class="">
             <img  class="w-full object-contain h-[400px]" src="~/assets/images/other/bank_card_light.png" alt="">
           </div>
        </div>
        <img v-if="isDark" class="absolute top-0 right-0 object-cover h-full z-0" src="~/assets/images/other/waves_dark.png" alt="">
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