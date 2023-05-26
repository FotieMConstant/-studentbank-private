<template>
	<section class="relative bg-orange-light dark:bg-brown-dark dark:text-white p-16 shadow-md">
        <h2 class="text-3xl font-bold leading-none text-center relative z-10">Partir à l’international</h2>
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
        <img
        v-if="isDark"
        src="~/assets/images/other/lines_n.png"
        class="h-full absolute m-auto top-0 right-0 left-0 !z-0"
        />
        <div class="flex absolute bottom-6 right-6 cursor-pointer select-none space-x-2">
            <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 18.4526C14.2238 18.4526 14.4384 18.3593 14.5966 18.1933C14.7549 18.0273 14.8438 17.8021 14.8438 17.5673V7.31053L18.4651 11.1119C18.5436 11.1942 18.6367 11.2595 18.7392 11.304C18.8417 11.3486 18.9516 11.3715 19.0625 11.3715C19.1734 11.3715 19.2833 11.3486 19.3858 11.304C19.4883 11.2595 19.5814 11.1942 19.6599 11.1119C19.7383 11.0296 19.8006 10.9319 19.843 10.8243C19.8855 10.7168 19.9073 10.6015 19.9073 10.4851C19.9073 10.3687 19.8855 10.2535 19.843 10.1459C19.8006 10.0384 19.7383 9.94066 19.6599 9.85835L14.5974 4.5467C14.519 4.46426 14.4259 4.39885 14.3234 4.35422C14.2209 4.30959 14.111 4.28662 14 4.28662C13.889 4.28662 13.7791 4.30959 13.6766 4.35422C13.5741 4.39885 13.481 4.46426 13.4026 4.5467L8.34013 9.85835C8.18169 10.0246 8.09268 10.25 8.09268 10.4851C8.09268 10.7202 8.18169 10.9457 8.34013 11.1119C8.49856 11.2781 8.71344 11.3715 8.9375 11.3715C9.16156 11.3715 9.37644 11.2781 9.53487 11.1119L13.1562 7.31053V17.5673C13.1562 17.8021 13.2451 18.0273 13.4034 18.1933C13.5616 18.3593 13.7762 18.4526 14 18.4526ZM2.1875 22.879C2.1875 22.6442 2.27639 22.419 2.43463 22.253C2.59286 22.087 2.80747 21.9937 3.03125 21.9937H24.9688C25.1925 21.9937 25.4071 22.087 25.5654 22.253C25.7236 22.419 25.8125 22.6442 25.8125 22.879C25.8125 23.1138 25.7236 23.3389 25.5654 23.505C25.4071 23.671 25.1925 23.7642 24.9688 23.7642H3.03125C2.80747 23.7642 2.59286 23.671 2.43463 23.505C2.27639 23.3389 2.1875 23.1138 2.1875 22.879Z" fill="currentColor"/>
            </svg>
            <div>
                Haut de page
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