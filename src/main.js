import Vue from 'vue'
import App from './App'
import router from './routers'
// import Router from './routers.js'
import Router from 'vue-router'
import Resource from 'vue-resource'
import requestUrl from './config.js'

Vue.use(Router);
Vue.use(Resource);

Vue.http.options.root = 'http://wangyb.net:8080';
Vue.http.options.imgRoot = 'http://oexqgmcri.bkt.clouddn.com/';
Vue.http.headers.common['x-user-token'] = 'jfq:16:2477553729:oScK75dxkqsJtA0I6mcXFCFdTVTeuSzU0hSAvtzI5g4=';
//console.log();


/* eslint-disable no-new */
// Vue.use(vueRouter);
// 路由配置
//console.log(Router);

//自定义过滤器
Vue.filter('calculateWorkTime', function (value) {//计算工龄
  var currentTime = Date.parse(new Date());
  var currentTime = currentTime / 1000;
  var startTime = Date.parse(new Date(value));
  var startTime = startTime / 1000;
  return Math.ceil((currentTime-startTime)/(24*3600*365));
});
Vue.filter('TrueFalse', function (value, trueMsg) {//计算工龄
  // if(value == 'true'){
  //   return trueMsg;
  // }else if (value == 'false') {
  //   return falseMsg;
  // }else {
  //   return '22';
  // }
  return trueMsg;
});

new Vue({
  //Router
  el: '#app',
  template: '<App/>',
  data: {
    requestUrl: requestUrl
  },
  components:{
    App
  },
  router
});
//export { app, router }
