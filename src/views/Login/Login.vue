<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="elTabsName">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-Avatar"></i> 账号登录</span>
        </template>
        <account-login-vue ref="accountRef"></account-login-vue>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-date"></i> 手机登录</span>
        </template>
        <phoneLoginVue></phoneLoginVue>
      </el-tab-pane>
    </el-tabs>
    <div class="pwd">
      <el-checkbox
        label="记住密码"
        name="type"
        v-model="isKeepPassword"
      ></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>
<script lang="ts">
import accountLoginVue from './cpns/account-login.vue'
import phoneLoginVue from './cpns/phone-login.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    accountLoginVue,
    phoneLoginVue
  },
  setup() {
    //1.定义属性
    let isKeepPassword = ref(true)
    let elTabsName = ref('account')
    const accountRef = ref<InstanceType<typeof accountLoginVue>>()
    // const phoneRef = ref<InstanceType<typeof phoneLoginVue>>()
    //2.定义函数
    const login = () => {
      if (elTabsName.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      }
      // else{
      //   //处理手机请求，暂时没有接口
      // }
    }
    return { isKeepPassword, login, accountRef, elTabsName }
  }
})
</script>
<style lang="less" scoped>
.login-panel {
  h1 {
    text-align: center;
  }
  width: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-80%);
  .pwd {
    display: flex;
    justify-content: space-between;
  }
  .el-button {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
