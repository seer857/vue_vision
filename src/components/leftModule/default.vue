<template>
  <div class="default-left">
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content one">
      <div class="title">
        <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
        <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
        <span>集团经营状况—余量与销量分析</span>
      </div>
      <div id="leftDefaOne"></div>
    </dv-border-box-10>
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content two">
      <div class="title">
        <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
        <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
        <span>集团经营状况—各工厂产量数值</span>
      </div>
      <div id="leftDefaTwo"></div>
    </dv-border-box-10>
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content three">
      <div class="title">
        <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
        <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
        <span>集团经营状况—各工厂仓库余量</span>
      </div>
      <div id="leftDefaThree"></div>
    </dv-border-box-10>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      salesArr: [],
      salesDateArr: [],
    }
  },

  mounted() {
    this.defaultEcharts()
  },
  methods: {
    // moveAll() {
    //   this.$router.push({ name: 'asset' })
    // },

    defaultEcharts() {
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      let myChart2 = echarts.init(document.getElementById('leftDefaOne'))
      var colors = [
        '#8134af',
        '#A94CAF',
        '#FF82A9',
        '#4695d6',
        '#7BDFF2',
        '##BDFF2',
      ]
      var lineargroup = [
        {
          value: 100,
          name: '仓库1',
          oriname: '库存11',
          number: 98756,
          //color: ["rgba(29,211,137,0.8)", "rgba(29,211,137,0)"]
        },
        {
          value: 60,
          name: '仓库2',
          oriname: '仓库22',
          number: 88756,
          // color: ["rgba(102,142,255,0.7)", "rgba(102,142,255,0)"]
        },
        {
          value: 60,
          name: '仓库3',
          oriname: '仓库33',
          number: 78756,
          // color: ["rgba(255,198,82,0.6)", "rgba(255,198,82,0)"]
        },
        {
          value: 60,
          name: '仓库4',
          oriname: '仓库44',
          number: 68756,
          // color: ["rgba(255,110,115,0.5)", "rgba(255,110,115,0)"]
        },
        {
          value: 60,
          name: '仓库5',
          oriname: '仓库55',
          number: 88756,
          //  color: ["rgba(134,131,230,0.4)", "rgba(134,131,230,0)"]
        },
      ]
      var data1 = []
      var data2 = []
      for (var i = 0; i < lineargroup.length; i++) {
        var obj1 = {
          value: lineargroup[i].value,
          num: lineargroup[i].number,
          name: lineargroup[i].oriname,
        }
        var obj2 = {
          value: lineargroup[i].value,
          name: lineargroup[i].name,
          itemStyle: {
            opacity: 0,
            /*normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: lineargroup[i].color[1]
                }, {
                    offset: 1,
                    color: lineargroup[i].color[0]
                }]),
                borderWidth: 0,
                opacity: 1
            }*/
          },
        }
        data1.push(obj1)
        data2.push(obj2)
      }

      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      let myChart3 = echarts.init(document.getElementById('leftDefaTwo'))
      //>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>
      let myChart1 = echarts.init(document.getElementById('leftDefaThree'))

      //>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>
      let option1 = {
        color: colors,
        series: [
          {
            top: 0,
            type: 'funnel',
            height: '230',
            top: '50',
            gap: 0,
            minSize: 50,
            left: '20%',
            width: '60%',
            label: {
              show: true,
              position: 'inside',
              fontSize: '14',
              formatter: function (d) {
                var ins = d.name + '{aa|}\n' + d.data.num
                return ins
              },
              rich: {
                aa: {
                  padding: [8, 0, 6, 0],
                },
              },
            },
            data: data1,
          },
          {
            top: 0,
            type: 'funnel',
            height: '230',
            top: '49',
            gap: -1,
            minSize: 150,
            left: '16%',
            width: '60%',
            z: 2,
            label: {
              normal: {
                color: '#333',
                position: 'right',
                formatter: function (d) {
                  var ins = '{aa|' + d.name + '}\n{bb|' + d.percent + '%}'
                  return ins
                },
                rich: {
                  aa: {
                    align: 'center',
                    color: '#FFF',
                    fontSize: '12',
                    lineHeight: '30',
                  },
                  bb: {
                    align: 'center',
                    color: '#FFF',
                    fontSize: '20',
                  },
                },
              },
            },
            labelLine: {
              show: false,
            },
            data: data2,
          },
        ],
      }
      let option2 = {
        // backgroundColor:'rgba(011, 023, 059)',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (list) {
            var msg = ''
            for (let i in list) {
              if (i == 0) {
                msg += list[i].name + '<br>'
              }
              msg += list[i].seriesName + '：' + list[i].data + '万元<br>'
              if (
                i > 0 &&
                list[i].seriesName == '不可用余额' &&
                list[i - 1].seriesName == '可用余额'
              ) {
                msg +=
                  '总存款余额' +
                  '：' +
                  (list[i].data + list[i - 1].data) +
                  '万元<br>'
              }
              if (
                i > 0 &&
                list[i].seriesName == '支出' &&
                list[i - 1].seriesName == '收入'
              ) {
                msg +=
                  '净收入' +
                  '：' +
                  (list[i - 1].data - list[i].data) +
                  '万元<br>'
              }
            }
            return msg
          },
        },
        legend: {
          top: '90%',
          textStyle: {
            color: '#fff',
          },
          data: ['库存', '销量', '利润', '净利润'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: 2,
            },
          },
          // data: [
          //   '1月',
          //   '2月',
          //   '3月',
          //   '4月',
          //   '5月',
          //   '6月',
          //   '7月',
          //   '8月',
          //   '9月',
          //   '10月',
          //   '11月',
          //   '12月',
          // ],
         
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#ffffff',
              width: 2,
            },
          },

          splitLine: {
            //分割线配置
            lineStyle: {
              // color: '#ebfdff',
              color: '#000',
            },
          },
        },
        series: [
          {
            name: '库存',
            type: 'bar',
            stack: '余额',
            barMaxWidth: 30,
            data: [420, 1032, 301, 534, 590, 230, 210, 600, 700, 500, 300, 300],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 1,
                      color: '#FFC0BE', // 0% 处的颜色
                    },
                    {
                      offset: 0,
                      color: '#7A57D1', // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
          {
            name: '销量',
            type: 'bar',
            stack: '余额',
            barMaxWidth: 30,
            data: [220, 182, 191, 234, 290, 330, 310, 200, 300, 250, 500, 300],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 1,
                      color: '#bab3bd69', // 0% 处的颜色
                    },
                    {
                      offset: 0,
                      color: '#bab3bd69', // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
          {
            name: '利润',
            data: [220, 453, 301, 354, 290, 330, 320, 300, 200, 160, 600, 500],
            type: 'line',
            itemStyle: {
              normal: {
                color: '#0088D4',
              },
            },
          },
          {
            name: '净利润',
            data: [150, 413, 250, 290, 150, 150, 250, 150, 150, 100, 500, 400],
            type: 'line',
            itemStyle: {
              normal: {
                color: '#db01d0',
              },
            },
          },
        ],
      }

      let option3 = {
        //  backgroundColor: '#fff',
        tooltip: {
          trigger: 'item',
        },
        grid: {
          // left: '5%',
          // top: '10%',
          // right: '5%',
          bottom: '20%',
        },
        legend: {
          show: true,
          icon: 'circle',
          orient: 'horizontal',
          top: '90.5%',
          right: 'center',
          itemWidth: 16.5,
          itemHeight: 6,
          // itemGap: 30,
          textStyle: {
            // color: '#FFFFFF'
            color: '#C9C8CD',
            fontSize: 14,
          },
        },
        xAxis: [
          {
            data: ['天津仓库', '大连仓库', '北京仓库', '海南仓库', '山东仓库'],
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: 12,
              },
              margin: 20, //刻度标签与轴线之间的距离。
            },

            axisLine: {
              show: false, //不显示x轴
              lineStyle: {
                color: '#E2E8EC',
              },
            },
            axisTick: {
              show: false, //不显示刻度
            },
            boundaryGap: true,
            splitLine: {
              //分割线配置
              lineStyle: {
                color: '#00',
              },
            },
          },
        ],
        yAxis: [
          {
            splitLine: {
              show: false,
              lineStyle: {
                color: '#fff',
                type: 'dashed',
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff',
              },
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: 12,
              },
            },
          },
        ],
        series: [
          {
            //柱底圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [50, 20], //调整截面形状
            symbolOffset: [0, 10],
            z: 12,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#7A57D1',
                    },
                    {
                      offset: 1,
                      color: '#78fee0',
                    },
                  ],
                  false
                ),
              },
            },
            data: ['50', '75', '105', '130', '200'],
            label: {
              show: true,
              position: 'top',
              color: '#fff',
            },
          },

          //柱体
          {
            name: '',
            type: 'bar',
            barWidth: 50,
            barGap: '0%',
            itemStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  type: 'linear',
                  global: false,
                  colorStops: [
                    {
                      //第一节下面
                      offset: 0,
                      color: '#ffb6b9',
                    },
                    {
                      offset: 1,
                      color: '#7A57D1',
                    },
                  ],
                },
              },
            },

            data: ['50', '75', '105', '130', '200'],
          },

          //柱顶圆片
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [50, 20], //调整截面形状
            symbolOffset: [0, -10],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#7A57D1',
                    },
                    {
                      offset: 1,
                      color: '#ffb6b9',
                    },
                  ],
                  false
                ),
              },
            },
            data: ['50', '75', '105', '130', '200'],
          },
        ],
      }
      //>>>>>>>>>>>>>>>>>
      myChart1.setOption(option1)
      myChart2.setOption(option2)
      myChart3.setOption(option3)
      //>>>>>>>>>>>>>>>>>
      //    echarts.connect([myChart1, myChart2,myChart3]);
    },
  },
}
</script>

<style lang="scss" scoped>
$color: #fff;
.default-left {
  width: 100%;
  height: 100%;

  .content {
    width: 119%;
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
    margin-top: 15px;

    #leftDefaOne {
      width: 100%;
      height: 100%;
    }
  }
  .two {
    margin-top: 20px;
    #leftDefaTwo {
      width: 100%;
      height: 100%;
    }
  }
  .three {
    margin-top: 20px;
    #leftDefaThree {
      width: 100%;
      height: 100%;
    }
  }
}

@keyframes gdMove {
  0% {
    margin-left: 8%;
  }
  100% {
    margin-left: 70%;
    opacity: 0;
  }
}
@keyframes guangdianMove {
  to {
    transform: translate(0px, -5px);
  }
}
@keyframes guangdianMove2 {
  to {
    transform: translate(0px, 5px);
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