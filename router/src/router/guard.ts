import { store } from '@/utils'
import { IData } from '@/utils/store'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {
    this.router = router
  }
  public run() {
    this.router.beforeEach((to, from) => {
      let token = store.get('token')?.token
      if (this.isLogin(to, token) === false) return { name: 'login' }
      if (this.isGuest(to, token) === false) return from
    })
  }

  // 游客页面权限 
  private isGuest(route: RouteLocationNormalized, token: any): boolean {
    // if (route.name != 'login') return false
    return Boolean(!route.meta.guest || (route.meta.guest && !token))
  }
  // 如果不是需要权限才能访问的页面 或 需要权限但有登陆的凭证 pass 否则去login
  private isLogin(route: RouteLocationNormalized, token: any): boolean {
    // if (route.name != 'login') return false
    return Boolean(!route.meta.auth || (route.meta.auth && token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
