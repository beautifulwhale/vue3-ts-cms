<template>
  <div class="pie-charts">
    <my-chart-vue :options="options"></my-chart-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import myChartVue from '@/base-ui/my-chart/index'
export default defineComponent({
  components: {
    myChartVue
  },
  props: {
    xValue: {
      type: Array,
      required: true
    },
    yValue: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const options = computed(() => {
      return {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: props.xValue
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        series: [
          {
            data: props.yValue,
            type: 'line',
            areaStyle: {}
          }
        ]
      }
    })
    return { options }
  }
})
</script>
<style lang="less" scoped></style>
