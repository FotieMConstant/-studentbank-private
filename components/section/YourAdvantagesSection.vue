<template>
<div class="hidden md:block">
	<section class="relative bg-orange-light dark:bg-brown-dark dark:text-white px-16 pt-16 shadow-md">
        <h2 class="text-3xl font-bold leading-none text-center">Vos avantages</h2>
        <div class="flex px-3 mt-10">
            <!-- if dark mode -->
           <div class=" relative z-10">
            <img  class="w-full object-cover" src="~/assets/images/other/man.png" alt="">
           </div>
            <div class="w-8/12 text-left relative z-10">
                <h2 class="text-xl font-bold leading-none">Réductions</h2>
                <div class="space-y-5 mt-6">
                    <div>Profitez des cashbacks ; des réductions ; des codes promos dans des enseignes (Nike, Amazon, Air campus) partenaires. </div>
                    <div>Parrainez vos amis et gagnez de nombreux avantages. Remboursez et payez gratuitement vos amis par un virement instantané entre compte Studentbank. Réglez en groupe avec vos amis lors de vos sorties et événements.</div>
                </div>
                <div class="mt-8 flex justify-center">
                    <modules-buttons-secondary>Voir mes avantages</modules-buttons-secondary>
                </div>
            </div>
        </div>
        <div class="absolute top-0 left-0 object-cover h-full w-6/12 z-0">
            <img class="w-full" v-if="isDark" src="~/assets/images/other/stonks_light.png" alt="">
            <img  class="w-full" v-else src="~/assets/images/other/stonks_dark.png" alt="">
           </div>
	</section>
</div>
<!-- for mobile -->
<div class="block md:hidden">
    <section class="relative bg-white dark:bg-brown-dark dark:text-white py-6 shadow-md">
        <h2 class="text-3xl font-bold leading-none text-center">Vos avantages</h2>
        <div class="mt-10">
            <!-- if dark -->
            <div v-if="isDark" class="flex justify-between">
                <img class="h-16 object-cover" src="~/assets/images/other/icons/1_dark.png" alt="">
                <img class="h-16 object-cover" src="~/assets/images/other/icons/2_dark.png" alt="">
                <img class="h-16 object-cover" src="~/assets/images/other/icons/3_dark.png" alt="">
                <img class="h-16 object-cover" src="~/assets/images/other/icons/4_dark.png" alt="">
                <img class="h-16 object-cover" src="~/assets/images/other/icons/5_dark.png" alt="">
            </div>
            <div v-else class="flex justify-between">
                <img class="h-16 object-cover" src="~/assets/images/other/icons/1_light.png" alt="">
                <img class="h-16 object-cover" src="~/assets/images/other/icons/2_light.png" alt="">
                <img class="h-16 object-cover" src="~/assets/images/other/icons/3_light.png" alt="">
                <img class="h-16 object-cover" src="~/assets/images/other/icons/4_light.png" alt="">
                <img class="h-16 object-cover" src="~/assets/images/other/icons/5_light.png" alt="">
            </div>
            <div class="px-4 w-full text-left relative z-10">
                <div class="space-y-5 mt-6">
                    <div>Profitez des cashbacks ; des réductions ; des codes promos dans des enseignes (Nike, Amazon, Air campus) partenaires. </div>
                    <div>Parrainez vos amis et gagnez de nombreux avantages. Remboursez et payez gratuitement vos amis par un virement instantané entre compte Studentbank. Réglez en groupe avec vos amis lors de vos sorties et événements.</div>
                </div>
            </div>
        </div>
        <img class="absolute top-0 left-0 object-contain h-full w-full z-0" src="~/assets/images/other/arrow.png" alt="">
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