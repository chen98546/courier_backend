// 散点图

import * as echarts from 'echarts'

function scatter(myChart) {
  let myEcharts = echarts.init(myChart)
  const options = {
    title: {
      text: '散点图',
      x: 'center'
    },
    grid: {
      top: 70,
      bottom: 50
    },
    xAxis: {},
    yAxis: {},
    // 数据提示
    tooltip: {},
    series: [{
      // 设置类型为散点图
      type: 'scatter',
      // 设置圆点大小
      symbolSize: 15,
      // 散点图坐标数据
      data: [
        [1, 2],
        [10, 2],
        [1, 10],
        [5, 6],
        [8, 5],
        [10, 8],
        [9, 4],
        [7, 5],
        [4, 8],
        [2, 5],
        [8, 9],
        [11, 6],
        [9, 15],
        [5, 1],
        [6, 17],
        [7, 14],
        [8, 19],
        [4, 15],
        [1, 5],
        [2, 11],
      ],
      // 设置所有圆点颜色
      // color:'red',
      color: {
        // 渐变类型
        type: 'liner',
        // 渐变的方向 相当于在图形包围盒子中的百分比
        x: 0,
        y: 1,
        x2: 1,
        y2: 0,
        colorStops: [{
            // 偏移量为0时设置颜色
            offset: 0,
            color: '#ff000f'
          },
          {
            // 偏移量为0.5时设置颜色
            offset: 0.5,
            color: '#00fff0'
          },
          {
            // 偏移量为1时设置颜色
            offset: 1,
            color: '#0f00fe'
          },
        ],
      },
      // 选中高亮
      emphasis: {
        // 高亮的样式
        itemStyle: {
          // 边框颜色
          borderColor: '#0f0f0f',
          // 边框厚度
          borderWidth: 30
        }
      }

    }]
  }
  options && myEcharts.setOption(options)
}

export default scatter
