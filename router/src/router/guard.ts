import user from '@/store/user'
import { store } from '@/utils'
import { IData } from '@/utils/store'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {
    this.router = router
  }
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  private beforeEach(to:RouteLocationNormalized,from:RouteLocationNormalized){
    if (this.isLogin(to) === false) return { name: 'login' }
    if (this.isGuest(to) === false) return from
    this.getUserInfo()
  }


  private getUserInfo(){
    if (this.token()) {
      user().getUserInfo()
    }
  }

  private token():string | null{
    return store.get('token')?.token
  }

  // 游客页面权限 
  private isGuest(route: RouteLocationNormalized): boolean {
    // if (route.name != 'login') return false
    return Boolean(!route.meta.guest || (route.meta.guest && !this.token()))
  }
  // 如果不是需要权限才能访问的页面 或 需要权限但有登陆的凭证 pass 否则去login
  private isLogin(route: RouteLocationNormalized): boolean {
    // if (route.name != 'login') return false
    return Boolean(!route.meta.auth || (route.meta.auth && this.token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
