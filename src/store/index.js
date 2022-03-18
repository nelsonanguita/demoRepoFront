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
          localStorage.setItem('user', JSON.stringify(res.data));
          return true

        } catch (error) {
          console.log(error);
          commit("SET_USER_LOGOUT", { auth: false });
          return false
        }
    },

    logout({ commit }) { 
      localStorage.setItem('user', null);
      commit("SET_USER_LOGOUT", { auth: false });
    },

    readStorage({ commit}) { 
      if (localStorage.getItem('user')) {
        commit("SET_USER_LOGIN", JSON.parse(localStorage.getItem('user')));
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
