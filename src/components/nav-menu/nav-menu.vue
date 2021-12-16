<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="../../assets/image/logo.svg" alt="logo" />
      <span class="title" v-if="!isCollapse">Never Give Up</span>
    </div>
    <el-menu
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="isCollapse"
      :default-active="activeMenu"
    >
      <template v-for="item in userMenus" :key="item.id">
        <el-sub-menu :index="item.id + ''" v-if="item.type === 1">
          <template #title>
            <!-- element版本取消了font icon -->
            <!-- <i :class="item.icon" v-if="item.icon"></i> -->
            <i
              class="iconfont icon-xitong"
              style="margin-right: 8px"
              v-if="item.id === 1"
            ></i>
            <i
              class="iconfont icon-xitongzonglan"
              style="margin-right: 8px"
              v-if="item.id === 38"
            ></i>
            <i
              class="iconfont icon-shangpin"
              style="margin-right: 8px"
              v-if="item.id === 9"
            ></i>
            <i
              class="iconfont icon-liaotianjilu"
              style="margin-right: 8px"
              v-if="item.id === 41"
            ></i>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item
              :index="subitem.id + ''"
              @click="changeRoute(subitem)"
            >
              <i v-if="subitem.icon" :class="subitem.icon"></i>
              <span>{{ subitem.name }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { mapMenuAcive } from '../../utils/map-menu-routes'
export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const userMenus = computed(() => store.state.loginMoudle.userMenu)
    const menu = mapMenuAcive(userMenus.value, route.path)
    const activeMenu = ref(menu.id + '')
    const changeRoute = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return { userMenus, changeRoute, activeMenu }
  }
})
</script>
<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 14px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
