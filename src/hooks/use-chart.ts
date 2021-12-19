import * as echarts from 'echarts'
import chinaJson from '../base-ui/my-chart/map/china.json'
echarts.registerMap('china', chinaJson)
export default function useCharts(el: HTMLElement) {
  const echartInstace = echarts.init(el)
  const setOption = function (option: echarts.EChartsOption) {
    echartInstace.setOption(option)
  }
  const updateSize = function () {
    echartInstace.resize()
  }
  window.addEventListener('resize', () => {
    echartInstace.resize()
  })
  return { echartInstace, setOption, updateSize }
}
