import Vue from 'vue';
//定义全局的时间过滤器
function addZero(val){
    if(val < 10){
     return "0" +val;
    }else{
     return val;
    }
  }
  Vue.filter("formatTime",function(value,type){
      var dataTime="";
      var data = new Date();  
          data.setTime(value*1000); 
      var year   =  data.getFullYear();  
      var month  =  addZero(data.getMonth() + 1);  
      var day    =  addZero(data.getDate()); 
      var hour   =  addZero(data.getHours());
      var minute =  addZero(data.getMinutes());
      var second =  addZero(data.getSeconds());
      if(type == "YMD"){
      dataTime =  year + "-"+ month + "-" + day;
      }else if(type == "YMDHMS"){
      dataTime = year + "-"+month + "-" + day + " " +hour+ ":"+minute+":" +second;
      }else if(type == "HMS"){
      dataTime = hour+":" + minute+":" + second;
      }else if(type == "YM"){
      dataTime = year + "-" + month;
      
      }
      return dataTime;//将格式化后的字符串输出到前端显示
  });
  