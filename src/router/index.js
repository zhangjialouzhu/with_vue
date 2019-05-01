import Vue from 'vue'
import Router from 'vue-router'

//登录组件
const login = () => import('components/admin/login/login');
const manage = () => import('components/admin/manage');

const index = () => import('components/main/main');

Vue.use(Router)

const router = new Router({
   mode:"history",
  //mode:"hash",
  routes: [
    {
      name:'login',
      path: '/login',
      component: login,
      meta:{
        keepAlive:true
      }
    },
    {
      name:'manage',
      path: '/manage',
      component: manage,
      meta:{
        keepAlive:true,
        requireAuth:true,//需要权限认证

      }
    },
    {
      name:'index',
      path: '',
      component: index,
      meta:{
       // requireAuth:true,//需要权限认证
        keepAlive:true,//此组件不需要缓存
      }

    },


  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (sessionStorage.getItem('username')) {// 判断是否登录

      next()
    } else {// 没登录则跳转到登录界面
      next({
         path: '',
        //query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router;
