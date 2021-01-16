<!-- 中间 数据中台导航模块  -->
<template>
  <div id="center-moudule">
     <div class="fourth-tier" @click="againSend">
        <FourthPic  v-on:getShow="show" />
     </div>
     <div class="third-tier">

     </div>
     <div class="secend-tier">

     </div>
     <div class="first-tier">

     </div>
  </div>
</template>

<script>
import FourthPic from './fourthTierPic/index.vue'
export default {
  components: {
     FourthPic,
  },
  data() {
    return {
       toCenterModule:false
    }
  },
  methods: {
      show(data){
         this.toCenterModule = data
      },
      againSend(){
         this.$emit('againSend',this.toCenterModule)
      }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
}
</script>
<style lang='scss' scoped>
#center-moudule {
  width: 100%;
  height: 100%;
  border: royalblue 1px solid;
  .fourth-tier{
     width: 100%;
     height: 100%;
     border: tan 1px solid;
  }
}


</style>