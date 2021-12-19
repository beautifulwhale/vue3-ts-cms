<template>
  <div ref="chartRef" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, withDefaults, defineProps } from 'vue'
import useCharts from '../../../hooks/use-chart'
import { EChartsOption } from 'echarts'
const chartRef = ref<HTMLElement>()
const props = withDefaults(
  defineProps<{ options: EChartsOption; width?: string; height?: string }>(),
  {
    width: '100%',
    height: '360px'
  }
)
onMounted(() => {
  const { setOption } = useCharts(chartRef.value!)
  setOption(props.options)
})
</script>
<style lang="less" scoped></style>
