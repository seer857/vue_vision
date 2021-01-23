<!-- 右 -->
<template>
  <div>
       <AssetOne />
       <!-- <AssetTwo/> -->
  </div>
</template>

<script>
import AssetOne from './assets/assetOne.vue';
import AssetTwo from './assets/assetTwo.vue';
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