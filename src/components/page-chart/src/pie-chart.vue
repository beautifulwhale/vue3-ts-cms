<template>
  <div class="pie-charts">
    <my-chart-vue :options="options"></my-chart-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
import { IPieType } from '../type'
import myChartVue from '@/base-ui/my-chart/index'
export default defineComponent({
  components: {
    myChartVue
  },
  props: {
    pieData: {
      type: Array as PropType<IPieType[]>,
      required: true
    }
  },
  setup(props) {
    const options = computed(() => {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left'
        },
        series: [
          {
            name: '分类数据',
            type: 'pie',
            radius: '50%',
            data: props.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    })
    return { options }
  }
})
</script>
<style lang="less" scoped></style>
