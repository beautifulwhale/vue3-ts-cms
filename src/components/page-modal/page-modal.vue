<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="30%" destroy-on-close>
    <my-form-vue v-bind="modalConfig" v-model="formData"></my-form-vue>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleConfirm">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import myFormVue from '@/base-ui/form/src/my-form.vue'
import { useStore } from 'vuex'
export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultModal: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    myFormVue
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    watch(
      () => props.defaultModal,
      (newVal: any) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newVal[`${item.field}`]
        }
      }
    )
    const store = useStore()
    const handleConfirm = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultModal).length) {
        store.dispatch('system/editHandle', {
          pageName: props.pageName,
          editData: { ...formData.value },
          id: props.defaultModal.id
        })
      } else {
        console.log(formData.value)
        store.dispatch('system/newHandle', {
          pageName: props.pageName,
          newData: { ...formData.value }
        })
      }
    }
    return { dialogVisible, formData, handleConfirm }
  }
})
</script>
<style lang="less" scoped></style>
