<template>
  <Layout>
  <Row>
    <Col span="8">
      <div style="text-align: center;font-size: 24px ;background-color: #2b85e4;width: 240px;height: 60px;color: #ffa838;padding-top:11px">
        <span style="text-align: center">ISE<font color="white">-SYN</font></span>
      </div>
    </Col>
    <Col span="14">
      <Menu mode="horizontal" :theme="theme" :active-name=active  style="font-family: 黑体;background-color: #F5F7F9"  @on-select="select">
        <MenuItem name="monitoring">
          状态监控
        </MenuItem>
        <MenuItem name="task">
          系统任务
        </MenuItem>
        <MenuItem name="node">
          节点管理
        </MenuItem>
        <MenuItem name="dbs">
          数据库管理
        </MenuItem>
        <MenuItem name="access">
          权限管理
        </MenuItem>
        <MenuItem name="log">
          系统日志
        </MenuItem>
        <MenuItem name="preferences">
          系统配置
        </MenuItem>
      </Menu>
    </Col>
    <Col span="2" >
        <div style="text-align: center;padding-top:13px;" class="login_logo">
          <a><img height="30" width="30" src="../../assets/user.png" />&nbsp;&nbsp;{{username}}</a>
          <div class="logout">
            <Button   @click="loginOut()" >
              退出
            </Button>
          </div>

        </div>
       <!-- <Button v-if="out" style="z-index: 999;position:fixed;margin-top: 15px;margin-left: 40px;"  @click="loginOut()">
          退出
        </Button>-->

    </Col>
  </Row>
  <Content v-bind:is="content" style="height: 42vw">

  </Content>

  </Layout>

</template>

<script>
  //公共头部分
  /*import monitoring from '../main/monitoring'
  import task from '../main/task'
  import dbs from '../main/dbs'
  import log from '../main/log'
  import preferences from '../main/preferences'
  import node from '../main/nodeman'
  import access from '../main/accesscontrol'*/
  export default {
    name: "myheader",
    components:{
/*      monitoring,
      task,
      dbs,
      log,
      preferences,
      node,
      access*/

    },
    data () {
      return {
        content:'monitoring',
        //如果路由是login页,则不显示导航栏
        //isShow :this.$route.path,
        theme: 'light',
        username:sessionStorage.getItem("username"),
        active:'monitoring'
      }
    },
    created:function(){
      if(localStorage.getItem('type')!=undefined){
        this.content=localStorage.getItem('type');
        this.active=localStorage.getItem('type');
      }else {
        localStorage.setItem('type','monitoring');
        localStorage.setItem('index',1);
      }


    },
    methods:{
      select(name){
        localStorage.setItem('type',name);
        this.content=name;
        this.active=name;
        if(name == 'monitoring'){
          localStorage.setItem('index',1);
        }
      },
      loginOut(){
        localStorage.clear();
        sessionStorage.clear();
        this.$router.push({name:'login'})
      },

    },
   /* watch:{
      username:{
        handler(){
          sessionStorage.getItem("username")
        },
        immediate:true
      }
    }*/


  }
</script>


<style scoped>
  .ivu-row{
    border-bottom: 1px solid #d4d3d3 ;
  }
  .ivu-menu-horizontal.ivu-menu-light:after{
    background: none;
  }
  .modal{
    //width: 80px;
    //margin-top: 10px;

  }
  .login_logo:hover .logout{
    display: block;
  }
  .logout{
    position: fixed;
    padding-left: 30px;
    padding-top: 8px;
    z-index: 100;
    display: none;
  }



</style>
