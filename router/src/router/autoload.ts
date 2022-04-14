import { RouteRecordRaw } from "vue-router"
import { env } from "@/utils"

const layouts = import.meta.globEager('../layouts/*.vue')
const views = import.meta.globEager('../views/**/*.vue')


function getRoutes(){
    const layoutRoutes = [] as RouteRecordRaw[]
    Object.entries(layouts).forEach(([file,module])=>{
        const route = getRouteByModule(file, module)
        route.children = getChildrenRoutes(route) 
        layoutRoutes.push(route)
    })
    return layoutRoutes
}

//获取布局的子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw){
    const viewsRoutes = [] as RouteRecordRaw[]
    Object.entries(views).forEach(([file,module])=>{
        if(file.includes(`../views/${layoutRoute.name as string}`)){
            const route = getRouteByModule(file,module)
            viewsRoutes.push(route)
        }
        
    })
    return viewsRoutes
}

function getRouteByModule (file:string,module:{[key:string]:any}){
    //console.log(file.split('/').pop()?.split('.')[0])
    const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi,'')
    const route = {
        name:name.replace('/','.'),
        path:`/${name}`,
        component:module.default
    }
    //这块使用assign 会让组件中的route中的path覆盖前面的route中的path eg: (previous path): /admin/user => (next path): /user
    return Object.assign(route,route.component?.route)
}

const Routes = env.VITE_ROUTER_AUTOLOAD ? getRoutes() : [] as RouteRecordRaw[]
export default Routes