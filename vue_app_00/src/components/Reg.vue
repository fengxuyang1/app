<template>
    <div class="app-reg">
        <div class="mui-content">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号" v-model="uname" @blur="un">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="upwd" @blur="unn">
				</div>
				<div class="mui-input-row">
					<label>确认</label>
					<input id='password_confirm' type="password" class="mui-input-clear mui-input" v-model="upwd1" placeholder="请确认密码" @blur="unn1">
				</div>
				<div class="mui-input-row">
					<label>邮箱</label>
					<input id='email' type="email" class="mui-input-clear mui-input" placeholder="请输入邮箱" v-model="email" @blur="ue">
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='reg' class="mui-btn mui-btn-block mui-btn-primary" @click="reg">注册</button>
			</div>
		</div>
    </div>
</template>
<script>
	
    import {Toast} from "mint-ui"
	export default {
		data(){
			return {uname:"",upwd:"",upwd1:"",email:""}
		},
		methods:{
			reg(){
				var u=this.uname;
				var p=this.upwd;
				var a=this.upwd1;
				var e=this.email;
				if(!u || !p || !a || !e){
					Toast("不能为空,请检查");
					return;
				}
				var url="http://127.0.0.1:3000/reg?uname="+u+"&upwd="+p;
				this.axios.get(url).then(result=>{
					if(result.data.code==1){
						this.$router.push("/User");
						Toast("注册成功")
					}else{
						Toast("注册失败,请重试");
					}
				})
			},
			un(){
				var u=this.uname;
				var p=this.upwd;
				var reg=/^[a-z0-9]{3,12}$/i;
				if(!reg.test(u)){
					Toast("用户名格式不正确，请检查");
					return;
				}
			},
			unn(){
				var p=this.upwd;
				var reg=/^[a-z0-9]{3,12}$/i;
				if(!reg.test(p)){
					Toast("密码格式不正确，请检查");
					return;
				}
			},
			unn1(){
				var a=this.upwd1;
				var p=this.upwd;
				if(a!=p){
					Toast("密码不一致,请检查")
				}
			},
			ue(){
				var e=this.email;
				var reg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
				if(!reg.test(e)){
					Toast("邮箱格式不正确")
				}
			}
		}
	}
</script>
<style></style>