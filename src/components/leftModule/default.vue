<template>
  <div class="default-left">
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content one">
      <div class="title">
        <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
        <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
        <span>库存仓库</span>
      </div>
      <div id="leftDefaOne"></div>
    </dv-border-box-10>
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content two">
      <div class="title">
        <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
        <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
        <span>财经指标体系-历年来销售费用统计图</span>
      </div>
      <div id="leftDefaTwo"></div>
    </dv-border-box-10>
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content three">
      <div class="title">
        <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
        <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
        <span>财经指标体系-历年来管理费用统计图</span>
      </div>
      <div id="leftDefaThree"></div>
    </dv-border-box-10>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
     components: {
      Swiper,
      SwiperSlide,
    },
  data() {
    return {}
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
  let myChart1 = echarts.init(document.getElementById('leftDefaOne'))   
  var colors = ['#8134af', '#A94CAF', '#FF82A9', '#4695d6', '#7BDFF2', '##BDFF2'];
  var lineargroup = [{
        value: 100,
        name: '目标',
        oriname: "意向",
        number: 98756,
        //color: ["rgba(29,211,137,0.8)", "rgba(29,211,137,0)"]
    },
    {
        value: 80,
        name: '方案率',
        oriname: "方案",
        number: 88756,
       // color: ["rgba(102,142,255,0.7)", "rgba(102,142,255,0)"]
    },
    {
        value: 60,
        name: '商務率',
        oriname: "商務",
        number: 78756,
       // color: ["rgba(255,198,82,0.6)", "rgba(255,198,82,0)"]
    },
    {
        value: 40,
        name: '成交率',
        oriname: "即將成交",
        number: 68756,
       // color: ["rgba(255,110,115,0.5)", "rgba(255,110,115,0)"]
    },
    {
        value: 20,
        name: '贏單率',
        oriname: "贏單",
        number: 58756,
      //  color: ["rgba(134,131,230,0.4)", "rgba(134,131,230,0)"]
    }
];
var data1 = [];
var data2 = [];
for (var i = 0; i < lineargroup.length; i++) {
    var obj1 = {
        value: lineargroup[i].value,
        num: lineargroup[i].number,
        name: lineargroup[i].oriname
    };
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
    };
    data1.push(obj1);
    data2.push(obj2);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      let myChart2 = echarts.init(document.getElementById('leftDefaTwo'))
//>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>//>>>>>>>>>>>>>>>
      let myChart3 = echarts.init(document.getElementById('leftDefaThree'));
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
    color: colors,
    series: [{
            top: 0,
            type: 'funnel',
            height: '230',
            top:"50",
            gap: 0,
            minSize: 50,
            left: '20%',
            width: '60%',
            label: {
                show: true,
                position: 'inside',
                fontSize: '14',
                formatter: function(d) {
                    var ins = d.name + '{aa|}\n' + d.data.num;
                    return ins
                },
                rich: {
                    aa: {
                        padding: [8, 0, 6, 0]
                    }
                }
            },
            data: data1
        },
        {
            top: 0,
            type: 'funnel',
            height: '230',
             top:"49",
            gap: -1,
            minSize: 150,
            
             left: '16%',
            width: '60%',
            z: 2,
            label: {
                normal: {
                    color: '#333',
                    position: 'right',
                    formatter: function(d) {
                        var ins = '{aa|' + d.name + '}\n{bb|' + d.percent + '%}';
                        return ins
                    },
                    rich: {
                        aa: {
                            align: 'center',
                            color: '#FFF',
                            fontSize: '12',
                            lineHeight: '30'
                        },
                        bb: {
                            align: 'center',
                            color: '#FFF',
                            fontSize: '15'
                        }
                    }
                }
            },
            labelLine: {
                show: false
            },
            data: data2
        }
    ]
}
let option2 = {
        // backgroundColor:'rgba(011, 023, 059)',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(list) {
            var msg = "";
            for (let i in list) {
                if (i == 0) {
                    msg += list[i].name + "<br>";
                }
                msg += list[i].seriesName + "：" + list[i].data + "万元<br>";
                if (i > 0 && list[i].seriesName == "不可用余额" && list[i - 1].seriesName == "可用余额") {
                    msg += "总存款余额" + "：" + (list[i].data + list[i - 1].data) + "万元<br>";
                }
                if (i > 0 && list[i].seriesName == "支出" && list[i - 1].seriesName == "收入") {
                    msg += "净收入" + "：" + (list[i - 1].data - list[i].data) + "万元<br>";
                }
            }
            return msg;
        }
    },
    legend: {
     top: '90%',
        textStyle: {
            color: '#fff',
        },
        data: ['可用余额', '不可用余额', '收入', '支出']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: 2
            }
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#ffffff',
                width: 2
            }
        },
        splitLine: { //分割线配置
            lineStyle: {
                color: "#ebfdff",
            }
        },
    },
    series: [{
            name: '可用余额',
            type: 'bar',
            stack: '余额',
            barMaxWidth: 30,
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 1,
                            color: "#FFC0BE" // 0% 处的颜色
                        },
                        {
                            offset: 0,
                            color: "#FF82A9" // 100% 处的颜色
                        }
                    ], false),
                },
            },
        },
        {
            name: '不可用余额',
            type: 'bar',
            stack: '余额',
            barMaxWidth: 30,
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 1,
                            color: "#bab3bd69" // 0% 处的颜色
                        },
                        {
                            offset: 0,
                            color: "#bab3bd69" // 100% 处的颜色
                        }
                    ], false),
                },
            },
        },
        {
            name: '收入',
            data: [220, 453, 301, 354, 290, 330, 320],
            type: 'line',
            itemStyle: {
                normal: {
                    color: "#0088D4",
                },
            },
        },
        {
            name: '支出',
            data: [213, 356, 123, 225, 78, 123, 354],
            type: 'line',
            itemStyle: {
                normal: {
                    color: "#db01d0",
                },
            },
        },
    ]}

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
         data: ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6'],
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
             color: '#65C6E7'
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
             color: '#65C6E7'
         }
     }],
     series: [{
             z: 1,
             name: '实验频次',
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
             name: '动物数',
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
             name: '总费用',
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
//>>>>>>>>>>>>>>>>>
      myChart1.setOption(option1)
      myChart2.setOption(option2)
      myChart3.setOption(option3)
//>>>>>>>>>>>>>>>>>
       echarts.connect([myChart1, myChart2,myChart3]);
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