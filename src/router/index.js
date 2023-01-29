import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import PostsView from '@/views/PostsView.vue';
import CategoriesView from '@/views/CategoriesView.vue';
import UsersView from '@/views/UsersView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsView,
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesView,
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
