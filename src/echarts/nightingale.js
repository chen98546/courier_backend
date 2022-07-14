// 饼图（南丁格尔图）
import * as echarts from 'echarts'

function nightingale(myChart) {
  let myEcharts = echarts.init(myChart)
  const options = {
    title: {
      text: '南丁格尔图',
      x: 'center'
    },
    // 图例
    legend: {
      top: 'bottom'
      // top: 'center',
      // left: 0,
      // 图例垂直显示
      // orient: 'verical'
    },
    // toolbox工具栏:内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
    toolbox: {
      show: true,
      // feature:各工具配置项
      feature: {
        mark: {
          show: true
        },
        // 数据视图
        dataView: {
          show: true,
          readOnly: false
        },
        // 还原
        restore: {
          show: true
        },
        // 下载为图片
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
      name: '南丁格尔图',
      // 类型：饼图
      type: 'pie',
      // 饼图半径 第一项为内半径，第二项为外半径
      radius: ['30%', 200],
      roseType: 'area',
      itemStyle: {
        // 设置圆角
        borderRadius: 3,
        // 颜色
        // color: '#ff000f',
        // 阴影半径
        shadowBlur: 20,
        // 阴影颜色
        shadowColor: 'rgba(0,0,0,.5)',
      },
      label: {
        show: true,
        // position:center中心展示 outside 外侧展示 inside 内展示
        // position: 'inside'
      },
      data: [{
          value: 100,
          name: 'H5',
          itemStyle: {
            normal: {
              color: '#f0f0f0'
            }
          }
        },
        {
          value: 120,
          name: 'C3',
          itemStyle: {
            normal: {
              color: '#0f0f0f'
            }
          }
        },
        {
          value: 150,
          name: 'Js',
          itemStyle: {
            normal: {
              color: '#0f00ff'
            }
          }
        },
        {
          value: 100,
          name: 'Jq',
          itemStyle: {
            normal: {
              color: '#00f00f'
            }
          }
        },
        {
          value: 200,
          name: 'Vue',
          itemStyle: {
            normal: {
              color: '#ff000f'
            }
          }
        },
        {
          value: 130,
          name: 'React',
          itemStyle: {
            normal: {
              color: '#00fff0'
            }
          }
        },
        {
          value: 170,
          name: 'Nodejs',
          itemStyle: {
            normal: {
              color: '#ff00ff'
            }
          }
        }
      ],
    }]
  }
  options && myEcharts.setOption(options)
}

export default nightingale
