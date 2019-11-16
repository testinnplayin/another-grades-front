import Vue from 'vue'
import Vuex from 'vuex'

import classHistory from "./modules/class-history";

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {

  // },
  // mutations: {

  // },
  // actions: {

  // },
  modules : {
    classHistory
  }
})
