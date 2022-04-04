import { viteMockServe } from 'vite-plugin-mock'
export function setupMockPlugin(isBuild:Boolean){
    return viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: !isBuild,
      })
}