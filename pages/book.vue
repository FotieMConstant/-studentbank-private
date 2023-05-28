<template>
	<section class="relative bg-white dark:bg-brown-dark dark:text-white p-16">
        <h2 class="text-3xl font-bold leading-none text-center">Prendre rendez-vous</h2>
        <div class="flex px-3 mt-2 pb-20">            
            <div class="relative z-10 mt-3 sm:mx-auto sm:w-full sm:max-w-xl text-left space-y-6">
                <div class="mt-6 mx-44 flex justify-center space-x-3">
                    <svg class="h-12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_265_116)">
                        <path d="M22 13C22 12.7348 22.1054 12.4804 22.2929 12.2929C22.4804 12.1054 22.7348 12 23 12H25C25.2652 12 25.5196 12.1054 25.7071 12.2929C25.8946 12.4804 26 12.7348 26 13V15C26 15.2652 25.8946 15.5196 25.7071 15.7071C25.5196 15.8946 25.2652 16 25 16H23C22.7348 16 22.4804 15.8946 22.2929 15.7071C22.1054 15.5196 22 15.2652 22 15V13Z" fill="currentColor"/>
                        <path d="M7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.48043 8 0.734784 8 1V2H24V1C24 0.734784 24.1054 0.48043 24.2929 0.292893C24.4804 0.105357 24.7348 0 25 0C25.2652 0 25.5196 0.105357 25.7071 0.292893C25.8946 0.48043 26 0.734784 26 1V2H28C29.0609 2 30.0783 2.42143 30.8284 3.17157C31.5786 3.92172 32 4.93913 32 6V28C32 29.0609 31.5786 30.0783 30.8284 30.8284C30.0783 31.5786 29.0609 32 28 32H4C2.93913 32 1.92172 31.5786 1.17157 30.8284C0.421427 30.0783 0 29.0609 0 28V6C0 4.93913 0.421427 3.92172 1.17157 3.17157C1.92172 2.42143 2.93913 2 4 2H6V1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0V0ZM2 8V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H28C28.5304 30 29.0391 29.7893 29.4142 29.4142C29.7893 29.0391 30 28.5304 30 28V8H2Z" fill="currentColor"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_265_116">
                        <rect width="32" height="32" fill="currentColor"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <input type="date"
                    class="mx-20 dark:text-gray-600 w-full py-2 px-3 rounded-[10px] bg-white border-2 border-black focus:outline-none"
                    placeholder="Date du rendez-vous"
                    style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);"
                    >
               </div>
                <div class="mt-6 mx-20">
                    <select name="cars" id="cars" class="w-full py-2 px-3 rounded-[10px] text-gray-500 border-2 border-black focus:outline-none">
                        <option value="none">Motif du rendez-vous</option>
                        <option value="Ankara">Ankara</option>
                        <option value="Istanbul">Istanbul</option>
                        <option value="Izmir">Izmir</option>
                    </select>
               </div>
                <div class="mt-6 mx-20">
                <input type="text"
                class="w-full py-2 px-3 rounded-[10px] bg-white border-2 border-black focus:outline-none"
                placeholder="Nom *"
                style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);"
                >
               </div>
               <div class="mt-6 mx-20">
                <input type="text"
                class="w-full py-2 px-3 rounded-[10px] bg-white border-2 border-black focus:outline-none"
                placeholder="Prénom *"
                style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);"
                >
               </div>
               <div class="mt-6 mx-20">
                <input type="text"
                class="w-full py-2 px-3 rounded-[10px] bg-white border-2 border-black focus:outline-none"
                placeholder="Adresse mail *"
                style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);"
                >
               </div>
               <div class="mt-6 mx-20">
                <input type="text"
                class="w-full py-2 px-3 rounded-[10px] bg-white border-2 border-black focus:outline-none"
                placeholder="Numéro de téléphone *"
                style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);"
                >
               </div>
            
            <div class="mt-6 mx-28">
            <input
                class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5"
                type="radio"
                id="radioDefault01" />
            <label
                class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                for="radioDefault01">
                Lorem ipsum dolor sit samet
            </label>
            </div>
               <div class="mt-8 flex justify-center">
                    <modules-buttons-secondary>Valider le rendez vous</modules-buttons-secondary>
                </div>
            </div>
        </div>
        <img class="absolute bottom-0 mx-auto right-0 left-0 object-contain w-full z-0" src="~/assets/images/other/wave_lots.png" alt="">
	</section>
    <img class="absolute top-0 z-0 w-72 left-0 right-0 mx-auto" src="~/assets/images/other/N.png" alt="">
    <div>
        <section-FooterSection/>
    </div>
     <!-- chat button -->
     <img v-if="isDark" class="fixed z-50 h-12 bottom-4 right-4 cursor-pointer" src="~/assets/images/other/btn_chat.png" alt="">
     <img v-else class="fixed z-50 h-12 bottom-4 right-4 cursor-pointer" src="~/assets/images/other/btn_chat_dark.png" alt="">
    <!-- chat button -->
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