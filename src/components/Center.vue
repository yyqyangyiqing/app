<template>
   <ul >
        <router-link to="/follow" tag="li" >新闻热点</router-link>
       <router-link to="/column" tag="li" v-on:mouseenter="mouseOver" 
        	@mouseleave="mouseLeave" 
        	:style="active" >商城热卖</router-link>
         <router-link to="/car" tag="li" @mouseenter="mouseOver" 
        	@mouseleave="mouseLeave" 
        	:style="active" >购物车</router-link>

   </ul>
</template>

<style  scoped>
ul{width:100%;height:200px;display: flex;}
ul li{flex: 1;text-align: center;line-height: 200px;font-size:24px;background:coral;height: 200px}

</style>
<script>
export default {
        data(){
      return {active: ''} 
    },
     methods: {
      mouseOver: function(){
            this.active = 'background: darkblue';
        },
        mouseLeave: function () {
            this.active = '';
        },

  }
}
</script>