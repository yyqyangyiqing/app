<template>
   <div class="znsArea">
<!--留言-->
     <div class="takeComment">
        <textarea name="textarea" v-model='ipt' class="takeTextField" id="tijiaoText"></textarea>
        <div class="takeSbmComment">
            <input type="button" class="inputs" value="" @click='add'  />
            <span>(可按 Enter 回复)</span>
        </div>
    </div>
<!--已留-->
    <div class="commentOn">
        <!-- 条件渲染:当数组长度为0时，才显示 -->
        <div v-show='this.list.length===0' class="noContent" >暂无留言</div>

        <div class="messList">

            <div 
            class="reply" v-for="(item,index) of list" :key='item.id'
            >
                <p class="replyContent">{{item.content}}</p>
                <p class="operation">
                    <span class="replyTime">{{item.time |time}}</span>
                    <span class="handle">
                    	<a href="javascript:;" class="top" @click="up(item.id,index)">{{item.acc}}</a>                <!-- 顶-->
                        <a href="javascript:;" class="down_icon" @click="down(item.id,index)">{{item.ref}}</a>           <!-- 倒-->
                        <a href="javascript:;" class="cut" @click='del(item.id,index)'>删除</a>
                    </span>
                </p>
            </div>
        </div>
        <!-- 当无留言时，页码区也不显示，v-if为真时，显示元素 -->
        <div class="page" v-if='this.list.length!==0'>
            <!-- n是1到4，不用拿索引;class为样式，判断当前是不是等于n,凡是放数据的地方都可以放表达式-->
            <a v-for='n of page' 
            :key='n' 
            href="javascript:;" 
            :class="now===n? 'active':''" @click='get(n)'>{{n}}</a>
        </div>
    </div>
</div> 
</template>

<script src='../assets/js/axios.min.js'></script>
<script>
// export default {
//         let vm1=new Vue({
//             el:'.znsArea',
//             data:{
//                 ipt:'',
//                 list:[
//                     // {id:1,content:'hello',time:123456,up:0,down:0}
//                 ],
//                 now:1, //当前激活页
//                 page:4
//             },
//             filters:{
//                 currency(data,currency='$',digit='2'){
//                     return currency +data.toFixed(digit);
//                 },
//                 time(data){
//                     let d=new Date();
//                     // 设置时间戳
//                     d.setTime(data*1000);
//                     // 箭头函数:当形参只有1个或函数执行代码只有一条且是返回值的时候，可省略小括号和大括号
//                     let zero=n=>n<10? '0'+n : n;
//                     let year=d.getFullYear();
//                     let month=d.getMonth()+1;
//                     let date=d.getDate();
//                     let hour=d.getHours();
//                     let min=d.getMinutes();
//                     let sec=d.getSeconds();

//                     return `${year}年${zero(month)}月${zero(date)}日${zero(hour)}时${zero(min)}分${zero(sec)}秒`;
//                 }
//             },
//             methods:{
//                 add(){
//                     // axios({
//                     //     //http://localhost:80即相当于在根文件WWW文件下
//                     //     url:'http://localhost:80/weibo/weibo.php',
//                     //     //地址栏数据
//                     //     params:{
//                     //         act:'add',
//                     //         content:this.ipt
//                     //     }
//                     //     //结果都是在then里面回来
//                     // }).then(
//                     //     //这段还需认证下error是否为0，再去执行添加操作
//                     //      res=>this.list.unshift({
//                     //      id:res.data.id,
//                     //      content:this.ipt,
//                     //      time:123456,
//                     //      acc:0,
//                     //      ref:0
//                     //     })
//                     // )
//                     //以下方法是:先将数据加到数据库里面，然后再显示第1页数据，不用手动再unshift了（缺点是发送2次请求
//                     // 优化：可以先判断list的长度是不是大于6，若大于，需弹出最后一条数据
//                     //添加的时候可能多出一个页码（但也会多一次请求）
//                     axios({
//                         //http://localhost:80即相当于在根文件WWW文件下
//                         url:'http://localhost:80/weibo/weibo.php',
//                         //地址栏数据
//                         params:{
//                             act:'add',
//                             content:this.ipt
//                         }
//                         //结果都是在then里面回来
//                     }).then(
//                         //这段还需认证下error是否为0，再去执行添加操作
//                          res=>{
//                              this.get(1); //重新获取第一页数据，会将我们刚添加的数据添加到第一页。
//                              this.getPageCount()
//                             }//当一页显示6个时，这时再增加1条数据，会显示7条的问题。
//                     )
//                 },
//                 //获取数据库中的数据：获取第n页数据
//                 get(n){
//                     this.now=n;//点击时，当前页就是你点击的。
//                     axios({
//                         //http://localhost:80即相当于在根文件WWW文件下
//                         url:'http://localhost:80/weibo/weibo.php',
//                         //地址栏数据
//                         params:{
//                             act:'get',
//                             page:n
//                         }
//                         //结果都是在then里面回来
//                     }).then(
//                         //这段还需认证下error是否为0，再去执行添加操作
//                          res=>this.list=res.data
//                     )

//                 },
//                 getPageCount(){
//                     axios({
//                         //http://localhost:80即相当于在根文件WWW文件下
//                         url:'http://localhost:80/weibo/weibo.php',
//                         //地址栏数据
//                         params:{
//                             act:'get_page_count'
//                         }
//                         //结果都是在then里面回来
//                     }).then(
//                         //拿到页数
//                          res=>this.page=res.data.count
//                     )
//                 },
//                 //id是用来操作数据库的，index是用来操作本地假的数据的
//                 del(id,index){
                    
                   
//                     axios({
//                         //http://localhost:80即相当于在根文件WWW文件下
//                         url:'http://localhost:80/weibo/weibo.php',
//                         //地址栏数据
//                         params:{
//                             act:'del',
//                             id:id
//                         }
//                         //结果都是在then里面回来
//                     }).then(
//                         this.list.splice(index,1)
//                     )

//                 },
//                 up(id,index){
                   
//                    axios({

//                         url:'http://localhost:80/weibo/weibo.php',
                        
//                         params:{
//                             act:'acc',
//                             id:id
                            

//                             }
                            


                        


//                    }).then(
                
//                     this.list[index].acc++
                       
//                    )
                   
                 
//                 },
//                 down(id,index){
//                     // console.log(this.list)
                    
//                     axios({

//                         url:'http://localhost:80/weibo/weibo.php',

//                         params:{
//                             act:'ref',
//                             id:id
    

//                     }
//                 }).then(
//                     this.list[index].ref++
//                 )
//                 }
//             }
//         })
//         vm1.get(1);
//         vm1.getPageCount(); 
//         }//刷新一次，页码会更新
//     </script>

//     <style scoped>
//     @import url('../assets/css/list.css');
//     </style>