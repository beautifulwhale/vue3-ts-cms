<template>
  <div class="menu">
    <page-content-vue
      :content-table-config="contentTableConfig"
      page-name="menu"
    ></page-content-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContentVue from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/conten-config'
export default defineComponent({
  name: 'menu',
  components: {
    pageContentVue
  },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
