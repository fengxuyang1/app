<template>
    <div class="app-home">
        <mt-swipe :auto="2500">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/sList">
                    <img src="../img/jgs.jpg">
                    <div class="mui-media-body">商品</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/EList">
                    <img src="../img/002.jpg" class="xin">
                    <div class="mui-media-body">消息</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/BuyCar">
                    <img src="../img/000.jpg">
                    <div class="mui-media-body">购物车</div>
                </router-link>
            </li>
        </ul> 
         <div class="mui-card" style="margin:2px,0,0,0;"">
            <div class="mui-card-header mui-card-media" style="height:60vw;background-image:url(../img/5.jpg)"></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" style="padding:0;padding-left:20px;">
                    <p>提伯斯玩偶</p>
                    <p style="color: #333;">¥158.00</p>
                    <router-link to="/sInfo?pid=21" class="mui-card-link">查看详情</router-link>
                </div>
            </div>
        </div>
        <div class="mui-card" style="margin:2px,0,0,0;"">
            <div class="mui-card-header mui-card-media" style="height:60vw;background-image:url(../img/6.jpg)"></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" style="padding:0;padding-left:20px;">
                    <p>星之守护者套装</p>
                    <p style="color: #333;">¥399.00</p>
                    <router-link to="/sInfo?pid=11" class="mui-card-link">查看详情</router-link>
                </div>
            </div>
        </div>
        <div class="mui-card" style="margin:2px,0,0,0;">
            <div class="mui-card-header mui-card-media" style="height:60vw;background-image:url(../img/7.jpg)"></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" style="padding:0;padding-left:20px;">
                    <p>开心魄罗</p>
                    <p style="color: #333;">¥89.00</p>
                    <router-link to="/sInfo?pid=29" class="mui-card-link">查看详情</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:[
                    {id:1,img_url:"img/1.jpg"},
                    {id:2,img_url:"img/2.jpg"},
                    {id:3,img_url:"img/3.jpg"},
                    {id:4,img_url:"img/4.jpg"}
                ]
            }
        },
         methods:{
            handleImage(){
                //1 发送ajax请求给服务器
                var url = "http://127.0.0.1:3000/imageList"
                this.axios.get(url).then(result=>{
                    //console.log(result);
                    this.list=result.data;
                });
                //2 接收服务器返回结果
                //3 将结果保存list
            }
        },
        created(){
            this.handleImage();
        }
    }
</script>
<style>
/*轮播图*/
    .app-home .mint-swipe{
        height:125px;
    }
    .app-home .mint-swipe img{
        width:100%;
    }
/*九宫格*/
    .app-home .mui-grid-9 img{
        width:90px;
        height:65px;
    }
    .app-home .mui-grid-9 .xin{
        width:70px;
        height:65px;
    }
    .app-home .mui-grid-view.mui-grid-9{
        background-color:#fff;
    }
    .mui-card-content-inner{
        display: flex!important;
        justify-content: space-between;
        line-height: 35px;
        padding-top:10px!important;
        border:#333!important;
    }
    .mui-card-content-inner .mui-card-link{
        margin: 0 20px 0 0;
    }
</style>