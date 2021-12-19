<template>
  <div>
    <div class="user-info">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <!-- 用户信息 <span class="el-icon-arrow-down"> </span> -->
          <el-avatar size="small" :src="circleUrl"></el-avatar>
          <span class="name">{{ name }}</span>
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExit">退出登录</el-dropdown-item>
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item>系统管理</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import cache from '@/utils/cache'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const name = 'coderwhy'
    const circleUrl =
      'https://img0.baidu.com/it/u=2577595939,1196617969&fm=26&fmt=auto'
    const router = useRouter()
    const handleExit = () => {
      cache.deleteCache('token')
      router.push('/main')
    }
    return { circleUrl, name, handleExit }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.name {
  margin-left: 10px;
  font-size: 15px;
}
</style>
