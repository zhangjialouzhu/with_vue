
  <template>
    <div class="layout">
      <Layout>
        <Header class="header">
          <Menu mode="horizontal" theme="dark" >
            <div class="layout-logo">
            </div>
            <div class="demo-avatar" @click="">
              <Badge :count="count">
                <Avatar style="background-color: #87d068" icon="ios-person" />
              </Badge>
            </div>
          </Menu>

        </Header>
        <Layout>
          <Sider hide-trigger >
            <Menu ref="name" theme="dark"  width="auto" :open-names="['1']"  @on-select="changeItem" accordion>
              <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                广告位
              </template>
                <MenuItem name="adList">广告配置</MenuItem>
                <MenuItem name="adSet">广告列表</MenuItem>
                <MenuItem name="partner">合作伙伴</MenuItem>
            </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  论坛
                </template>
                <MenuItem name="2-1">论坛配置</MenuItem>
                <MenuItem name="2-2">留言审批</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  资讯管理
                </template>
                <MenuItem name="3-1">资讯配置</MenuItem>
              </Submenu>
              <Submenu name="4">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  其他
                </template>
                <MenuItem name="other">其他配置</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{padding: '0 24px 24px'}">
            <Breadcrumb :style="{margin: '24px 0'}">
              <BreadcrumbItem><Icon type="md-home"/>主页</BreadcrumbItem>
              <BreadcrumbItem>{{currentView}}</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{ minHeight: '400px', background: '#fff'}"  :is="currentView">
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </template>

<script>
  import adSet from './ad/adset';
  import adList from './ad/adlist';

  export default {
  name:'manage',
  components:{
    adSet,
    adList
  },
  data () {
    return {
      //消息数
      count:100,
      currentView:'adSet',
    }
  },
  created:function () {
  },
  methods:  {

    changeItem(name){

      this.currentView=name;

    }
  },
  mounted:function() {

  },

}
</script>

<style >
  .ivu-icon {
    font-size:20px ;
  }

  .ivu-layout-sider{
    height: auto;
  }
  .header{
    background-color: black;
    opacity: 0.8;
  }
  .ivu-menu-horizontal{
    background-color: transparent;
  }
  .btn{
   height:  25px;
  }

  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .demo-avatar{
    float: right;
  }

</style>
