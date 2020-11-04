import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import VueClipboard from 'vue-clipboard2'
import App from './components/App.vue'
import '../styles/style.scss'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false
Vue.use(VueHighlightJS)
Vue.use(VueClipboard)
Vue.use(Vuetify)
Vue.prototype.$chrome = chrome
const opts = {}
/* eslint-disable no-new */
new Vue({
  el: '#root',
  vuetify: new Vuetify(opts),
  render: h => h(App)
})
