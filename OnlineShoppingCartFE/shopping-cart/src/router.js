import { createRouter, createWebHistory } from 'vue-router'

import HomePageView from './views/HomePageView.vue';
import DashboardView from './views/admin/DashboardView.vue';




const routes = [
    {
        path: '/',
        name: 'HomePageView',
        component: HomePageView,
    },
    {
        path: '/das',
        name: 'DashboardView',
        component: DashboardView,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
