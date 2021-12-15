<template>
  <div>
    <el-form ref="form" :model="phone" label-width="70px" :rules="rules">
      <el-form-item label="手机号" prop="name">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="code">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" size="small">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/acount-config'
export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return { phone, rules }
  }
})
</script>
<style lang="less" scoped>
.code {
  display: flex;
  .el-button {
    margin-left: 8px;
  }
}
</style>
