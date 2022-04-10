<script setup lang="ts">
import v from '@/plugins/validate'

const { Form, Field} = v
// import { Form, Field,ErrorMessage,defineRule,configure } from 'vee-validate'
// import { email, required, min, confirmed } from '@vee-validate/rules'
// import { localize } from '@vee-validate/i18n'
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
// import { ref } from 'vue';

// configure({
//     generateMessage:localize('zh_CN',zh_CN)
// })

// defineRule('email',email)
// defineRule('required',required)

// const account = ref<string>('')
// const emailrule = (value:any) => {
//     return /@/.test(value) ? true : '邮箱格式错误'
// }
const onSubmit = (value: any) => {
    console.log(value)
    alert('验证通过')
}
</script>

<template>
<div >
    <Form @submit="onSubmit">
        <Field name="account" :rules="{ email:true, required:true }" label="账号" :validate-on-input="true" #default={field,errorMessage}>
            <input v-bind="field" />
            <hr />
            <p>{{errorMessage}}</p>
        </Field>
        <button class="border bg-slate-400">提交表单</button>
    </Form>
</div>
</template>

<style lang="scss" scoped>

div{
    @apply flex h-screen w-screen justify-center items-center;

    input {
        @apply border-4 p-3 border-violet-600 outline-none;
    }
}
</style>
<script>
</script>