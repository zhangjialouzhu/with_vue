<template>
  <div class="footer">
    <div class="centerf">
      <address>
        <p> <span class="telnum"><img alt="电话" src="../../../common/images/61751418867928.gif"/>总机：400-8762-800</span> <span class="telnum2"><img alt="24小时电话" src="/style/images/19151418868877.jpg"/>24小时电话：134-0854-9123 </span> <span class="chuanzhen">传真：028-86202198</span> <span class="addres">地址：四川省南充市文化路89号锦绣北湖2栋一单元15-4号</span> </p>
      </address>
<!--
      <p class="copy">版权所有：四川航宇汇金投资管理有限公司 <a href="">南充股票配资</a>、<a href="http://www.nchyhj.com/">南充期货配资</a>、<a href="http://www.nchyhj.com/">南充配资公司</a>、<a href="http://www.nchyhj.com/">南充配资炒股</a>、<a href="http://www.nchyhj.com/">南充融资炒股</a></p>
-->
      <p class="copy">蜀ICP备13013809号-4 &nbsp;  Copyright &copy; 2014 </p>
      <p class="copyimg"><img alt="网络安全"  src="../../../common/images/14591383812822.jpg"/></p>
      <p class="friendlink"></p>
    </div>
  </div>

</template>

<script>
  export default {
    //取父组件传值

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
