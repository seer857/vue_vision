<!-- 右侧部分 视图主题部分  -->
<template>
<div class="my_box_rig">
     <div class="dv_one">
       <dv-border-box-10  >  
           <div id="my1-echarts"> </div>
       </dv-border-box-10>
     </div >
        <div class="dv_two">
            <dv-border-box-10 >
                 <div id='my2-echarts'> </div>
            </dv-border-box-10>
        </div>
        <div class="dv_three">
            <dv-border-box-10 >
                 <div id='my3-echarts'> </div>
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

myEcharts01(){
              let myChart1 = echarts.init(document.getElementById('my1-echarts'));
              let myChart2 = echarts.init(document.getElementById('my2-echarts'));
              let myChart3 = echarts.init(document.getElementById('my3-echarts'));

              let option1= {
                          tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
         //文字颜色
                                        textStyle: {
                                            color: "rgba(255, 255, 255, 1"
                                              },
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ]
        }
    ]
            }  
              let option2 = {
                              title: {
                                        // text: '南丁格尔玫瑰图',
                                        // subtext: '纯属虚构',
                                        // left: 'vertical'
                                    },
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                                    },
                                    legend: {
                                        left: 'vertical',
                                        top: 'bottom',
                                        // orient: "horizontal", //横向
                                        // orient: 'vertical',//纵向
                                        //文字颜色
                                        textStyle: {
                                            color: "rgba(255, 255, 255, 1"
                                              },
                                        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
                                    },
                                    toolbox: {
                                        show: true,
                                        feature: {
                                            mark: {show: true},
                                            dataView: {show: true, readOnly: false},
                                            magicType: {
                                                show: true,
                                                type: ['pie', 'funnel']
                                            },
                                            restore: {show: true},
                                            saveAsImage: {show: true}
                                        }
                                    },
                                    series: [
                                       
                                        {
                                            name: '面积模式',
                                            type: 'pie',
                                            radius: [30, 110],
                                            // center: ['100%', '100%'],
                                            roseType: 'area',
                                            data: [
                                                {value: 10, name: 'rose1'},
                                                {value: 5, name: 'rose2'},
                                                {value: 15, name: 'rose3'},
                                                {value: 25, name: 'rose4'},
                                                {value: 20, name: 'rose5'},
                                                {value: 35, name: 'rose6'},
                                                {value: 30, name: 'rose7'},
                                                {value: 40, name: 'rose8'}
                                            ]
                                        }
                                    ]
           }
               let option3 = {
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
              myChart1.setOption(option1);  
              myChart2.setOption(option2);  
               myChart3.setOption(option3);  

            //联动配置
                    myChart1.group = 'group1';
                    myChart2.group = 'group1';
                    myChart3.group = 'group1';
                    echarts.connect('group1');
              // echarts.connect([myChart1, myChart2]);
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
.my_box_rig{
  // background-color: aqua;
      h1{color: antiquewhite;}
    
    .dv_one{
        width: 100%;
        height:300px;
        #my1-echarts{
        width: 100%;
        height:100%;
        }

    }
    .dv_two{
         width: 100%;
        height:300px;
        #my2-echarts{
        width: 100%;
        height:100%;
       
        
        }
    }
    .dv_three{
         width: 100%;
        height:300px;
        #my3-echarts{
        width: 100%;
        height:100%;
       
        
        }
    }
     
}
</style>