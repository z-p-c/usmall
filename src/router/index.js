import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'

Vue.use(Router)
const login = () => import('../pages/login/login')
const index = () => import('../pages/index/index')
const home = () => import('../pages/home/home')
const menu = () => import('../pages/menu/menu')
const manger = () => import('../pages/manger/manger')
const role = () => import('../pages/role/role')
const classify = () => import('../pages/classify/classify')
const spec = () => import('../pages/spec/spec')
const goods = () => import('../pages/goods/goods')
const vip = () => import('../pages/vip/vip')
const banner = () => import('../pages/banner/banner')
const seckill = () => import('../pages/seckill/seckill')

export const indexRouters = [
  {
    path: 'menu',
    component: menu,
    name:'菜单管理'
  },
  {
    path: 'role',
    component: role,
    name:'角色管理',
    beforeEnter: (to, from, next) => {
      if(from.path=='/index'){
            next()
      }else{
        next('/login')
      }
    } 
  },
  {
    path: 'manger',
    component: manger,
    name:'管理员管理'
  },
  {
    path: 'classify',
    component: classify,
    name:'商品分类'
  },
  {
    path: 'spec',
    component: spec,
    name:'商品规格'
  },
   {
    path: 'goods',
    component: goods,
    name:'商品管理'
  },
  {
    path: 'vip',
    component: vip,
    name:'会员管理'
  },
  {
    path: 'banner',
    component: banner,
    name:'轮播图管理'
  },
  {
    path: 'seckill',
    component: seckill,
    name:'秒杀管理'
  }
]


const router= new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          component: home
        },
        ...indexRouters
      ]
    },
  ]
})

// 全局守卫
router.beforeEach((to,from,next)=>{
  console.log(store); 
  // 直接去登录的
  if(to.path=='/login'){
      next()
      return
  }

  // 不是去登录，需要先判断是否登录过，如果登录直接进入，否则需要跳转到登录页面
   if(store.state.user.list.menus){
     next()
   }else{
     this.$router.push('/login')
   }
})


export default router