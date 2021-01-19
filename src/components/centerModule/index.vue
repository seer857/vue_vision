<!-- 中间 数据中台导航模块  -->
<template>
  <div id="center-moudule">
    <div class="particle">
      <video src="@/assets/videos/particle.webm" loop muted autoplay></video>
    </div>
    <div class="fourth-tier" @click="againSend">
      <FourthPic v-on:getShow="show" />
    </div>
    <div class="third-tier">
      <ThirdPic />
    </div>
    <div class="secend-tier">
      <SecondPic />
    </div>
    <div class="first-tier">
      <FirstPic />
    </div>
  </div>
</template>

<script>
import FourthPic from './fourthTierPic/index.vue'
import ThirdPic from './thirdTierPic/index.vue'
import SecondPic from './secondTierPic/index.vue'
import FirstPic from './firstTierPic/index.vue'
export default {
  components: {
    FourthPic,
    ThirdPic,
    SecondPic,
    FirstPic,
  },
  data() {
    return {
      toCenterModule: false,
    }
  },
  methods: {
    show(data) {
      this.toCenterModule = data
    },
    againSend() {
      this.$emit('againSend', this.toCenterModule)
    },
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
  //border: royalblue 1px solid;
  .particle{
     position: absolute;
     width: 100%;
     height: 100%;
      video{
         width: 100%;
         height: 100%;
         background-blend-mode: multiply;
         background-size: 100%;
      }
  }
  .fourth-tier {
    width: 100%;
    height: 100%;
    //border: rgb(247, 247, 250) 1px solid;
  }
  .third-tier {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
    //border: rgb(247, 247, 250) 1px solid;
  }
  .secend-tier {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
  }
  .first-tier {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
  }
}
</style>