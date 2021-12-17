<template>
  <div class="page-content">
    <my-table-vue :listData="dataList" v-bind="contentTableConfig">
      <template #header>
        <span>用户列表</span>
      </template>
      <template #status="scope">
        <el-button
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '可用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>
          {{ $filter.formatTimes(scope.row.createAt) }}
        </span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filter.formatTimes(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button size="mini" type="primary">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </div>
      </template>
      <template #footer>
        <el-pagination background layout="prev, pager, next" :total="userTotal">
        </el-pagination>
      </template>
    </my-table-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import myTableVue from '@/base-ui/table/my-table.vue'
import { useStore } from 'vuex'
export default defineComponent({
  components: { myTableVue },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const dataList = computed(() =>
      store.getters['system/getPageData'](props.pageName)
    )
    const userTotal = computed(() => store.state.system.userTotal)
    return { dataList, userTotal }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
