import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../views/CourseMian.vue'),
    children:[
      {
        path:'',
        redirect:'/home'
      },
      {
        path:'/home',
        name:'home',
        component: () => import('../views/Home/Home.vue')
      },
      {
        path:'/user',
        name:'user',
        component: () => import('../views/UserManage/UserManage.vue')
      },
    
      {
        path:'/course',
        name:'course',
        component: () => import('../views/CourseManage/CourseManage.vue')
      },
      {
        path:'/page1',
        name:'page1',
        component: () => import('../views/Other/page1.vue')
      },
      {
        path:'/page2',
        name:'page2',
        component: () => import('../views/Other/page2.vue')
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
