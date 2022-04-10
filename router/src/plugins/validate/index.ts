import rules from '@vee-validate/rules'
import yup from './yup'
import { defineRule } from 'vee-validate'
import * as veeValidate from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'


//批量定义规则
Object.keys(rules).forEach(key => {
    defineRule(key,rules[key])
})

//中文消息定义
veeValidate.configure({
    generateMessage:localize('zh_CN',zh_CN)
})



const modules = { yup, ...veeValidate}

export default modules