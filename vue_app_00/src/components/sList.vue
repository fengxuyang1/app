<template>
   <div class="app-slist">
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
        <mt-button type="primary" size="large" @click="getMore">加载更多...</mt-button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
              pno:0,
              pageSize:4,
              list:[]
            }
        },
        created() {
            this.getMore();
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
           }
        }
           
    }
</script>
<style>
    .app-slist{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:4px;
    }
    .app-slist .goods-item{
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
    .app-slist .goods-item img{
        width:100%;
    }
    .app-slist .goods-item h4{
        font-size:18px;
    }
    .app-slist .goods-item .now{
        color:red;
        font-size:16px;
        font-weight:bold;
    }
</style>