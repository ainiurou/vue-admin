<script setup lang="ts">
//在 <script setup> 中必须使用 defineProps 和 defineEmits API 来声明 props 和 emits ，它们具备完整的类型推断并且在 <script setup> 中是直接可用的：
 const props =  defineProps<{msg:string}>()
 
</script>
<template>
<button class="zp-button mt-4" >{{props.msg}}</button>
</template>
<style lang="scss">
.zp-button {
    @apply w-full bg-indigo-500 hover:bg-indigo-300 py-1 text-white  rounded-sm duration-300 hover:text-yellow-100
}
</style>