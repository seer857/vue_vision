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
          <span>2020年总销量同环比与收入趋势</span>
        </div>
        <div id="rightDefaTwo" ref="sales_ref"></div>
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
          <span>车型系列销量与收入分析</span>
        </div>
        <div id="rightDefaThree" >
          <CarSales />
        </div>
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
import CarSales from './defaultCharts/CarSales.vue'
export default {
  components: {
    Swiper,
    SwiperSlide,
    ChartsOne,
    ChartsTwo,
    ChartsThree,
    CarSales
  },
  data() {
    return {
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      salesChartInstance: null,
      resSalesData: null, // 服务器返回的销量数据
      currentPage: 1, //当前显示的页数 通过定时器不断改变
      totalPage: 0, // 一共有多少页 需要计算得到
      salesTimeId: null,
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // carSalesChartInstance: null,
      // resCarSalesData: null,
      // startValue: 0,
      // endValue: 3,
      // timeId: null,
      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      salesArr: [],
      salesDateArr: [],
      salesIncome: [],
      test: [],

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
    //this.getSalesAll()
  },
  mounted() {
    this.initSalesChart()
    this.getSalesData()
    // this.initCarSalesChart()
    // this.getCarSalesChart()
  },
  destroyed() {
    clearInterval(this.salesTimeId)
    // clearInterval(this.timeId)
  },

  methods: {
    // >>>>>>>>>>>>>>>>>>>>> 销量收入图 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // 初始化 销量收入图表  echartInstance 对象
    initSalesChart() {
      this.salesChartInstance = this.$echarts.init(this.$refs.sales_ref)
      // 对图表初始化配置的控制
      const initSalesOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            z: 0,
            lineStyle: {
              width: 66,
              color: '#2D3343',
            },
          },
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
          top: '25%',
          bottom: '10%',
          left: '%',
          right: '5%',
          containLabel: true,
        },
        dataZoom: {
          show: false,
          startValue: 0,
          endValue: 5,
        },
        xAxis: [
          {
            type: 'category', // 类目轴
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
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
            type: 'value',
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
            label: {
              show: true,
              position: 'top',
              color: 'rgba(187,222,214,1)',
            },
            barWidth: 30,
            itemStyle: {
              barBorderRadius: [20, 20, 0, 0],
            },
            // 指明颜色渐变的方向
            // 指明不同百分比之下颜色的值
            color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(255,241,172,1)',
              },
              {
                offset: 1,
                color: 'rgba(242,244,246,1)',
              },
            ]),
          },
          {
            name: '20年收入',
            type: 'bar',

            yAxisIndex: 1,
            label: {
              show: true,
              position: 'top',
              color: 'rgba(187,222,214,1)',
            },
            barWidth: 30,
            itemStyle: {
              barBorderRadius: [20, 20, 0, 0],
            },
            color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(30,227,207,1)',
              },
              {
                offset: 1,
                color: 'rgba(242,244,246,1)',
              },
            ]),
          },
          {
            name: '趋势',
            type: 'line',
            yAxisIndex: 1,
            color: 'red',
          },
        ],
      }
      this.salesChartInstance.setOption(initSalesOption)
      // 对图表对象进行鼠标事件的监听
      this.salesChartInstance.on('mouseover', () => {
        clearInterval(this.salesTimeId)
      })
      this.salesChartInstance.on('mouseout', () => {
        this.startSalesInterval()
      })
    },
    // 获取 服务器销量收入的数据
    async getSalesData() {
      const { data: ret } = await this.$http.get('sales')
      this.resSalesData = ret.data
      //对数组进行排序
      // this.resSalesData.sort((a, b) => {
      //   return a.Mul_price - b.Mul_price //从小到大
      // })
      // 每6个元素显示一页
      this.totalPage =
        this.resSalesData.length % 5 === 0
          ? this.resSalesData.length / 5
          : this.resSalesData.length / 5 + 1
      //console.log(this.resSalesData)
      this.updateSalesChart()
      this.startSalesInterval()
    },
    // 更新图表
    updateSalesChart() {
      const start = (this.currentPage - 1) * 5
      const end = this.currentPage * 5
      const showData = this.resSalesData.slice(start, end)
      const salesName = showData.map((item) => {
        return item.delivery_ym
      })
      const salesValues = showData.map((item) => {
        return item.actual_quantity_delivered_bq
      })
      const incomeValues = showData.map((item) => {
        return item.Mul_price
      })
      //console.log(incomeValues)
      const salesOption = {
        xAxis: [
          {
            data: salesName,
          },
        ],
        series: [
          {
            data: salesValues,
          },
          {
            data: incomeValues,
          },
          {
            data: incomeValues,
          },
        ],
      }
      this.salesChartInstance.setOption(salesOption)
    },
    startSalesInterval() {
      if (this.salesTimeId) {
        clearInterval(this.salesTimeId)
      }
      this.salesTimeId = setInterval(() => {
        this.currentPage++
        if (this.currentPage > this.totalPage) {
          this.currentPage = 1
        }
        this.updateSalesChart()
      }, 3000)
    },
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // 费用占比 swiper 部分
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
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
      canvas {
        border-radius: 20px;
      }
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