import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'asset',
        name: 'asset',
        components: {
          left: () => import(/* webpackChunkName: "group-foo" */ '../components/leftModule/fourthTierView/assetDetailes.vue'),
          right: () => import(/* webpackChunkName: "group-foo" */ '../components/rightModule/fourthTierView/assetDetailesAdd.vue')
        }
      },
      {
        path: 'research',
        name: 'research',
        components: {
          left: () => import(/* webpackChunkName: "group-foo" */ '../components/leftModule/fourthTierView/researchDetailes.vue'),
          right: () => import(/* webpackChunkName: "group-foo" */ '../components/rightModule/fourthTierView/researchDetailesAdd.vue')
        }
      },
      {
        path: 'buyer',
        name: 'buyer',
        components: {
          left: () => import(/* webpackChunkName: "group-foo" */ '../components/leftModule/fourthTierView/buyerDetailes.vue'),
          right: () => import(/* webpackChunkName: "group-foo" */ '../components/rightModule/fourthTierView/buyerDetailesAdd.vue')
        }
      },
      {
        path: 'market',
        name: 'market',
        components: {
          left: () => import(/* webpackChunkName: "group-foo" */ '../components/leftModule/fourthTierView/marketDetailes.vue'),
          right: () => import(/* webpackChunkName: "group-foo" */ '../components/rightModule/fourthTierView/marketDetailesAdd.vue')
        }
      },
      {
        path: 'brand',
        name: 'brand',
        components: {
          left: () => import(/* webpackChunkName: "group-foo" */ '../components/leftModule/fourthTierView/brandDetailes.vue'),
          right: () => import(/* webpackChunkName: "group-foo" */ '../components/rightModule/fourthTierView/brandDetailesAdd.vue')
        }
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
