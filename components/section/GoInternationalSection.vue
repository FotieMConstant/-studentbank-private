<template>
	<section class="relative bg-orange-light dark:bg-brown-dark dark:text-white p-16 shadow-md">
        <h2 class="text-3xl font-bold leading-none text-center">Partir à l’international</h2>
        <div class="flex px-3 mt-10">
            <!-- if dark mode -->
           <div class="relative z-10">
            <img  class="w-8/12 object-cover" src="~/assets/images/gif/glob.gif" alt="">
           </div>
            <div class="w-8/12 text-left relative z-10">
                <h2 class="text-xl font-bold leading-none">Voyager</h2>
                <div class="space-y-5 mt-6">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </div>
                <div class="mt-8 flex justify-center">
                    <modules-buttons-secondary>Partir à l’étranger</modules-buttons-secondary>
                </div>
            </div>
        </div>
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