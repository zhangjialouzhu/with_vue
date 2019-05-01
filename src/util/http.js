
import axios from 'axios';
import qs from  'qs';
axios.defaults.timeout=10000;

//request 拦截器
axios.interceptors.request.use(
    config =>{
        config.data = qs.stringify(config.data);
        return config;
    },
    err =>{
        return Promise.reject(err);
    }
);

//response 拦截器
axios.interceptors.response.use(
    response =>{
        return response;
    },
    err =>{
        return Promise.reject(err.response.data);
    }
);

/**
 * get 方法封装
 **/
export function fetch(url,parms={}){
    return new Promise((resolve,reject) =>{
        axios.get(url,{params:parms})
            .then(response => {
                resolve(response.data);
            }).catch(err => {
                reject(err);
            });
    });
}

/**
 * post 方法封装
 **/
export function post(url,data={}){
    //data = qs.stringify(data);
    return new Promise((resolve,reject) =>{
        axios.post(url,data)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}