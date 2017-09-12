//import Vue from 'vue'


import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'
/*import UserLogin from './components/UserLogin.vue'
import UserReg from './components/UserReg.vue'*/
import Article from './components/Article.vue'

import Test from './test.vue'

export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/follow',
    component:Follow
  },
  {
    path:'/column',
    component:Test
  },
  {
    path:'/user-info',
    component:UserInfo
  },
  /*{
    path:'/user-login',
    component:UserLogin
  },
  {
    path:'/user-reg',
    component:UserReg
  },*/
  {
    path:'/article/:dd',
    component:Article,
   /* children:[
      {
        path:'/:id',
        component:Article
      }
    ]*/
  },
  { 
    path: '/', 
    redirect: '/home' 
  },
  { 
    path: '*', 
    redirect: '/home' 
  }
];

/*const router={
	mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
	routes:[
		{
			path:'/home',
			component:Home
		},
    {
      path:'/follow',
      component:Follow
    },
    {
      path:'/column',
      component:Column
    },
		{ 
      path: '/', 
      redirect: '/home' 
    }
	]
};*/

//export default new VueRouter(router);

