import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AwakeUi from "../packages"
Vue.use(AwakeUi)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
