<template>
  <div>
  <div class="header-bg">
    <div class="header">
      <div class="logo-bg">
        <div class="logo"> <a href="/"><img src="../../../common/images/logo.gif" width="327px" height="53px"/></a> </div>
      </div>
      <div class="header-right">
        <div class="hot-tel">
          <div class="tt"> <a href="#" target="_blank" class="a01">新浪微博 |</a> <a href="#" target="_blank" class="a02">腾讯微博  |</a>
          </div>
        </div>
        <div class="header-tel">
          <div class="telphone"> <span>服务热线：</span>400-8762-800 </div>
        </div>
      </div>
    </div>
  </div>
  <div class="nav">
    <div class="nav1">
      <ul id="nav">
        <li><a href="/">网站首页</a></li>
        <li><a href="#guanyu">关于我们</a>

        </li>
        <li><a href="#hezuo">合作优势</a></li>
        <li><a href="/stock/">股票配资</a>
          <ul>
            <li><a href="/stock/about/" title="配资介绍">配资介绍</a></li>
            <li><a href="/stock/flow/" title="配资流程">配资流程</a></li>
            <li><a href="/stock/safe/" title="资金安全">资金安全</a></li>
            <li><a href="/stock/skills/" title="配资技巧">配资技巧</a></li>
            <li><a href="/stock/question/" title="常见问题">常见问题</a></li>
          </ul>
        </li>
        <li><a href="/futures/">期货配资</a>
          <ul>
            <li><a href="/futures/about/" title="配资介绍">配资介绍</a></li>
            <li><a href="/futures/flow/" title="配资流程">配资流程</a></li>
            <li><a href="/futures/safe/" title="资金安全">资金安全</a></li>
            <li><a href="/stock/skills/" title="配资技巧">配资技巧</a></li>
            <li><a href="/stock/question/" title="常见问题">常见问题</a></li>
          </ul>
        </li>
        <li><a href="/news/">新闻中心</a>
          <ul>
            <li><a href="/news/economy/" title="宏观经济">宏观经济</a></li>
            <li><a href="/news/tradenews/" title="行业新闻">行业新闻</a></li>
          </ul>
        </li>
        <li id="class13"><a href="/contactus">联系我们</a></li>
      </ul>
    </div>
    <div class="clearfloat"></div>
  </div>
    <div style="height: 50px;margin-top: 5px">
      <img src="../../../common/images/gif/1.gif" height="40px" width="100%"/>
    </div>
    <div style="height: 50px;margin-top: 5px">
      <img src="../../../common/images/gif/2.gif" height="40px" width="100%"/>
    </div>
    <div style="height: 50px;margin-top: 5px">
      <img src="../../../common/images/gif/3.gif" height="40px" width="100%"/>
    </div>
  </div>

</template>

