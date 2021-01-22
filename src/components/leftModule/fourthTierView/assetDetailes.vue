<!-- 资产明细 第一页  -->
<template>      
         <div>
		  <AssetOne/>
        <!-- <AssetTwo/> -->
        <!-- <AssetThree/>   -->
         </div>
		
</template>

<script>
import AssetOne from '../../leftModule/fourthTierView/assetOne.vue';
import AssetTwo from '../../leftModule/fourthTierView/assetTwo.vue';
import AssetThree from '../../leftModule/fourthTierView/assetThree.vue';
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