<template>
    <div class="hidden md:block">
    <section id="banque" class="relative bg-orange-light dark:bg-brown-dark dark:text-white p-20 shadow-md">
        <h2 class="text-3xl font-bold leading-none text-center">Gérer vos dépenses</h2>
        <div class="flex px-3 mt-10">
            <!-- if dark mode -->
           <div class="">
            <img class="w-full" v-if="isDark" src="~/assets/images/other/iphone_13_dark.png" alt="">
            <img  class="w-full" v-else src="~/assets/images/other/iphone_13_white.png" alt="">
           </div>
            <div class="text-left relative z-10">
                <h2 class="text-xl font-bold leading-none">Banque</h2>
                <div class="space-y-5 mt-6">
                    <div>Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions. </div>
                    <div>Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.</div>
                </div>
                <div class="mt-8 flex justify-center">
                    <modules-buttons-secondary>Ouvrir mon compte</modules-buttons-secondary>
                </div>
            </div>
        </div>
        <img v-if="isDark" class="absolute top-0 right-0 object-cover h-full z-0" src="~/assets/images/other/lines.png" alt="">
	</section>
    </div>
    <!-- for mobile -->
    <div class="block md:hidden">
        <section id="banque" class="relative bg-orange-light dark:bg-brown-dark dark:text-white p-2 shadow-md pt-20">
        <div class="flex px-3 mt-10">
            <!-- if dark mode -->
           <div class="flex space-x-3">
           <div class="w-6/12">
            <img class="h-full" src="~/assets/images/other/mobile_expenses.png" alt="">
           </div>
            <div class="text-4xl w-6/12">
                Une banque pour les étudiants
            </div>
           </div>
        </div>
        <div class="text-left relative z-10 m-6">
                <div class="space-y-5 mt-6">
                    <div>Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions. </div>
                </div>
                <div class="mt-4 flex justify-left">
                    <modules-buttons-secondary>Ouvrir mon compte</modules-buttons-secondary>
                </div>
        </div>
	</section>
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