<!-- 资产明细 第一页  -->
<template>
     <!--  <div class="asset-box">
         <h1>我是资产明细页xxxxxxxx</h1>
         <div id="asset"></div>
      </div> -->
      <dv-border-box-7 class="asset-box" >
         <h1>我是资产明细页xxxxxxxx</h1>
         </dv-border-box-7>
</template>

<script>
export default {
   components:{},
   data() {
      return {

       };
    },
   methods: {
      onAssets(){
         let myCharts = echarts.init(document.getElementById('asset'))
        // 使用刚指定的配置项和数据显示图表。
       // myCharts.setOption(option);
      }
      
    },
   computed: {},
   watch: {},
   created() {},
   mounted() {
      //this.onAssets()
   },
}
</script>
<style lang='scss' scoped>
.asset-box{
   h1{
      color: #fff;
   }
}
</style>