<template>
  <div class="app-newsinfo">
    <div class="mui-card">
        <div class="mui-card-header mui-card-media" :style="'height:40vw;background-image:url('+info.img_url+')'"></div>
        <div class="mui-card-content">
            <div class="muiCard">
                <p>Posted on {{info.ctime | dateFilter}}</p><br>
                <p style="color: #333;">{{info.content}}</p>
            </div>
        </div>
        <div class="mui-card-footer">
            <a class="mui-card-link">踩</a>
            <a class="mui-card-link">赞</a>
        </div>
    </div>
   
  </div>
</template>
<script>

    export default {
        data(){
            return {
                info:{}
            }
        },
        created(){
            this.findNewsInfo();
        },
        methods:{
            findNewsInfo(){
                //1 获取参数
                var nid=this.$route.query.nid;
                //2 发送ajax请求
                var url="http://127.0.0.1:3000/findNewsInfo?id="+nid;
                this.axios.get(url).then(result=>{
                    //console.log(result);
                    this.info=result.data.data[0];
                })
                //3 获取返回数据 显示
            }
        }
    }
</script>
<style>
    .muiCard{
        margin:20px;
    }
</style>