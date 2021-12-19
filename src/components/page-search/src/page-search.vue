<template>
  <div class="page-search">
    <my-form-vue v-bind="formConfig" v-model="formData">
      <template #header>高级检索</template>
      <template #footer>
        <div class="btns">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button type="primary" @click="handleQueryClick">检索</el-button>
        </div>
      </template>
    </my-form-vue>
  </div>
</template>

<script lang="ts">
import myFormVue from '@/base-ui/form/src/my-form.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    myFormVue
  },
  emits: ['handleQueryClick'],
  setup(props, { emit }) {
    //双向绑定的属性应该是由配置文件中的field来决定的
    // 优化1：formData中的属性应该动态来决定
    const formItems = props.formConfig.formItems ?? []
    let formDataRaw: any = {}
    for (const item of formItems) {
      formDataRaw[item.field] = ''
    }
    const formData = ref(formDataRaw)

    // 优化二：当用户点击重置
    const handleResetClick = () => {
      // formData.value = formOriginData 如果是这样的方法，因为...props.modelvalue是浅拷贝,不能改变子组件的值
      for (const key in formDataRaw) {
        formData.value[`${key}`] = formDataRaw[key]
      }
      formData.value = formDataRaw
    }
    const handleQueryClick = () => {
      emit('handleQueryClick', formData.value)
    }
    return { formData, handleResetClick, handleQueryClick }
  }
})
</script>

<style scoped>
.btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
