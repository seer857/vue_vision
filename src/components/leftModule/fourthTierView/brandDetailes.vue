<!-- 品质运营详情页 -->
<!-- 品质运营 -->
<template>
  <div>
 <transition >
		  <BranOne class="leftModule"/>
        </transition >
  </div>
</template>

<script>
//A_aima_demo\aima_vision_demo\aima_vision_28\src\components\leftModule\fourthTierView\branCharts\branOne.vue
import BranOne from '../../leftModule/fourthTierView/branCharts/branOne.vue';
export default {
  components:{
	  BranOne
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