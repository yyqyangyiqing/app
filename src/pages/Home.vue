
<template>
  <div class="home">
    <Slider :list="$store.state.home" dataName='home'></Slider>
    <!-- <List :list="list" dataName='home'></List> -->
    <Center></Center>
    <van-notice-bar
  text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
  left-icon="volume-o" style="font-size:20px"
  
/>
  </div>
</template>

<script>
import Center from '../components/Center'
import Slider from '../components/Slider'
import List from '../components/List';
import axios from 'axios';
import * as types from '../store/types'
export default {
  // data(){
  //   return{
  //     list:[]
  //   }
  // },
  components:{
    List,Slider,Center
  },
  mounted(){
    // axios({
    //   url:'/api/home',
    //   params:{_page:1,limit:10}
    // }).then(
    //   res=>this.list=res.data.data
    //   // console.log(this.list[0].detail.auth_icon)}
      
    // )
    this.$store.dispatch(types.UPDATE_HOME)



  }
}
</script>


<style>
</style>
