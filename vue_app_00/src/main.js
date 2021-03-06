import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入
import Vuex from "vuex"
//注册
Vue.use(Vuex)
//创建store对象
var store=new Vuex.Store({
  state:{
    cartCount:sessionStorage.getItem("cartCount")||0 ,   //共享数据:购物车中商品数量
    name1:sessionStorage.getItem("name1")||"请登录",
  },
  mutations:{
    //购物车中数据加一 点击商品详情[加入购物车]
    increment(state){
      state.cartCount++;
    },
    //显示购物车列表
    updateCount(state,count){
      state.cartCount=count;
      sessionStorage.setItem("cartCount",count);
    },
    //显示登录用户名
    UserId(state,name1){
      state.name1=name1;
      sessionStorage.setItem("name1",name1);
    }
  },
  getters:{
    optCartCount:function(state){
      return state.cartCount;
    },
    UUserId:function(state){
      return state.name1
    }
  }
})
//1:引入mint-ui 样式文件
import'mint-ui/lib/style.css'
Vue.config.productionTip = false
//2:引入 mui库样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//3 引入mint-ui组件
import {Header,Swipe,SwipeItem,Button} from "mint-ui"
//4 注册组件
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
//5.引入axios库   50
import axios from "axios"
//6.配置跨域访问保存session
axios.defaults.withCredentials=true;
//7.将axios库配置Vue实例对象中
Vue.prototype.axios=axios;
//7.1 加载第三方模块qs
import qs from "qs";
import { runInNewContext } from 'vm';
//7.2 配置qs模块,qs成为Vue属性
Vue.prototype.qs=qs;

//8 main.js 创建日期过滤器
Vue.filter("datetimeFilter",function(val){
  //8.1 创建日期对象
  var date=new Date(val);
  //8.2 获取年 月 日 时 分 秒
  var y=date.getFullYear();
  var m=date.getMonth()+1;
  var d=date.getDate();
  var h=date.getHours();
  var mi=date.getMinutes();
  var s=date.getSeconds();
  //8.3 返回字符串 y-m-d h:mi:s
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}-${m}-${d} ${h}:${mi}:${s}`;
})
//9 创建日期过滤器
Vue.filter("dateFilter",function(val){
  //9.1 创建日期对象
  var date=new Date(val);
  //9.2 获取年 月 日 时 分 秒
  var y=date.getFullYear();
  var m=date.getMonth()+1;
  var d=date.getDate();
  //9.3 返回字符串 y-m-d h:mi:s
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}-${m}-${d}`;
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
