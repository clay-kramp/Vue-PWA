import Vue from 'vue'
import App from './App.vue'
import 'es6-promise/auto'
import router from './router/router.js';

Vue.config.productionTip = false

import './assets/styles/index.css';

export default new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
