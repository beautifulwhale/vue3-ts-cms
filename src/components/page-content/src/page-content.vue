<template>
  <div class="page-content">
    <my-table-vue :listData="dataList" v-bind="contentTableConfig">
      <template #header>
        <span>用户列表</span>
      </template>
      <template #handleNew>
        <el-button type="primary" size="mini" @click="newClick"
          >新建用户</el-button
        >
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
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            size="mini"
            type="primary"
            @click="editClick(scope.row)"
            v-if="isUpdate"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="deleteClick(scope.row)"
            v-if="isDelete"
            >删除</el-button
          >
        </div>
      </template>
      <template #footer>
        <el-pagination background layout="prev, pager, next" :total="userTotal">
        </el-pagination>
      </template>
      <!-- 自定义插槽 可根据配置导入 -->
      <template
        v-for="item in otherSlots"
        :key="item.prop"
        #[item.slotname]="scope"
      >
        <template v-if="item.slotname">
          <slot :name="item.slotname" :row="scope.row"></slot>
        </template>
      </template>
    </my-table-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import myTableVue from '@/base-ui/table/my-table.vue'
import { useStore } from 'vuex'
import { getPermissions } from '../../../hooks/usePermissions'
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
  emits: ['newClick', 'editClick'],
  setup(props, { emit }) {
    const store = useStore()
    const isQuery = getPermissions(props.pageName, 'query')
    const isUpdate = getPermissions(props.pageName, 'update')
    const isDelete = getPermissions(props.pageName, 'delete')
    const getPageDatas = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 50,
          ...queryInfo
        }
      })
    }
    getPageDatas()
    const dataList = computed(() =>
      store.getters['system/getPageData'](props.pageName)
    )
    //获取动态插槽
    const otherSlots = props.contentTableConfig?.proplist.filter(
      (item: any) => {
        if (item.slotname === 'createAt') return false
        if (item.slotname === 'updateAt') return false
        if (item.slotname === 'handler') return false
        if (item.slotname === 'status') return false
        return true
      }
    )
    const userTotal = computed(() => store.state.system.userTotal)
    const deleteClick = (row: any) => {
      console.log(row)
      store.dispatch('system/deleteData', {
        pageName: props.pageName,
        id: row.id
      })
    }
    const newClick = () => {
      emit('newClick')
    }
    const editClick = (item: any) => {
      emit('editClick', item)
    }
    return {
      dataList,
      userTotal,
      getPageDatas,
      otherSlots,
      isUpdate,
      isDelete,
      deleteClick,
      newClick,
      editClick
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
