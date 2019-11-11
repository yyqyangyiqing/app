<template>
   <!-- <div class="foot-btn" > -->
    <!-- <ul> -->
      <!-- <router-link tag="li" to="/home" ><van-icon name="home-o" style=" font-size:60px;;line-height:0.8rem"/></router-link> -->
      <!-- <router-link tag="li" to="/home" class="write" active-class="write_active"><a href="javascript:;"></a></router-link> -->
      <!-- <router-link tag="li" to="/user" style="float:left;height:0.8rem;"><van-icon name="manager-o" style=" font-size:60px;;line-height:0.8rem" /></router-link> -->


      <van-tabbar route active-color="#ff0000" inactive-color="green">
  <van-tabbar-item
    replace
    to="/home"
    icon="home-o"
    
  >
    首页
  </van-tabbar-item>


  <van-tabbar-item
    replace
    to="/column"
    icon="cart-circle-o"
  >
    商城
  </van-tabbar-item>



  <van-tabbar-item
    replace
    to="/user"
    icon="manager-o"
  >
    用户
  </van-tabbar-item>
</van-tabbar>







<!-- 
      <li class="write"><a href="javascript:;"></a></li>
      <li class="my"><a href="javascript:;"></a></li> -->
    <!-- </ul> -->
  <!-- </div> -->
</template>

<style>
.foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
div.van-tabbar{height:0.8rem;border-top:1px solid #9e9a95;}
/* div.van-tabbar-item{line-height: .8rem;font-size:50px} */
i.van-icon{font-size: 40px;}


/* .foot-btn ul{width:4.08rem; margin:0 auto;}
.foot-btn ul li{ float:left;}
.foot-btn ul li a{ display:block; width:100%;height:100%;}
.foot-btn ul .home{width:0.44rem;height:0.59rem; background:url(../assets/img/home1.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;} */
/* .foot-btn ul .write{width:0.82rem;height:0.81rem; background:url(../assets/img/write.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;} */
/* .foot-btn ul .my{width:0.39rem;height:0.63rem; background:url(../assets/img/my.png) no-repeat 0 0;background-size:100%; margin-left:3.18rem; margin-top:0.07rem;}
.foot-btn ul .home_active{width:0.44rem;height:0.59rem; background:url(../assets/img/home.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
.foot-btn ul .my_active{width:0.39rem;height:0.63rem; background:url(../assets/img/my1.png) no-repeat 0 0;background-size:100%; margin-left:3.18rem; margin-top:0.07rem;

} */


</style>
