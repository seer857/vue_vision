<!-- 营销 详细页 -->
<!-- 营销分析 -->
<template>
  <div>
 <transition >
		  <MarketCharts class="leftModule"/>
        </transition >
  </div>
</template>

<script>
//E:\AAA_luoyawen_demo\A_aima_demo\aima_vision_demo\aima_vision_28\src\components\leftModule\fourthTierView\marketCharts\markeOne.vue
import MarketCharts from '../../leftModule/fourthTierView/marketCharts/markeOne.vue';
export default {
  components:{
	  MarketCharts
   },
}
</script>

<style lang='scss' scoped>
.leftModule{
     position: relative;
      width: 100%;
      height: 100%;
      //  float: left;
        animation: leftanimation 1s;
      //  border: 5px springgreen solid;
}
//>>>>>>>>>>>渐变动画>>>>>>>>>>>>>>>>

@keyframes fadeIn {//从上到下
 from {margin-top:  -2500px ;}
    to {margin-top: 0px; }
}

@keyframes leftanimation {//从左往右
  from {
    left: -2000px;
  }
  to {
    left: 0px;
  }
}
@keyframes rightanimation {
  from {
    left: 2000px;
  }
  to {
    left: 0px;
  }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
</style>