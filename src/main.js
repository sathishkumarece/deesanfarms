import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueResource from 'vue-resource'
import VueMeta from 'vue-meta'
import './assets/scss/deesanFarms.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// Configure Vue resource
Vue.use(VueResource)
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
