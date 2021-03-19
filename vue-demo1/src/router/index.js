import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import News from '../components/News'
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News
        }
    ]
})
export default router
