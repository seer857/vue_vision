import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'
import {Button,Popover} from 'ant-design-vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/assets/css/font.css';
Vue.use(dataV)
Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Popover)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
