<template>
  <div :class="isDark ? 'dark' : ''">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
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
.__grdientBg {
  background: rgb(237,23,76);
  background: linear-gradient(90deg, rgba(237,23,76,1) 0%, rgba(245,130,32,1) 100%);
}
</style>
