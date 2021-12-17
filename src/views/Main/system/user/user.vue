<template>
  <div class="user">
    <page-search-vue :formConfig="searchForm"></page-search-vue>
    <page-content-vue
      pageName="users"
      :content-table-config="contentTableConfig"
    ></page-content-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContentVue from '@/components/page-content/src/page-content.vue'
import pageSearchVue from '@/components/page-search/src/page-search.vue'
import { contentTableConfig } from './config/content-config'
import { searchForm } from './config/search-config'
export default defineComponent({
  name: 'user',
  components: {
    pageSearchVue,
    pageContentVue
  },
  setup() {
    return { searchForm, contentTableConfig }
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
