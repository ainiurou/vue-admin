<script setup lang="ts">
const links = ref<{ title: string }[]>([
  { title: '编辑器' },
  { title: '订单管理' },
  { title: '成交总额' },
  { title: '用户管理' },
])
</script>

<template>
  <div class="hidden md:block">
    <div class="m-5 grid grid-flow-col gap-3 justify-start items-center">
      <a href="" v-for="link of links" class="bg-white text-gray-500 px-2 py-2 rounded text-sm"
        >{{ link.title }}<i class="fas fa-times ml-1"></i
      ></a>
    </div>
  </div>
</template>

<style lang="scss"></style>
<script lang="ts">
import { ref } from 'vue'
</script>
