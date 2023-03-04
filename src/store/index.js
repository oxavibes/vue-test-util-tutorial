import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 0,
    };
  },
  actions: {},
  getters: {},
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});
