<script setup lang="ts">
import { router } from '@/store/router'
import { ref } from 'vue'
import { RouteLocationNormalized, RouteRecordNormalized, RouteRecordRaw, useRouter } from 'vue-router'

const routerStore = router()
const routeService = useRouter()
const reset = () => {
  routerStore.routes.forEach((proute) => {
    proute.meta.isClick = false
    proute.children.forEach((croute) => {
      if (croute.meta) {
        croute.meta.isClick = false
      }
    })
  })
}
const handle = (pRoute: RouteRecordNormalized, cRoute?: RouteRecordRaw) => {
  reset()
  pRoute.meta.isClick = true
  if (cRoute && cRoute.meta) {
    cRoute.meta.isClick = true
    routeService.push(cRoute)
  }
}
</script>

<template>
  <div class="menu w-[200px] bg-gray-800 p-4">
    <div class="logo text-gray-300 ml-2">
      <i class="fas fa-paw text-red-300 text-3xl mt-2"></i>
      ZpManage
    </div>
    <!-- 菜单 -->
    <div class="left-container mt-2">
      <dl v-for="(route, index) of routerStore.routes" :key="index" @click="handle(route)">
        <dt>
          <section>
            <i :class="route.meta?.icon" class="text-slate-200"></i>
            <span class="text-white ml-2 text-base">{{ route.meta.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down text-white duration-300" :class="{ 'rotate-180': route.meta.isClick }"></i>
          </section>
        </dt>
        <dd
          v-show="route.meta.isClick"
          :class="{ active: childRoute.meta?.isClick }"
          v-for="(childRoute, key) of route.children"
          :key="key"
          @click.stop="handle(route, childRoute)">
          {{ childRoute.meta?.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-container {
  dl {
    @apply text-gray-300 text-sm;

    dt {
      @apply mt-5 flex justify-between items-center cursor-pointer;
      section {
        @apply flex items-center;
      }
    }
    dd {
      @apply pl-4 py-2 my-2 text-white bg-gray-700 text-sm duration-300 rounded-sm cursor-pointer hover:bg-violet-500;

      &.active {
        @apply bg-violet-700;
      }
    }
  }
}
</style>
