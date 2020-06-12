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
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBxuIUONqnl5SYCHXg7q3hTgWinaTJwJ7k',
    v: '3.26'
  },
  // Demonstrating how we can customize the name of the components
  installComponents: false
})
Vue.component('google-map', VueGoogleMaps.Map)
Vue.component('google-marker', VueGoogleMaps.Marker)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
