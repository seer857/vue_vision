<template>
  <div class="charts">
    <div id="rightDefaThrees"></div>
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
      let myChart1 = echarts.init(document.getElementById('rightDefaThrees'))
      let option1 = {
     title: {
          text: '【信息中心】',
          left: 'center',
          textStyle: {
            fontSize: 20,
            color: 'rgba(249, 249, 249, 1)',
          },
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '90%',
          textStyle: {
            color: 'rgba(255, 255, 255, 1',
          },
          left: 'center',
        },
        //设置饼状图每个颜色块的颜色
        color: ['#50C1E9', '#ffc952', '#ff7473', '#6a60a9', '#39A0ED'],
        series: [
          {
            name: '显示数据',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
              top: 'bottom',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: '信息中心' },
              { value: 735, name: '服务大厅' },
              { value: 580, name: '数据研发' },
              { value: 484, name: 'CEO' },
              { value: 300, name: '部门' },
            ],
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
  #rightDefaThrees {
    position: absolute;
    margin-top: 20px;
    width: 90%;
    height: 90%;
  }
}
</style>