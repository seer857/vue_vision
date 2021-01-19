<!-- 左侧 视图容器 补充部分 -->
<template>
<transition>
  <div class="left-view">
    <router-view name="left" />
  </div>
</transition>
</template>

<script>
export default {
  components: {},
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
.left-view {
  width: 100%;
  height: 100%;
 // border: 1px red solid;
}
</style>