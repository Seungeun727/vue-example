import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// 컴포넌트 간에 공유
const state = {
  message : [],
  channels: []
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  action
})