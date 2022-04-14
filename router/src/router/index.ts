import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Routes from './autoload'
import routes from './routes'
import guard from './guard'
// const route = getRoutes()

const router = createRouter({
    history:createWebHistory(),
    routes:[...routes,...Routes]
})

export function setupRouter(app:App){
    guard(router)
    app.use(router)
}
export default router