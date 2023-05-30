<template>
	<section class="flex justify-between bg-white dark:bg-brown-dark dark:text-white border-2 border-black dark:border-white">
        <div class="p-6 w-6/12">
            <img
            class="inline-block rounded-full w-12 h-12 shadow-md"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
        </div>
        <div class="border-r-2 border-black dark:border-white"></div>
        <div class="p-6 w-6/12 flex space-x-4">
            <img
            class="inline-block rounded-full w-12 h-12 shadow-md"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </div>
        </div>
</section>
<section class="flex justify-between bg-white dark:bg-brown-dark dark:text-white border-r-2 border-l-2 border-black dark:border-white p-6">
    <div class="lg:flex lg:flex-wrap lg:justify-between w-full">
       <img class="dark:block hidden" v-for="n in 4" :key="n" src="~/assets/images/other/tick_light.png" alt="">
       <img class="dark:hidden block" v-for="k in 4" :key="k" src="~/assets/images/other/tick_dark.png" alt="">
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