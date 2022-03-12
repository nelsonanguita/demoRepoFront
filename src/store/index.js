import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userSession: null,
    auth:false
  },
  mutations: {
    SET_USER(state, user) { 
      state.userSession = user;
      state.auth = Boolean(user);
    }
  },
  actions: {
    async login({ commit },credentials) {
        try {
          const res = await axios.post('/api/auth/login', credentials);
          //console.log(res);
          commit("SET_USER", res.data);
          return true
        } catch (error) {
          console.log(error);
          commit("SET_USER", null);
          return false
        }
    },

    logout({ commit}) { 
      commit("SET_USER", null);
    }


 

    
  },
  modules: {
    
  }
})
