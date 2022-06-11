<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
    <img src="/images/cat.jpg" class="w-40 h-40 object-cover rounded-full border-8 border-white" />
    <div class="mt-3">
      <router-link :to="{ name: 'admin.home' }" class="zp-button">后台管理</router-link>
      <router-link :to="{ name: 'login' }" class="zp-button ml-3">用户登陆</router-link>
    </div>
    <div class="text-gray-400 text-sm font-mono drop-shadow-md mt-6">欢迎来到努力的程序员💪</div>
  </div>
</template>

<script lang="ts">
export default {
  route: { name: 'home' },
}
</script>
<style></style>
