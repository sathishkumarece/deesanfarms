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
import * as VueGoogleMaps from 'vue2-google-maps'

// Configure Vue resource
Vue.use(VueResource)
Vue.use(VueMeta)

// Configure google map with key and version
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_KEY,
    v: '3.26'
  },
  installComponents: false
})
Vue.component('google-map', VueGoogleMaps.Map)
Vue.component('google-marker', VueGoogleMaps.Marker)

Vue.config.productionTip = false

// Creating a vue instance
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
