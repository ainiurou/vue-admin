<script setup lang="ts">
import v from '@/plugins/validate'
// import { defineRule, useField,configure, useForm} from 'vee-validate'
// import { email, required, min, confirmed } from '@vee-validate/rules'
// import * as yup from 'yup'
// import { ref } from 'vue';
// import { localize } from '@vee-validate/i18n'
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'


// defineRule('email',email)
// defineRule('required',required)
// configure({
//     generateMessage:localize('zh_CN',zh_CN)
// })
const { handleSubmit, errors, values } = v.useForm({
    initialValues:{
        username:'zp',
        password:''
    },
    validationSchema:{
        username:v.yup.string().email().required().label('账号'),
        password:{required:true}
    }
});
const {  value: username } = v.useField('username',{},{})
const {  value: password } = v.useField('password',{},{ label:'密码' })

//handleSubmit 方法接收两个回调，一个是验证通过的，一个是不通过的
const onSubmit = handleSubmit(
    (value: any) => {
    console.log(value)
    alert('验证通过✅')
},({ errors,values }) => {
    console.log({errors,values})
}
) 
</script>

<template>
<div>
    <form @submit="onSubmit">
    <section>
        <input type="text" v-model="username">
        <p class="error" v-if="errors.username">{{ errors.username }}</p>
    </section>
    <section>
        <input type="text" v-model="password">
        <p class="error" v-if="errors.password">{{ errors.password }}</p>
    </section>
        
        <button>提交表单</button>
    </form>
    
</div>
</template>

<style lang="scss" scoped>
div{
    @apply flex h-screen w-screen justify-center items-center;

    input {
        @apply border-4 p-3 border-violet-600 outline-none;
    }
    .error {
        @apply text-xs text-red-700
    }
}
</style>
<script>
</script>