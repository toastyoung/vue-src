import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 0,
};
const actions = {
  increment(store, num) {
    store.commit("INCREMENT", num);
  },
  decrement({ commit }, num) {
    commit("DECREMENT", num);
  },
  incrementOdd({ commit, state }, num) {
    if ((state.count & 1) === 1) {
      commit("INCREMENT", num);
    }
  },
  incrementAsync({ commit }, num) {
    setTimeout(() => {
      commit("INCREMENT", num);
    }, 1000);
  },
};
const mutations = {
  INCREMENT(state, num) {
    state.count += num;
  },
  DECREMENT(state, num) {
    state.count -= num;
  },
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
});

export default store;
