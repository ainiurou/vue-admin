import { env } from "@/utils";
import { RouteRecordRaw } from "vue-router";
import autoloadModuleRoutes from "./module";
import getRoutes from "./view";

let routes = [] as RouteRecordRaw[]
if (env.VITE_ROUTER_AUTOLOAD) {
    routes = getRoutes()
}
else {
    routes = autoloadModuleRoutes()
}

//todo 通过权限过滤掉路由
export default routes