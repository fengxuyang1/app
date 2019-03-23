<template>
    <div class="app-user">
        <form id='login-form' class="mui-input-group" v-if="!show1">
			<div class="mui-input-row">
				<label>账号</label>
				<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号" name="uname" v-model="uname">
			</div>
			<div class="mui-input-row">
				<label>密码</label>
				<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码" name="upwd" v-model="upwd">
			</div>
		</form>	
		<div class="mui-content-padded" v-if="!show1">
			<button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary" @click="butLogin">登录</button>
			<div class="link-area">
				<router-link to="/Reg" id='reg'>注册账号</router-link> 
				<span class="spliter">|</span> 
				<a id='forgetPassword'>忘记密码</a>
			</div>
		</div>
		<form v-if="show1" class="showme">
			<span class="hahah">欢迎回来,{{$store.getters.UUserId}}</span><br>
			<button @click="btnlogout"class="out">退出登录</button><br>
			<router-link to="/BuyCar" class="mybtn">我的购物车>></router-link><br>
			<p class="mybtn1">
				可能喜欢: 
			</p><br>
			<div class="showme1">
				<div class="goods-item" v-for="item in list" :key="item.id">
					<img :src="item.img_url" @click="jump" :data-lid="item.id">
					<h4>{{item.title}}</h4>
					<div class="info">
						<span class="now">¥{{item.price}}</span>
					</div>
					<div class="sell">
						<span>热卖中</span>
					</div>
				</div>
				<mt-button type="primary" size="large" @click="getMore">查看更多</mt-button>
			</div>
		</form>
		
		
	</div>
</template>
<script>
    import {Toast} from "mint-ui"
	export default {
		data(){
			return {
				uname:"",
				upwd:"",
				//show1:"",
				pno:0,
              	pageSize:4,
				list:[]
			}
		},
		methods:{
			jump(e){
                var lid = e.target.dataset.lid;
                this.$router.push("/sInfo?pid="+lid);
            },
			getMore(){
				this.pno++;
				var url = "http://127.0.0.1:3000/shoplist?pno="+this.pno+"&pageSize="+this.pageSize;
					this.axios.get(url).then(result=>{
					var rows = this.list.concat(result.data.data);
					this.list = rows;
				})
			},
			butLogin(){
				//console.log(123);
				//为button按钮绑定点击事件
				//获取用户输入用户名和密码
				var u = this.uname;
				var p = this.upwd;
				//console.log(u+"-"+p);
				if(u==""||p==""){
					Toast("用户名不能为空，请检查");
					return;
				}
				//3:发送ajax请求
				var url = "http://127.0.0.1:3000/login?uname="+u+"&upwd="+p;
				this.axios.get(url).then(result=>{
					if(result.data.code==1){
						//发送发送ajax请求获取购物车商品数量
						//立即更新 updateCount();
						this.getMore();
						this.$store.commit("UserId",u);
						this.$router.push("/Home");
					}else{
						Toast("用户名或密码有误");
					}
				})
			},
			btnlogout(){
				sessionStorage.removeItem("name1");
				this.show1=false;
				var url = "http://127.0.0.1:3000/logout";
				this.axios.get(url).then(res=>{
					Toast("己退出");
					this.$router.push('/Home')
					
				})
			}
		},
		created() {
			if(sessionStorage.name1){
				this.show1=true;
			}else{
				this.show1=false;
			}
		},
	}
</script>
<style>
    .app-user input{
        width:75%;
    }
    .area {
		margin: 20px auto 0px auto;
	}
	
	.mui-input-group {
		margin-top: 10px;
	}
	
	.mui-input-group:first-child {
		margin-top: 20px;
	}
	
	.mui-input-group label {
		width: 22%;
	}
	
	.mui-input-row label~input,
	.mui-input-row label~select,
	.mui-input-row label~textarea {
		width: 78%;
	}
	
	.mui-checkbox input[type=checkbox],
	.mui-radio input[type=radio] {
		top: 6px;
	}
	
	.mui-content-padded {
		margin-top: 25px;
	}
	
	.mui-btn {
		padding: 10px;
	}
	
	.link-area {
		display: block;
		margin-top: 25px;
		text-align: center;
	}
	
	.spliter {
		color: #bbb;
		padding: 0px 8px;
	}
	
	.oauth-area {
		position: absolute;
		bottom: 20px;
		left: 0px;
		text-align: center;
		width: 100%;
		padding: 0px;
		margin: 0px;
	}
	
	.oauth-area .oauth-btn {
		display: inline-block;
		width: 50px;
		height: 50px;
		background-size: 30px 30px;
		background-position: center center;
		background-repeat: no-repeat;
		margin: 0px 20px;
		/*-webkit-filter: grayscale(100%); */
		border: solid 1px #ddd;
		border-radius: 25px;
	}
	
	.oauth-area .oauth-btn:active {
		border: solid 1px #aaa;
	}
	
	.oauth-area .oauth-btn.disabled {
		background-color: #ddd;
	}
	.hahah{
		font-size:24px;
	}
	.out{
		float:right;
		margin-top:-24px;
		background:#f50;
		border-color: #f00;
	}
	.showme{
		margin:20px;
	}
	.showme1{
		display:flex;
		flex-wrap:wrap;
		justify-content:space-between;
		padding:4px;
	}
	.showme1 .goods-item{
		width:50%;
		border:1px solid #ccc;
		box-shadow:0 0 8px #ccc;
		margin:4px 0;
		padding:2px;
		display:flex;
		flex-direction:column;
		min-height:230px;
		justify-content:space-between;
	}
	.showme1 .goods-item img{
		width:100%;
	}
	.showme1 .goods-item h4{
		font-size:18px;
	}
	.showme1 .goods-item .now{
		color:red;
		font-size:16px;
		font-weight:bold;
	}
	.mybtn{
		color:black;
	}
	.mybtn1{
		font-size:20px;
		color:black;
		margin-top:20px;
	}
</style>