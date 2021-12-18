import { Module } from 'vuex'
import ILoginType from './type'
import { IRootType } from '../rootType'
import { mapMenuRoutes, mapMenuPermissions } from '../../utils/map-menu-routes'
import {
  loginRequest,
  requestUserInfoById,
  getMenuById
} from '../../service/login/login'
import cache from '@/utils/cache'
import router from '@/router'
const loginMoudle: Module<ILoginType, IRootType> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenu: [],
      permission: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenu: any) {
      state.userMenu = userMenu
      //6.根据用户类型动态加载路由
      const routes = mapMenuRoutes(userMenu)
      routes.forEach((route) => {
        //添加到某个路由的子路由中，通过name属性
        router.addRoute('main', route)
      })
      //获取用户按钮权限
      const permissions = mapMenuPermissions(userMenu)
      state.permission = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload) {
      const result = await loginRequest(payload)
      const { token, id } = result.data
      //1.token保存
      cache.setCache('token', token)
      commit('changeToken', token)
      //2.获取用户信息
      const userResult = await requestUserInfoById(id)
      const userInfo = userResult.data
      cache.setCache('userInfo', userInfo)
      commit('changeUserInfo', userInfo)
      //3.获取用户菜单
      const userMenuResult = await getMenuById(userInfo.role.id)
      const userMenu = userMenuResult.data
      commit('changeUserMenu', userMenu)
      cache.setCache('userMenu', userMenu)
      //4.跳转路由
      router.push('/main')
    },
    //5.登录后会因为刷新使得vuex里面存储的token等变空，在main.ts里面调用，保证每次都有数据
    loadLocalLogin({ commit }) {
      const token = cache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = cache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenu = cache.getCache('userMenu')
      if (userMenu) {
        commit('changeUserMenu', userMenu)
      }
    }
  }
}
export default loginMoudle
