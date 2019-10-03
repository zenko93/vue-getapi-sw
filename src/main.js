import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);
export const dataEmitter = new Vue;

new Vue({
  render: h => h(App),
}).$mount('#app')
