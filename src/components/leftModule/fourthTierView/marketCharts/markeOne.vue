<!-- 右侧部分 视图主题部分  -->
<template>
<div class="my_box">
     <div class="dv_one">
       <dv-border-box-10  >  
           <div id="left-echarts-one"> </div>
       </dv-border-box-10>
     </div >
        <div class="dv_two">
            <dv-border-box-10 >
                 <div id='left-echarts-two'> </div>
            </dv-border-box-10>
        </div>
        <div class="dv_three">
            <dv-border-box-10 >
                 <div id='left-echarts-three'> </div>
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


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  myEcharts01(){
    let myChart = echarts.init(document.getElementById('left-echarts-one'));
    let myChart2 = echarts.init(document.getElementById('left-echarts-two'));
    // let myChart3= echarts.init(document.getElementById('left-echarts-three'));
	 let myChart4= echarts.init(document.getElementById('left-echarts-three'));
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let option = {
                      title: {
                              text: '【爱玛点用户访问来源】',
                          left: 'center',
                          textStyle: {
                             fontSize: 20,
                              color: "rgba(249, 249, 249, 1)"
                            }, },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
         top:'90%',//底部模块
        textStyle: {//文字颜色
           color: "rgba(255, 255, 255, 1" },
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: {color: "rgba(255, 255, 255, 1)" },//坐标样式
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          
        },
        
        
    ],
    
    yAxis: [
        {
            type: 'value'
            ,axisLabel: { color:"rgba(255, 255, 255, 1)" },//坐标样式
        }
    ],
     //设置每个颜色块的颜色
      color : [ '#50C1E9', '#ffc952', 
      '#ff7473','#6a60a9', '#39A0ED' ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
}  
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let option2 = {
           title: {
                           text: '【爱玛点用户访问来源】',
                          left: 'center',
                          textStyle: {
                             fontSize: 20,
                              color: "rgba(249, 249, 249, 1)"
                            }, },
                         tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {
      top:'90%',//底部模块
        textStyle: {//文字颜色
           color: "rgba(255, 255, 255, 1" },
        data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
        
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
         ,axisLabel: { color:"rgba(255, 255, 255, 1)" },//坐标样式
    },
    yAxis: {
        type: 'category',
         axisLabel: { color:"rgba(255, 255, 255, 1)" },//坐标样式
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    //设置每个颜色块的颜色
      color : [ '#50C1E9', '#ffc952', 
      '#ff7473','#6a60a9', '#39A0ED' ],
    series: [
        {
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: 'Mail Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Affiliate Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Video Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let option3 ={
        
                    title: {
                              text: '【爱玛点用户访问来源】',
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
                         top:'90%',//模块底部
                         textStyle: {color: "rgba(255, 255, 255, 1"  },  //文字颜色
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
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
let option4={
               title: {
                              text: '【爱玛点用户访问来源】',
                          left: 'center',
                          textStyle: {
                             fontSize: 20,
                              color: "rgba(249, 249, 249, 1)"
                            }, },
                  tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
       top:'90%',//模块底部
                         textStyle: {color: "rgba(255, 255, 255, 1"  },  //文字颜色
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: { color:"rgba(255, 255, 255, 1)" },//坐标样式
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
            ,axisLabel: { color:"rgba(255, 255, 255, 1)" },//坐标样式
        }
    ],
    color : [ '#50C1E9', '#ffc952',  '#ff7473','#6a60a9', '#39A0ED' ], //设置每个颜色块的颜色
    series: [
        {
            name: '直接访问',
            type: 'bar',
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
                focus: 'series'
            },
            markLine: {
                lineStyle: {
                    type: 'dashed'
                },
                data: [
                    [{type: 'min'}, {type: 'max'}]
                ]
            }
        },
        {
            name: '百度',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            emphasis: {
                focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name: '谷歌',
            type: 'bar',
            stack: '搜索引擎',
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
            name: '必应',
            type: 'bar',
            stack: '搜索引擎',
            emphasis: {
                focus: 'series'
            },
            data: [60, 72, 71, 74, 190, 130, 110]
        },
        {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            emphasis: {
                focus: 'series'
            },
            data: [62, 82, 91, 84, 109, 110, 120]
        }
    ]
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
//---------------[让图表动态显示]---------------------------------
      
//-------------------------------------------------
     myChart.setOption(option);
     myChart2.setOption(option2);   
    //  myChart3.setOption(option3);  
      myChart4.setOption(option4);  
     echarts.connect([myChart, myChart2,myChart4]);
    
  }   

},
  computed: {},
  watch: {},
  created() {},

  mounted() {
      this.myEcharts01();
  }
}

</script>
<style lang='scss' scoped>
.my_box{
      h1{color: antiquewhite;}
      

    .dv_one{
        width: 100%;
        height:300px;
        margin-top: 10px;
        #left-echarts-one{
        width: 100%;
        height:100%;
        
        }

    }
    .dv_two{
         width: 100%;
        height:300px;
        margin-top: 20px;
        #left-echarts-two{
        width: 100%;
        height:100%;
        }
    }
    .dv_three{
         width: 100%;
        height:300px;
        margin-top: 20px;
        #left-echarts-three{
        width: 100%;
        height:100%;
        }
    }

}

</style>