<template>
  <div class="account">
    <el-form ref="formRef" :model="account" label-width="70px" :rules="rules">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/acount-config'
import { ElForm } from 'element-plus'
import cache from '@/utils/cache'
export default defineComponent({
  setup() {
    const account = reactive({
      name: cache.getCache('name') ?? '',
      password: cache.getCache('password') ?? ''
    })
    const store = useStore()
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid: any) => {
        if (valid) {
          //1.是否记住密码
          if (isKeepPassword) {
            cache.setCache('name', account.name)
            cache.setCache('password', account.password)
          } else {
            cache.deleteCache('name')
            cache.deleteCache('password')
          }
          //2.发送网络请求
          store.dispatch('loginMoudle/accountLoginAction', { ...account })
        }
      })
    }
    return { account, rules, loginAction, formRef }
  }
})
</script>
<style lang="less" scoped>
.account {
  width: 100%;
}
</style>
