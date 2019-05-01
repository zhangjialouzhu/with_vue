<template>
  <div class="body">
  <div class="login_box">
    <div class="login_l_img"><img src="../../../assets/login-img.png" /></div>
    <div class="login">
      <div class="login_name">
        <p>配资门户登陆</p>
      </div>
      <Form>
        <input name="username" type="text"  placeholder="用户名" v-model="username">
        <input name="password" type="password" placeholder="密码" id="password" v-model="password"/>
        <input name="code" type="text"  placeholder="验证码" style="width: 65%" v-model="newCode" v-on:keyup.13="submit"><input type="text"  readonly="readonly" v-model="code" @click="reset()" style="width: 35%;text-align: center;background-color: #cae3e3;font-family: 微软雅黑;font-size:20px;font-style:italic;">
        <Button style="width:100%;height: 50px;margin-left: 0px" type="primary" @click="submit" >登录</Button>
      </Form>
    </div>
  </div>
    <div class="copyright"> 版权所有©2016-2018 技术支持电话：000-00000000</div>

  </div>
</template>

<script>
  import * as code from '../../../common/js/checkCode'
  import {login,test} from '../../../api/api/login'
  export default {
    components:{
    },
    data:function(){
      return {
        code:'',
        username:'',
        password:'',
        newCode:''
      };
    },
    created:function(){
      this.code=code.createCode();
    },
    mounted:function(){
    },

    watch:{

    },
    methods:{
      submit(){
        sessionStorage.setItem('username','ss')
        this.$router.push({path:'manage'})
     /*   if(this.username==''){
          this.$Message.error('用户名不能为空！！！');
          return false;
        }
        if(this.password==''){
          this.$Message.error('密码不能为空！！！');
          return false;
        }
        if(this.code.toLowerCase()!=this.newCode.toLowerCase()){
          this.$Message.error('验证码错误！！！');
          this.newCode='';
          this.code=code.createCode();
          return false;
        }
        //登录成功后塞值
        let param={
          account:this.username,
          pwd:this.password
        }

        login(param).then(res => {
          if(res.data.status!='success'){
            this.$Message.error(res.data.msg);
            return false;
          }

          sessionStorage.clear();
          var date = new Date();
          sessionStorage.setItem('time',date.getTime());
          sessionStorage.setItem('username',res.data.users[0].account);
          this.$router.push({path:'index'})
        })*/
        test().then(res => {
          debugger
        console.log(res.data)
        })


      },
      reset(){
        this.newCode = '';
        this.code=code.createCode();
      }

    }

  }
</script>
<!--内部引入css方式，不影响全局-->
<style scoped src="../../../common/css/login.css">

</style>
