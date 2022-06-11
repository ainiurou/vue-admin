import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './vite/alias'
import { parseEnv } from './vite/utils'
import setupPlugins  from './vite/plugins'

export default ({ command, mode }: ConfigEnv)=>{
  const isBuild = command === 'build'
  const root = process.cwd()
  //检查.env环境文件，输出NODE_ENV 和 VITE_开头的键值对，VITE_后面的不会覆盖前面的
  const env = parseEnv(loadEnv(mode,root))
  console.log(env)

  return {
    // plugins:[vue()]
    plugins:setupPlugins(isBuild,env),
    resolve:{
      alias
    }
  }
}
