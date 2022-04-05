import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Routes from './autoload'
import routes from './routes'

// const route = getRoutes()

const router = createRouter({
    history:createWebHistory(),
    routes:[...routes,...Routes]
})

export function setupRouter(app:App){
    app.use(router)
}
export default router