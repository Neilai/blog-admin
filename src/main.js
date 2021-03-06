// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/style/index.scss'
import '@/assets/img/icon/iconfont'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './utils/axios'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

Vue.config.productionTip = false
Vue.prototype.$axios= axios

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
