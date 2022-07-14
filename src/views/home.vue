<template>
  <div class="echartsWrap">
    <!-- 多X轴图 -->
    <div ref="multipleXChart" class="echarts multipleX"></div>
    <!-- 柱状图 -->
    <div ref="histogramChart" class="echarts histogram"></div>
    <!-- 饼图（南丁格尔图） -->
    <div ref="nightingaleChart" class="echarts nightingale"></div>
    <!-- 折线图 -->
    <div ref="lineChart" class="echarts lineChart"></div>
    <!-- 散点图 -->
    <div ref="scatter" class="echarts scatter"></div>
  </div>
</template>

<script>
// 多X轴图
import multipleX from '../echarts/multipleXAxes.js'
// 柱状图
import histogram from '../echarts/histogram.js'
// 饼图（南丁格尔图）
import nightingale from '../echarts/nightingale.js'
// 折线图
import lineChart from '../echarts/lineChart.js'
// 散点图
import scatter from '../echarts/scatter.js'


export default {
  mounted() {
    // 多X轴图
    multipleX(this.$refs.multipleXChart);
    // 柱状图
    histogram(this.$refs.histogramChart);
    // 饼图（南丁格尔图）
    nightingale(this.$refs.nightingaleChart);
    // 折线图
    lineChart(this.$refs.lineChart);
    // 散点图
    scatter(this.$refs.scatter);
  },

}
</script>

<style lang="scss" scoped>
.echartsWrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 200px;
  padding: 30px;
}

.echarts {
  width: 40vw;
  height: 500px;
  position: relative;
  top: 20px;
  margin-bottom: 50px;
}

.histogram {
  border: 1px solid red;
}
</style>
