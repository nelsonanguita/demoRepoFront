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
    //metodos
    async login({ commit },credentials) {
        try {
          const res = await axios.post('/api/auth/login', credentials);
          commit("SET_USER", res.data);
          localStorage.setItem('user',JSON.stringify(res.data));
          return true
        } catch (error) {
          console.log(error);
          commit("SET_USER", null);
          return false
        }
    },

    logout({ commit }) { 
      localStorage.setItem('user', null);
      commit("SET_USER", null);

    },
    readStorage({ commit}) { 
      if (localStorage.getItem('user')) {
        commit("SET_USER", JSON.parse(localStorage.getItem('user')));
      } else { 
        commit("SET_USER", null);
      }
    }


 

    
  },
  modules: {
    
  }
})
