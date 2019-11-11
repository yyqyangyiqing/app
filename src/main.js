import Vue from 'vue'
import App from './App.vue'

//引入全局资源
import './assets/js/font'// ~~ src="xx.js"
import './assets/css/base.css'

Vue.config.productionTip = false;

//引入路由配置

import router from './plugins/router';


//配置服务端地址
import server from './config/serve'
Vue.prototype.baseUrl = server.baseUrl;

import store from './plugins/vuex';
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vant);
Vue.use(ElementUI);


let vm =new Vue({
  render: h => h(App),
  router,store,
  data:{
     bNav:true,
     bFoot:true,
     bLoading:false
     
  }
  
}).$mount('#app')

export default vm
