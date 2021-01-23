<!-- 资产明细 第一页  -->
<template>      
         <div>
		  <AssetOne/>
        <!-- <AssetTwo/> -->
        <!-- <AssetThree/>   -->
         </div>
		
</template>

<script>
import AssetOne from '../../leftModule/fourthTierView/assets/assetOne.vue';
import AssetTwo from '../../leftModule/fourthTierView/assets/assetTwo.vue';
import AssetThree from '../../leftModule/fourthTierView/assets/assetThree.vue';
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