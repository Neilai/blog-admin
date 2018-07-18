import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import list from '../components/list'
import editor from '../components/editor'
import store from '../store'
Vue.use(Router)
const router = new Router({
  routes:[
    {
      path: '/login',
      component: login
    },
    {
      path: '/list',
      meta: {
        requireAuth: true,
      },
      component: list,
    },
    {
      path: '/editor/:id',
      meta: {
        requireAuth: true,
      },
      component: editor,
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if(store.state.token) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

export default router
