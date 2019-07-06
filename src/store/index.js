import Vue from 'vue';
import Vuex from 'vuex';
import analysis from './modules/analysis';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    analysis
  },
  strict: true,
});