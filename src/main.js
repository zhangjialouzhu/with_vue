// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';

import 'iview/dist/styles/iview.css';
import './common/theme/index.less';


import {Notice,Message} from 'iview';
import 'font-awesome/css/font-awesome.css'
//import 'lib-flexible/flexible'
Vue.use(iView);
Vue.component('Message', Message);
Vue.component('Notice', Notice);

Vue.config.productionTip = false;
Vue.prototype.$Message =Message;
Vue.prototype.$Notice =Notice;
//时间过滤器
import "./filter/filter"

let _this = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
