import Qs from 'qs';
import axios from 'axios';
import {HOST} from 'api/config'
//import router from '../router/index';
const debug = process.env.NODE_ENV !== 'production';
//import {Message} from 'iview';
function aipUrlDealer(url){
  var  newUrl = debug ? url : HOST+url;
 	return newUrl;
}

export default function fetch(options, requireStringify = true) {
    /*var regExp = new RegExp('login');
    //console.log(regExp.test(options.url))
    if(!regExp.test(options.url)){
      var now = new Date().getTime();
      var time = sessionStorage.getItem("time");
      if((now-time)>60*30*1000){
        //首页不显示
        if(router.history.current.name!='login'){
          Message.error('登录超时，已为您跳转');
        }
        //localStorage.clear();
        sessionStorage.removeItem("username");
        router.push({name:'login'})
        return false;
      }
    }*/

    return new Promise((resolve, reject) => {

      const instance = axios.create({
        // baseURL: process.env.BASE_API,
        timeout: 600000,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'Content-Type': 'application/json',
          accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin':'*'
        },
        paramsSerializer: requireStringify ? function(params) {
          return Qs.stringify(params);
          // return JSON.stringify(params);
        } : () => {},
        transformRequest: requireStringify ? [function (data) {
          return Qs.stringify(data);
        }] : [],
      });
      options.url=aipUrlDealer(options.url);
      instance(options).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  }




const fetchJson = function(options, requireStringify = true) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      timeout: 180000,
      headers: {
        'Content-Type': 'application/json',
      },
      paramsSerializer: requireStringify ? function(params) {
        return JSON.stringify(params);
      } : () => {},
      transformRequest: requireStringify ? [function (data) {
        return JSON.stringify(data);
      }] : [],
    });
    options.url=aipUrlDealer(options.url);
    instance(options).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

export {fetchJson}
