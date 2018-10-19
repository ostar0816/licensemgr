// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import swal from 'sweetalert2'
import VueLocalStorage from 'vue-ls'
import VueMoment from 'vue-moment'

Vue.use(VueMoment);

let options = {
  namespace: 'vuejs__'
};
 
Vue.use(VueLocalStorage, options);

import './assets/files'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
Vue.config.productionTip = false
Vue.prototype.$swal = swal
/* eslint-disable no-new */
new Vue({
  el: '#app',  
  router,
  store,
  template: '<App/>',
  components: { App }
})
