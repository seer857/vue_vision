<template>
  <div class="default-right">
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content one">
      <div class="title">
        <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
        <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
        <span>财经指标体系-2021年期间费用占比</span>
      </div>
      <div id="rightDefaOne"></div>
    </dv-border-box-10>
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content two">
      <div class="title">
        <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
        <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
        <span>财经指标体系-销量与收入趋势</span>
      </div>
      <div id="rightDefaTwo"></div>
    </dv-border-box-10>
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content three">
      <div class="title">
        <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
        <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
        <span>财经指标体系-销量与收入趋势</span>
      </div>
      <div id="rightDefaThree"></div>
    </dv-border-box-10>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  
  mounted() {
    // this.defaultEcharts();
    // this.onAssets()
  // this.onTopic()
    //this.getTopic()
    this.rightDefEcharts()
  },

  methods: {
    rightDefEcharts() {
      let myChart1 = echarts.init(document.getElementById('rightDefaOne'))
      let myChart2 = echarts.init(document.getElementById('rightDefaTwo'))
      let myChart3 = echarts.init(document.getElementById('rightDefaThree'))
      // >>>>>>>>>>>>>>>>>>>>
      let option1 = {
        title: {
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          top: '5%',
          right: '8%',
          textStyle: {
            color: ['#5BE7C4', '#50C1E9', '#7A57D1'],
          },
        },
        color: ['#5BE7C4', '#50C1E9', '#7A57D1'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '研发费用' },
              { value: 735, name: '销售费用' },
              { value: 580, name: '管理费用' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(10, 0, 0, 5)',
              },
            },
          },
        ],
      }
      // >>>>>>>>>>>>>>>>>>>>
      let option2 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999',
            },
          },
        },

        legend: {
          top: '90%',
          data: ['蒸发量', '降水量', '平均温度'],
          textStyle: {
            color: '#fff',
          },
        },
        color: ['#A94CAF', '#ffb6b9', '#E7475E'],
        axisLabel: {
          margin: 10,
          color: '#e2e9ff',
          textStyle: {
            fontSize: 14,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '2019',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月',
            ],
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml',
            },
          },
          {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value} °C',
            },
          },
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3,
            ],
            
          },
          {
            name: '降水量',
            type: 'bar',
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3,
            ],
          },
          {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2,
            ],
          },
        ],
      }
      // >>>>>>>>>>>>>>>>>>>>>>..
      let option3 = {
        title: {
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
      // >>>>>>>>>>>>>>>>>>>>>
      myChart1.setOption(option1)
      myChart2.setOption(option2)
      myChart3.setOption(option3)
    },
  },
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}
</script>

<style lang="scss" scoped>
.default-right {
  width: 119%;
  height: 100%;
  margin-left: -20%;
  margin-top: 3%;
  .content {
    width: 100%;
    height: 300px;
    .title {
      position: absolute;
      width: 100%;
      height: 40px;

      img {
        width: 25px;
      }
      .float {
        margin-top: 10px;
        margin-left: 12px;
        animation: myMove2 2s infinite linear;
      }
      .tImg {
        position: absolute;
        width: 100%;
        margin-top: 7px;
        margin-left: 5px;
      }
      span {
        position: absolute;
        color: #fff;
        margin-top: 11px;
        margin-left: 24px;
      }
    }
  }
  .one {
    #rightDefaOne {
      position: absolute;
      margin-top: 20px;
      width: 100%;
      height: 100%;
    }
  }
  .two,
  .three {
    margin-top: 20px;
    #rightDefaTwo {
      width: 100%;
      height: 100%;
    }
    #rightDefaThree {
      position: absolute;
      margin-top: 50px;
      width: 100%;
      height: 80%;
    }
  }
}
@keyframes myMove2 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>