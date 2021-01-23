<!-- 资产详细附加页 -->
<template>
  <div>

       <AssetOne />
  </div>
</template>

<script>
import AssetOne from './assetCharts/assetOne.vue';
import AssetTwo from './assetCharts/assetTwo.vue';
export default {
  components: {
        AssetOne,
    AssetTwo,
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
}
</script>

<style lang='scss' scoped>
.asset-box {
  h1 {
    color: #fff;
  }
}
</style>