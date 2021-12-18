<template>
  <div class="goods">
    <page-content-vue
      :content-table-config="contentTableConfig"
      page-name="goods"
    >
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
    </page-content-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContentVue from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/goods-content'
export default defineComponent({
  name: 'goods',
  components: {
    pageContentVue
  },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
