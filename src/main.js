// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
// 实例化一个vue对象
new Vue({
  el: '#app', // id我app的div 作为挂载点
  router,
  components: { App }, // 注册组件,在这里注册的组件,可以在其他组件中直接使用 也可以<app></app>标签的形式使用
  template: '<App/>' // 使用组件的方式
})
