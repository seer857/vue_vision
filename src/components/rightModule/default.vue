<template>
  <div class="default-right">
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content one">
      <a-popover placement="leftTop">
        <template slot="title">
          <span>集团财经指标费用明细页</span>
        </template>
        <template slot="content">
          <router-link :to="{name:'asset'}">http://localhost:9010/#/home/asset</router-link>
        </template>
        <div class="title">
          <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
          <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
          <span>首页-2021年期间费用占比</span>
        </div>
      </a-popover>
      <swiper :options="SwiperOption" ref="swiperOne">
        <swiper-slide>
          <ChartsOne />
        </swiper-slide>
        <swiper-slide>
          <ChartsTwo />
        </swiper-slide>
        <swiper-slide>
          <ChartsThree />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" @click="prev"></div>
      <div class="swiper-button-next" @click="next"></div>
    </dv-border-box-10>
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content two">
      <a-popover placement="leftTop">
        <template slot="title">
          <span>集团销量与收入明细页</span>
        </template>
        <template slot="content">
          <router-link :to="{name:'asset'}">http://localhost:9010/#/home/asset</router-link>
        </template>
        <div class="title">
          <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
          <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
          <span>首页-销量与收入趋势</span>
        </div>
        <div id="rightDefaTwo"></div>
      </a-popover>
    </dv-border-box-10>
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content three">
      <a-popover placement="leftBottom">
        <template slot="title">
          <span>集团利润收入明细页</span>
        </template>
        <template slot="content">
          <router-link :to="{name:'asset'}">http://localhost:9010/#/home/asset</router-link>
        </template>
        <div class="title">
          <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
          <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
          <span>首页-净利润</span>
        </div>
        <div id="rightDefaThree"></div>
      </a-popover>
    </dv-border-box-10>
  </div>
</template>

<script>
// import "swiper/dist/css/swiper.css";
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Swiper2, { Autoplay } from 'swiper'
Swiper2.use([Autoplay])
import ChartsOne from './defaultCharts/ChartsOne.vue'
import ChartsTwo from './defaultCharts/ChartsTwo.vue'
import ChartsThree from './defaultCharts/ChartsThree.vue'
export default {
  components: {
    Swiper,
    SwiperSlide,
    ChartsOne,
    ChartsTwo,
    ChartsThree,
  },
  data() {
    return {
      SwiperOption: {
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay: {
          delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next',
        },
      },
    }
  },

  mounted() {
    // this.defaultEcharts();
    // this.onAssets()
    // this.onTopic()
    //this.getTopic()
    this.rightDefEcharts()
  },

  methods: {
    prev() {
      this.$refs.swiperOne.$swiper.slidePrev()
    },
    next() {
      this.$refs.swiperOne.$swiper.slideNext()
    },
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    },
    rightDefEcharts() {
      let myChart2 = echarts.init(document.getElementById('rightDefaTwo'))
      let myChart3 = echarts.init(document.getElementById('rightDefaThree'))
      // >>>>>>>>>>>>>>>>>>>>
      let option2 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#fff',
            },
          },
        },

        legend: {
          top: '90%',
          data: [
            '销量',
            '收入',
            '趋势',
          ],
          textStyle: {
            color: '#fff',
          },
        },
        color: ['#A94CAF', '#ffb6b9', '#E7475E'],
        axisLabel: {//左y轴
          margin: 10,
          color: '#e2e9ff',
          textStyle: {
            fontSize: 12,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月',
            ],
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            
            type: 'value',
            name: '销量',
            min: 0,
            max: 88,
            interval: 10,
            axisLabel: {
              formatter: '{value} 万台',
            },
            splitLine: {
              //网格线
              show: false,
            },
            splitLine:{
              show:false
            }
          },
          {
            type: 'value',
            name: '库存',
            min: 0,
            max: 8888,
            interval: 1000,
            axisLabel: {
              formatter: '{value} 万辆',
            },
            splitLine: {
              //网格线
              show: false,
            },
            splitLine:{
              show:false
            }
          },
        ],
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [
              2.6,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              60.6,
              70.2,
              32.6,
              20.0,
              6.4,
              3.3,
            ],
          },
          {
            name: '收入',
            type: 'bar',
            data: [
              6.2,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              80.6,
              60.2,
              48.7,
              18.8,
              6.0,
              2.3,
            ],
          },
          {
            name: '趋势',
            type: 'line',
            yAxisIndex: 1,
            data: [
              363.6,
              455.2,
              555.3,
              2844.5,
              545.3,
              3366.2,
              869.3,
              4544.4,
              787.0,
              320.5,
              880.0,
              453.2,
            ],
          },
        ],
      }
      // >>>>>>>>>>>>>>>>>>>>>>..
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
             fontSize:12
         },
         data: ['2016', '2017', '2018', '2019', '2020', '2021'],
     }],
     yAxis: [{
         type: 'value',
         min: 0,
         splitLine: {
            show: false,
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
             color: '#fff'
         },

            data: ['01', '02', '03', '04', '05', '06', '07', '08'],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#2867a8',
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: '#fff',
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '净利润',
            type: 'line',
            smooth: true,
            symbol: 'circle',
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
                      color: 'rgba(16,97,204, 0.3)',
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(17,235,210, 0)',
                    },
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10,
              },
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: 'rgba(16,97,204,1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(17,235,210,1)',
                  },
                ]),
              },
              emphasis: {
                color: 'rgb(0,196,132)',
                borderColor: 'rgba(0,196,132,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10,
              },
            },
            data: [120, 182, 191, 134, 150, 190, 200, 300],
            markLine: {
              symbol: ['none', 'none'], //去掉箭头
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: 'dashed',
                    color: '#0599de',
                    width: 1,
                  },
                },
              },
              data: [
                {
                  name: 'Y 轴值为 80 的水平线',
                  yAxis: 120,
                  label: {
                    normal: {
                      formatter: '(平均里程数) 120',
                      padding: [-13, 20, 15, 100],
                      position: 'end',
                    },
                  },
                },
              ],
            },
          },
        ],
      }

      myChart2.setOption(option2)
      myChart3.setOption(option3)

      echarts.connect([myChart2, myChart3])
    },
  },
}
</script>

<style lang="scss" scoped>
.swiper-container {
  position: absolute;
  margin-top: 40px;
  width: 535px;
  height: 260px;
}
.swiper-button-prev {
  position: absolute;
  margin-top: 30px;
  width: 40px;
  height: 100px;
  color: #a255d7;
}
.swiper-button-next {
  position: absolute;
  margin-top: 30px;
  margin-left: 493px;
  width: 40px;
  height: 100px;
  color: #a255d7;
}
.swiper-button-prev,
.swiper-button-next {
  top: 90px;
}
.default-right {
  width: 119%;
  height: 100%;
  margin-left: -20%;
  margin-top: 3%;
  .content {
    width: 100%;
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
    #rightDefaOne {
      position: absolute;
      margin-top: 20px;
      width: 100%;
      height: 100%;
    }
  }
  .two,
  .three {
    margin-top: 20px;
    #rightDefaTwo {
      width: 100%;
      height: 100%;
    }
    #rightDefaThree {
      position: absolute;
      margin-top: 50px;
      width: 100%;
      height: 80%;
    }
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