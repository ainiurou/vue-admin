<script setup lang="ts">
// const response = await fetch('http://localhost:3000/api/get').then(r=>r.json())
// console.log(response)
import { info } from './api/user'
const response = await info()
console.log(response.data.result.height)
</script>

<template>
<ul class="bg-red-800">
    <li>首页</li>
    <li>商品</li>
    <li>评价</li>
</ul>
 <router-view></router-view>
</template>

<style>
</style>
