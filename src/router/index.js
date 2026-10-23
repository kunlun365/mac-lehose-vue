import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '../views/GalleryView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { title: '香港西贡麦理浩径1段行程方案' },
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: GalleryView,
        meta: { title: '沿途实拍' },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }, // 兜底：任何匹配不到的路径都回首页，杜绝白屏
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // 后退/前进恢复浏览器记住的滚动位置；新导航到顶部
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    },
})

// 每次导航完成后同步 <title>，解决"SPA 只有一个标题"的问题
router.afterEach((to) => {
    document.title = to.meta.title ?? '香港西贡麦理浩径1段行程方案'
})

export default router