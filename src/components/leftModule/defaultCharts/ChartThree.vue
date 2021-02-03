<!-- 各车型销量与收入关系图 -->
<template>
  <div class="three"> 
   <div id="cahrtThree">
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
      let myChart1 = echarts.init(document.getElementById('cahrtThree'))
// 模拟数据
 
//》》》》》》》》》》》》》》》》》》》》》》》》》》》
//数据转图
 let option1 = {
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
//》》》》》》》》》》》》》》》》》》》》》》》》》》》》
   //展示
   myChart1.setOption(option1)
  //》》》》》》》》》》》》》》》》》》》》》》》》》》》》

   },
  },
}
</script>

<style lang='scss' scoped>
.three{
   width:100%;
  height: 100%;
   h1{color: #000;}
#cahrtThree {
  width:100%;
  height: 100%;
  }
}
</style>