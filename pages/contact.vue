<template>
	<section class="relative bg-white dark:bg-brown-dark dark:text-white p-16">
        <!-- <h2 class="text-3xl font-bold leading-none text-center">Télécharger l’application</h2> -->
        <div class="flex px-3 mt-2 pb-20">            
            <div class="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-xl text-left space-y-6">
               <!-- tab -->
               <button :class="isDark ? `bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]` : `bg-orange-fade-hz`" class="w-full rounded-xl p-[3px] shadow-md flex -space-x-12">
                    <div class="__left_tab w-full py-2 text-base rounded-l-xl dark:text-wite bg-orange-fade-hz">
                        Location
                    </div>
                    <div class="__right_tab w-full py-2 text-base rounded-r-xl dark:bg-brown-dark bg-white">
                        Nous contacter
                    </div>
                </button>
               <!-- tab -->
               <div class="mt-6 mx-20">
                <input type="text"
                class="w-full py-2 px-3 rounded-[10px] bg-white border-2 border-black focus:outline-none"
                placeholder="Nom Prénom *"
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
               <div class="mt-6 mx-20">
                <select name="cars" id="cars" class="w-full py-2 px-3 rounded-[10px] text-gray-500 border-2 border-black focus:outline-none">
                    <option value="none">Ville *</option>
                    <option value="Ankara">Ankara</option>
                    <option value="Istanbul">Istanbul</option>
                    <option value="Izmir">Izmir</option>
                </select>
               </div>
               <div class="mt-6 mx-20">
                <input type="text"
                class="w-full py-2 px-3 rounded-[10px] bg-white border-2 border-black focus:outline-none"
                placeholder="Secteur du bien *"
                style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);"
                >
               </div>
               <button
               class="flex rounded-[10px] border border-black dark:border-white border-dashed px-3 py-2 space-x-3 mx-auto">
                <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_455_188)">
                    <path d="M29.0625 23.75C29.0625 24.2639 28.8584 24.7567 28.495 25.12C28.1317 25.4834 27.6389 25.6875 27.125 25.6875H3.875C3.36114 25.6875 2.86833 25.4834 2.50498 25.12C2.14163 24.7567 1.9375 24.2639 1.9375 23.75V12.125C1.9375 11.6111 2.14163 11.1183 2.50498 10.755C2.86833 10.3916 3.36114 10.1875 3.875 10.1875H6.14575C7.68652 10.1867 9.16392 9.57409 10.2532 8.48444L11.8614 6.88019C12.2237 6.51776 12.7148 6.31364 13.2273 6.3125H17.7688C18.2826 6.31261 18.7754 6.51681 19.1386 6.88019L20.7429 8.48444C21.2827 9.02445 21.9237 9.4528 22.6291 9.74502C23.3346 10.0372 24.0907 10.1876 24.8543 10.1875H27.125C27.6389 10.1875 28.1317 10.3916 28.495 10.755C28.8584 11.1183 29.0625 11.6111 29.0625 12.125V23.75ZM3.875 8.25C2.84729 8.25 1.86166 8.65826 1.13496 9.38496C0.408258 10.1117 0 11.0973 0 12.125L0 23.75C0 24.7777 0.408258 25.7633 1.13496 26.49C1.86166 27.2167 2.84729 27.625 3.875 27.625H27.125C28.1527 27.625 29.1383 27.2167 29.865 26.49C30.5917 25.7633 31 24.7777 31 23.75V12.125C31 11.0973 30.5917 10.1117 29.865 9.38496C29.1383 8.65826 28.1527 8.25 27.125 8.25H24.8543C23.8266 8.24978 22.8412 7.84138 22.1146 7.11463L20.5104 5.51037C19.7838 4.78362 18.7984 4.37522 17.7707 4.375H13.2293C12.2016 4.37522 11.2162 4.78362 10.4896 5.51037L8.88537 7.11463C8.15884 7.84138 7.17338 8.24978 6.14575 8.25H3.875Z" fill="currentColor"/>
                    <path d="M15.5 21.8125C14.2154 21.8125 12.9833 21.3022 12.075 20.3938C11.1666 19.4854 10.6563 18.2534 10.6562 16.9688C10.6563 15.6841 11.1666 14.4521 12.075 13.5437C12.9833 12.6353 14.2154 12.125 15.5 12.125C16.7846 12.125 18.0167 12.6353 18.925 13.5437C19.8334 14.4521 20.3438 15.6841 20.3438 16.9688C20.3438 18.2534 19.8334 19.4854 18.925 20.3938C18.0167 21.3022 16.7846 21.8125 15.5 21.8125ZM15.5 23.75C17.2985 23.75 19.0233 23.0355 20.2951 21.7638C21.5668 20.4921 22.2812 18.7672 22.2812 16.9688C22.2812 15.1703 21.5668 13.4454 20.2951 12.1737C19.0233 10.902 17.2985 10.1875 15.5 10.1875C13.7015 10.1875 11.9767 10.902 10.7049 12.1737C9.4332 13.4454 8.71875 15.1703 8.71875 16.9688C8.71875 18.7672 9.4332 20.4921 10.7049 21.7638C11.9767 23.0355 13.7015 23.75 15.5 23.75V23.75ZM5.8125 13.0938C5.8125 13.3507 5.71044 13.5971 5.52876 13.7788C5.34708 13.9604 5.10068 14.0625 4.84375 14.0625C4.58682 14.0625 4.34042 13.9604 4.15874 13.7788C3.97706 13.5971 3.875 13.3507 3.875 13.0938C3.875 12.8368 3.97706 12.5904 4.15874 12.4087C4.34042 12.2271 4.58682 12.125 4.84375 12.125C5.10068 12.125 5.34708 12.2271 5.52876 12.4087C5.71044 12.5904 5.8125 12.8368 5.8125 13.0938V13.0938Z" fill="currentColor"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_455_188">
                    <rect width="31" height="31" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                    </defs>
                </svg>

                <div class="my-auto">Ajouter des photos</div>
               </button>

               <div class="mt-8 flex justify-center">
                    <modules-buttons-secondary>Se faire contacter</modules-buttons-secondary>
                </div>
            </div>
        </div>
        <img class="absolute bottom-0 mx-auto right-0 left-0 object-contain w-full z-0" src="~/assets/images/other/wave_lots.png" alt="">
	</section>
    <img class="absolute top-72 z-0" src="~/assets/images/other/logo_transparent.png" alt="">
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