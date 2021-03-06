import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import full from '@/page/buys/full'
import lease from '@/page/buys/lease'
import loan from '@/page/buys/loan'
import info from '@/page/visitor/info'
import locus from '@/page/visitor/locus'
import remark from '@/page/visitor/remark'

import 'element-ui/lib/theme-chalk/index.css'
import Elementui from 'element-ui'
import '@/assets/icon/iconfont.css'

import 'iview/dist/styles/iview.css'
import iView from 'iview'
import layer from 'vue-layer'

Vue.prototype.$layer=layer(Vue);
Vue.use(iView)
Vue.use(Elementui)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
