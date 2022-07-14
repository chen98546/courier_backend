// 折线图
import * as echarts from 'echarts'

function lineChart(myChart) {
  let myEcharts = echarts.init(myChart)
  const options = {
    title: {
      text: '折线图',
      x: 'center',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
        // 折线图
        type: 'line',
        data: [120, 200, 150, 80, 70, 110, 130],
        // smooth：开启平滑过渡
        // smooth: true,
        // 填充
        areaStyle: {},
        // 最大/小值
        markPoint: {
          data: [{
              type: 'max',
              name: '最大值'
            },
            {
              type: 'min',
              name: '最小值'
            },
          ]
        },
        // 平均值
        markLine: {
          data: [{
            type: 'average',
            name: '平均值'
          }]
        },
        // 同类型的数据需要匹配相同的stack stack的值可自定义
        stack: 'line',
        // 聚焦的高亮显示
        emphasis: {
          focus: 'series'
        }
      },
      {
        type: 'line',
        data: [50, 40, 70, 100, 130, 150, 200],
        // smooth: true,
        areaStyle: {},
        markPoint: {
          data: [{
              type: 'max',
              name: '最大值'
            },
            {
              type: 'min',
              name: '最小值'
            },
          ]
        },
        markLine: {
          data: [{
            type: 'average',
            name: '平均值'
          }]
        },
        stack: 'line',
        emphasis: {
          focus: 'series'
        }
      },
      {
        type: 'line',
        data: [60, 34, 45, 25, 251, 78, 363],
        // smooth: true,
        areaStyle: {},
        markPoint: {
          data: [{
              type: 'max',
              name: '最大值'
            },
            {
              type: 'min',
              name: '最小值'
            },
          ]
        },
        markLine: {
          data: [{
            type: 'average',
            name: '平均值'
          }]
        },
        stack: 'line',
        emphasis: {
          focus: 'series'
        }
      },
      {
        type: 'line',
        data: [123, 345, 234, 365, 143, 316, 256],
        // smooth: true,
        areaStyle: {},
        markPoint: {
          data: [{
              type: 'max',
              name: '最大值'
            },
            {
              type: 'min',
              name: '最小值'
            },
          ]
        },
        markLine: {
          data: [{
            type: 'average',
            name: '平均值'
          }]
        },
        stack: 'line',
        emphasis: {
          focus: 'series'
        }
      },
    ]
  }
  options && myEcharts.setOption(options)
}

export default lineChart
