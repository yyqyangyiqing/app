<template>
  <div class="column">
     <ul>
      <li v-for="(item,index) of $store.state.column" :key="item._id">
       <router-link :to="'/shop/'+item._id+'?dataName='+dataName">
         <img :src="baseUrl+item.detail.auth_icon" alt="" class="img"/>
          <h2>{{index+1}}.{{item.title}}</h2>
          <p v-html="item.detail.content"></p>
          
       </router-link>
       <!-- <input type="button" value="加入购物车" style="font-size:32px;color:red" @click="addItem(item)"> -->
      <!-- <el-radio-group v-model="direction">
        <el-radio label="rtl">从右往左开</el-radio>
        </el-radio-group> -->
        <el-button type="success"><router-link :to="'/shop/'+item._id+'?dataName='+dataName">查看详情</router-link></el-button>
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  购物车抽屉
</el-button>

<el-drawer
  title="购物车"
  :visible.sync="drawer"
  :direction="direction"
  :before-close="handleClose"
  size=35%
  >
  <div v-if="shopcar.length==0" style="font-size:36px">请去商城购买商品</div>
 <ul style="padding-left:0.4rem" v-else>
      <li v-for="(item,index) of shopcar" :key="item._id" style="margin-bottom:0.2rem">

       <p>{{index+1}}/种类:{{item.title}}</p>
       <img :src="baseUrl+item.detail.auth_icon" alt style="width:80px;height:80px" />
       <p>价格:{{item.detail.auth}}</p>
       <p v-html="item.detail.content"></p>
       <p>数量:{{item.number}}</p>
     
      
       




      </li>




    </ul>
    <el-button type="warning" style="margin-left:0.4rem"><router-link to="/car" >去购物车</router-link></el-button>
</el-drawer>




      </li>
      
 
    </ul>
  </div>
</template>

<style scoped>
.newList{clear:both;margin-bottom:1rem;margin-top:.7rem}
@import url('../assets/css/list.css');
.column .img{width: 120px;height:120px;};
section.el-drawer__body{padding-left: 1rem}
</style>

<script>
import axios from '../plugins/axios';
import * as types from '../store/types';
import {mapGetters,mapActions,mapState} from 'vuex'
export default {
  data(){
    return{
      // list:[],
      dataName :'column',
       drawer: false,
        direction: 'rtl',
    }
  },
   mounted(){
    // axios({
    //   url:'/api/column',
    //   params:{_page:1,limit:10}
    // }).then(
    //   res=>this.list=res.data.data
    //   // console.log(this.list[0].detail.auth_icon)}
      
    // )
    this.$store.dispatch(types.UPDATE_COLUMN)
  },
  // methods:mapActions(["addItem"])
   methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
    computed:{...mapState(['shopcar']),}





}
</script>