import { createStore } from "vuex";
import { useDark, useToggle } from "@vueuse/core";

export default createStore({
  state: {
    isDark: useDark(), // user theme
  },
  getters: {
    // getter for isDark from state
    getIsDark(state) {
      return state.isDark;
    },
  },
  mutations: {
    // toggle mutation
    setToggleDark(state, payload) {
      state.isDark = payload;
      // console.log("isDark on => " + state.isDark);
    },
  },
  actions: {
    // toggle between light and dark mode action function
    toggleDarkAction({ commit, state }) {
      commit("setToggleDark", !state.isDark);
      useToggle(!state.isDark);
      console.log(state.isDark);
    },
  },
  modules: {},
});
