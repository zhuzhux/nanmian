import Vue from 'vue'
import Router from 'vue-router'
import '@/ui/mint-ui'
import 'mint-ui/lib/style.css'
import Code1index from '@/pages/code1/Index'


// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Code1index
    },
    {
      path: '/code1index',
      name: 'code1index',
      component: Code1index
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
