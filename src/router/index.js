
import { createRouter, createWebHashHistory } from "vue-router"
import Index from '@/views/Index.vue'
import Login from '@/views/Login/Index.vue'
import Home from '@/views/Home/Index.vue'
import Goods from '@/views/Goods/Index.vue'
import GoodsDetail from '@/views/GoodsDetail/Index.vue'
import Thanks from '@/views/Thanks/Index.vue'
import User from '@/views/User/Index.vue'
const routes = [
    {
        path: "/",
        redirect: "/home",
        name: "home",
        component: Index,
        children: [
            {
                path: "home",
                component: Home
            },
            {
                path: "goods",
                component: Goods
            },
            {
                path: 'goodsDetail',
                name: 'goodsDetail',
                component: GoodsDetail
            },
            {
                path: "thanks",
                component: Thanks
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/user",
        name: "user",
        component: User,
        meta: {
            auth: true
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        next({
            path: "/login",
            query: {
                redirect: to.fullPath
            }
        })
    } else {
        next()
    }
})
export default router
