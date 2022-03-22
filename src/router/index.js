import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page-not-found',
    alias:'*',
    name: 'errpr404',
     component: () => import(/* webpackChunkName: "about" */ '../views/notFound.vue')
  },
  {
    path: '/edicionMetodo',
    name: 'EdicionMetodo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "EdicionMetodo" */ '../views/EdicionMetodo.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "Profile" */ '../views/profile.vue'),
    meta: { requiresAuth: true }
},
  
  {
    path: '/documentacion/:archivo/:idFa',
    name: 'Documentacion',
    component: () => import(/* webpackChunkName: "Documentacion" */ '../views/Documentacion.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => { 
//el store de Vuex, al recargar la pagina se carga despues del router
  //por eso tuve que validar si estaba en el storage,
  //const authenticated = !!JSON.parse(localStorage.getItem('user'));
  const authenticated = localStorage.getItem('userHash') ? true : false;
  //console.log(authenticated);
  //console.log('authenticatedHASH ->', authenticated);

  if (to.matched.some((record)=>record.meta.requiresAuth)) {
    if (authenticated) {
      next();
    } else { 
      next('/nofound')
    }

  } else { 
    next()
  }
 
 })
export default router
