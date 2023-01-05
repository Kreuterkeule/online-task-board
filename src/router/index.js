import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardComponent from '../components/DashboardComponent.vue';
import TodoComponent from '../components/TodoComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: DashboardComponent,
    name: '/',
  },
  {
    path: '/Dashboard',
    component: DashboardComponent,
    name: '/Dashboard',
  },
  {
    path: '/Todo',
    component: TodoComponent,
    name: '/Todo',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
