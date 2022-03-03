import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { QuasarTiptapPlugin, RecommendedExtensions } from 'quasar-tiptap'
import wysiwyg from "vue-wysiwyg";

Vue.use(wysiwyg, {}); // config is optional. more below
Vue.use(VueAxios, axios)

Vue.use(QuasarTiptapPlugin, {
  language: 'zh-hans',
  spellcheck: true
})

axios.defaults.baseURL = 'http://localhost:4003'
Vue.config.productionTip = false



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

