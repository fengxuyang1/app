<template>
  <div class="app-container">
  <!--1 添加公共组件 Header-->
   <mt-header fixed title="LOL周边商城" style="background-color:#000"></mt-header>
  <!--2 占位符用来显示其他组件-->
    <router-view></router-view>
  <!--3 添加公共组件 tabbar-->
  <nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item mui-active" to="/Home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link class="mui-tab-item" to="/EList">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
	 </router-link>
    <router-link class="mui-tab-item" to="/BuyCar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">
              {{$store.getters.optCartCount}}
          </span>
        </span>
        <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link class="mui-tab-item" to="/User">
        <span class="mui-icon mui-icon-person-filled"></span>
        <span class="mui-tab-label">个人中心</span>
    </router-link>
  </nav>
 </div>
</template>
<style>
   .app-container{
     padding-top:40px;
     padding-bottom:50px;
     overflow-x:hidden;
   }

 /* .mui-bar-tab .mui-tab-item-tao.mui-active {
     color: #007aff; 
 } */
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
.app-container .mui-bar{
  background-color:#000;
}
.mui-icon-home .mui-icon-email .mui-icon-extra-cart .mui-icon-person-filled:hover{
  color:#007aff;
}
</style>
