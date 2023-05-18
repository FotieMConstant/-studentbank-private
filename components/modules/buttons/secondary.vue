<template>
	<button :class="isDark ? `bg-gradient-to-r from-[#F58220] to-[#ED174C]` : `bg-gradient-to-r from-[#ED174C] to-[#F58220]`" class="rounded-xl p-[3px] shadow-md">
        <div class="px-10 py-3 text-base rounded-xl text-white dark:text-gray-900 dark:bg-white-normal bg-orange-fade-hz">
            <slot />
        </div>
    </button>
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