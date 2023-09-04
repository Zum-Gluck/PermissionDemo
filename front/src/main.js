import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import api from '@/api/index.js'
Vue.prototype.$api = api

import './permission' // permission control

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
