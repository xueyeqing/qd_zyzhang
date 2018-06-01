// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './config/rem'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

/**
 * 路由改变前
 * to:即将要进入的目标的路由对象
 * from:当前导航即将要离开的路由对象
 * next:调用该方法后，才能进入下一个钩子
 */
router.beforeEach((to, from, next) => {
  next();
});

/**
 * 路由改变后
 */
router.afterEach((to, from, next) => {
  /**
   * 防止页面太长，下个页面停留在上一个页面的位置，如下方法返回到顶端
   */
  window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
