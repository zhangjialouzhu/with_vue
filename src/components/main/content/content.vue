<template>
  <div>
  <!--头部调用开始-->
  <!--头部结束-->
  <!--banner横幅-->
<!--  <div class="flashimg" style="margin:0 auto;width:1000px;">


    &lt;!&ndash; 代码 结束 &ndash;&gt;
    <Carousel autoplay  v-model="value1" style="width: 100%;height: 200px">
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../../common/images/2.jpg" height="200" width="100%" alt="投资共赢 收益未来" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../../common/images/1.jpg" alt="诚信天下" height="200" width="100%" />
        </div>
      </CarouselItem>

    </Carousel>
  </div>-->
  <!--导航图片end-->
  <!--banner结束-->
  <!--content-->
  <div class="content">
    <div class="main">
      <div class="flashimg" style="margin:0 auto;width:1000px;">


        <!-- 代码 结束 -->
        <Carousel autoplay  v-model="value1" style="width: 100%;height: 200px">
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../../../common/images/2.jpg" height="200" width="100%" alt="投资共赢 收益未来" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../../../common/images/1.jpg" alt="诚信天下" height="200" width="100%" />
            </div>
          </CarouselItem>

        </Carousel>
      </div>

      <div class="main-center">
        <div class="news">
          <div class="pad">
            <div class="box-bg">
              <div class="title2">
                <div class="more1" id="more1"><a href="/news/tradenews/" title="配资行业动态">+MORE</a></div>
                <div class="more1" id="more2" style=" display:none;"><a href="/news/economy/" title="宏观经济">+MORE</a></div>
                <div class="more1" id="more3" style=" display:none;"><a href="/stock/question/" title="配资常见问题">+MORE</a></div>
                <div class="more1" id="more4" style=" display:none;"><a href="/stock/skills/" title="配资技巧">+MORE</a></div>
                <ul>
                  <li>
                    <div class="t-h" id="btn-01">
                      <div class="t-h-bg" id="btn-1"><a href="javascript:void(0)" onMouseOver="show(1)" id="btn1" class="cur3" title="配资行业动态">行业动态</a></div>
                    </div>
                  </li>
                  <li>
                    <div  class="t-h2" id="btn-02">
                      <div  id="btn-2"><a href="javascript:void(0)" onMouseOver="show(2)" id="btn2"  title="宏观经济">宏观经济</a></div>
                    </div>
                  </li>
                  <li>
                    <div  class="t-h2" id="btn-03">
                      <div  id="btn-3"><a href="javascript:void(0)" onMouseOver="show(3)" id="btn3" title="配资常见问题">配资常见问题</a></div>
                    </div>
                  </li>
                  <li>
                    <div  class="t-h2" id="btn-04">
                      <div  id="btn-4"><a href="javascript:void(0)" onMouseOver="show(4)" id="btn4" title="配资技巧">配资技巧</a></div>
                    </div>
                  </li>
                </ul>
                <div class="clear"></div>
              </div>
              <div class="main-content">
                <div class="news-content" id="ncontent1">
                  <div class="news-top"> {dede:arclist typeid='19' flag='p' titlelen='60' infolen='120' row='1'}
                    <div class="news-img"> <a href="[field:arcurl /]" title="[field:title /]"><img src="[field:litpic /]" width="150" height="70" alt="[field:title /]" /></a> </div>
                    <div class="news-content1">
                      <h2><span>[field:pubdate function="MyDate('Y-m-d',@me)"/]</span><a href="[field:arcurl /]" title="[field:title /]">[field:title /]</a></h2>
                      [field:info /] </div>
                    {/dede:arclist}
                    <div class="clear"></div>
                  </div>
                  <div class="news-content2" >
                    <ul>
                      {dede:arclist typeid='19' titlelen='60' row='5'}
                      <li><span>[field:pubdate function="MyDate('Y-m-d',@me)"/]</span><a href="[field:arcurl /]">[field:title /]</a></li>
                      {/dede:arclist}
                    </ul>
                  </div>
                </div>
                <div class="news-content" id="ncontent2"  style=" display:none">
                  <div class="news-top"> {dede:arclist typeid='18' flag='p' titlelen='60' infolen='120' row='1'}
                    <div class="news-img"> <a href="[field:arcurl /]" title="[field:title /]"><img src="[field:litpic /]" width="150" height="70" alt="[field:title /]" /></a> </div>
                    <div class="news-content1">
                      <h2><span>[field:pubdate function="MyDate('Y-m-d',@me)"/]</span><a href="[field:arcurl /]" title="[field:title /]">[field:title /]</a></h2>
                      [field:info /] </div>
                    {/dede:arclist}
                    <div class="clear"></div>
                  </div>
                  <div class="news-content2" >
                    <ul>
                      {dede:arclist typeid='18' titlelen='60' row='5'}
                      <li><span>[field:pubdate function="MyDate('Y-m-d',@me)"/]</span><a href="[field:arcurl /]">[field:title /]</a></li>
                      {/dede:arclist}
                    </ul>
                  </div>
                </div>
                <div class="news-content" id="ncontent3"  style=" display:none">
                  <div class="news-top"> {dede:arclist typeid='12' flag='p' titlelen='60' infolen='120' row='1'}
                    <div class="news-img"> <a href="[field:arcurl /]" title="[field:title /]"><img src="[field:litpic /]" width="150" height="70" alt="[field:title /]" /></a> </div>
                    <div class="news-content1">
                      <h2><span>[field:pubdate function="MyDate('Y-m-d',@me)"/]</span><a href="[field:arcurl /]" title="[field:title /]">[field:title /]</a></h2>
                      [field:info /] </div>
                    {/dede:arclist}
                    <div class="clear"></div>
                  </div>
                  <div class="news-content2" >
                    <ul>
                      {dede:arclist typeid='12' titlelen='60' row='5'}
                      <li><span>[field:pubdate function="MyDate('Y-m-d',@me)"/]</span><a href="[field:arcurl /]">[field:title /]</a></li>
                      {/dede:arclist}
                    </ul>
                  </div>
                </div>
                <div class="news-content" id="ncontent4"  style=" display:none">
                  <div class="news-top"> {dede:arclist typeid='11' flag='p' titlelen='60' infolen='120' row='1'}
                    <div class="news-img"> <a href="[field:arcurl /]" title="[field:title /]"><img src="[field:litpic /]" width="150" height="70" alt="[field:title /]" /></a> </div>
                    <div class="news-content1">
                      <h2><span>[field:pubdate function="MyDate('Y-m-d',@me)"/]</span><a href="[field:arcurl /]" title="[field:title /]">[field:title /]</a></h2>
                      [field:info /] </div>
                    {/dede:arclist}
                    <div class="clear"></div>
                  </div>
                  <div class="news-content2" >
                    <ul>
                      {dede:arclist typeid='11' titlelen='60' row='5'}
                      <li><span>[field:pubdate function="MyDate('Y-m-d',@me)"/]</span><a href="[field:arcurl /]">[field:title /]</a></li>
                      {/dede:arclist}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--news-->
        <div class="myright">
          <div class="case">
            <div class="title-bg2">
              <div class="title" id="hezuo">
