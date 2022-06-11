import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import autoloadroutes from './autoload'
import routes from './routes'
import guard from './guard'
// const route = getRoutes()

const router = createRouter({
    history:createWebHistory(),
    routes:[...routes,...autoloadroutes]
})

export function setupRouter(app:App){
    guard(router)
    app.use(router)
}
export default router