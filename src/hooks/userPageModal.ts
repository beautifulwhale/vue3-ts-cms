import { ref } from 'vue'
import pageModalVue from '@/components/page-modal/page-modal.vue'
type callFn = () => void
export function usePageModal(newCb: callFn, editCb: callFn) {
  const pageModalRef = ref<InstanceType<typeof pageModalVue>>()
  const defaultModal = ref({})
  const newClick = () => {
    if (pageModalRef.value) {
      defaultModal.value = {}
      pageModalRef.value.dialogVisible = true
      newCb && newCb()
    }
  }
  const editClick = (item: any) => {
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      defaultModal.value = { ...item }
      editCb && editCb()
    }
  }
  return [newClick, editClick, pageModalRef, defaultModal]
}
