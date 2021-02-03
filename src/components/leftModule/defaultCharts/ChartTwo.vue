<!-- 各车型销量与收入关系图 -->
<template>
  <div class="two"> 
   <div id="cahrtTwo">
 </div>
 </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {

    }
  },
  mounted() {
     this.defaultEcharts()
  },
  methods: {
      defaultEcharts() {
//》》》》》》》》》》》》》》》》》》》》》》》》》》》》         
 //初始化
      let myChart1 = echarts.init(document.getElementById('cahrtTwo'))
// 模拟数据
 
//》》》》》》》》》》》》》》》》》》》》》》》》》》》
//数据转图
 let option1 = {
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
//》》》》》》》》》》》》》》》》》》》》》》》》》》》》
   //展示
   myChart1.setOption(option1)
  //》》》》》》》》》》》》》》》》》》》》》》》》》》》》

   },
  },
}
</script>

<style lang='scss' scoped>
.two{
   width:100%;
  height: 100%;
   h1{color: #000;}
#cahrtTwo {
  width:100%;
  height: 100%;
  }
}
</style>