import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/NewsDetail/:id',
      name: 'NewsDetail',
      component: resolve => {
        require(['@/components/NewsDetail.vue'], resolve)
      }
    }
  ]
})
