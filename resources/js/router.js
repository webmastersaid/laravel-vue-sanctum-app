import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', component: () => import('./components/Index.vue'), name: 'index' },
    { path: '/user', component: () => import('./components/User/Index.vue'), name: 'user.index' },
    { path: '/user/login', component: () => import('./components/User/Login.vue'), name: 'user.login' },
    { path: '/user/register', component: () => import('./components/User/Register.vue'), name: 'user.register' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token')
    switch (to.name) {
        case 'index':
            return next()
        case 'user.index':
            return token ? next() : next({ name: 'user.login' })
        case 'user.login':
            return token ? next({ name: 'user.index' }) : next()
        case 'user.register':
            return token ? next({ name: 'user.index' }) : next()
        default: next()
    }
})

export default router