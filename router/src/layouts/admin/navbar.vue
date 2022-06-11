<script setup lang="ts">

</script>

<template>
   <div class=" bg-white p-3 px-5 flex justify-between items-center">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
        <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex justify-center items-center relative cursor-pointer group">
        <img src="/images/cat.jpg" alt="" class="h-8 w-8 rounded-full object-cover">
        <span class="ml-2 text-sm text-gray-500">爱牛肉</span>
        <section class="absolute group-hover:block top-full bg-white shadow-sm px-3 whitespace-nowrap border rounded-md hidden">
            <div class="flex items-center cursor-pointer border-b py-3">
             <i class="fab fa-dochub"></i>
             <span class="text-xs ml-1 text-gray-500 ">文档管理</span>
            </div>
            <div class="flex items-center cursor-pointer border-b py-3">
             <i class="fab fa-vimeo-v"></i>
             <span class="text-xs ml-1 text-gray-500 ">会员管理</span>
            </div>
            <div class="flex items-center cursor-pointer py-3">
             <i class="fas fa-user-gear"></i>
             <span class="text-xs ml-1 text-gray-500 ">用户中心</span>
            </div>
        </section>
        
    </div>
   </div>
 
</template>

<style lang="scss" scoped>
</style>
<script>
</script>