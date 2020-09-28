<template>
  <div>
    <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve" width="700" height="500">
      <filter id="i1" width="150%" height="150%">
        <feOffset result="offOut" in="SourceAlpha" dx="0" dy="10" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
    </svg>
  </div>
</template>
<script>
//Donut3D已满足显示要求
// import Donut3D from './js/Donut3D'
//Donut3D.02添加文字
// import Donut3D from './js/Donut3D.02'
//Donut3D.03完整版
import Donut3D from './js/Donut3D.03'
import * as d3 from 'd3'
export default {
  name: '',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    this.$nextTick(() => {
      this.draw3DPie()
    })
  },
  methods: {
    draw3DPie() {
      const salesData = [
        { label: 'Basic', color: '#3366CC' },
        { label: 'Plus', color: '#DC3912' },
        { label: 'Lite', color: '#FF9900' },
        { label: 'Elite', color: '#109618' },
        { label: 'Delux', color: '#990099' }
      ]

      const svg = d3.select('svg').attr('width', 700).attr('height', 300)

      svg.append('g').attr('id', 'salesDonut')
      svg.append('g').attr('id', 'quotesDonut')

      Donut3D.draw('salesDonut', randomData(), 150, 150, 130, 80, 10, 0.2)
      Donut3D.draw('quotesDonut', randomData(), 450, 150, 130, 100, 30, 0)

      function changeData() {
        Donut3D.transition('salesDonut', randomData(), 130, 100, 30, 0.4)
        Donut3D.transition('quotesDonut', randomData(), 130, 100, 30, 0)
      }

      function randomData() {
        return salesData.map(function (d) {
          return {
            label: d.label,
            value: 1000 * Math.random(),
            color: d.color
          }
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.svg /deep/ .cursor-pointer {
  cursor: pointer;
}
</style>
