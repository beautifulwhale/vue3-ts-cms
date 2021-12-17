<template>
  <div class="table">
    <el-table :data="listData" border style="width: 100%">
      <template v-for="item in proplist" :key="item.prop">
        <el-table-column v-bind="item" align="center">
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
    }
  }
})
</script>
<style lang="less" scoped></style>
