import { createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/views/HomePage'
import Favorites from '@/views/Favorites'

const routes = [
    {
        path : "/",
        component : HomePage
    },
    {
        path : "/favorites",
        component : Favorites
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router