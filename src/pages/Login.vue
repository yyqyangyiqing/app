<template>
  <div class="login">
    <div class="content">
  <p class="fhbtn"><a href="javascript:;"  @click="goback">返回</a></p>
  
  <div class="login-box">
    <p class="lsolid"></p>
    
    <router-link to="/login" class="loginname">登陆</router-link>
      
      
    
    <p class="rsolid"></p>
  </div>
  <ul>
    <li class="lifirst">
      <input type="text" value="" v-model="username"/>
      <span>帐号</span>
    </li>
    <li>
      <input type="text" value="" v-model="password"/>
      <span>密码</span>
    </li>
  </ul>
  <div class="footbox">
    <input type="button" value="登 录" class="login-btn" @click="login"/>
    <a href="javascript:;" class="tishi">忘记密码？</a>
    <router-link to='/reg' class="reg">注册中心</router-link>
  </div>
</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      username:'',
      password:'',
      errMess:''
    }
  },

  methods:{
    goback(){
    this.$router.go(-1)
  },
  login(){
    console.log(this.$router)
    axios({
      url:'/api/login',
      method:'post',
      data:{
        username:this.username,password:this.password
      }
    }).then(
        res=>{
          // console.log(1)
          res.data.err===0?this.$router.push('/user'):this.errMess=res.data.msg;
           console.log(res.data);
           
          }

      )
  }
  }
  
}
</script>

<style  scoped> 
.content{max-width:6.4rem; margin:3rem auto;}
    .content .fhbtn{ padding-top:-0.27rem;position: fixed;top: 1rem}
    .content .fhbtn a{ display:block;width:1.23rem;height:0.25rem; margin-left:0.3rem;}
    .content h1{width:2.18rem;height:1.35rem; background:url(../assets/img/say.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
    /* .content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;} */
    .login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
    .login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
    .content .login-box{ position:relative;margin-top: 4.5rem;display: block}
    .content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:-1rem;left:0.1rem;}
    .content .loginname{position: absolute;left:50%;margin-left: -31px;top:-1rem}
    .content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:-1rem;right:0.1rem;}
    .content ul{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:2rem auto; margin-top:200px;
    display: block}
    .content ul li{height:0.95rem; position:relative;}
    .content ul li.lifirst{border-bottom:1px solid #e5e7e8;}
    .content ul li input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;}
    .content ul li span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
    .content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
    .content .login-btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
    .content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
    .content .reg{width:1rem; font-size:0.25rem; margin-top:0.28rem; display:block;margin-left:2.15rem}
</style>