<template>
    <div :class="isDark ? 'dark' : ''">
        <div class="relative h-screen flex flex-col space-x-60 justify-center text-center">
        <div class="relative">
            <div class="reative text-4xl">
            404 - Page not found
            </div>
            <img class="absolute mx-auto right-0 left-0" src="~/assets/images/other/404_oops.png" alt="" style="top: -113px;">
        </div>
        <div class="w-96 mx-auto" style=" padding-top: 117px; ">La page que vous cherchiez est introuvable, elle a peut être été retirée, renommée ou elle n’existe pas.</div>
        <div class="flex flex-wrap justify-center mt-8">
				<a href="/">
                	<modules-buttons-primary>Page d’accueil</modules-buttons-primary>
				</a>
        </div>
    </div>
    </div>
  </template>
  <script>
  import store from "@/store"
  
  export default {
    data() {
      return {
        isDark: store.getters.getIsDark,
      };
    },
    computed:{
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
  }
  </script>
  <style>
  </style>
  