<script>
  export default {

    props:{
      tabName:'',
    },

    components: {
    },
    data () {
      return {
        time:'',
        dll:'',
        table:'',//search
        modal:false,
        text:'',//弹出框
        columns2:[{

          title: 'ID',
          width: 80,
          render: (h, params) => {
            var index  = params.index+(this.pageNum-1)*this.pageSize+1;
            return h('span',{style:"width:80"}, index);
          }
        }
        ],
        columns: [
          {
            type: 'selection',
            width: 80,
            align: 'center',
          },
          {
            title: 'ID',
            width: 80,
            align: 'center',
            render: (h, params) => {
              var index  = params.index+(this.pageNum-1)*this.pageSize+1;
              return h('span',{style:"width:80"}, index);
            }
          },
          {
            title: '数据库名称',
            key: 'name',
            align: 'center',
            width: 380,
            render: (h, params) => {
              return h('a', params.row.name);
            }
          },

          {
            title: '创建时间',
            key: 'createTime',
            align: 'center',
          },
          {
            title: '副本',
            key: 'copy',
            width:100,
            align: 'center',
            render: (h, params) => {
              return h('div',
                {
                  style:
                    'width:40px;background-color:#ffa838;height:32px; border-radius: 8px;text-align: center;padding-top: 6px;color:#fff;margin-left:10px'
                },
                params.row.copy
              );
            }
          },
          {
            title: '分片',
            key: 'shards',
            width:100,
            align: 'center',
            render: (h, params) => {
              return h('div',
                {
                  style:
                    'width:40px;background-color:#ffa838;height:32px; border-radius: 8px;text-align: center;padding-top: 6px;color:#fff;margin-left:10px'
                },
                params.row.shards
              );
            }
          },
          {
            title: '字段数',
            key: 'fields',
            align: 'center',
          },
          {
            title: '记录数',
            key: 'num',
            align: 'center',
          }
        ],
        pages:[10,20,50,100],
        currentPage:1,
        pageNum:1,
        pageSize:10,
        total:0,
        result: [],
        temp:[],
      }
    },
    mounted:function(){

    },
    created:function(){
      this.getData();
    },
    computed:{
      width(){
        return  this.columns2.length*150<1600?"auto":this.columns2.length*150;
      }
    },
    methods: {
      //获取tabs内容

      getData(){

        //var _this=this;
        if(this.tabName==''){
          this.columns2 = this.columns;
          var params = {
            index:this.table
          }

          /*   this.$post(url+"/getData",params).then(function(data)
             {
               _this.total = data.length;
               if(data.length>_this.pageSize){
                 var l = [];
                 for(var temp =0;temp<_this.pageSize;temp++){
                   l.push(data[temp])
                 }
                 _this.result = l;
               }else {
                 _this.result = data;
               }
               _this.temp = data;

             }*/
          getData(params).then(res=>{
            this.total = res.data.length;
            if(res.data.length>this.pageSize){
              var l = [];
              for(var temp =0;temp<this.pageSize;temp++){
                l.push(res.data[temp])
              }
              this.result = l;
            }else {
              this.result = res.data;
            }
            this.temp = res.data;
          })


        }else {
          var params={
            index:this.tabName
          }
          /*  this.$post(url+"/showRecord",params).then(function(data)
            {
              _this.columns2=data.categoryokField;
              _this.total = data.recordNum;
              _this.result =data.recordList;
            });*/
          showRecord(params).then(res=>{
            //this.columns2=res.data.categoryokField;
            var cols = res.data.categoryokField;
            for(var col in cols){
              this.columns2.push({
                title:cols[col],
                key:cols[col],
                ellipsis:true,
                align:'center'
              });

            }
            for(let i=0;i<this.columns2.length;i++){
              if(!this.columns2[i].render){
                this.$set(this.columns2[i],'ellipsis',true);
                this.$set(this.columns2[i],'render',(h, params) => {
                  return h('div',
                    {
                      attrs:{
                        title:params.row[params.column.key]
                      },
                      style:{ cursor: 'pointer'},
                      on: {
                        click: () => {this.showData(params.row[params.column.key]) }
                      }
                    },
                    params.row[params.column.key]
                  );
                })
              }
            }
            this.time = res.data.time;
            this.total = res.data.recordNum;
            this.result =res.data.recordList;
          })
        }


      },
      showData(data){
        this.modal=true;
        this.text=data;
      },

      gotoPage(pageNum){
        this.pageNum = pageNum;
        var params={
          index:this.tabName,
          pageNum:pageNum,
          pageSize:this.pageSize

        }
        if(this.tabName==''){
          var l = [];
          for(var temp =this.pageSize*(pageNum-1);temp<this.pageSize*pageNum;temp++){
            if(temp<this.temp.length){
              l.push(this.temp[temp])
            }
          }
          this.result = l;
        }else {
          /* var _this= this;
           this.$post(url+"/showPageRecord",params).then(function(data)
           {
             _this.result =data.recordList;
           });*/
          showPageRecord(params).then(
            res=>{
              this.time = res.data.time;
              this.result =res.data.recordList;
            }
          )
        }

      },
      handleSelectAll (status) {
        this.$refs.selection.selectAll(status);
      },
      search(){
        this.getData();
      },

      changeSize:function(size){
        this.pageSize = size;
        this.gotoPage(1);
      },
    },
    watch:{

    }
  }
</script>

<style>
  .block{
    width:100%;
    height:50px;
    position:relative;
    z-index:8;
    margin-top:0px;
    background:#fff
  }
  .detail{
    float: left;
    color:#676a6c;
    line-height: 50px;
    font-size: 14px;
    letter-spacing:2px;
    margin-left: 15px;
    position: fixed;
  }
  .pagin{
    float: right;
    line-height: 50px;
    margin-right: 15px;
    position:fixed;
    right:10px;
  }
  .ivu-select{
    width: 100px;
  }
  th .ivu-table-cell{
    white-space: nowrap !important;
  //padding-left: 4px;
  //margin-right: 10px;

  }
  th .ivu-table-cell>span{
    white-space: nowrap;
    font-size: 13px;
    width:auto;
  }

</style>
