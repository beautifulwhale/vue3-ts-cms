<template>
  <div class="table">
    <div class="header">
      <slot name="handleNew"></slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      v-bind="childrenConfig"
    >
      <template v-for="item in proplist" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotname" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    listData: {
      type: Object,
      required: true
    },
    proplist: {
      type: Array,
      default: () => []
    },
    childrenConfig: {
      type: Object,
      default: () => ({})
    }
  }
})
</script>
<style lang="less" scoped>
.header {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 900px;
}
</style>
