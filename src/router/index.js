import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/HelloWorld'
import Navigation from '@/components/NavigationBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: App
    },
    {
      path: '/nav',
      name: 'nav',
      component: Navigation
    },
    {
      path: '/',
      name: 'default',
      redirect: '/hello'
    }
  ]
})
