<!-- 右侧部分 视图主题部分  -->
<template>
  <div class="right-view">
    <router-view name="right" />
  </div>
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
.right-view{
  margin-left: -18%;
  width: 118%;
  height: 100%;
}
</style>