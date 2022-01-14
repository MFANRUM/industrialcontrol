import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import elementUI from 'element-ui'
require('element-ui/lib/theme-chalk/index.css')
Vue.use(elementUI)

import axios from "axios";
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
