import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import User from '../views/User.vue'
import UserEdit from '../views/User/UserEdit.vue'
import UserLikes from '../views/User/UserLikes.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // redirect: '/profile',
    redirect: () => {
      if (Date.now() % 2 === 0) {
        return '/'
      } else {
        return '/profile';
      }
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/users/:id',
    name: 'User',
    component: User,
    children: [{
        path: 'edit',
        name: 'UserEdit',
        component: UserEdit
      },
      {
        path: 'Likes',
        name: 'UserLikes',
        component: UserLikes
      },
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active-partially',
  linkExactActiveClass: 'active-exactly',
})

export default router