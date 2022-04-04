import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message:'请求成功',
        type:'success',
        result: {
          name: 'zhaopeng',
          age:18,
          height:'180cm'
        },
      }
    },
  }
] as MockMethod[]