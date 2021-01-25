<template>
  <div class="default-left">
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content one">
      <div class="title">
        <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
        <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
        <span>财经指标体系-历年来研发费用统计图</span>
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
export default {
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
      let myChart1 = echarts.init(document.getElementById('leftDefaOne'))
      let myChart2 = echarts.init(document.getElementById('leftDefaTwo'))
      let myChart3 = echarts.init(document.getElementById('leftDefaThree'))
      //>>>>>>>>>>>>>>>
      let option1 = {
        legend: {
          top: '90%',
          //文字颜色
          textStyle: {
            color: 'rgba(255, 255, 255, 1)',
          },
        },
        tooltip: {},
        dataset: {
          //研发费用 人力成本 其他
          dimensions: ['product', '研发费用', '人力成本', '其他'],
          source: [
            { product: '2018', 研发费用: 43.3, 人力成本: 85.8, 其他: 93.7 },
            { product: '2019', 研发费用: 83.1, 人力成本: 73.4, 其他: 55.1 },
            { product: '2020 ', 研发费用: 86.4, 人力成本: 65.2, 其他: 82.5 },
            { product: '2021', 研发费用: 72.4, 人力成本: 53.9, 其他: 39.1 },
          ],
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 1)',
            },
          },
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 1)',
            },
          },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        //设置图每个颜色块的颜色
        
        series: [
          {
            type: 'bar',
            itemStyle: {
              //渐变颜色
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#CCFBFF', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#EF96C5', // 100% 处的颜色
                    },
                  ],
                  false
                ),
                barBorderRadius: [10, 10, 0, 0],
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 1,
              },
            },
          },
          {
            type: 'bar',
            itemStyle: {
              //渐变颜色
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#A0F1EA', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#EAD6EE', // 100% 处的颜色
                    },
                  ],
                  false
                ),
                barBorderRadius: [10, 10, 0, 0],
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 1,
              },
            },
          },
          {
            type: 'bar',
            itemStyle: {
              //渐变颜色
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#A5F9F9', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#F298E7', // 100% 处的颜色
                    },
                  ],
                  false
                ),
                barBorderRadius: [10, 10, 0, 0],
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 1,
              },
            },
          },
        ],
      }
      let option2 = {
        legend: {
          top: '90%',
          //文字颜色
          textStyle: {
            color: 'rgba(255, 255, 255, 1)',
          },
        },
        tooltip: {},
        dataset: {
          //销售费用 人力成本 其他 广宣费
          dimensions: ['product', '销售费用', '人力成本', '其他', '广宣费'], //与下面数据要对其
          source: [
            {
              product: '2018',
              销售费用: 43.3,
              人力成本: 85.8,
              其他: 93.7,
              广宣费: 93.7,
            },
            {
              product: '2019',
              销售费用: 83.1,
              人力成本: 73.4,
              其他: 55.1,
              广宣费: 93.7,
            },
            {
              product: '2020 ',
              销售费用: 86.4,
              人力成本: 65.2,
              其他: 82.5,
              广宣费: 93.7,
            },
            {
              product: '2021',
              销售费用: 72.4,
              人力成本: 53.9,
              其他: 39.1,
              广宣费: 93.7,
            },
          ],
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 1)',
            },
          },
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 1)',
            },
          },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        //设置图每个颜色块的颜色
        color: ['#5BE7C4', '#50C1E9', '#7A57D1', '#A94CAF'],
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' },
        ],
      }
      let option3 = {
        legend: {
          top: '90%',
          //文字颜色
          textStyle: {
            color: 'rgba(255, 255, 255, 1)',
          },
        },
        tooltip: {},
        dataset: {
          //
          dimensions: ['product', '管理费用', '人力成本', '其他'],
          source: [
            { product: '2018', 管理费用: 43.3, 人力成本: 85.8, 其他: 93.7 },
            { product: '2019', 管理费用: 83.1, 人力成本: 73.4, 其他: 55.1 },
            { product: '2020 ', 管理费用: 86.4, 人力成本: 65.2, 其他: 82.5 },
            { product: '2021', 管理费用: 72.4, 人力成本: 53.9, 其他: 39.1 },
          ],
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 1)',
            },
          },
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 1)',
            },
          },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        //设置图每个颜色块的颜色
        color: ['#B9EDF8', '#39BAE8', '#1F6ED4'],
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
      }
      //>>>>>>>>>>>>>>>>>
      myChart1.setOption(option1)
      myChart2.setOption(option2)
      myChart3.setOption(option3)
      //>>>>>>>>>>>>>>>>>
      //  echarts.connect([myChart, myChart2,myChart3]);
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