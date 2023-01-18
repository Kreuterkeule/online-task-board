import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardComponent from '../components/DashboardComponent.vue';
import TodoComponent from '../components/TodoComponent.vue';
import AddTodoComponent from '../components/AddTodoComponent.vue';
import AddUserComponent from '../components/AddUserComponent.vue';
import SingleTodoComponent from '../components/SingleTodoComponent.vue';

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
  {
    path: '/addTodo',
    component: AddTodoComponent,
    name: '/addTodo',
  },
  {
    path: '/addUser',
    component: AddUserComponent,
    name: '/addUser',
  },
  {
    path: '/singleTodo',
    component: SingleTodoComponent,
    name: '/singleTodo',
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
