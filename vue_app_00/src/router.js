import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home.vue";
import sList from "./components/sList.vue";
import EList from "./components/EList.vue";
import BuyCar from "./components/BuyCar.vue";
import User from "./components/User.vue";
import Reg from "./components/Reg.vue";
import sInfo from "./components/sInfo.vue";
import EInfo from "./components/EInfo.vue";


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/Home"},
    {path:'/Home',component:Home},
    {path:'/sList',component:sList},
    {path:'/EList',component:EList},
    {path:'/BuyCar',component:BuyCar},
    {path:'/User',component:User},
    {path:'/Reg',component:Reg},
    {path:'/sInfo',component:sInfo},
    {path:'/EInfo',component:EInfo},
    
  ]
})
