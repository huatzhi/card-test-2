const state = {
  text: "",
  analysisType: "",
  currentAnalysisTF: "",
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
  },
  setAnalysisType(state, type) {
    switch(type) {
      case 'BB&B':
      case 'W':
        state.analysisType = type;
        break;
      default:
    }
  },

  setCurrentAnalysisTF(state, type) {
    switch (type) {
      case 'BB':
      case 'B':
      case 'W':
        state.currentAnalysisTF = type;
        break;
      default:
    }
  },
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