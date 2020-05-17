import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'  // 放在vue实例上面去
import App from './App'
// import env from './env' // ./指的是当前目录，没有 ./ 他会认为这是一个依赖插件
// mock 开关
// const mock = true;
// if (mock) {
//   require('./mock/api')
// }
Vue.prototype.$message = Message;
// 根据前端的跨域方式作调整   /a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    if (path != '#/index') {
      window.location.href = '/#/login';
    }
    return Promise.reject();
  } else {
    Message.error(res.msg);
    // this.$message.error(res.msg);
    return Promise.reject();
  }
})

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false
// 


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
