<template>
  <div class="newsList">
    <ul>
      <li v-for="(item,index) of $store.state.home" :key="item._id">
       <router-link :to="'/detail/'+item._id+'?dataName=home'">
          <h2>{{index+1}}<img style="width:50px"  :src="baseUrl+item.detail.auth_icon"/>{{item.title}}</h2>
          <p>{{item.des}}</p>
       </router-link>
      </li>
      
    
    
 
    </ul>
  </div>
</template>
<style scoped>
@import url('../assets/css/list.css');
</style>

<script>
export default {
  props:['list','dataName']
}
</script>
