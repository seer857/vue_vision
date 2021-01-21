<template>
  <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="resources-audit">
    <div class="border">
      <div id="assets"></div>
    </div>
      <div class="macarom">
      <!-- <img src="@/assets/images/four/tables/macarom.png" alt=""> -->
    </div>

 
  </dv-border-box-10>
</template>

<script>

export default {
  data() {
    return {}
  },
  mounted() {
    this.onAssets()
   // this.onTopic()
   //this.getTopic()
  },
  methods: {
    onAssets() {
      var uploadedDataURL = '../../assets/images/four/tables/macarom.png'

      var seriesData = [
        {
          name: '资产',
          value: '40000',
        },
        {
          name: '成本',
          value: '53000',
        },
        {
          name: '费用',
          value: '40000',
        },
        {
          name: '利润',
          value: '10000',
        },
        {
          name: '固定资产',
          value: '40000',
        },
        {
          name: '收入',
          value: '60000',
        },
        {
          name: '单车成本',
          value: '10000',
        },
        {
          name: '单车利润',
          value: '20000',
        },
      ]
      var legendData1 = ['资产', '成本', '费用', '利润']
      var legendData2 = ['固定资产', '收入', '单车成本', '单车利润']
      var colorList = [
        '#0066FF',
        '#2E2EE6',
        '#4400CC',
        '#00AACC',
        '#9BBF30',
        '#E60000',
        '#92368D',
        '#BF9926',
      ]
      let myChart = echarts.init(document.getElementById('assets'))
      let option = {
        backgroundColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#000000', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#000000', // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        tooltip: {
          trigger: 'item',
          borderColor: 'rgba(255,255,255,.3)',
          backgroundColor: 'rgba(13,5,30,.6)',
          borderWidth: 1,
          padding: 5,
          formatter: function (parms) {
            var str =
              parms.marker +
              '' +
              parms.data.name +
              '</br>' +
              '数量：' +
              parms.data.value +
              '头</br>' +
              '占比：' +
              parms.percent +
              '%'
            return str
          },
        },
        
          
        series: [
          {
            type: 'pie',
            z: 3,
            center: ['52%', '50%'],
            radius: ['25%', '37%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorList[params.dataIndex]
                },
              },
            },
            label: {
              show: true,
              position: 'outside',
              formatter: '{a|{b}：{d}%}\n{hr|}',
              rich: {
                // hr: {
                //     backgroundColor: 't',
                //     borderRadius: 3,
                //     width: 3,
                //     height: 3,
                //     padding: [3, 3, 0, -12]
                // },
                a: {
                  color: '#fff',
                  padding: [20, -80, 0, -80],
                },
              },
            },
            labelLine: {
              normal: {
                length: 40,
                length2: 90,
                lineStyle: {
                  width: 1,
                },
              },
            },
            data: seriesData,
          },
          {
            name: '第一层环',
            type: 'pie',
            z: 2,
            tooltip: {
              show: false,
            },
            center: ['52%', '50%'],
            radius: ['37%', '47%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
              normal: {
                // shadowBlur: 40,
                // shadowColor: 'rgba(0, 255, 255,.3)',
                color: 'rgba(1,15,80,.9)',
              },
              emphasis: {
                color: 'rgba(1,15,80,.9)',
              },
            },
            label: {
              show: false,
            },
            data: [100],
          },
          {
            name: '第二层环',
            type: 'pie',
            z: 1,
            tooltip: {
              show: false,
            },
            center: ['52%', '50%'],
            radius: ['47%', '62%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
              normal: {
                // shadowBlur: 40,
                // shadowColor: 'rgba(0, 255, 255,.3)',
                color: 'rgba(0,15,69,.8)',
              },
              emphasis: {
                color: 'rgba(0,15,69,.8)',
              },
            },
            label: {
              show: false,
            },
            data: [100],
          },
        ],
      }
      myChart.setOption(option)
    },
  },
  
}
</script>

<style lang="scss" scoped>
.resources-audit {
  width: 118%;
  height: 96%;
  margin-left: -18%;
  .border{
    margin-top: 20px;
    width: 100%;
    height: 380px;
  }
  #assets {
    position: absolute;
    width: 90%;
    height: 300px;
    margin-top: 60px;
    margin-left: 20px;
  }
  .macarom{
    position: absolute;
    width: 80px;
    z-index: 20;
    top: 185px;
    margin-left: 210px;
    img{
      width: 100%;
    }

  }
  #topic{
    margin-top: 90px;
    margin-left: 20px;
    margin-right: 20px;
    width: 460px;
    height: 400px;
  }
}
</style>