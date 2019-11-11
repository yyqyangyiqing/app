<template>
    <div class="detail">
    <div class="nav">
  <ul>
    <li class="l-btn" @click="goback"></li>
  </ul>
</div>
<div class="content" v-if="detail.detail">
  <div class="header clear"><h2><img width="100%" :src="baseUrl+detail.detail.auth_icon" alt=""/></h2><p style="font-size:24px;color:red">${{detail.detail.auth}}</p></div>
  <div class="cont">
    <h3>{{detail.title}}</h3>
    <div class="time"></div>
    <div class="text-box" v-html="detail.detail.content"></div>
    <input type="button" value="加入购物车" style="font-size:32px;color:red" @click="addItem(detail)">
    <router-link to="/car" style="font-size:32px;color:red;margin-left:1.9rem">去购物车</router-link>
  </div>
</div>
  </div>
</template>
<script>
import axios from 'axios';
import {mapGetters,mapActions} from 'vuex'

export default {
//   Create(){
//     console.log(this.$list)}
//   ,
    
  data(){
    return{
      detail:{},
     
    }
  },
  mounted(){
    axios({
      url:'/api/'+this.$route.query.dataName+'/'+this.$route.params.id
    }).then(
      res=>{this.detail=res.data.data;
      console.log(this.detail)}
        
    )
    

  },
  methods:{
    goback(){
      this.$router.go(-1)


    },
    ...mapActions(["addItem"])
    // addToCar(){
        
    // // this.$root.car.push(this.detail.detail);
    // //     console.log(this.$root.car)
    //      console.log(this.$store.state.shopcar)
    //     this.$store.state.shopcar.push(this.detail.detail);
       
    // }
  },
  
    
  
  
}
</script>


<style scoped>


.nav{width:100%; position:fixed;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
.nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;}
.nav ul li{width:0.29rem;height:0.31rem; background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%; margin:0 0 0 0.38rem;}

.content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
.content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none}
</style>