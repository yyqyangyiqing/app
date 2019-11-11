import {VIEW_NAV,VIEW_FOOT,VIEW_LOADING,UPDATE_HOME,UPDATE_FOLLOW,UPDATE_COLUMN,UPDATE_BANNER,UPDATE_USER,UPDATE_DETAIL
,ADD_ITEM,CHANGE_ITEM,REMOVE_ITEM,CLEAR_SHOPCAR}from './types'
 


export default {
    [VIEW_NAV]:(state,payload)=>state.bNav = payload,
    [VIEW_FOOT]:(state,payload)=>state.bFoot = payload,
    [VIEW_LOADING]:(state,payload)=>state.bLoading = payload,
    [UPDATE_HOME]:(state,payload)=>state.home = payload,
    [UPDATE_FOLLOW]:(state,payload)=>state.follow = payload,
    [UPDATE_COLUMN]:(state,payload)=>state.column = payload,
    [UPDATE_BANNER]:(state,payload)=>state.banner = payload,
    [UPDATE_USER]:(state,payload)=>state.user = payload,
    [UPDATE_DETAIL]:(state,payload)=>state.detail = payload,
    [ADD_ITEM]:(state,payload)=>{
        state.shopcar=payload
    },
    [CHANGE_ITEM]:(state,payload)=>{
        state.shopcar=payload
    },
    [REMOVE_ITEM]:(state,payload)=>{
        state.shopcar=payload
    },
    [CLEAR_SHOPCAR]:(state,payload)=>{
        state.shopcar=payload
    },
}