<script setup lang="ts">
import { ref } from 'vue'
const links = ref<{ title: string }[]>([
  { title: '编辑器' },
  { title: '订单管理' },
  { title: '成交总额' },
  { title: '用户管理' },
])
</script>

<template>
  <div class="hidden md:block p-2 border-t border-b bg-gray-50 shadow-sm">
    <div class="grid grid-flow-col gap-3  justify-start">
      <a href="" v-for="link of links" class="bg-white border text-gray-500 px-2 py-2 rounded text-xs hover:bg-violet-500 hover:text-white duration-300"
        >{{ link.title }}<i class="fas fa-times ml-1"></i
      ></a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
