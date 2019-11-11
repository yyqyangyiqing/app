<template >

  <div class="banner" v-if="$store.state.home.length>0">
    
    <!-- <ul class="clearfix"> -->
      <!-- <router-link
      v-for="item of $store.state.home"
      :key="item._id"
      :to="'/detail/'+item._id+'?dataName='+dataName"
      tag="li"
      dataName="banner" >
      <img :src="baseUrl+item.detail.auth_icon" alt=""/>
        <div class="text-box">
          <h2>{{item.title}}</h2>
          <p>{{item.detail.auth}}</p>
        </div>
      </router-link> -->
       <!-- <router-link
      to="/detail/2" tag="li">
      <img :src="baseUrl+list[1].detail.auth_icon" alt=""/>
        <div class="text-box">
          <h2>{{list[1].title}}</h2>
          <p>{{list[1].detail.auth}}</p>
        </div>
       </router-link>
       -->
       <swipe class="my-swipe">
  <swipe-item class="slide1" v-for="item of $store.state.home"
      :key="item._id">
      <router-link :to="'/detail/'+item._id+'?dataName='+dataName"
      tag="li"
      dataName="banner" >
       <img :src="baseUrl+item.detail.auth_icon" alt=""/>
        <div class="text-box">
          <h2>{{item.title}}</h2>
          <p>{{item.detail.auth}}</p>
        </div>
      </router-link>
      
      
      
      
      </swipe-item>
 
</swipe>
    <!-- </ul> -->
    </div>
   
 
</template>

<script>
// import $ from 'jquery';
// import Swipe from '../assets/js/swipe.js';
require('vue-swipe/dist/vue-swipe.css');
 
// in ES6 modules
import {Swipe, SwipeItem} from 'vue-swipe';






export default {
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },
  name:'slider',
  
  
  props:['list','dataName'],

  //  updated(){
  //    console.log(this.list[0]._id);
  //     var mySwipe=new Swipe($('.banner')[0],{
  //     auto:2000,
  //     continuous:true,
  //     stopPropation:true,
  //     callback:function (index,element){
  //       $('.banner ol li').removeClass('active');
  //       $('.banner ol li').eq(index).addClass('active');
  //     }
  //   })


  //  }
    
}
</script>
<style scoped>
/* .content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;} */
/* .banner{margin-top:-0.9rem;position: relative;overflow: hidden; z-index: 1}
.banner ul li{width:6.4rem;float:left;position: relative;}
/* .banner ul li .gaga{width:100%; display:block;} */
/* .banner ul li img{width:100%; height:314px;display:block;}
.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;}

.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;} */ 
.my-swipe {
  height: 500px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top:-80px
}
 
.slide1 {
  /* background-color: #0089dc; */
  color: #fff;
}
 

img{width:100%; height:500.58px;display:block;}
.text-box{width:100%; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}

</style>