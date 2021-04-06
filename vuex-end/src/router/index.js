import { createRouter, createWebHistory } from 'vue-router'
import Goods from '../components/goods/Goods'
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/goods',
            component:Goods
        },

    ],
    linkActiveClass:'active'
})
export default router
