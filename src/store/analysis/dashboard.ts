import { Module } from 'vuex'
import { IAnalysis } from './type'
import { IRootType } from '../rootType'
import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '../../service/analysis/dashboard'
export const analysis: Module<IAnalysis, IRootType> = {
  namespaced: true,
  state: () => {
    return {
      categoryList: [],
      categorySale: [],
      cityGoodsList: [],
      categoryCollect: []
    }
  },
  mutations: {
    changeCateList(state, payload) {
      state.categoryList = payload
    },
    changeSaleList(state, payload) {
      state.categorySale = payload
    },
    changeColList(state, payload) {
      state.categoryCollect = payload
    },
    changeCityList(state, payload) {
      state.cityGoodsList = payload
    }
  },
  actions: {
    async getEchartData({ commit }) {
      const cateListResult = await getCategoryGoodsCount()
      const cateSaleResult = await getCategoryGoodsSale()
      const cateColResult = await getCategoryGoodsFavor()
      const cityGoodsResult = await getAddressGoodsSale()
      commit('changeCateList', cateListResult.data)
      commit('changeSaleList', cateSaleResult.data)
      commit('changeColList', cateColResult.data)
      commit('changeCityList', cityGoodsResult.data)
    }
  }
}
