<template>
  <Layout>
      <myHeader></myHeader>
    <Layout>
   <!--   <Sider style="z-index: 100">
        <div class="ad" :style="ishow">广告</div>
        <div class="ad" :style="ishow">广告</div>
        <div class="ad" :style="ishow">广告</div>
      </Sider>-->

      <!--  <ad style="position: fixed;left: 2px;top:10px;z-index: 100"></ad>-->
        <Content style="overflow-y:hidden ">
        <myContent></myContent>
        </Content>
<!--
      <ad style="position: fixed;right: 2px;top:10px;z-index: 100"></ad>
-->
    <!--  <Sider hide-trigger style="z-index: 100;right: 0">
        <div class="ad1" :style="ishow">广告</div>
        <div class="ad ad1" :style="ishow">广告</div>
        <div class="ad ad1" :style="ishow">广告</div>
      </Sider>-->

  </Layout>
      <myFooter></myFooter>
  </Layout>
</template>

<script>
  import '../../common/css/main/contact.css'
  import '../../common/css/main/index.css'
  import '../../common/css/main/slideshow.css'
  import '../../common/css/main/slideshow1.css'
  import '../../common/css/main/style.css'
  import myFooter from './footer/footer'
  import myHeader from './header/header'
  import myContent from './content/content'
  import ad from './content/ad'


  export default {
      name:'mainvue',
    components:{
      myFooter,
      myHeader,
      myContent,
      ad
    },
      data(){
        return{
          columns1: [
            {
              title: 'Name',
              key: 'name'
            },
            {
              title: 'Age',
              key: 'age'
            },
            {
              title: 'Address',
              key: 'address'
            }
          ],
          data1: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01'
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
            }
          ],
          value1:0,
          ishow:true
        }

      },
      created:function () {
        //this.A();
      },
      methods:{
        A: function() {
          this.ishow={
              opacity:0.3
          };
          setInterval(() => {
            this.B();

          }, 500)
        },
        B: function() {
          this.ishow={
            opacity:1
          };
          setInterval(() => {
            this.A();

          }, 500)
        },
        open(){
          //vue路由跳转，参数配置在router/index.js文件中，取path值

          this.$router.push('/login');
        }
      }
    }
</script>

<style>
  .ad{
    height: 200px;
    width: 180px;
    margin-top: 30px;
    margin-left: 15px;
    background-color: rgba(222, 87, 116, 0.54);
  }
  .ad1{
  right:0;
    padding-right: 0px;
    //margin-right: 0px;
  }
  .ivu-row{
    margin-top: 5px;
  }
  .ivu-layout-header{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
  }
  .ivu-layout-content{
    height:auto;
    border-radius: 0px;
    position: relative;
    margin: 10px 10px 10px 10px;
  }
  .ivu-layout-sider{
    width: 100px !important;
    min-width: 100px !important;
    max-width: 100px !important;
    flex: none !important;
    background-color: white;
  }
  .layout-footer-center{
    text-align: center;
  }
  .ivu-layout-sider-children{
    width: 80px !important;
    flex: none;
    min-width: 80px !important;
  }

</style>
