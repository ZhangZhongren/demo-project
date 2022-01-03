import Vue from 'vue'
import App from './App.vue'
import VueIntro from 'vue-introjs'
Vue.use(VueIntro)
 
import 'intro.js/introjs.css';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
