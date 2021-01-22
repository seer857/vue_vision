<!-- 右侧部分 视图主题部分  -->
<template>
<div class="my_box">
     <div class="dv_one">
     <!-- <dv-border-box-13  ><div id="my-echarts"> </div></dv-border-box-13> -->
     <!-- <dv-border-box-12  ><div id="my-echarts"> </div></dv-border-box-12> -->
     <!-- <dv-border-box-11  ><div id="my-echarts"> </div></dv-border-box-11> -->
     <!-- <dv-border-box-10  ><div id="my-echarts"> </div></dv-border-box-10> -->
     <dv-border-box-9  ><div id="my-echarts"> </div></dv-border-box-9>
     <!-- <dv-border-box-8  ><div id="my-echarts"> </div></dv-border-box-8> -->
     <!-- <dv-border-box-7  ><div id="my-echarts"> </div></dv-border-box-7> -->
     <!-- <dv-border-box-6  ><div id="my-echarts"> </div></dv-border-box-6> -->
     <!-- <dv-border-box-5  ><div id="my-echarts"> </div></dv-border-box-5> -->
     <!-- <dv-border-box-4  ><div id="my-echarts"> </div></dv-border-box-4> -->
     <!-- <dv-border-box-3  ><div id="my-echarts"> </div></dv-border-box-3> -->
     <!-- <dv-border-box-2  ><div id="my-echarts"> </div></dv-border-box-2> -->
     <!-- <dv-border-box-1  ><div id="my-echarts"> </div></dv-border-box-1> -->
     </div >
        <div class="dv_two">
            <dv-border-box-11 title="检查站">
                 <div id='my-echarts02'> </div>
            </dv-border-box-11>
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
               // 绘制图表
              let myChart1 = echarts.init(document.getElementById('my-echarts'));
              let myChart2 = echarts.init(document.getElementById('my-echarts02'));
              let option1 = {
                      title: {
                      // text: '南丁格尔玫瑰图',
                      // subtext: '纯属虚构',
                      left: 'center'
                  },
                  tooltip: {
                      trigger: 'item',
                      formatter: '{a} <br/>{b} : {c} ({d}%)'
                  },
                  legend: {
                      left: 'center',
                      top: 'bottom',
                      
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
                          name: '半径模式',
                          type: 'pie',
                          radius: [20, 110],
                          center: ['25%', '50%'],
                          roseType: 'radius',
                          label: {
                              show: false
                          },
                          emphasis: {
                              label: {
                                  show: true
                              }
                          },
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
                      },
                      {
                          name: '面积模式',
                          type: 'pie',
                          radius: [30, 110],
                          center: ['75%', '50%'],
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
                          ] }
                          ]
              } 

              let option2 = {
                tooltip: {
                        trigger: "axis",
                        axisPointer: {
                          type: "shadow",
                        },
                      },
                      grid: {
                        top: "15%",
                        right: "20",
                        left: "10",
                        bottom: "10",
                        containLabel: true,
                      },
                      xAxis: [
                        {
                          type: "category",
                          data: [
                            "马群检查站",
                            "长江检查站",
                            "禄口检查站",
                            "新集检查站",
                            "天然检查站",
                            "小丹阳检查站",
                            "头桥检查站",
                            "阳江检查站",
                          ],
                          axisLine: {
                            lineStyle: {
                              color: "rgba(255,255,255,0.12)",
                            },
                          },
                          axisLabel: {
                            margin: 10,
                            color: "#e2e9ff",
                            textStyle: {
                              fontSize: 14,
                            },
                          },
                        },
                      ],
                      yAxis: [
                        {
                          axisLabel: {
                            formatter: "{value}",
                            color: "#e2e9ff",
                          },
                          axisLine: {
                            show: false,
                            lineStyle: {
                              color: "rgba(255,255,255,1)",
                            },
                          },
                          splitLine: {
                            lineStyle: {
                              color: "rgba(255,255,255,0.12)",
                            },
                          },
                        },
                      ],
                      series: [
                        {
                          type: "bar",
                          data: [300, 450, 479, 229, 210, 250, 120, 100],
                          barWidth: "16",
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
                                    color: "rgba(0,244,255,1)", // 0% 处的颜色
                                  },
                                  {
                                    offset: 1,
                                    color: "rgba(0,77,167,1)", // 100% 处的颜色
                                  },
                                ],
                                false
                              ),
                              barBorderRadius: [30, 30, 30, 30],
                              shadowColor: "rgba(0,160,221,1)",
                              shadowBlur: 4,
                            },
                          },
                          label: {
                            normal: {
                              show: true,
                              lineHeight: 20,
                              width: 60,
                              height: 20,
                              backgroundColor: "rgba(0,160,221,0.1)",
                              borderRadius: 200,
                              position: ["-12", "-40"],
                              distance: 1,
                              formatter: ["    {d|●}", " {a|{c}}     \n", "    {b|}"].join(
                                ","
                              ),
                              rich: {
                                d: {
                                  color: "#3CDDCF",
                                },
                                a: {
                                  color: "#fff",
                                  align: "center",
                                },
                                b: {
                                  width: 1,
                                  height: 20,
                                  borderWidth: 1,
                                  borderColor: "#234e6c",
                                  align: "left",
                                },
                              },
                            },
                          },
                        },
                      ],
              }

              // 为echarts对象加载数据
              myChart1.setOption(option1);   
              myChart2.setOption(option2);  
              //联动配置
              echarts.connect([myChart1, myChart2]);
              /**
               * // 分别设置每个实例的 group id
                    chart1.group = 'group1';
                    chart2.group = 'group1';
                    echarts.connect('group1');
                或者可以直接传入需要联动的实例数组
                echarts.connect([chart1, chart2]);

               */
             
    },
  },

  computed: {},
  watch: {},
  created() {},
  mounted() {this.myEcharts01()},
}
</script>
<style lang='scss' scoped>
.my_box{
      h1{color: antiquewhite;}
    
    .dv_one{
        width: 100%;
        height:400px;
        #my-echarts{
        width: 100%;
        height:98%;
        }

    }
    .dv_two{
         width: 100%;
        height:500px;
        #my-echarts02{
        width: 100%;
        height:100%;
       
        
        }
    }
     
}
</style>