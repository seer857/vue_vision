<!-- 右侧部分 视图主题部分  -->
<template>
  <div class="my_box">
    <div class="dv_one">
      <dv-border-box-10>
        <div id="left-echarts-one"></div>
      </dv-border-box-10>
    </div>
    <div class="dv_two">
      <dv-border-box-10>
        <div id="left-echarts-two"></div>
      </dv-border-box-10>
    </div>
    <div class="dv_three">
      <dv-border-box-10>
        <div id="left-echarts-three"></div>
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
    myEcharts01() {
      let myChart = echarts.init(document.getElementById('left-echarts-one'))
      let myChart2 = echarts.init(document.getElementById('left-echarts-two'))
      let myChart3 = echarts.init(document.getElementById('left-echarts-three'))
      //  let myChart4= echarts.init(document.getElementById('my-echarts04'));
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      let option = {
        title: {
          text: '【爱码点用户访问来源】',
          left: 'center',
          textStyle: {
            fontSize: 20,
            color: 'rgba(249, 249, 249, 1)',
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          top: '90%', //模块底部
          textStyle: { color: 'rgba(255, 255, 255, 1' }, //文字颜色
          data: [
            '直接访问',
            '邮件营销',
            '联盟广告',
            '视频广告',
            '搜索引擎',
            '百度',
            '谷歌',
            '必应',
            '其他',
          ],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '12%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: { color: 'rgba(255, 255, 255, 1)' }, //坐标样式
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: { color: 'rgba(255, 255, 255, 1)' }, //坐标样式
          },
        ],
        color: ['#50C1E9', '#ffc952', '#ff7473', '#6a60a9', '#39A0ED'], //设置每个颜色块的颜色
        series: [
          {
            name: '直接访问',
            type: 'bar',
            emphasis: {
              focus: 'series',
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            emphasis: {
              focus: 'series',
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            emphasis: {
              focus: 'series',
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            emphasis: {
              focus: 'series',
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: '搜索引擎',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series',
            },
            markLine: {
              lineStyle: {
                type: 'dashed',
              },
              data: [[{ type: 'min' }, { type: 'max' }]],
            },
          },
          {
            name: '百度',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            emphasis: {
              focus: 'series',
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120],
          },
          {
            name: '谷歌',
            type: 'bar',
            stack: '搜索引擎',
            emphasis: {
              focus: 'series',
            },
            data: [120, 132, 101, 134, 290, 230, 220],
          },
          {
            name: '必应',
            type: 'bar',
            stack: '搜索引擎',
            emphasis: {
              focus: 'series',
            },
            data: [60, 72, 71, 74, 190, 130, 110],
          },
          {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            emphasis: {
              focus: 'series',
            },
            data: [62, 82, 91, 84, 109, 110, 120],
          },
        ],
      }
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      let option2 = {
        //标题
        title: {
          text: '[检查站]',
          left: 'center',
          textStyle: {
            fontSize: 20,
            color: 'rgba(249, 249, 249, 1)',
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          top: '15%',
          right: '20',
          left: '10',
          bottom: '10',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '马群检查站',
              '长江检查站',
              '禄口检查站',
              '新集检查站',
              '天然检查站',
              '小丹阳检查站',
              '头桥检查站',
              '阳江检查站',
            ],
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.12)',
              },
            },
            axisLabel: {
              margin: 10,
              color: '#e2e9ff',
              textStyle: {
                fontSize: 14,
              },
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: '{value}',
              color: '#e2e9ff',
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,1)',
              },
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.12)',
              },
            },
          },
        ],
        series: [
          {
            type: 'bar',
            data: [300, 450, 479, 229, 210, 250, 120, 100],
            barWidth: '16',
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
                      color: 'rgba(0,244,255,1)', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,77,167,1)', // 100% 处的颜色
                    },
                  ],
                  false
                ),
                barBorderRadius: [30, 30, 30, 30],
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
              },
            },
            label: {
              normal: {
                show: true,
                lineHeight: 20,
                width: 60,
                height: 20,
                backgroundColor: 'rgba(0,160,221,0.1)',
                borderRadius: 200,
                position: ['-12', '-40'],
                distance: 1,
                formatter: ['    {d|●}', ' {a|{c}}     \n', '    {b|}'].join(
                  ','
                ),
                rich: {
                  d: {
                    color: '#3CDDCF',
                  },
                  a: {
                    color: '#fff',
                    align: 'center',
                  },
                  b: {
                    width: 1,
                    height: 20,
                    borderWidth: 1,
                    borderColor: '#234e6c',
                    align: 'left',
                  },
                },
              },
            },
          },
        ],
      }
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      let option3 = {
        title: {
          text: '【爱码点用户访问来源】',
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
          // orient: 'horizontal ',
          top: '90%',
          //文字颜色
          textStyle: {
            color: 'rgba(255, 255, 255, 1',
          },
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        },
        //设置饼状图每个颜色块的颜色
        color: ['#50C1E9', '#ffc952', '#ff7473', '#6a60a9', '#39A0ED'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      //---------------[让图表动态显示]---------------------------------
      // app.count = 2;
      // setInterval(function (){
      //     var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
      //     var data0 = option.series[0].data;
      //     var data1 = option.series[1].data;
      //     data0.shift();
      //     data0.push(Math.round(Math.random() * 1000));
      //     data1.shift();
      //     data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

      //     option.xAxis[0].data.shift();
      //     option.xAxis[0].data.push(axisData);
      //     option.xAxis[1].data.shift();
      //     option.xAxis[1].data.push(app.count++);

      //     myChart.setOption(option);
      // }, 2100);
      //-------------------------------------------------
      myChart.setOption(option)
      myChart2.setOption(option2)
      myChart3.setOption(option3)
      // myChart4.setOption(option4);

      echarts.connect([myChart, myChart2, myChart3])
    },
  },
  computed: {},
  watch: {},
  created() {},

  mounted() {
    this.myEcharts01()
    // this.fontShow();
    // this.myEcharts02()
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
    #left-echarts-one {
      width: 100%;
      height: 100%;
    }
  }
  .dv_two {
    width: 100%;
    height: 300px;
    margin-top: 20px;
    #left-echarts-two {
      width: 100%;
      height: 100%;
    }
  }
  .dv_three {
    width: 100%;
    height: 300px;
    margin-top: 20px;
    #left-echarts-three {
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