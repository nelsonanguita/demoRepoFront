import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userSession: null,
    auth: null,
    
  },
  mutations: {
    SET_USER_LOGIN(state, user) { 
      state.userSession = user;
      state.auth = Boolean(user);
    },
    SET_USER_LOGOUT(state, user) {
      state.userSession = user;
      state.auth = user.auth;
    }
  },
  actions: {
    //metodos
    async login({ commit }, credentials) {
      
        try {
          const res = await axios.post('/api/auth/login', credentials);
          commit("SET_USER_LOGIN", res.data);
          //localStorage.setItem('user', JSON.stringify(res.data));
          localStorage.setItem('userHash', btoa(JSON.stringify(res.data)));
          return true

        } catch (error) {
          //console.log(error);
          commit("SET_USER_LOGOUT", { auth: false });
          return false
        }
    },

    logout({ commit}) { 
      commit("SET_USER", null);
    },

 

    readStorage({ commit }) { 
      let valid = localStorage.getItem('userHash') ? true:false;
      //console.log('readStorage', valid)
      if (valid) {
        commit("SET_USER_LOGIN", JSON.parse(atob(localStorage.getItem('userHash'))));
      } else { 
        commit("SET_USER_LOGOUT", { auth: false });
      }
    },
  },
  getters: {
    getAuth:(state)=>state.auth
  },
  modules: {
    
  }
})
