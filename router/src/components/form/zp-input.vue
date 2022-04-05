<script setup lang="ts" >
const props = defineProps({
    modelValue: String
})

</script>
<template>
<input type="text"  class="zp-input" :value="modelValue"  @input="$emit('update:modelValue',$event.target?.value)">
</template>
<style lang="scss">
.zp-input {
    @apply border w-full rounded-sm py-1 px-2 outline-none border-gray-200  placeholder:text-xs focus:ring-2 ring-offset-2 duration-300 ring-blue-700 focus:border-white
}
</style>