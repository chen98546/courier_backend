// 柱状图
import * as echarts from 'echarts'

function histogram(myChart) {
  let myEcharts = echarts.init(myChart)
  const options = {
    title: {
      // text: '库存',
      subtext: '展示商品库存',
      x: 'center',
      y: 20

    },
    // 点击控制图例显示隐藏
    legend: {},
    // 悬浮数据弹窗提示
    tooltip: {},
    // 设置图表位置与样式
    grid: {
      show: true,
      // 距离内容器的位置
      top: 70,
      bottom: 50,
      // top: '20%',
      // bottom: '20%',
      // left:'20%',
      // right:'20%',
      //* 设置背景色 show为true时展示
      // backgroundColor: 'pink',
      //* 设置边框颜色 show为true时展示
      // borderColor: 'yellow'
    },
    // 配置X轴参数
    xAxis: {
      // type坐标轴类型  value:数据轴  category：类目轴
      type: 'category',
      // X轴数据
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    // 配置Y轴参数
    yAxis: {
      type: 'value'
    },
    /* XY轴交换显示
     * xAxis: {
     *   type: 'value'
     * },
     * yAxis: {
     *     type: 'category',
     *   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
     * },
     */
    // 配置图表类型
    series: [{
      // data：Y轴数据
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar', // 系列类别
      name: '库存', // 开启legend显示
      showBackground: false, // true显示柱状图背景
      backgroundStyle: { // 背景色
        color: 'rgba(180, 180, 180, 0.2)'
      },
      markPoint: {
        // 标注的数据数组 显示最大值最小值
        data: [{
            type: 'max',
            name: '最大值',
            // 最大值背景色
            itemStyle: {
              color: '#00ff00'
            }
          },
          {
            type: 'min',
            name: '最小值'
          }
        ]
      },
      // 图表的标线
      markLine: {
        data: [{
          type: 'average',
          name: '平均值'
        }]
      },
      // 设置柱状图宽度
      barWidth: 30,
      // 设置所有轴的背景颜色
      color: '#ff0000',
      itemStyle: {
        normal: {
          color: function (params) {
            let colorList = ['#0c7ec3', '#222436', '#ffca28', '#009688', '#8468a0', '#ee6666', '#cddc39']
            return colorList[params.dataIndex]
          }
        }
      }
    }]
  }
  options && myEcharts.setOption(options)
}

export default histogram
