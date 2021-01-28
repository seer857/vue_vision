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
        <span>净利润</span>
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
      let colors3 = [{
     type: 'linear',
     x: 0,
     x2: 0,
     y: 0,
     y2: 1,
     colorStops: [{
         offset: 0,
         color: '#28f0f5'
     }, {
         offset: 0.5,
         color: '#16abaf'
     }, {
         offset: 0.5,
         color: '#16abaf'
     }, {
         offset: 1,
         color: '#077175'
     }]
 }, {
     type: 'linear',
     x: 0,
     x2: 0,
     y: 0,
     y2: 1,
     colorStops: [{
         offset: 0,
         color: '#0172e2'
     }, {
         offset: 0.5,
         color: '#0656c6'
     }, {
         offset: 0.5,
         color: '#0656c6'
     }, {
         offset: 1,
         color: '#0f299a'
     }]
 }];
let barWidth = 25;
//>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>
   
      
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
          data: ['销售费用率', '销售人力成本率', '销售费用（不含人力成本/广宣费）率'],
          textStyle: {
            color: '#fff',
          },
        },
        color: ['#A94CAF', '#ffb6b9', '#E7475E'],
        axisLabel: {
          margin: 10,
          color: '#e2e9ff',
          textStyle: {
            fontSize: 12,
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
            name: '销量',
            min: 0,
            max: 88,
            interval: 10,
            axisLabel: {
              formatter: '{value} 万元',
            },
          },
          {
            type: 'value',
            name: '库存',
            min: 0,
            max: 8888,
            interval: 1000,
            axisLabel: {
              formatter: '{value} 万台',
            },
          },
        ],
        series: [
          {
            name: '销售费用率',
            type: 'bar',
            data: [
             2.6,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              60.6,
              70.2,
              32.6,
              20.0,
              6.4,
              3.3,
            ],
            
          },
          {
            name: '销售人力成本率',
            type: 'bar',
            data: [
            6.2,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              80.6,
              60.2,
              48.7,
              18.8,
              6.0,
              2.3,
            ],
          },
          {
            name: '销售费用（不含人力成本/广宣费）率',
            type: 'line',
            yAxisIndex: 1,
            data: [
              363.6,
              455.2,
              555.3,
              2844.5,
              545.3,
              3366.2,
              869.3,
              4544.4,
              787.0,
              320.5,
              880.0,
              453.2,
            ],
          },
        ],
}
// >>>>>>>>>>>>>>>>>>>>>>..
 let option3 = {
        tooltip: {
         trigger: 'item',
     },
     legend: {
       top: '90%',
        //  right: 30,
         textStyle: {
             color: '#fff',
         },
     },
     xAxis: [{
         type: 'category',
         axisLine: {
             lineStyle: {
                 color: '#fff'
             }
         },
         axisLabel: {
             fontSize: 14
         },
         data: ['2016', '2017', '2018', '2019', '2020', '2021'],
     }],
     yAxis: [{
         type: 'value',
         min: 0,
         splitLine: {
             lineStyle: {
                 color: '#fff'
             }
         },
         splitNumber: 5,
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             fontSize: 14,
             color: '#fff'
         },

     }, {
         type: 'value',
         splitLine: {
             show: false
         },
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             fontSize: 14,
             color: '#fff'
         }
     }],
     series: [{
             z: 1,
             name: '销量',
             type: 'bar',
             barWidth: barWidth,
             data: [20, 9, 37, 23, 25, 67],
             itemStyle: {
                 normal: {
                     color: colors3[0]
                 },
             }
         }, {
             z: 3,
             type: 'pictorialBar',
             symbolPosition: 'end',
             data: [20, 9, 37, 23, 25, 67],
             symbol: 'diamond',
             symbolOffset: [-12.5, '-50%'],
             symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
             itemStyle: {
                 normal: {
                     borderColor: '#12bac1',
                     borderWidth: 2,
                     color: '#12bac1'
                 }
             },
         },
         {
             z: 1,
             name: '利润',
             type: 'bar',
             barGap: 0,
             barWidth: barWidth,
             data: [16, 59, 40, 24, 27, 77],
             itemStyle: {
                 normal: {
                     color: colors3[1]
                 }
             }
         },
         {
             z: 3,
             type: 'pictorialBar',
             symbolPosition: 'end',
             data: [16, 59, 40, 24, 27, 77],
             symbol: 'diamond',
             symbolOffset: [12.5, '-50%'],
             symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
             itemStyle: {
                 normal: {
                     borderColor: '#319cf1',
                     borderWidth: 2,
                     color: '#319cf1'
                 }
             },
         },
         {
             name: '平均利润率',
             type: 'line',
             yAxisIndex: 1,
             symbol: 'circle',
             itemStyle: {
                 color: '#a45cc9',
             },
             lineStyle: {
                 color: '#a45cc9',
                 width: 3,
             },
             data: [30, 42, 63, 75, 63, 120]
         }
     ]
}
	  
      myChart1.setOption(option1)
      myChart2.setOption(option2)
      myChart3.setOption(option3)
	  
	  echarts.connect([myChart1, myChart2,myChart3]);
    }
  }
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