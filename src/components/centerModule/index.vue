<!-- 中间 数据中台导航模块  -->
<template>
  <div id="center-moudule">
    <transition name="science">
      <div class="science" v-if="isFlying">
        <video src="@/assets/videos/feidie.webm" loop muted autoplay></video>
      </div>
    </transition>
    <!--     <div class="flow" v-if="isFlying">
      <video src="@/assets/videos/flow.webm" loop muted autoplay></video>
    </div>
    <div class="particle" v-if="isShowParticle">
      <video src="@/assets/videos/particle.webm" loop muted autoplay></video>
    </div>-->
    <div class="module left">
      <LeftContent />
    </div>
    <div class="module right">
      <RightContent />
    </div>
    <a-popover placement="right">
      <template slot="content">
        <span>车联网科技大屏</span>
      </template>
      <div class="buttonCut" @click="unname"></div>
    </a-popover>
    <div class="parcel-all" ref="allTier">
      <div class="first-tier">
        <FirstPic class="one" />
      </div>
      <div class="secend-tier">
        <SecondPic class="two" />
      </div>
      <div class="third-tier">
        <ThirdPic class="three" />
      </div>
      <div class="fourth-tier" @click="againSend">
        <!-- 父获取子数据 @getnamedata="showData"   -->
        <FourthPic
          class="four"
          v-on:getShow="show"
          @getOneData="getOneDatas"
          @getTwoData="getTwoDatas"
        />
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import FourthPic from './fourthTierPic/index.vue'
import ThirdPic from './thirdTierPic/index.vue'
import SecondPic from './secondTierPic/index.vue'
import FirstPic from './firstTierPic/index.vue'
import LeftContent from './leftContent/index.vue'
import RightContent from './rightContent/index.vue'
export default {
  components: {
    FourthPic,
    ThirdPic,
    SecondPic,
    FirstPic,
    LeftContent,
    RightContent,
  },
  data() {
    return {
      toHome: true,
      toCenterModuleTag: false,
      isFlying: false,
      isShowParticle: true,
      oneName: '空',
      oneData: '空',
    }
  },

  methods: {
    //--------------------------------------------
    //父index.vue 获取子 ThirdPic 数据
    getOneDatas(oneName, oneData) {
      // console.log(oneName,oneData) //子组件数据
      this.oneName = oneName //获取子组件数据,赋值给自己
      this.oneData = oneData
      this.$emit('getOneDatass', this.oneName, this.oneData) //组件index.vue 传父组件 home.vue
    },
    getTwoDatas(twoName, twoData) {
      this.oneName = twoName //获取子组件数据,赋值给自己
      this.oneData = twoData
      this.$emit('getTwoDatass', this.oneName, this.oneData) //组件index.vue 传父组件 home.vue
    },
    //--------------------------------------------
    show(data) {
      this.toCenterModule = data
      console.log(data)
    },
    againSend() {
      this.$emit('againSend', this.toHome)
    },
    unname() {
      if (this.isFlying == false) {
        let allTier = this.$refs.allTier.style
        allTier.animationPlayState = 'running'
        this.isFlying = !this.isFlying
        this.$emit('againSendTag', this.toCenterModuleTag)
      } else {
        location.reload()
      }
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
  .module {
    position: absolute;
    width: 150px;
    height: 150px;
    margin-top: 33%;
  }
  .right {
    margin-left: 80%;
  }
  .left {
    margin-left: 15%;
  }
  .parcel-all {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: moveCenter 5s linear;
    animation-fill-mode: forwards;
    animation-play-state: paused;
  }
  .buttonCut {
    position: absolute;
    width: 100px;
    height: 100px;
    background: url(../../assets/images/tag/button.png) no-repeat;
    background-size: 100%;
    margin-left: 96%;
    margin-top: -9.5%;
    z-index: 99;
  }
  .science {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    video {
      position: absolute;
      margin-left: 20px;
      width: 100%;
      height: 100%;
      z-index: 20;
      top: -40%;
    }
  }
  .science-enter-active {
    transition: opacity 1s;
  }
  .science-enter {
    opacity: 0;
  }
  .flow {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
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
  .first-tier {
    position: relative;
    margin-top: 160px;
    width: 100%;
    height: 200px;
    .one {
      height: 200px;
    }
  }
  .secend-tier {
    position: relative;
    width: 100%;
    height: 200px;

    .two {
      height: 200px;
    }
  }
  .third-tier {
    position: relative;
    width: 100%;
    height: 200px;
    z-index: 1;
    .three {
      height: 200px;
      z-index: -1;
    }
  }
  .fourth-tier {
    position: relative;
    margin-top: -1%;
    width: 100%;
    height: 200px;
    .four {
      height: 200px;
    }
  }
  // .fourth-tier {
  //   position: absolute;
  //   width: 994px;
  //   height: 400px;
  //   border: rgb(247, 247, 250) 1px solid;
  //   //transform: scale(0.3, 0.3);
  //   animation: allFreeFour 3s linear;
  //   animation-play-state: paused;
  //   animation-fill-mode:forwards;
  //   z-index: 3;

  // }
  // .third-tier {
  //   position: absolute;
  //   top: 0%;
  //   width: 100%;
  //   height: 100%;
  //   //border: rgb(247, 247, 250) 1px solid;
  //   animation: allFreeThree 2s linear;
  //   animation-play-state: paused;
  //   animation-fill-mode:forwards;

  // }
  // .secend-tier {
  //   position: absolute;
  //   top: 0%;
  //   width: 100%;
  //   height: 100%;
  //   animation: allFreeTwo 2s linear;

  //   animation-play-state: paused;
  //   animation-fill-mode:forwards;
  // }
  // .first-tier {
  //   position: absolute;
  //   top: 0%;
  //   width: 100;
  //   height: 100%;
  //   animation: allFreeOne 1s linear;
  //   animation-play-state: paused;
  //   animation-fill-mode:forwards;
  // }
}
@keyframes moveCenter {
  0% {
  }
  50% {
  }
  100% {
    transform: scale(0.001, 0.001);
    margin-top: -45%;
    display: none;
  }
}
// @keyframes allFreeFour {
//   0% {
//     transform: scale(1, 1);
//   }
//   100% {
//     transform: scale(0.01, 0.03);
//     margin-top: -40%;
//   }
// }
// @keyframes allFreeThree {
//   0% {
//   }

//   100% {
//     transform: scale(0.01, 0.03);
//     margin-top: -30%;
//   }
// }
// @keyframes allFreeTwo {
//   0% {
//   }
//   100% {
//     transform: scale(0.01, 0.03);
//     margin-top: -20%;
//   }
// }
// @keyframes allFreeOne {
//   0% {
//   }
//   100% {
//     transform: scale(0.01, 0.01);
//     margin-top: -10%;
//   }
// }
</style>