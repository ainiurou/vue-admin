<script setup lang="ts">
import v from '@/plugins/validate'
import userApi from '@/apis/userApi'
import { store } from '@/utils'
import { useRouter } from 'vue-router'

const { Form, Field, ErrorMessage } = v
const router = useRouter()

const onSubmit = async (values: any) => {
  const {
    result: { token },
  } = await userApi.login(values)
  store.set('token', { token })
  router.push({ name: 'home' })
}
</script>
<script lang="ts">
export default {
  route: { name: 'login', meta: { guest: true } },
}
</script>

<template>
  <Form class @submit="onSubmit">
    <div class="bg-white w-[720px] h-full md:grid grid-cols-2 md:h-80 rounded-md shadow-md overflow-hidden">
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg">会员登陆</h2>
          <div class="mt-10">
            <Field
              name="account"
              :rules="{ email: true, required: true }"
              label="账号"
              class="zp-input"
              placeholder="请输入邮箱或手机号" />
            <ErrorMessage name="account" class="zp-error mt-2" as="div" />
            <Field
              name="password"
              :rules="{ min: 3, required: true }"
              label="密码"
              type="password"
              class="zp-input mt-5" />
            <ErrorMessage name="password" class="zp-error mt-2" as="div" />
          </div>
          <zp-button msg="登陆" />
        </div>

        <div class="flex justify-center gap-2 mt-5">
          <zp-link msg="网站首页" />
          <zp-link msg="会员注册" />
          <zp-link msg="找回密码" />
          <zp-link msg="找回密码" />
        </div>
      </div>
      <div class="hidden md:block relative">
        <img src="/images/login.jpg" class="absolute h-full w-full object-cover" />
      </div>
    </div>
  </Form>
</template>

<style lang="scss" scoped>
form {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-0.5;
}
</style>
