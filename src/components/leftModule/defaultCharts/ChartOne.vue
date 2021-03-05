<!-- 各车型销量与收入关系图 -->
<template>
  <div class="one"> 
   <div id="cahrtOne">
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
      let myChart1 = echarts.init(document.getElementById('cahrtOne'))
// 模拟数据
 var colors = [
        '#8134af',
        '#A94CAF',
        '#FF82A9',
        '#4695d6',
        '#7BDFF2',
        '##BDFF2',
      ]
      var lineargroup = [
        {
          value: 100,
          name: '仓库1',
          oriname: '库存11',
          number: 98756,
          //color: ["rgba(29,211,137,0.8)", "rgba(29,211,137,0)"]
        },
        {
          value: 60,
          name: '仓库2',
          oriname: '仓库22',
          number: 88756,
          // color: ["rgba(102,142,255,0.7)", "rgba(102,142,255,0)"]
        },
        {
          value: 60,
          name: '仓库3',
          oriname: '仓库33',
          number: 78756,
          // color: ["rgba(255,198,82,0.6)", "rgba(255,198,82,0)"]
        },
        {
          value: 60,
          name: '仓库4',
          oriname: '仓库44',
          number: 68756,
          // color: ["rgba(255,110,115,0.5)", "rgba(255,110,115,0)"]
        },
        {
          value: 60,
          name: '仓库5',
          oriname: '仓库55',
          number: 88756,
          //  color: ["rgba(134,131,230,0.4)", "rgba(134,131,230,0)"]
        },
      ]
      var data1 = []
      var data2 = []
      for (var i = 0; i < lineargroup.length; i++) {
        var obj1 = {
          value: lineargroup[i].value,
          num: lineargroup[i].number,
          name: lineargroup[i].oriname,
        }
        var obj2 = {
          value: lineargroup[i].value,
          name: lineargroup[i].name,
          itemStyle: {
            opacity: 0,
            /*normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: lineargroup[i].color[1]
                }, {
                    offset: 1,
                    color: lineargroup[i].color[0]
                }]),
                borderWidth: 0,
                opacity: 1
            }*/
          },
        }
        data1.push(obj1)
        data2.push(obj2)
      }

      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//》》》》》》》》》》》》》》》》》》》》》》》》》》》
//数据转图
 let option1 = {
        color: colors,
        series: [
          {
            top: 0,
            type: 'funnel',
            height: '230',
            top: '50',
            gap: 0,
            minSize: 50,
            left: '20%',
            width: '60%',
            label: {
              show: true,
              position: 'inside',
              fontSize: '14',
              formatter: function (d) {
                var ins = d.name + '{aa|}\n' + d.data.num
                return ins
              },
              rich: {
                aa: {
                  padding: [8, 0, 6, 0],
                },
              },
            },
            data: data1,
          },
          {
            top: 0,
            type: 'funnel',
            height: '230',
            top: '49',
            gap: -1,
            minSize: 150,
            left: '16%',
            width: '60%',
            z: 2,
            label: {
              normal: {
                color: '#333',
                position: 'right',
                formatter: function (d) {
                  var ins = '{aa|' + d.name + '}\n{bb|' + d.percent + '%}'
                  return ins
                },
                rich: {
                  aa: {
                    align: 'center',
                    color: '#FFF',
                    fontSize: '12',
                    lineHeight: '30',
                  },
                  bb: {
                    align: 'center',
                    color: '#FFF',
                    fontSize: '20',
                  },
                },
              },
            },
            labelLine: {
              show: false,
            },
            data: data2,
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
.one{
   width:100%;
  height: 100%;
   h1{color: #000;}
#cahrtOne {
  width:100%;
  height: 100%;
  }
}
</style>