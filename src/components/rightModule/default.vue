<template>
  <div class="default-right">
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content one">
        <div id="rigDefaOne"></div>
    </dv-border-box-10>
     <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content two">
        <div id="rigDefaTwo"></div>
     </dv-border-box-10>
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content three">
         <div id="rigDefaThree"></div>  
    </dv-border-box-10>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  
  mounted() {
    this.defaultEcharts();
    // this.onAssets()
  // this.onTopic()
    //this.getTopic()
  },

  methods: {
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
defaultEcharts(){
         let myChart1 = echarts.init(document.getElementById('rigDefaOne'));
         let myChart2 = echarts.init(document.getElementById('rigDefaTwo'));
         let myChart3 = echarts.init(document.getElementById('rigDefaThree'));
         //>>>>>>>>>>>>>>>
          let option1 = {
                
                    title: {
                          text: '【爱码点用户访问来源】',
                          left: 'center',
                          textStyle: {
                             fontSize: 20,
                              color: "rgba(249, 249, 249, 1)"
                            }, },
                      tooltip: {
                          trigger: 'item',
                          formatter: '{a} <br/>{b} : {c} ({d}%)'
                      },
                      legend: {
                          // orient: 'horizontal ',
                          top:'90%',
                           //文字颜色
                         textStyle: {
                               color: "rgba(255, 255, 255, 1"
                         },
                          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                      },
                      //设置饼状图每个颜色块的颜色
                     color : [ '#50C1E9', '#ffc952', '#ff7473',
                      '#6a60a9', '#39A0ED' ],
                      series: [
                        
                          {
                              name: '访问来源',
                              type: 'pie',
                              radius: '55%',
                              center: ['50%', '50%'],
                              data: [
                                  {value: 335, name: '直接访问'},
                                  {value: 310, name: '邮件营销'},
                                  {value: 234, name: '联盟广告'},
                                  {value: 135, name: '视频广告'},
                                  {value: 1548, name: '搜索引擎'}
                              ],
                              emphasis: {
                                  itemStyle: {
                                      shadowBlur: 10,
                                      shadowOffsetX: 0,
                                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                                  }
                              }
                          },
                          
                      ]
          }
          let option2 = {
                 title: {
                          text: '【信息中心】',
                          left: 'center',
                          textStyle: {
                             fontSize: 20,
                              color: "rgba(249, 249, 249, 1)"
                            }, },
                        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
        },
        grid: {
          left: "10",
          right: "15",
          bottom: "5",
          top: "10",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#2867a8",
              },
            },
            axisLabel: {
              textStyle: {
                fontSize: 12,
                color: "#fff",
              },
            },

            data: ["01", "02", "03", "04", "05", "06", "07", "08"],
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#2867a8",
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "示例",
            type: "line",
            smooth: true,
            symbol: "circle",
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
                      color: "rgba(16,97,204, 0.3)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(17,235,210, 0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10,
              },
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "rgba(16,97,204,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(17,235,210,1)",
                  },
                ]),
              },
              emphasis: {
                color: "rgb(0,196,132)",
                borderColor: "rgba(0,196,132,0.2)",
                extraCssText: "box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);",
                borderWidth: 10,
              },
            },
            data: [220, 182, 191, 134, 150, 120, 110, 125],
            markLine: {
              symbol: ["none", "none"], //去掉箭头
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: "dashed",
                    color: "#0599de",
                    width: 1,
                  },
                },
              },
              data: [
                {
                  name: "Y 轴值为 80 的水平线",
                  yAxis: 120,
                  label: {
                    normal: {
                      formatter: "(平均里程数) 120",
                      padding: [-13, -20, 15, -100],
                      position: "end",
                    },
                  },
                },
              ],
            },
          },
        ],
          }
          let option3 = {
                title: {//标题
                          text: '[折线图与柱图]',
                          left: 'center',
                          textStyle: {
                             fontSize: 20,
                              color: "rgba(249, 249, 249, 1)"
                            }, },
          
                      
                      tooltip: {//提示框组件。
                          trigger: 'axis',
                          axisPointer: {
                              type: 'cross',
                              label: {//横纵坐标提示宽颜色
                                  backgroundColor: '#283b56'
                                   
                              }
                          }
                      },
                      legend: {//图例组件。
                          data:['最新成交价', '预购队列'],
                         left: "30%",//右左移
                         top: "88%",//上下移动
                          textStyle: {
                                   color: "rgba(241, 234, 234, 1)"
                                } },
                      toolbox: {
                          // orient: "vertical", //工具栏 icon 的布局朝向。
                          show: false, //是否显示工具栏组件。
                         
                          feature: {
                              dataView: {readOnly: false},
                              restore: {},
                              saveAsImage: {}
                          }
                      },
                      dataZoom: {
                          show: false,
                          start: 0,
                          end: 100,
                          backgroundColor: "rgba(9, 199, 247, 0.11)"
                      },
                      xAxis: [
                          {
                              type: 'category',
                              boundaryGap: true,
                              
                              data: (function (){
                                  var now = new Date();
                                  var res = [];
                                  var len = 10;
                                  while (len--) {
                                      res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                                      now = new Date(now - 2000);
                                  }
                                  return res;
                              })()
                              //下横左标颜色
                              ,axisLine: {
                              lineStyle: {
                                color: "rgba(255, 255, 255, 1)"
                              }
                            }
                          },
                          {
                              type: 'category',
                              boundaryGap: true,
                              data: (function (){
                                  var res = [];
                                  var len = 10;
                                  while (len--) {
                                      res.push(10 - len - 1);
                                  }
                                  return res;
                              })()
                              //上横坐标颜色
                               ,axisLine: {
                              lineStyle: {
                                color: "rgba(255, 255, 255, 1)"
                              }
                            }
                          },
                           
                      ],
                      yAxis: [
                          {
                              type: 'value',
                              scale: true,
                              name: '价格',
                              max: 30,
                              min: 0,
                              nameTextStyle: {
                                              color: "rgba(255, 255, 255, 1)"
                                            },
                              boundaryGap: [0.2, 0.2]
                              //左y坐标颜色
                              ,axisLabel: {
                                        color: "rgba(255, 255, 255, 1)"
                                      },
                              
                          },
                          {
                              type: 'value',
                              scale: true,
                              name: '预购量',
                              max: 1200,
                              min: 0,
                               
                              boundaryGap: [0.2, 0.2]
                              //右y坐标颜色
                              ,axisLabel: {
                                        color: "rgba(255, 255, 255, 1)"
                                      },
                              
                          }
                          
                      ],
                      series: [
                          {
                            
                              name: '预购队列',
                              type: 'bar',

                          itemStyle: {//渐变颜色
                            normal: {
                              color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                  {
                                    offset: 0,
                                    color: "rgba(255,182,185,1)", // 0% 处的颜色 粉
                                  },
                                  {
                                    offset: 1,
                                    color: "rgba(65,182,230,1)", // 100% 处的颜色 蓝
                                  },
                                ],
                                false
                              ),
                              barBorderRadius: [30, 30, 0, 0],
                              shadowColor: "rgba(0,160,221,1)",
                              shadowBlur: 1,
                            },


                          },
                              xAxisIndex: 1,
                              yAxisIndex: 1,
                              data: (function (){
                                  var res = [];
                                  var len = 10;
                                  while (len--) {
                                      res.push(Math.round(Math.random() * 1000));
                                  }
                                  return res;
                              })()
                          },
                          {
                              name: '最新成交价',
                              type: 'line',
                               color: "rgba(251, 205, 0, 1)",//线条颜色
                              data: (function (){
                                  var res = [];
                                  var len = 0;
                                  while (len < 10) {
                                      res.push((Math.random()*10 + 5).toFixed(1) - 0);
                                      len++;
                                  }
                                  return res;
                              })()
                          }

                      ]
          }
          //>>>>>>>>>>>>>>>>
      
          //>>>>>>>>>>>>>>>>>
         myChart1.setOption(option1);
         myChart2.setOption(option2);   
        //  myChart3.setOption(option3);
         //>>>>>>>>>>>>>>>>>
         //---------------[让图表动态显示]---------------------------------
      app.count = 2;
      setInterval(function (){
          var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
          var data0 = option3.series[0].data;
          var data1 = option3.series[1].data;
          data0.shift();
          data0.push(Math.round(Math.random() * 1000));
          data1.shift();
          data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

          option3.xAxis[0].data.shift();
          option3.xAxis[0].data.push(axisData);
          option3.xAxis[1].data.shift();
          option3.xAxis[1].data.push(app.count++);

          myChart3.setOption(option3);
      }, 2100);
 //-------------------------------------------------
        //  echarts.connect([myChart, myChart2,myChart3]);

   },
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    onAssets() {
      var uploadedDataURL = '../../assets/images/four/tables/macarom.png'

      var seriesData = [
        {
          name: '资产',
          value: '40000',
        },
        {
          name: '成本',
          value: '53000',
        },
        {
          name: '费用',
          value: '40000',
        },
        {
          name: '利润',
          value: '10000',
        },
        {
          name: '固定资产',
          value: '40000',
        },
        {
          name: '收入',
          value: '60000',
        },
        {
          name: '单车成本',
          value: '10000',
        },
        {
          name: '单车利润',
          value: '20000',
        },
      ]
      var legendData1 = ['资产', '成本', '费用', '利润']
      var legendData2 = ['固定资产', '收入', '单车成本', '单车利润']
      var colorList = [
        '#0066FF',
        '#2E2EE6',
        '#4400CC',
        '#00AACC',
        '#9BBF30',
        '#E60000',
        '#92368D',
        '#BF9926',
      ]
      let myChart = echarts.init(document.getElementById('assets'));

      let option = {
        backgroundColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#000000', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#000000', // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        tooltip: {
          trigger: 'item',
          borderColor: 'rgba(255,255,255,.3)',
          backgroundColor: 'rgba(13,5,30,.6)',
          borderWidth: 1,
          padding: 5,
          formatter: function (parms) {
            var str =
              parms.marker +
              '' +
              parms.data.name +
              '</br>' +
              '数量：' +
              parms.data.value +
              '头</br>' +
              '占比：' +
              parms.percent +
              '%'
            return str
          },
        },

        series: [
          {
            type: 'pie',
            z: 3,
            center: ['52%', '50%'],
            radius: ['25%', '37%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorList[params.dataIndex]
                },
              },
            },
            label: {
              show: true,
              position: 'outside',
              formatter: '{a|{b}：{d}%}\n{hr|}',
              rich: {
                // hr: {
                //     backgroundColor: 't',
                //     borderRadius: 3,
                //     width: 3,
                //     height: 3,
                //     padding: [3, 3, 0, -12]
                // },
                a: {
                  color: '#fff',
                  padding: [20, -80, 0, -80],
                },
              },
            },
            labelLine: {
              normal: {
                length: 40,
                length2: 90,
                lineStyle: {
                  width: 1,
                },
              },
            },
            data: seriesData,
          },
          {
            name: '第一层环',
            type: 'pie',
            z: 2,
            tooltip: {
              show: false,
            },
            center: ['52%', '50%'],
            radius: ['37%', '47%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
              normal: {
                // shadowBlur: 40,
                // shadowColor: 'rgba(0, 255, 255,.3)',
                color: 'rgba(1,15,80,.9)',
              },
              emphasis: {
                color: 'rgba(1,15,80,.9)',
              },
            },
            label: {
              show: false,
            },
            data: [100],
          },
          {
            name: '第二层环',
            type: 'pie',
            z: 1,
            tooltip: {
              show: false,
            },
            center: ['52%', '50%'],
            radius: ['47%', '62%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
              normal: {
                // shadowBlur: 40,
                // shadowColor: 'rgba(0, 255, 255,.3)',
                color: 'rgba(0,15,69,.8)',
              },
              emphasis: {
                color: 'rgba(0,15,69,.8)',
              },
            },
            label: {
              show: false,
            },
            data: [100],
          },
        ],
      }
      myChart.setOption(option)
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
  }
  .one{
    margin-top: 15px;
    #rigDefaOne{
      width: 100%;
      height: 100%; 
      }
  }
  .two{
    margin-top:20px;
    #rigDefaTwo{
      width: 100%;
      height: 100%;
    }
  }
  .three{
    margin-top:20px;
    #rigDefaThree{
      width: 100%;
      height: 100%;
    }
  }
}
</style>