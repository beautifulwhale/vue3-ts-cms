<template>
  <div class="role">
    <page-search-vue :formConfig="formConfig" />
    <pageContentVue
      :contentTableConfig="contentTableConfig"
      page-name="role"
      @new-click="newClick"
      @edit-click="editClick"
    />
    <page-modal-vue
      page-name="role"
      :modalConfig="modalConfig"
      :defaultModal="defaultModal"
      ref="pageModalRef"
      :otherValue="otherValue"
    >
      <el-tree
        ref="elTreeRef"
        :data="menus"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        @check="handleMenu"
      />
    </page-modal-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import pageSearchVue from '@/components/page-search/src/page-search.vue'
import pageContentVue from '@/components/page-content/src/page-content.vue'
import pageModalVue from '@/components/page-modal/page-modal.vue'
import { contentTableConfig } from './config/content-config'
import { formConfig } from './config/search-config'
import { modalConfig } from './config/modal-config'
import { usePageModal } from '../../../../hooks/userPageModal'
import { mapMenuCheckKeys } from '../../../../utils/map-menu-routes'
import { useStore } from 'vuex'
import { ElTree } from 'element-plus'
export default defineComponent({
  name: 'role',
  components: {
    pageContentVue,
    pageSearchVue,
    pageModalVue
  },
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallBack = (item: any) => {
      const checkedKeys = mapMenuCheckKeys(item.menuList)
      //注意：这里在执行回调函数的时elTree还没有挂载
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(checkedKeys, false)
      })
    }
    const [newClick, editClick, pageModalRef, defaultModal] = usePageModal(
      undefined,
      editCallBack
    )
    const store = useStore()
    const menus = computed(() => store.state.allMenu)
    const otherValue = ref({})
    const handleMenu = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherValue.value = { menuList }
    }
    return {
      contentTableConfig,
      formConfig,
      modalConfig,
      newClick,
      editClick,
      pageModalRef,
      defaultModal,
      otherValue,
      menus,
      handleMenu,
      elTreeRef
    }
  }
})
</script>

<style scoped></style>
