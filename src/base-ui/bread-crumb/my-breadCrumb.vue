<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadCrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item></template
      >
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import IBreadCrumb from './type'
export default defineComponent({
  props: {
    breadCrumbs: {
      type: Array as PropType<IBreadCrumb[]>
    }
  }
})
</script>
<style lang="less" scoped></style>
