<template>
  <div class="pie-charts">
    <my-chart-vue :options="options"></my-chart-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import myChartVue from '@/base-ui/my-chart/index'
import * as echarts from 'echarts'
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
        title: {
          text: '特性示例：渐变色 阴影 点击缩放',
          subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
        },
        xAxis: {
          data: props.xValue,
          axisLabel: {
            inside: true,
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#999'
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ])
              }
            },
            data: props.yValue
          }
        ]
      }
    })
    return { options }
  }
})
</script>
<style lang="less" scoped></style>
