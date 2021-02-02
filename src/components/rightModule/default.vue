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
          <span>2021年期间费用占比</span>
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
          <span>20-21年总销量同环比与收入趋势</span>
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
          <span>各车型销量和净利润分析</span>
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
      salesArr: [],
      salesDateArr: [],
      salesIncome: [],
      test: [],
      startValue: 0,
      endValue: 5,
      timeId:null,
      SwiperOption: {
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay: {
          disableOnInteraction: true,
          delay: 7000,
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
  created() {
    //this.getSalesAll()
  },
  beforeMount() {
    this.getSalesAll()
  },
  mounted() {
    // this.defaultEcharts();
    // this.onAssets()
    // this.onTopic()
    //this.getTopic()
  },
  destroyed(){
    clearInterval(this.timeId)
  },

  methods: {
    getSalesAll() {
      axios.get('http://10.200.226.98:3000/api/v1/sales').then((res) => {
        // console.log(res.data.data[0])
        for (let i = 0; i < res.data.data.length; i++) {
          this.salesDateArr.push(res.data.data[i].delivery_ym)
          this.salesArr.push(res.data.data[i].actual_quantity_delivered_bq)
          this.salesIncome.push(res.data.data[i].Mul_price)
        }
        // this.salesDateArr = Object.values(res.data.data)
        //console.log(this.salesIncome)
        this.salesIncomeCharts()
        this.startInterval()
        this.rightDefEcharts()
      })
    },
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
    startInterval() {
      if(this.timeId){
        clearInterval(this.timeId)
      }
      // dom销毁时 关闭定时器 this.timerId
      this.timeId = setInterval(() => {
        this.startValue++
        this.endValue++
        if (this.endValue > this.salesDateArr.length - 1) {
          this.startValue = 0
          this.endValue = 5
        }
        this.salesIncomeCharts()
      }, 500)
    },
    salesIncomeCharts() {
      let myChart2 = echarts.init(document.getElementById('rightDefaTwo'))
      let option2 = {
        tooltip: {
          trigger: 'axis',
          // axisPointer: {
          //   type: 'cross',
          //   crossStyle: {
          //     color: '#fff',
          //   },
          // },
        },
        legend: {
          top: '90%',
          data: ['20年销量', '20年收入', '趋势'],
          textStyle: {
            color: '#fff',
          },
        },
        color: ['#1ee3cf', '#fff1ac', '#E7475E'],
        axisLabel: {
          //左y轴
          margin: 10,
          color: '#e2e9ff',
          textStyle: {
            fontSize: 12,
          },
        },
        grid: {
          top: '20%',
          bottom: '10%',
          left: '0%',
          right: '0%',
          containLabel: true,
        },
        dataZoom: {
          show: false,
          startValue: this.startValue,
          endValue: this.endValue,
        },
        xAxis: [
          {
            type: 'category',
            data: [...this.salesDateArr],
            axisPointer: {
              type: 'shadow',
            },
          },
        ],

        yAxis: [
          {
            type: 'log',
            name: '20年销量',
            // min: 0,
            // max: function () {
            //   return null
            // },
            // // interval: 1000,
            // axisLabel: {
            //   formatter: function (value, index) {
            //     let str = value.toString()
            //     let strs = str.substring(0, 4)
            //     let values = parseInt(strs)
            //     return values + `万台`
            //   },
            //   margin: 2,
            // },

            axisLabel: {
              formatter: function (value, index) {
                return value / 10000 + '万台'
              },
              margin: 2,
            },
            splitLine: {
              //网格线
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
          {
            type: 'log',
            name: '20年收入',
            position: 'right',
            // min: 0,
            max: function () {
              return null
            },
            //interval: 10,
            axisLabel: {
              formatter: function (value, index) {
                return value / 100000000 + '亿'
              },
            },
            splitLine: {
              //网格线
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '20年销量',
            type: 'bar',
            data: [...this.salesArr],
            label: {
              show: true,
              position: 'top',
            },
          },
          {
            name: '20年收入',
            type: 'bar',
            data: [...this.salesIncome],
            yAxisIndex: 1,
            label: {
              show: true,
              position: 'top',
            },
          },
          {
            name: '趋势',
            type: 'line',
            yAxisIndex: 1,
            data: [],
          },
        ],
      }
      myChart2.setOption(option2)
      myChart2.on("mouseover",() => {
        clearInterval(this.timeId)
      })
      myChart2.on("mouseout",()=>{
        this.startInterval()
      })
    },
    rightDefEcharts() {
      let myChart3 = echarts.init(document.getElementById('rightDefaThree'))
      // >>>>>>>>>>>>>>>>>>>>

      // >>>>>>>>>>>>>>>>>>>>>>..
      let option3 = {
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
          data: ['销量', '利润', '利润率'],
          textStyle: {
            color: '#fff',
          },
        },
        color: ['#50C1E9', '#7A57D1', '#E7475E'],
        axisLabel: {
          //左y轴
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
              '系列1',
              '系列2',
              '系列3',
              '系列4',
              '系列5',
              '系列6',
              '系列7',
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
            splitLine: {
              show: false,
            },
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
            splitLine: {
              show: false,
            },
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
            name: '利润',
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
            name: '利润率',
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

      myChart3.setOption(option3)
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
      margin-left: 10px;
      width: 100%;
      height: 100%;
    }
    #rightDefaThree {
      position: absolute;
      margin-top: 10px;
      width: 100%;
      height: 100%;
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