import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Divider, Flexbox, FlexboxItem } from 'vux'

Vue.component('divider',Divider)
Vue.component('flexbox',Flexbox)
Vue.component('flexbox-item',FlexboxItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
