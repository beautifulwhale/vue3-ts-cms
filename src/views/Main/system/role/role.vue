<template>
  <div class="role">
    <page-search-vue :formConfig="formConfig" />
    <pageContentVue :contentTableConfig="contentTableConfig" page-name="role" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageSearchVue from '@/components/page-search/src/page-search.vue'
import pageContentVue from '@/components/page-content/src/page-content.vue'
import { contentTableConfig } from './config/content-config'
import { formConfig } from './config/search-config'
export default defineComponent({
  name: 'role',
  components: {
    pageContentVue,
    pageSearchVue
  },
  setup() {
    return { contentTableConfig, formConfig }
  }
})
</script>

<style scoped></style>
