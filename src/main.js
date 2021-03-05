import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'
import { Button, Popover ,Icon} from 'ant-design-vue';

// import Antd from 'ant-design-vue';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper.min.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
import 'ant-design-vue/dist/antd.css';
import '@/assets/css/font.css';

import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://10.200.226.98:3000/api/v1' 
Vue.prototype.$echarts = window.echarts

Vue.use(dataV)
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Popover)
Vue.use(Icon)
// 组织架构图组件



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
