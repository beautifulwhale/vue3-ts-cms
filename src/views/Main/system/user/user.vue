<template>
  <div class="user">
    <my-form-vue v-bind="searchForm"></my-form-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import myFormVue from '@/base-ui/form/src/my-form.vue'
import { searchForm } from './config/search-config'
export default defineComponent({
  name: 'user',
  components: {
    myFormVue
  },
  setup() {
    return { searchForm }
  }
})
</script>

<style scoped></style>