<!--
                <div class="more"><a href="/partner/" title="合作优势">+MORE</a></div>
-->
                合作优势 Advantages</div>
            </div>
            <div class="box-bg3">
              <div class="main-content">
                <div class="news-content0" >
                  <ul>
                    <li>100人专业团队，10年配资行业经验</li>
                    <li>全国连锁公司，配资行业龙头企业</li>
                    <li>公司实力雄厚，保证客户资金安全</li>
                    <li>账户提供迅速，30分钟内准备完毕</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="contact">
            <div class="box-bg5">
              <div class="main-content">
                <div class="tel"><img src="../../../common/images/tel1.jpg" width="171" height="90" alt="南充股票配资服务电话" /></div>
                <div class="wx-box">
                  <!-- <div class="qq"><a href='#' target='_blank'>航宇投资腾讯微博</a></div>-->
                  <div class="wb"><a href="#" target="_blank">南充股票配资公司新浪微博</a></div>
                  <div class="wx" id="wx1"><a href="#" >南充股票配资公司官方微信</a>
                    <div id="wx_img"></div>
                  </div>
                  <div class="clear"></div>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="main-top">
        <div class="project">
          <div class="title-bg">
            <div class="title">
              <div class="more"><a href="/stock/" title="更多主营项目">+MORE</a></div>
              <span>主营项目</span> Business introduction</div>
          </div>
          <div class="box-bg">
            <div class="main-content">
              <ul>
                <li><a href="/stock/" title="股票配资"><img src="../../../common/images/gppz.jpg" width="330" height="109" alt="南充股票配资" /></a></li>
                <li><a href="/futures/" title="期货配资"><img src="../../../common/images/qhpz.jpg" width="330" height="109" alt="南充期货配资" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <!--  about us-->
        <div class="about">
          <div class="title-bg">
            <div class="title" id="guanyu">
              <div class="more"><a href="/aboutus/" title="更多航宇汇金的信息">+MORE</a></div>
              关于我们 About us</div>
          </div>
          <div class="box-bg">
            <div class="main-content"> <img src="../../../common/images/shizi.png" style="  height:100px; float:left; padding:12px 0px 0px 5px;" alt="南充股票期货配资公司"/>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;苏州XXXXXXXXX专业从事：股票配资、期货配资、配资咨询、资金管理、投资管理、投资咨询的专业性金融服务机构。 </p>
            </div>
          </div>
        </div>
        <!--实时证券-->
        <div class="sszq">
          <div class="title-bg">
            <div class="title2">
              <ul>
                <li>
                  <div class="t-h" id="vbtn-01">
                    <div class="t-h-bg" id="vbtn-1"> <a href="javascript:void(0)" onMouseDown="show()" id="vbtn1" class="cur3" title="实时证券">实时证券</a> </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="box-bg">
            <div class="main-content" id="vcontent1">
              <iframe width="295" scrolling="no" height="210"  frameborder="0" style="width:295px; height: 214px;" src="http://data.stock.hexun.com/quote2012/stock_1.htm" marginwidth="0" marginheight="0"></iframe>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <!--main-top-->
      <!--main-center-->
      <!--公司风采-->
      <div class="main-top">
        <div class="fc">
          <div class="picMarquee-left">
            <div class="title-bg">
              <div class="title">
                <div class="hd"> <a class="next"></a> <a class="prev"></a> </div>
                <div class="more"><a href="/aboutus/show/" title="航宇汇金公司风采">+MORE</a></div>
                <span>广告投放</span> Company style</div>
            </div>
            <div class="box-bg2">
              <div class="main-content">
                <div class="bd">
                  <ul class="picList">
                    {dede:arclist typeid='' titlelen='60' row='20'}
                    <li>
                      <div class="pic"><a href="[field:arcurl /]" title="[field:title /]"><img alt="[field:title /]" src="[field:litpic /]"/></a></div>
                      <div class="title01"><a href="[field:arcurl /]">[field:title /]</a></div>
                    </li>
                    {/dede:arclist}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--公司风采-->
        <div class="clear"></div>
      </div>
      <!-- main-bottom-->
   <!--   <div class="links">
        <div class="title-bg">
          <div class="title">
            <div class="more"><a href="/stock/flow/" title="航宇汇金业务流程">+MORE</a></div>
            <span>业务流程</span> Process</div>
        </div>
        <div class="box-bg6">
          <div class="main-content">
            <div class="process-l"><a href="/stock/flow/"><img src="../../common/images/process.jpg" width="726" height="83px" alt="南充股票配资业务流程" /></a> </div>
            <div class="order-btn"><a href="#"><img src="../../common/images/order-btn.jpg" width="155" height="54" alt="南充股票配资在线签单" /></a></div>
            <div class="clear"></div>
          </div>
        </div>
      </div>-->
      <div class="links">
        <div class="picMarquee-left2">
          <div class="title-bg">
            <div class="title">
              <div class="hd"> <a class="next"></a> <a class="prev"></a> </div>
              <span>合作机构</span> Cooperation</div>
          </div>
          <div class="box-bg4">
            <div class="main-content" id="hezuo"> <a href="#" target="_blank" rel="nofollow" title="中国银行"> <img  src="../../../common/images/7.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="中国建设银行"> <img src="../../../common/images/8.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="东吴证券"> <img src="../../../common/images/9.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="国泰君安证券"> <img src="../../../common/images/10.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="浙商证券"> <img src="../../../common/images/11.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="华泰证券"> <img src="../../../common/images/12.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="招商银行"> <img src="../../../common/images/13.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="上海证券"> <img src="../../../common/images/14.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="申银万国证券"> <img src="../../../common/images/15.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="工商银行"> <img src="/d/file/p/2014-12-25/16.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="万方证券"> <img src="../../../common/images/17.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="海通证券"> <img src="../../../common/images/18.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="西部证券"> <img src="../../../common/images/19.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="东北证券"> <img src="../../../common/images/20.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="西南证券"> <img src="../../../common/images/21.jpg" /></a> <a href="#" target="_blank" rel="nofollow" title="中国银河证券"> <img src="../../../common/images/22.jpg" /></a>
              <div class="clear"></div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--content over-->

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
        myClass:{
          width:'500px',
          height:'222px'
        }
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
      show(){
        this.myClass={
          width:'500px',
            height:'222px'
        }
      },
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


</style>
