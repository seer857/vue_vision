<!-- 右侧部分 视图主题部分  -->
<template>
  <div class="my_box">
    <div class="dv_one">
      <dv-border-box-10>
        <div id="right-echarts-one"></div>
      </dv-border-box-10>
    </div>
    <div class="dv_two">
      <dv-border-box-10>
        <div id="right-echarts-two"></div>
      </dv-border-box-10>
    </div>
    <div class="dv_three">
      <dv-border-box-10>
        <div id="right-echarts-three"></div>
      </dv-border-box-10>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    myEcharts01() {
      let myChart = echarts.init(document.getElementById('right-echarts-one'))
      let myChart2 = echarts.init(document.getElementById('right-echarts-two'))
      let myChart3 = echarts.init(
        document.getElementById('right-echarts-three')
      )

      let option1 = {
        title: {
          text: '【信息中心】',
          left: 'center',
          textStyle: {
            fontSize: 20,
            color: 'rgba(249, 249, 249, 1)',
          },
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '90%',
          textStyle: {
            color: 'rgba(255, 255, 255, 1',
          },
          left: 'center',
        },
        //设置饼状图每个颜色块的颜色
        color: ['#50C1E9', '#ffc952', '#ff7473', '#6a60a9', '#39A0ED'],
        series: [
          {
            name: '显示数据',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
              top: 'bottom',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: '信息中心' },
              { value: 735, name: '服务大厅' },
              { value: 580, name: '数据研发' },
              { value: 484, name: 'CEO' },
              { value: 300, name: '部门' },
            ],
          },
        ],
      }

      let option2 = {
        title: {
          text: '【信息中心】',
          left: 'center',
          textStyle: {
            fontSize: 20,
            color: 'rgba(249, 249, 249, 1)',
          },
        },
        tooltip: {
          
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          left: 'vertical',
          top: 'bottom',
          // orient: "horizontal", //横向
          // orient: 'vertical',//纵向
          //文字颜色
          textStyle: {
            color: 'rgba(255, 255, 255, 1',
          },
          data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7'],
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
            },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        //设置饼状图每个颜色块的颜色
        color: ['#50C1E9', '#ffc952', '#ff7473', '#6a60a9', '#39A0ED'],
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: [30, 110],
            // center: ['100%', '100%'],
            roseType: 'area',
            data: [
              { value: 10, name: 'rose1' },
              { value: 5, name: 'rose2' },
              { value: 15, name: 'rose3' },
              { value: 25, name: 'rose4' },
              { value: 20, name: 'rose5' },
              { value: 35, name: 'rose6' },
              { value: 30, name: 'rose7' },
            ],
          },
        ],
      }
      let option3 = {
        title: {
          text: '【信息中心】',
          left: 'center',
          textStyle: {
            fontSize: 20,
            color: 'rgba(249, 249, 249, 1)',
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none',
          },
        },
        grid: {
          left: '10',
          right: '15',
          bottom: '5',
          top: '10',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#2867a8',
              },
            },
            axisLabel: {
              textStyle: {
                fontSize: 12,
                color: '#fff',
              },
            },

            data: ['01', '02', '03', '04', '05', '06', '07', '08'],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#2867a8',
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: '#fff',
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '示例',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 3,
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: 'rgba(16,97,204, 0.3)',
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(17,235,210, 0)',
                    },
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10,
              },
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: 'rgba(16,97,204,1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(17,235,210,1)',
                  },
                ]),
              },
              emphasis: {
                color: 'rgb(0,196,132)',
                borderColor: 'rgba(0,196,132,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10,
              },
            },
            data: [220, 182, 191, 134, 150, 120, 110, 125],
            markLine: {
              symbol: ['none', 'none'], //去掉箭头
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: 'dashed',
                    color: '#0599de',
                    width: 1,
                  },
                },
              },
              data: [
                {
                  name: 'Y 轴值为 80 的水平线',
                  yAxis: 120,
                  label: {
                    normal: {
                      formatter: '(平均里程数) 120',
                      padding: [-13, -20, 15, -100],
                      position: 'end',
                    },
                  },
                },
              ],
            },
          },
        ],
      }
      let option4 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          textStyle: {
            color: 'rgba(255, 255, 255, 1',
          },
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 1)',
            },
          },
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 1)',
            },
          },

          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
        series: [
          {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight',
            },
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight',
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight',
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight',
            },
            data: [150, 212, 201, 154, 190, 330, 410],
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight',
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
          },
        ],
      }

      //---------------[让图表动态显示]---------------------------------

      //-------------------------------------------------
      myChart.setOption(option1)
      myChart2.setOption(option2)
      myChart3.setOption(option3)

      echarts.connect([myChart, myChart2, myChart3])
    },
  },
  computed: {},
  watch: {},
  created() {},

  mounted() {
    this.myEcharts01()
  },
}
</script>
<style lang='scss' scoped>
.my_box {
  h1 {
    color: antiquewhite;
  }

  .dv_one {
    width: 100%;
    height: 300px;
    margin-top: 10px;
    #right-echarts-one {
      width: 100%;
      height: 100%;
    }
  }
  .dv_two {
    width: 100%;
    height: 300px;
    margin-top: 20px;
    #right-echarts-two {
      width: 100%;
      height: 100%;
    }
  }
  .dv_three {
    width: 100%;
    height: 300px;
    margin-top: 20px;
    #right-echarts-three {
      width: 100%;
      height: 100%;
    }
  }
  // .dv_fouth{
  //      width: 100%;
  //     height:220px;
  //     #my-echarts04{
  //     width: 100%;
  //     height:100%;
  // }}
}
</style>