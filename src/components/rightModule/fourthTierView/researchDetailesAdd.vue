<!-- 爱玛研发详细附加页 -->
<template>
  <div>
     <transition >
       <AssetOne class="rightModule" />
         </transition >
  </div>
</template>

<script>
import AssetOne from './researchCharts/researchOne.vue';
export default {
  components: {
        AssetOne,
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
.rightModule{
     position: relative;
      width: 100%;
      height: 100%;
      //  float: left;
        animation: rightanimation 1s;
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