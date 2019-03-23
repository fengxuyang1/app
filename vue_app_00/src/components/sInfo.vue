<template>
    <div class="app-sinfo">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<img :src="info.img_url">
					</div>
				</div>
			</div>
        <div class="mui-card">
            <div class="mui-card-header">{{info.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p>销售价:¥{{info.price}}</p>
                   购买数量:
                   <div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
					<input class="mui-input-numbox" type="number" value="1" v-model="val">
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
				   </div>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="danger" size="small" @click="addcart">加入购物车</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
     export default {
        data(){
            return {
                info:{},
                val:1,
                pid:this.$route.query.pid
            }
        },
        methods:{
            goodAdd(){
                this.val++;
            },
            goodSub(){
                if(this.val > 1){
                    this.val--;
                }
            },
            findGoodInfo(){
                var url = "http://127.0.0.1:3000/findProduct?pid="+this.pid;
                this.axios.get(url).then(result=>{
                    this.info=result.data.data[0];
                });
            },
            addcart(){
                //脚手架  
                //console.log(123);
                //0:为按钮绑定点击事件 
                //1:获取二个参数 pid price  uid=1
                var pid = this.pid;
                var price = this.info.price;
                var uid = 1;
                //console.log(pid+"_"+price+"_"+uid);
                //2:发送ajax请示
                var url = "http://127.0.0.1:3000/addcart?pid="+pid+"&price="+price+"&uid="+uid;
                this.axios.get(url).then(result=>{
                    if(result.data.code == 1){
                        Toast("添加成功");
                    }else{
                        Toast("请登录");
                    }
                })
            }
        }, 
        created() {
            this.findGoodInfo();
        }
     }
</script>
<style>
    .mui-card-content-inner img{
        width:100%;
        height:50%;
    }
</style>