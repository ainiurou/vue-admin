<script setup lang="ts">
const props = defineProps<{msg?:string}>()
</script>
<template>
<a href="" class="text-xs text-gray-700 hover:text-violet-700">{{props.msg}}</a>
</template>
<style lang="scss">
</style>