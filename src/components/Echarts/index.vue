<template>
  <div ref="mycharts" :class="className"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Echarts',
  data () {
    return {
      chart: null
    }
  },
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.initEchart()
  },
  methods: {
    initEchart () {
      this.chart = echarts.init(this.$refs.mycharts)
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {d}%'
        },
        legend: {
          orient: 'horizontal',
          x: 'left',
          data: [{
            name: 'React',
            textStyle: {
              color: '#3d4040'
            }
          }, {
            name: 'ant design',
            textStyle: {
              color: '#3d4040'
            }
          }, {
            name: 'Vue',
            textStyle: {
              color: '#3d4040'
            }
          }, {
            name: 'Element UI',
            textStyle: {
              color: '#3d4040'
            }
          }, {
            name: 'webpack',
            textStyle: {
              color: '#3d4040'
            }
          }, {
            name: 'photoShop',
            textStyle: {
              color: '#3d4040'
            }
          }, {
            name: 'Node.js',
            textStyle: {
              color: '#3d4040'
            }
          }, {
            name: 'PHP',
            textStyle: {
              color: '#3d4040'
            }
          }]
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 300,
                name: 'React',
                'itemStyle': {
                  'normal': {
                    'color': '#90eafc'
                  }
                }
              },
              {
                value: 350,
                name: 'ant design',
                'itemStyle': {
                  'normal': {
                    'color': '#e9f295'
                  }
                }
              },
              {
                value: 200,
                name: 'Vue',
                'itemStyle': {
                  'normal': {
                    'color': '#a7a4ff'
                  }
                }
              },
              {
                value: 300,
                name: 'Element UI',
                'itemStyle': {
                  'normal': {
                    'color': '#fff2bd'
                  }
                }
              },
              {
                value: 200,
                name: 'webpack',
                'itemStyle': {
                  'normal': {
                    'color': '#f9caf4'
                  }
                }
              },
              {
                value: 300,
                name: 'photoShop',
                'itemStyle': {
                  'normal': {
                    'color': '#7effe6'
                  }
                }
              },
              {
                value: 300,
                name: 'photoShop',
                'itemStyle': {
                  'normal': {
                    'color': '#7effe6'
                  }
                }
              },
              {
                value: 300,
                name: 'photoShop',
                'itemStyle': {
                  'normal': {
                    'color': '#7effe6'
                  }
                }
              },
              {
                value: 80,
                name: 'Node.js',
                'itemStyle': {
                  'normal': {
                    'color': '#F7F7D2'
                  }
                }
              },
              {
                value: 50,
                name: 'PHP',
                'itemStyle': {
                  'normal': {
                    'color': '#D3E2EF'
                  }
                }
              }
            ]
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      this.chart.setOption(option)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
