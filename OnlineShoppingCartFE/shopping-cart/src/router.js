import { createRouter, createWebHistory } from 'vue-router'

import HomePageView from './views/HomePageView.vue';
import LoginPageView from './views/LoginPageView.vue';
import DashboardView from './views/admin/DashboardView.vue';
import LoginAdminView from './views/admin/LoginAdminView.vue';
import CreateProductView from './views/admin/CreateProductView.vue';
import ProductManageView from './views/admin/ProductManageView.vue';
import CategoryManageView from './views/admin/CategoryManageView.vue';
import CreateCategoryView from './views/admin/CreateCategoryView.vue';



const routes = [
    {
        path: '/',
        name: 'HomePageView',
        component: HomePageView,
    },
    {
        path: '/admin',
        name: 'DashboardView',
        component: DashboardView,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/login',
        name: 'LoginAdminView',
        component: LoginAdminView
    },
    {
        path: '/admin/create_product',
        name: 'CreateProductView',
        component: CreateProductView,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/productmanage',
        name: 'ProductManageView',
        component: ProductManageView,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/categorymanage',
        name: 'CategoryManageView',
        component: CategoryManageView,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/create_category',
        name: 'CreateCategoryView',
        component: CreateCategoryView,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'LoginPageView',
        component: LoginPageView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    // Kiểm tra meta data của trang
    if (to.meta.requiresAuth && to.path !== '/admin/login') {
        const token = localStorage.getItem('token');
        if (!token) {
            // Chưa đăng nhập, chuyển hướng đến trang đăng nhập
            next('/admin/login');
        } else {
            // Đã đăng nhập, cho phép truy cập vào trang
            next();
        }
    } else {
        // Trang không yêu cầu đăng nhập, cho phép truy cập
        next();
    }

});
export default router
