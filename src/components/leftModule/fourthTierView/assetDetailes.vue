<!-- 资产详细页 -->
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