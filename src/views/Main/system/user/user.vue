<template>
  <div class="user">
    <page-search-vue
      :formConfig="searchForm"
      @handleQueryClick="handleQueryClick"
    ></page-search-vue>
    <page-content-vue
      pageName="users"
      :content-table-config="contentTableConfig"
      ref="pageContentRef"
      @new-click="newClick"
      @edit-click="editClick"
    ></page-content-vue>
    <page-modal-vue
      :modalConfig="modalConfigRef"
      :defaultModal="defaultModal"
      pageName="users"
      ref="pageModalRef"
    ></page-modal-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import pageContentVue from '@/components/page-content/src/page-content.vue'
import pageSearchVue from '@/components/page-search/src/page-search.vue'
import pageModalVue from '@/components/page-modal/page-modal.vue'
import { contentTableConfig } from './config/content-config'
import { searchForm } from './config/search-config'
import { modalConfig } from './config/modal-config'
import { usePageModal } from '../../../../hooks/userPageModal'
import { useStore } from '../../../../store'
import { usePageSearch } from '../../../../hooks/use-page-search'
export default defineComponent({
  name: 'user',
  components: {
    pageSearchVue,
    pageContentVue,
    pageModalVue
  },
  setup() {
    const [pageContentRef, handleQueryClick] = usePageSearch()
    const newCallBack = () => {
      const passwordItem = modalConfig.formItems?.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editCallBack = () => {
      const passwordItem = modalConfig.formItems?.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }
    //获取select的数据 使用computed可以使得数据响应式
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems?.find(
        (item) => item.field === 'departmentId'
      )
      const store = useStore()
      departmentItem!.options = store.state.allDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })
      const roleItem = modalConfig.formItems?.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.allRole.map((item) => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })
    const [newClick, editClick, pageModalRef, defaultModal] = usePageModal(
      newCallBack,
      editCallBack
    )
    return {
      searchForm,
      contentTableConfig,
      handleQueryClick,
      pageContentRef,
      modalConfigRef,
      newClick,
      editClick,
      pageModalRef,
      defaultModal
    }
  }
})
</script>

<style scoped>
.btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
.user-list {
  margin-top: 30px;
}
</style>
