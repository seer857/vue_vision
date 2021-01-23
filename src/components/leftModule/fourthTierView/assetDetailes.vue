<!-- 资产详细页 -->
<template>      
         <div>
		  <AssetOne/>
        <!-- <AssetTwo/> -->
        <!-- <AssetThree/>   -->
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

</style>