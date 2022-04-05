<script setup lang="ts">import { reactive } from 'vue';

const form = reactive({
    account:'',
    password:''
})

</script>

<template>
<div class="bg-slate-300 h-screen flex justify-center items-start md:items-center p-0.5">
    <div class="bg-white w-[720px] h-full md:grid grid-cols-2 md:h-80 rounded-md shadow-md overflow-hidden">
        <div class="p-6">
            <h2 class="text-center text-gray-700 text-lg">会员登陆</h2>
            <div class="mt-10">
                <zpInput placeholder="请输入邮箱或手机号"  v-model="form.account"/>
                <zpInput placeholder="请输入密码" class="mt-4" v-model="form.password"/>
            </div>
            <zp-button msg="登陆"/>
            <div class="flex justify-center gap-2 mt-5">
                <zp-link msg="网站首页"/>
                <zp-link msg="会员注册"/>
                <zp-link msg="找回密码"/>
                <zp-link msg="找回密码"/>
            </div>
        </div>
        <div class="hidden md:block">
            <img src="/images/login.jpg" class="h-80 w-full object-cover">
        </div>
    </div>
</div>
</template>

<style lang="scss">
// .zp-input {
//     @apply border w-full rounded-sm py-1 px-2 outline-none border-gray-200  placeholder:text-xs focus:ring-2 ring-offset-2 duration-300 ring-blue-700 focus:border-white
// }
// .zp-button {
//     @apply w-full bg-indigo-500 hover:bg-indigo-300 py-1 text-white  rounded-sm duration-300 hover:text-yellow-100
// }
</style>