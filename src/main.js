import Vue from 'vue'
import {themeMixin} from './mixins/themeMixin'
import {translationMixin} from './mixins/translationMixin'
import App from './App.vue'

Vue.config.productionTip = false


Vue.mixin(themeMixin)
Vue.mixin(translationMixin)

new Vue({
  render: h => h(App),
}).$mount('#app')
