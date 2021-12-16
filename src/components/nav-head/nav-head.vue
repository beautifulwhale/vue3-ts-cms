<template>
  <div class="nav-header">
    <i
      :class="isFold ? 'iconfont icon-zhedie2' : 'iconfont icon-zhedie1'"
      @click="changeFold"
      class="fold-menu"
    ></i>
    <div class="content">
      <my-bread-crumb-vue :breadCrumbs="breadCrumbs"></my-bread-crumb-vue>
      <user-info-vue />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import userInfoVue from './user-info.vue'
import myBreadCrumbVue from '@/base-ui/bread-crumb/my-breadCrumb.vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { mapBreadMenu } from '../../utils/map-menu-routes'
export default defineComponent({
  emits: ['foldAction'],
  components: {
    userInfoVue,
    myBreadCrumbVue
  },
  setup(props, { emit }) {
    let isFold = ref(false)
    const breadCrumbs = computed(() => {
      const store = useStore()
      const userMenu = store.state.loginMoudle.userMenu
      const route = useRoute()
      const breadCrumbs = mapBreadMenu(userMenu, route.path)
      return breadCrumbs
    })
    console.log(breadCrumbs)
    const changeFold = () => {
      isFold.value = !isFold.value
      emit('foldAction', isFold.value)
    }
    return { isFold, changeFold, breadCrumbs }
  }
})
</script>
<style lang="less" scoped>
.nav-header {
  width: 100%;
  display: flex;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
