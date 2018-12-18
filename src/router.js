import Vue from 'vue';
import Router from 'vue-router';
import Todos from './views/Todos.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'todos',
      component: Todos,
      alias: '/todos'
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue'),
    },
    {
      path: '/ideas',
      name: 'ideas',
      component: () => import(/* webpackChunkName: "ideas" */ './views/Ideas.vue'),
    },
    {
      path: '/moods',
      name: 'moods',
      component: () => import(/* webpackChunkName: "moods" */ './views/Moods.vue'),
    },
    {
      path: '/more',
      name: 'more',
      component: () => import(/* webpackChunkName: "more" */ './views/More.vue'),
    },
  ],
});
