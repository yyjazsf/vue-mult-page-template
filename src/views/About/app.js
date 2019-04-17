import Vue from 'vue';
import App from './about.vue';
import '@/registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
