const state = {
  text: "temp test",
};

const mutations = {
  appendText(state, input) {
    state.text += String(input);
  },
  clearText(state) {
    state.text = "";
  },
  updateText(state, updatedText) {
    state.text = updatedText;
  }
};

const actions = {
  append ({commit/* , state */}, input) {
    commit('appendText', input);
  },
  clear({commit/* , state */}) {
    commit('clearText');
  }
};

const getters = {
  // analysis(state, getters, rootState) {
  //   return state.text
  // },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};