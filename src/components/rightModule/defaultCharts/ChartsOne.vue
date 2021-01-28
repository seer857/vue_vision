<template>
  <div class="charts">
    <div id="rightDefaOnes"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted(){
    this.openCharts()
  },
  methods: {
    openCharts() {
      let myChart1 = echarts.init(document.getElementById('rightDefaOnes'))
      let option1 = {
        title: {
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          top: '5%',
          right: '8%',
          textStyle: {
            color: ['#5BE7C4', '#50C1E9', '#7A57D1'],
          },
        },
        color: ['#5BE7C4', '#50C1E9', '#7A57D1'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '研发费用' },
              { value: 735, name: '销售费用' },
              { value: 580, name: '管理费用' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(10, 0, 0, 5)',
              },
            },
          },
        ],
      }
       myChart1.setOption(option1)
    },
    
  },
  
}
</script>

<style lang="scss" scoped>
.charts {
  width: 100%;
  height: 100%;
  #rightDefaOnes {
    position: absolute;
    margin-top: 20px;
    width: 100%;
    height: 100%;
  }
}
</style>