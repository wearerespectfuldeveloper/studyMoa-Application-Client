import Vuex from 'vuex';

// 모듈 임포트
import state from '../store/states.js';
import getters from '../store/getters.js';
import mutations from '../store/mutations.js';
import actions from '../store/actions.js';

const store = () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store;