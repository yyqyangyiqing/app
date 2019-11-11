import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Follow from '../pages/Follow';
import Detail from '@/pages/Detail';  //别名@=src ~=public
import Column from '../pages/Column';
import User from '../pages/User';
import Login from '../pages/Login';
import Reg from '../pages/Reg';
import ErrorPage from '../pages/ErrorPage'
import Shop from '../pages/Shop';
import Car from '../pages/Car'

let routes=[
    {path:'/home',component:Home},
    {path:'/follow',component:Follow},
    {path:'/detail/:id',component:Detail},
    {path:'/column',component:Column},
    {path:'/user',component:User},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/shop/:id',component:Shop},
    {path:'/car',component:Car},
    {path:'/',redirect:'/home'},

    {path:'*',component:ErrorPage}






];

export default new VueRouter({
    mode:'history',
    routes

    })
