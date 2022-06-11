<script setup lang="ts">
interface IMenuItem {
  title: string
  icon?: string
  active?: boolean
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}

const menus = ref<IMenu[]>([
  {
    title: '错误页面',
    icon: 'fab fa-adversal',
    active: true,
    children: [{ title: '404页面', active: true }, { title: '403页面' }, { title: '500页面' }],
  },
  { title: '编辑器', icon: 'fas fa-keyboard', children: [{ title: 'Markdown编辑器' }, { title: '富文本编辑器' }] },
])
const resetMenus = () => {
  menus.value.forEach((pmenu) => {
    pmenu.active = false
    pmenu.children?.forEach((cmenu) => {
      cmenu.active = false
    })
  })
}
const handle = (pmenu: IMenuItem, cmenu: IMenuItem[] | undefined) => {
  resetMenus()
  pmenu.active = true
}
</script>

<template>
  <div class="menu w-[200px]  bg-gray-800 p-4">
    <div class="logo text-gray-300 ml-2">
      <i class="fas fa-paw text-red-300 text-3xl mt-2"></i>
      ZpManage
    </div>
    <!-- 菜单 -->
    <div class="left-container mt-2">
      <dl v-for="(menu, index) of menus" :key="index" @click="handle(menu, menu.children)">
        <dt>
          <section>
            <i :class="menu.icon" class="text-slate-200"></i>
            <span class="text-white ml-2 text-base">{{ menu.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down text-white duration-300" :class="{ 'rotate-180': menu.active }"></i>
          </section>
        </dt>
        <dd v-if="menu.active" :class="{ active: cmenu.active }" v-for="(cmenu, key) of menu.children" :key="key">
          {{ cmenu.title }}
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
<script lang="ts">
import { ref } from 'vue'
</script>
