import Vuex from 'vuex';

// 모듈 임포트
import state from './states.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

const store = () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store;