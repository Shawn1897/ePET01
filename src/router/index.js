// 路由器模块

import Vue from 'vue'
import VueRouter from 'vue-router'

import Mine from '../pages/Mine/Mine.vue'
import Msite from '../pages/Msite/Msite.vue'
import Pettype from '../pages/Pettype/Pettype.vue'
import Type from '../pages/Pettype/type/type.vue'
import Brand from '../pages/Pettype/brand/brand.vue'
import Shopcar from '../pages/Shopcar/Shopcar.vue'



Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/msite'
    }
    ,
    {
      path:'/msite',
      component:Msite,
    },
    {
      path:'/mine',
      component:Mine,
    },
    {
      path:'/pettype',
      component:Pettype,
      children:[

        //二级路由
        {
          path:'brand',
          component:Brand
        },
        {
          path:'type',
          component:Type
        },
        {
          path: '',
          redirect: '/pettype/type'
        }

      ]
    },
    {
      path:'/shopcar',
      component:Shopcar,
    },
  ]
})
