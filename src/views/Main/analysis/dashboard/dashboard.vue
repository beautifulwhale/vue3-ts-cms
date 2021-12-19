<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <my-card-vue title="分类商品数量">
          <pie-chart-vue :pie-data="pieData"></pie-chart-vue>
        </my-card-vue>
      </el-col>
      <el-col :span="10">
        <my-card-vue title="不同城市商品销量">
          <map-chart-vue :map-data="mapData"></map-chart-vue>
        </my-card-vue>
      </el-col>
      <el-col :span="7">
        <my-card-vue title="分类商品数量(玫瑰图)">
          <rose-chart-vue :pieData="pieData"></rose-chart-vue>
        </my-card-vue>
      </el-col>
      <el-col :span="10">
        <my-card-vue title="分类商品的销量">
          <line-chart-vue v-bind="categroySale"></line-chart-vue>
        </my-card-vue>
      </el-col>
      <el-col :span="12">
        <my-card-vue title="分类商品的收藏">
          <bar-chart-vue v-bind="categroyCollect"></bar-chart-vue>
        </my-card-vue>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import myCardVue from '@/base-ui/my-card/my-card.vue'
import pieChartVue from '@/components/page-chart/src/pie-chart.vue'
import roseChartVue from '@/components/page-chart/src/rose-chart.vue'
import lineChartVue from '@/components/page-chart/src/line-chart.vue'
import barChartVue from '@/components/page-chart/src/bar-chart.vue'
import mapChartVue from '@/components/page-chart/src/map-chart.vue'
import { useStore } from '@/store'
export default defineComponent({
  name: 'dashboard',
  components: {
    myCardVue,
    pieChartVue,
    roseChartVue,
    lineChartVue,
    barChartVue,
    mapChartVue
  },
  setup() {
    const store = useStore()
    store.dispatch('analysis/getEchartData')
    const pieData = computed(() => {
      return store.state.analysis.categoryList.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categroySale = computed(() => {
      const xValue: string[] = []
      const yValue: number[] = []
      const sales = store.state.analysis.categorySale
      for (const item of sales) {
        xValue.push(item.name)
        yValue.push(item.goodsCount)
      }
      return { xValue, yValue }
    })
    const categroyCollect = computed(() => {
      const xValue: string[] = []
      const yValue: any[] = []
      const sales = store.state.analysis.categoryCollect
      for (const item of sales) {
        xValue.push(item.name)
        yValue.push(item.goodsFavor)
      }
      return { xValue, yValue }
    })
    const mapData = computed(() => {
      return store.state.analysis.cityGoodsList.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })
    return { pieData, categroySale, categroyCollect, mapData }
  }
})
</script>

<style scoped></style>
