<!-- 资产详细页 -->
<!-- 资产盘点 -->
<template>  
<div>
        <transition >
		  <AssetOne class="leftModule"/>
        <!-- <AssetTwo/> -->
        <!-- <AssetThree/>   -->
        </transition >
</div>    	
</template>

<script>
import AssetOne from '../../leftModule/fourthTierView/assetCharts/assetOne.vue';
import AssetTwo from '../../leftModule/fourthTierView/assetCharts/assetTwo.vue';
import AssetThree from '../../leftModule/fourthTierView/assetCharts/assetThree.vue';
export default {
   components:{
	   AssetOne,AssetTwo,AssetThree
   },
   data() {
      return {

       };
    },
   methods: {
      
      
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
.leftModule{
     position: relative;
      width: 100%;
      height: 100%;
      //  float: left;
        animation: opacityx 3s;
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
@keyframes opacityx {
  from{
    opacity: 0;
  }
  to{
 opacity: 1;
  }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
</style>