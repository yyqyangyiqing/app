<template>
  <div class="follow">
    <List :list="$store.state.home" dataName='follow'></List> 
  </div>
</template>

<script>
import List from '../components/List';
import axios from 'axios';
import * as types from '../store/types'
export default {
  data(){
    return{
      list:[]
    }
  },
  components:{
    List
  },
  mounted(){
    // axios({
    //   url:'/api/home',
    //   params:{_page:1,limit:8}
    // }).then(
    //   res=>this.list=res.data.data
      
    // )
    this.$store.dispatch(types.UPDATE_HOME)
  }
  
}
</script>
<style scoped>

.newList{clear:both;margin-bottom:1rem;margin-top:.7rem}


</style>
