// import {UPDATE_HOME,UPDATE_FOLLOW,UPDARE_COLUMN,UPDATE_BANNER,UPDATE_USER,UPDARE_DETAIL}from './types'
 
import * as types from './types'   //批量导入 type是变量

import axios from '../plugins/axios'

export default {

    [types.UPDATE_HOME]:({commit,state},payload)=>{
        axios({
            url:'/api/home',
            params:{
                _page:1,
                _limit:10
            }

        }).then(
            res=>commit(types.UPDATE_HOME,res.data.data)
        )
    },
    // [UPDATE_FOLLOW]:(state,payload)=>state.follow = payload,
    // [UPDARE_COLUMN]:(state,payload)=>state.column = payload,
    // [UPDATE_BANNER]:(state,payload)=>state.banner = payload,
    // [UPDATE_USER]:(state,payload)=>state.user = payload,
    // [UPDARE_DETAIL]:(state,payload)=>state.detail = payload,
    [types.UPDATE_FOLLOW]:({commit,state},payload)=>{
        axios({
            url:'/api/follow',
            params:{
                _page:1,
                _limit:10
            }

        }).then(
            res=>commit(types.UPDATE_FOLLOW,res.data.data)
        )
    },
    [types.UPDATE_COLUMN]:({commit,state},payload)=>{
        axios({
            url:'/api/column',
            params:{
                _page:1,
                _limit:10
            }

        }).then(
            res=>commit(types.UPDATE_COLUMN,res.data.data)
        )
    },
    addItem:({commit,state},payload)=>{
        let arr=[...state.shopcar];//必须拷贝 断开指针 可以先修改再拷贝 也可以先改 再拷贝出来
        let find=false;
        arr.forEach((item,index)=>{
            if(item._id==payload._id){
                item.number++;
                find=true;
                console.log("aa")
            }
        });
        if(!find){
            payload.number=1    ;
            arr.push(payload);
            console.log(arr)
        };
        commit(types.ADD_ITEM,arr)

    },
    changeItem:({commit,state},payload)=>{
        state.shopcar.forEach((item,index)=>{
            if(item._id==payload._id){
                if(item.number<=0){
                    state.shopcar.splice(index,1);
                }else{
                    item.number+=payload.num
                }
            }
        });commit(types.CHANGE_ITEM,[...state.shopcar])

    },
    removeItem:({commit,state},payload)=>{
        state.shopcar.forEach((item,index)=>{
            if(item._id==payload._id){
                state.shopcar.splice(index,1);
                console.log("ccc")
            }
        });
        commit(types.REMOVE_ITEM,[...state.shopcar])
        

    },
    clearShopcar:({commit,state},payload)=>{
        commit(types.CLEAR_SHOPCAR,[])

    },








}