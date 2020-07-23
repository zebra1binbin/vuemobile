import Vue from 'vue'
import Vuex from 'vuex'
import { 
  Form,
  FormItem,
  Input,
  Button
} 
from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
//全部引入组件
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

NutUI.install(Vue);

Vue.use(Vuex)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.prototype.$http = axios

//请求根路径
axios.defaults.baseURL="http://127.0.0.1:9003/"
//每个请求都会加一个验证
axios.interceptors.request.use(config => {
  config.headers.Authorization = sessionStorage.getItem('token')
  //固定写法
  return config
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
