import Vue from 'vue'
import {themeMixin} from './mixins/themeMixin'
import App from './App.vue'

Vue.config.productionTip = false


Vue.mixin(themeMixin)

new Vue({
  render: h => h(App),
}).$mount('#app')
