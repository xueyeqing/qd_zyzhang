import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = r => require.ensure([], () => r(require('../components/HelloWorld.vue')), 'hone');
const Choice = r => require.ensure([],() => r(require('../components/one/choice.vue')),'one');
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      children:[]
    },{
      path: '/one/choice',
      name: '选择题',
      component: Choice
    }
  ]
})
