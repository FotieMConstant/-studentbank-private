<template>
  <div>
    <!-- for mobile -->
    <div class="w-full py-3 dark:bg-orange-fade-hz bg-gray-700 dark:text-gray-900 text-white fixed flex justify-center space-x-2 z-50 sm:hidden">
      <div class="my-auto">
        Découvrez nos nouveaux partenaires
      </div>
      <svg class="h-5 my-auto" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-linecap="round"/>
      </svg>

    </div>
    <!-- /for mobile -->
    <header
      id="top"
      class="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l z-50	mt-12 sm:mt-auto"
    >
      <nav
        id="site-menu"
        class="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white sm:dark:bg-gray-800 sm:dark:text-white text-gray-900 shadow sm:shadow-md"
      >
        <div
          class="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center"
        >
        <button
            id="menuBtn"
            class="hamburger block sm:hidden focus:outline-none"
            type="button"
            @click="navToggle"
          >
            <span class="hamburger__top-bun" />
            <span class="hamburger__top-bun" />
            <span class="hamburger__bottom-bun" />
          </button>
          <a
            href="/"
            class="no-underline py-1"
          >
            <h1 class="font-bold text-lg tracking-widest">
              <div class="w-36">
                  <img class="hidden sm:block" src="~/assets/images/logo.png" alt="">
                  <!-- for mobile -->
                  <img
                  src="~/assets/images/other/logo_dark.png"
                  class="block sm:hidden"
                  />
                  <!--/ for mobile -->

              </div>
            </h1>
          </a>
          <div></div>
        </div>
        <div
          id="menu"
          class="w-full sm:w-auto h-[100vh] sm:h-full font-bold sm:font-normal self-end sm:self-center sm:flex flex-col sm:flex-row items-center py-1 pb-4 sm:py-0 sm:pb-0 hidden"
        >
          <div
          @click="navigateToPath('/#banque')"
          class="flex justify-between text-dark cursor-pointer hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2"
          >
              <div>{{ $t('bank') }}</div>
              <!-- icon for mobile -->
              <svg class="h-5 my-auto sm:hidden" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-linecap="round"/>
              </svg>
              <!-- icon for mobile -->
          </div>
          <div
            @click="navigateToPath('/#logement')"
            class="flex justify-between text-dark cursor-pointer hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"
          >
              <div>
                Logement
              </div>
              <!-- icon for mobile -->
              <svg class="h-5 my-auto sm:hidden" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-linecap="round"/>
              </svg>
              <!-- icon for mobile -->
          </div>
          <div
            @click="navigateToPath('/#mobilite')"
            class="flex justify-between text-dark cursor-pointer hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"
          >
          <div>
            Mobilité
          </div>
           <!-- icon for mobile -->
           <svg class="h-5 my-auto sm:hidden" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-linecap="round"/>
            </svg>
            <!-- icon for mobile -->
          </div>
          <div
            @click="navigateToPath('/our-mission')"
            class="flex justify-between text-dark cursor-pointer hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"
            >
            <div>
              Notre mission
            </div>
            <!-- icon for mobile -->
            <svg class="h-5 my-auto sm:hidden" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-linecap="round"/>
              </svg>
              <!-- icon for mobile -->
          </div>
          <div
            @click="navigateToPath('/team')"
            class="flex justify-between text-dark cursor-pointer hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"
            >
            <div>
              L’équipe
            </div>
            <!-- icon for mobile -->
            <svg class="h-5 my-auto sm:hidden" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-linecap="round"/>
              </svg>
              <!-- icon for mobile -->
          </div>
          <div
            @click="navigateToPath('/contact')"
            class="flex justify-between text-dark cursor-pointer hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"
            >
            <div>
              Contacts
            </div>
            <!-- icon for mobile -->
            <svg class="h-5 my-auto sm:hidden" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-linecap="round"/>
            </svg>
              <!-- icon for mobile -->
          </div>
            <!-- mobile language and theme switcher -->
            <div class="sm:hidden absolute flex space-x-4 bottom-36 right-5">
              <div class="text-dark relative z-50">
                <modules-LanguageSwitcherMobile/>
              </div>
              <div class="text-dark relative z-50">
                <modules-LightDarkModeSwitcherMobile/>
              </div>
            </div>
            <!--/ mobile language and theme switcher -->
          <img class="md:hidden w-full absolute bottom-24" src="~/assets/images/other/BG_mobile_waves_4.png" alt=""/>
        </div>
        <div class="hidden lg:block text-dark absolute z-50 top-16 right-20">
          <modules-LanguageSwitcher/>
        </div>
        <div class="hidden lg:block text-dark absolute z-50 right-5 top-16">
          <modules-LightDarkModeSwitcher/>
        </div>
      </nav>
    </header>
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
    }
  },
  mounted () {
    const nav = document.getElementById('site-menu')
    const header = document.getElementById('top')

    window.addEventListener('scroll', function () {
      if (window.scrollY >= 400) {
        // adjust this value based on site structure and header image height
        nav.classList.add('nav-sticky')
        header.classList.add('pt-scroll')
      } else {
        nav.classList.remove('nav-sticky')
        header.classList.remove('pt-scroll')
      }
    })
    // calling for the toggle function
    // this.navToggle()
  },
  methods: {
    navToggle () {
      const btn = document.getElementById('menuBtn')
      const nav = document.getElementById('menu')

      btn.classList.toggle('open')
      nav.classList.toggle('flex')
      nav.classList.toggle('hidden')
    },
    // navigate to path
    navigateToPath(path){
          const menuBtn = document.getElementById('menuBtn');
          console.log(menuBtn)
          // if it is open
         if(menuBtn.classList.contains('open')){
          console.log("it is open? ",menuBtn.classList.contains('open'))
          this.navToggle(); //if it's open toggle it
         }else{
          console.log("it is NOT open? ",menuBtn.classList.contains('open'))
         }
         document.location.href = path;


    }
  }
}
</script>
<style scoped>
/* custom non-Tailwind CSS */
@media (max-width: 576px) {
  .content {
    padding-top: 51px;
  }
}

@media (min-width: 577px) {
  .pt-scroll {
    padding-top: 51px;
  }

  .nav-sticky {
    position: fixed !important;
    min-width: 100%;
    top: 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.25s ease-in;
    z-index: 1;
  }
}

/* HAMBURGER MENU */

.hamburger {
  cursor: pointer;
  width: 48px;
  height: 48px;
  transition: all 0.25s;
}

.hamburger__top-bun,
.hamburger__bottom-bun {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  /* background: #000; */
  @apply bg-white bg-gray-900;
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger:hover [class*='-bun'] {
  /* background: #333; */
}

.hamburger__top-bun {
  transform: translateY(-5px);
}

.hamburger__bottom-bun {
  transform: translateY(3px);
}

.open {
  transform: rotate(90deg);
  transform: translateY(-1px);
}

.open .hamburger__top-bun {
  transform: rotate(45deg) translateY(0px);
}

.open .hamburger__bottom-bun {
  transform: rotate(-45deg) translateY(0px);
}
</style>