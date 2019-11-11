<template>
  <div id="app">
    <Loading v-if="$root.bLoading"></Loading>
    <Header v-if="$root.bNav"></Header>
    
    <router-view></router-view>
    <Footer v-if="$root.bFoot"></Footer>
    
  </div>
</template>

<script>
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Follow from './pages/Follow';
import Column from './pages/Column';
import Loading from './components/Loading';
import Shop from './pages/Shop';
import Car from './pages/Car';
import Center from './components/Center';
import {mapState} from 'vuex'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Home,Follow,Column,Loading,ErrorPage,Shop,Car
  },
  watch:{
    $route:{
      handler(nextRouter,prevRoute){
      let path=nextRouter.path;
      if(/follow|column/.test(path)){
        this.$root.bNav=true;
        this.$root.bFoot = true
      };
      if(/home/.test(path)){
        this.$root.bNav=false;
        this.$root.bFoot = true
      };
      if(/login|reg|detail/.test(path)){
        this.$root.bNav=false;
        this.$root.bFoot = true
      }
      

    },immediate:true
  }
},

computed:mapState([
  'bFoot,bNav'
])



}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
