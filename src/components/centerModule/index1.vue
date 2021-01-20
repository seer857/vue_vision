<!-- 中间 数据中台导航模块  -->
<template>
  <div id="center-moudule">
    <div class="science" v-if="isFlying">
      <video src="@/assets/videos/feidie.webm" loop muted autoplay></video>
    </div>
    <div class="flow" v-if="isFlying">
      <video src="@/assets/videos/flow.webm" loop muted autoplay></video>
    </div>
    <div class="particle">
      <video src="@/assets/videos/particle.webm" loop muted autoplay></video>
    </div>
    <div class="buttonCut" @click="unname"></div>
    <div class="fourth-tier" @click="againSend" ref="fourTier">
      <!-- <FourthPic v-on:getShow="show" /> -->
    </div>
    <div class="third-tier" ref="threeTier">
      <!-- <ThirdPic /> -->
    </div>
    <div class="secend-tier" ref="twoTier">
     <!--  <SecondPic /> -->
    </div>
    <div class="first-tier" ref="oneTier">
     <!--  <FirstPic /> -->
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
      isFlying: true,
    }
  },
  methods: {
    show(data) {
      this.toCenterModule = data
    },
    againSend() {
      this.$emit('againSend', this.toCenterModule)
    },
    unname() {
      let fourthModule = this.$refs.fourTier.style
      let ThirdModule = this.$refs.threeTier.style
      let SecondModule = this.$refs.twoTier.style
      let FirstModule = this.$refs.oneTier.style
      fourthModule.animationPlayState = 'running'
      ThirdModule.animationPlayState = 'running'
      SecondModule.animationPlayState = 'running'
      FirstModule.animationPlayState = 'running'
      console.log(fourthModule.animationPlayState)
      
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
  position: absolute;
  //border: royalblue 1px solid;
  .buttonCut {
    position: absolute;
    width: 100px;
    height: 100px;
    background: url(../../assets/images/tag/button.png) no-repeat;
    background-size: 100%;
    margin-left: 89%;
    z-index: 6;
  }
  .science {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    video {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 20;
      top: -40%;
    }
  }
  .flow {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    background-blend-mode: multiply;
    video {
      width: 100%;
      height: 100%;
      z-index: 21;
      top: -10%;
    }
  }
  .particle {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-blend-mode: multiply;
    video {
      width: 100%;
      height: 100%;
      background-blend-mode: multiply;
      background-size: 100%;
    }
  }
  .fourth-tier {
    position: absolute;
    width: 994px;
    height: 400px;
    border: rgb(247, 247, 250) 1px solid;
    //transform: scale(0.3, 0.3);
    animation: allFreeFour 3s linear;
    animation-play-state: paused;
    animation-fill-mode:forwards;
    z-index: 3;

  }
  .third-tier {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
    //border: rgb(247, 247, 250) 1px solid;
    animation: allFreeThree 2s linear;
    animation-play-state: paused;
    animation-fill-mode:forwards;

  }
  .secend-tier {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
    animation: allFreeTwo 2s linear;

    animation-play-state: paused;
    animation-fill-mode:forwards;
  }
  .first-tier {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
    animation: allFreeOne 1s linear;
    animation-play-state: paused;
    animation-fill-mode:forwards;
  }
}
@keyframes allFreeFour {
  0% {
  }
  50% {
    transform: scale(0.3, 1);
    margin-top: -50%;
  }
  100% {
    transform: scale(0.01, 0.01);
    margin-top: -50%;
    display: none;
  }
}
@keyframes allFreeThree {
  0% {
  }
  50% {
    transform: scale(0.3, 1);
    margin-top: -50%;
  }
  100% {
    transform: scale(0.01, 0.01);
    margin-top: -50%;
    display: none;
  }
}
@keyframes allFreeTwo {
  0% {
  }
  50% {
    transform: scale(0.3, 1);
    margin-top: -40%;
  }
  100% {
    transform: scale(0.01, 0.01);
    margin-top: -40%;
    display: none;
  }
}
@keyframes allFreeOne {
  0% {
  }
  50% {
    transform: scale(0.3, 1);
    margin-top: -30%;
  }
  100% {
    transform: scale(0.01, 0.01);
    margin-top: -30%;
    display: none;
  }
}
</style>