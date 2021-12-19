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
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [10, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: props.pieData
          }
        ]
      }
    })
    return { options }
  }
})
</script>
<style lang="less" scoped></style>
