<!-- 各车型销量与收入关系图 -->
<template>
  <div class="car-sales">
    <div class="main" ref="car_ref"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      carSalesChartInstance: null,
      resCarSalesData: null,
      startValue: 0,
      endValue: 3,
      timeId: null,
    }
  },
  mounted() {
    this.initCarSalesChart()
    this.getCarSalesChart()
  },
  methods: {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>各车型系列 销量>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // 1、初始化 各车型系列 销量图表
    initCarSalesChart() {
      this.carSalesChartInstance = this.$echarts.init(this.$refs.car_ref)
      // 对图表进行初始化配置
      const initCharSalesOption = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          top: '90%',
          data: ['销量', '流水', '利润率'],
          textStyle: {
            color: '#fff',
          },
        },
        grid: {
          top: '20%',
          bottom: '10%',
          left: '0%',
          right: '0%',
          containLabel: true,
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
        dataZoom: {
          show: false,
          startValue: this.startValue,
          endValue: this.endValue,
        },
        xAxis: [
          {
            type: 'category',
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            max: function () {
              return null
            },
            yAxisIndex: 1,
            axisLabel: {
              formatter: function (value, index) {
                return value + '辆'
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
          {
            type: 'value',
            position: 'right',
            max: function () {
              return null
            },
            axisLabel: {
              formatter: function (value, index) {
                return value / 1000000 + '百万'
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
            name: '销量',
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              color: 'rgba(187,222,214,1)',
            },
            barWidth: 30,
            itemStyle: {
              barBorderRadius: [10, 10, 0, 0],
            },
          },
          {
            name: '流水',
            type: 'bar',
            yAxisIndex: 1,
            label: {
              show: true,
              position: 'top',
              color: 'rgba(187,222,214,1)',
            },
            barWidth: 30,
            itemStyle: {
              barBorderRadius: [10, 10, 0, 0],
            },
          },
          {
            name: '利润率',
            type: 'line',
            yAxisIndex: 1,
            data: [],
          },
        ],
      }
      this.carSalesChartInstance.on('mouseover', () => {
        clearInterval(this.timeId)
      })
      this.carSalesChartInstance.on('mouseout', () => {
        this.startInterval()
      })
      this.carSalesChartInstance.setOption(initCharSalesOption)
    },
    // // 2、获取服务端接口数据
    async getCarSalesChart() {
      const { data: ret } = await this.$http.get('carsales')
      this.resCarSalesData = ret.data
      // this.resCarSalesData.sort((a, b) => {
      //   return a.MulPrice - b.MulPrice && a.ActualQuantityDelivered - b.ActualQuantityDelivered//从小到大
      // })
      this.updateCarSalesChart()
      this.startInterval()
    },
    // // 3、更新图表
    updateCarSalesChart() {
      const CarName = this.resCarSalesData.map((item) => {
        return item.VehicleSeriesDesc
      })
      const CarSales = this.resCarSalesData.map((item) => {
        return item.ActualQuantityDelivered
      })
      const CarPrice = this.resCarSalesData.map((item) => {
        return item.MulPrice
      })
      const carSalesOption = {
        xAxis: [
          {
            data: CarName,
          },
        ],
        dataZoom: {
          show: false,
          startValue: this.startValue,
          endValue: this.endValue,
        },
        series: [
          {
            data: CarSales,
          },
          {
            data: CarPrice,
          },
          {
            data: [],
          },
        ],
      }
      
      this.carSalesChartInstance.setOption(carSalesOption)
      //  this.carSalesChartInstance.on("click",function(params){
      //    console.log(params)
      //  })
      // this.carSalesChartInstance.showLoading()
      // this.carSalesChartInstance.hideLoading();
    },

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    startInterval() {
      if (this.timeId) {
        clearInterval(this.timeId)
      }
      // dom销毁时 关闭定时器 this.timerId
      this.timeId = setInterval(() => {
        this.startValue++
        this.endValue++
        if (this.endValue > this.resCarSalesData.length - 1) {
          this.startValue = 0
          this.endValue = 3
        }
        this.updateCarSalesChart()
      }, 1000)
    },
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  },
}
</script>
<style lang='scss' scoped>
.car-sales {
  width: 100%;
  height: 100%;
  .main {
    width: 100%;
    height: 100%;
  }
}
</style>