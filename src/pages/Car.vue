<template>
  <!-- <div class="newsList">
    <ul>
      <li v-for="(item,index) of this.$store.state.shopcar" :key="item._id">
        <h2>{{index+1}}${{item.auth}}</h2>
        <img :src="baseUrl+item.auth_icon" alt style="width:50px;height:80px" />
        <button style="font-size:18px" @click="del($event,item.index)">移除</button>
      </li>
    </ul>
    <div  style="font-size:32px">结算:{{result}}</div>
  </div> -->
  <div class="newsList">
  <div v-if="shopcar.length==0" style="font-size:36px">请去商城购买商品</div>
  
    <ul v-else>
      <li v-for="(item,index) of shopcar" :key="item._id">

       <p>{{index+1}}/种类:{{item.title}}</p>
       <img :src="baseUrl+item.detail.auth_icon" alt style="width:80px;height:80px" />
       <p>价格:{{item.detail.auth}}</p>
       <p v-html="item.detail.content"></p>
       <p>数量:{{item.number}}</p>
        <van-button type="info" @click="changeItem({_id:item._id,num:1})">+</van-button>
        <van-button type="info" @click="changeItem({_id:item._id,num:-1})">-</van-button>
        <van-button type="info" @click="removeItem({_id:item._id})">删除商品</van-button>

       




      </li>




    </ul>
  <van-submit-bar
  :price=this.result*100
  button-text="提交订单"
  @submit="onSubmit"
  style="margin-bottom:1rem"
/>

    <!-- <div style="font-size:32px;margin-left:30px;color:red">总价:{{result}}</div> -->
     <van-button type="danger" @click="clearShopcar" v-show="$store.state.shopcar.length>0" style="margin-left:30px">清空</van-button>
  </div>
</template>
<style scoped>
p{font-size:18px}
button{font-size:18px;margin-right: 20px}
</style>


<script>
// import { chownSync } from 'fs';
// import Vue from 'vue';
// import { Button ,Card } from 'vant';

// Vue.use(Button).use(Card);

import {mapState,mapActions} from 'vuex'
export default {
  // data() {
  //   return {
  //     result: '',

  //   };
  // },
  // beforeRouteEnter(to,from,next){
  //   axios({
  //     url:'/api/user'
  //   }).then(
  //     res=>res.data.err===0?next(_this=>_this.user=res.data.data):next("/login")
  //   )


    
  // },
  // mounted() {
  //   console.log(this.$root.car);
  //   this.$store.state.shopcar.forEach(element => {
  //     this.result += Number(element.auth);
  //   });
  // },

  // methods: {
  //   del(ev, index) {
  //     // this.result - ev.auth;
  //     this.$store.state.shopcar.splice(index, 1);
  //    this.result  = 0;
  //     this.$store.state.shopcar.forEach(element => {
  //     this.result += Number(element.auth);
      
  //   })
  //   // console.log(this.result);
    

  //   },
  //   show() {
  //     this.$root.car.forEach(element => {
  //       this.result += Number(element.auth);
  //     });
  //   },
  //   aa() {
  //     console.log(2);
  //   }
  // },
  // //     updated(){
  // //       this.$root.car.forEach(element => {
  // //      this.result+=Number(element.auth)

  // // })
  // //     }

  //   updated(){
  //     console.log(this.$root.car);
  //     this.$root.car.forEach(element => {
  //       this.result += Number(element.auth);
  //     })

  //   }

computed:{...mapState(['shopcar']),
  result:function(){
    let result = 0
   this.$store.state.shopcar.forEach((item,index) => {
      result += item.detail.auth *item.number
    });return result
  }


},
methods:mapActions([
  'changeItem',"clearShopcar",'removeItem'
])















};
</script>