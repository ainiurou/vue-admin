interface viteEnv {
    VITE_SOME_KEY:number,
    VITE_ROUTER_AUTOLOAD:boolean
}

interface ImportMetaEnv extends viteEnv {
    // 更多环境变量...
  }
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}