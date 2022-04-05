<script setup lang="ts">
</script>

<template>
<div class="bg-slate-300 h-screen flex justify-center items-center">
    <div class="bg-white w-[720px] grid grid-cols-2 rounded-md shadow-md overflow-hidden">
        <div class="p-6">
            <h2 class="text-center text-gray-700 text-lg">会员登陆</h2>
            <div class="mt-8">
                <input 
                type="text" 
                placeholder="请输入手机号或邮箱" 
                class="">
                <input type="text" placeholder="请输入手机号或邮箱" class="border w-full rounded-sm py-1 px-2 outline-none border-gray-200  placeholder:text-xs focus:ring-2 ring-offset-2 duration-300 ring-blue-700 focus:border-white mt-5">
            </div>
            <button>登陆</button>
        </div>
        <div>
            <img src="/images/login.jpg" class="">
        </div>
    </div>
</div>
</template>

<style lang="scss">
input {
    @apply border w-full rounded-sm py-1 px-2 outline-none border-gray-200  placeholder:text-xs focus:ring-2 ring-offset-2 duration-300 ring-blue-700 focus:border-white
}
</style>