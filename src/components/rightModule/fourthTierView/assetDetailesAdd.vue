<!-- 右 -->
<template>
  <div>

       <AssetOne />
  </div>
</template>

<script>
import AssetOne from './assetOne.vue';
import AssetTwo from './assetTwo.vue';
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