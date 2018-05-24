// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
Vue.config.productionTip = false;

//这是引入的iview组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

// 引入server组件
import https from '@/server'
Vue.use(https);

// 引入 vuex
import store from './store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
