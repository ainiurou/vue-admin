import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    auth?:Boolean,
    guest?:Boolean
  }
}