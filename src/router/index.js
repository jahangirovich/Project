import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'
import login from '@/components/login'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:'/register',
      name:'register',
      component:register,
      meta:{
        requiresGuest:true
      }
    },
    {
      path:'/login',
      name:'login',
      component:login,
      meta:{
        requiresGuest:true
      }
    }
  ]
});
router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!firebase.auth().currentUser){
      next({
        path:'/login',
        query:{
          redirect:to.fullPath
        }
      });
    }
    else{
      next()
    }
  }
  else if(to.matched.some(record => record.meta.requiresGuest)){
    if(firebase.auth().currentUser){
       next({
          path:'/',
          query:{
            redirect:to.fullPath
          }
        });
    }
    else{
      next()
    }
  }
  else{
    next()
  }
});
export default router
