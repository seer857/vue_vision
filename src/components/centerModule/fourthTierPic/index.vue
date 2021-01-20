<!-- 第四层 动画部分  -->
<template>
  <div class="four-tier-box">
    <!--   <div class="box">
      <div class="module-one" @click="onAsset" @mousemove="enterIntoOne" @mouseout="leaveOutOne">
        <router-link :to="{name:'asset'}">
          <div class="cover"></div>
          <span>资产盘点</span>
        </router-link>
      </div>
      <div class="module-two">
        <div class="cover"></div>
        <span>数栈计算引擎</span>
      </div>
    </div>
    <div class="four-pic">
      <div class="outerside-one" ref="outerFourOne"></div>
      <div class="outerside-two"></div>
      <div class="outerside-three"></div>
      <div class="outerside-four"></div>
      <div class="inside-one"></div>
      <div class="shade"></div>
    </div>-->
    <div class="box-content">
      <router-link :to="{name:'asset'}">
        <div class="box-one">
          <span>资源盘点</span>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-two">
          <span>数栈计算引擎</span>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-three">
          <span>应用规划</span>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-four">
          <span>指标标签管理</span>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-five">
          <span>数据应用运营</span>
        </div>
      </router-link>
    </div>
    <div class="box-module">
      <div class="one-pic">
        <div class="outerside-one"></div>
        <div class="outerside-two"></div>
        <div class="outerside-three"></div>
        <div class="outerside-four"></div>
        <div class="inside-one"></div>
        <div class="shade"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tag: false,
    }
  },
  methods: {
    onAsset() {
      this.$emit('getShow', this.tag)
    },
    enterIntoOne() {
      let a = this.$refs.outerFourOne.style
      a.animationDuration = '3s'
    },
    leaveOutOne() {
      let a = this.$refs.outerFourOne.style
      a.animationDuration = '30s'
    },
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
}
</script>
<style lang='scss' scoped>
.four-tier-box {
  position: absolute;
  width: 994px;
  height: 978px;
  .box-content {
    position: absolute;
    width: 100%;
    height: 200px;
    .box-one {
      position: absolute;
      width: 70px;
      height: 75px;
      margin-left: 28%;
      margin-top: 3%;
      background: url(../../../assets/images/fourth/content/one.png) no-repeat;
      background-size: 90%;
      span {
        margin-top: 70px;
        position: absolute;
        color: #fff;
        font-size: 17px;
      }
    }
    .box-two {
      position: absolute;
      width: 70px;
      height: 75px;
      margin-left: 40%;
      margin-top: 8%;
      background: url(../../../assets/images/fourth/content/two.png) no-repeat;
      background-size: 90%;
      span {
        width: 120px;
        margin-top: 70px;
        position: absolute;
        color: #fff;
        font-size: 17px;
      }
    }
    .box-three {
      position: absolute;
      width: 70px;
      height: 75px;
      margin-left: 48%;
      margin-top: -1%;
      background: url(../../../assets/images/fourth/content/three.png) no-repeat;
      background-size: 90%;
      span {
        margin-top: 70px;
        position: absolute;
        color: #fff;
        font-size: 17px;
      }
    }
    .box-four {
      position: absolute;
      width: 70px;
      height: 75px;
      margin-left: 60%;
      margin-top: 7%;
      background: url(../../../assets/images/fourth/content/four.png) no-repeat;
      background-size: 90%;
      span {
        margin-top: 70px;
        width: 120px;
        position: absolute;
        color: #fff;
        font-size: 17px;
      }
    }
     .box-five {
      position: absolute;
      width: 70px;
      height: 75px;
      margin-left: 70%;
      margin-top: 3%;
      background: url(../../../assets/images/fourth/content/five.png) no-repeat;
      background-size: 80%;
      span {
        margin-top: 70px;
        width: 120px;
        position: absolute;
        color: #fff;
        font-size: 17px;
      }
    }
  }
  .box-module {
    position: absolute;
    width: 994px;
    height: 978px;
    margin-left: 2%;
    margin-top: 30%;
    transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(65deg)
      rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
    z-index: -1;
    .one-pic {
      position: absolute;
      width: 400px;
      height: 400px;
      margin-top: -140%;
      margin-left: 30%;
      .outerside-one {
        position: absolute;
        width: 190%;
        height: 190%;
        margin-left: -45%;
        margin-top: -55%;
        background: url(../../../assets/images/fourth/outerFirst.png) no-repeat;
        background-size: 100%;
        animation: myMove 20s infinite linear;
      }
      .outerside-two {
        position: absolute;
        width: 180%;
        height: 180%;
        margin-left: -40%;
        margin-top: -50%;
        background: url(../../../assets/images/fourth/outerSecond.png) no-repeat;
        background-size: 100%;
        animation: myMove2 20s infinite linear;
      }
      .outerside-three {
        position: absolute;
        width: 170%;
        height: 170%;
        margin-left: -35%;
        margin-top: -40%;
        background: url(../../../assets/images/fourth/outerThird.png) no-repeat;
        background-size: 100%;
        animation: myMove2 20s infinite linear;
      }
      .outerside-four {
        position: absolute;
        width: 200%;
        height: 200%;
        margin-left: -50%;
        margin-top: -50%;
        background: url(../../../assets/images/fourth/outerFour.png) no-repeat;
        background-size: 100%;
        animation: myMove2 15s infinite linear;
      }
      .inside-one {
        position: absolute;
        width: 180%;
        height: 180%;
        margin-left: -40%;
        margin-top: -40%;
        background: url(../../../assets/images/fourth/insideFirst0.png)
          no-repeat;
        background-size: 100%;
        animation: myMove 20s infinite linear;
      }
      .shade {
        position: absolute;
        width: 200%;
        height: 200%;
        margin-left: -40%;
        margin-top: -40%;
        background: url(../../../assets/images/fourth/shade.png) no-repeat;
        background-size: 100%;
      }
    }
  }
}
// .four-module {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   //animation: changeSize 10s linear infinite alternate;
//   //border: 1px rgb(255, 11, 154) solid;
//   .box {
//     position: absolute;
//     width: 100%;
//     height: 400px;
//     margin-top: 580px;
//     z-index: 5;
//     .module-one {
//       position: absolute;
//       width: 70px;
//       height: 90px;
//       margin-left: 22%;
//       margin-top: 12%;
//       background: url(../../../assets/images/fourth/content/one.png) no-repeat;
//       background-size: 100%;
//       .cover {
//         position: absolute;
//         width: 70px;
//         height: 90px;
//         margin-top: 0px;
//         background: url(../../../assets/images/fourth/content/cover.png)
//           no-repeat;
//         background-size: 100%;
//       }
//       span {
//         position: absolute;
//         color: #fff;
//         margin-top: 68px;
//       }
//     }
//     .module-two {
//       position: absolute;
//       width: 70px;
//       height: 90px;
//       margin-left: 35%;
//       margin-top: 18%;
//       background: url(../../../assets/images/fourth/content/two.png) no-repeat;
//       background-size: 100%;
//       .cover {
//         position: absolute;
//         width: 70px;
//         height: 90px;
//         margin-top: 0px;
//         background: url(../../../assets/images/fourth/content/cover.png)
//           no-repeat;
//         background-size: 100%;
//       }
//       span {
//         width: 100px;
//         position: absolute;
//         color: #fff;
//         margin-top: 68px;
//       }
//     }
//   }
//   .four-pic {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     margin-top: 300px;
//     transform-origin: (100deg, 100deg);
//     transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(70deg)
//       rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
//     .outerside-one {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       background: url(../../../assets/images/fourth/outerFirst.png) no-repeat;
//       background-size: 100%;
//      // animation: myMove 30s infinite linear;
//     }
//     .outerside-two {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       background: url(../../../assets/images/fourth/outerSecond.png) no-repeat;
//       background-size: 100%;
//      // animation: myMove2 20s infinite linear;
//       z-index: -1;
//     }
//     .outerside-three {
//       position: absolute;
//       width: 80%;
//       height: 80%;
//       margin: 10%;
//       background: url(../../../assets/images/fourth/outerThird.png) no-repeat;
//       background-size: 100%;
//      // animation: myMove2 20s infinite linear;
//       z-index: -1;
//     }
//     .outerside-four {
//       position: absolute;
//       width: 90%;
//       height: 90%;
//       margin: 5%;
//       background: url(../../../assets/images/fourth/outerFour.png) no-repeat;
//       background-size: 100%;
//      // animation: myMove2 30s infinite linear;
//       z-index: -1;
//     }
//     .inside-one {
//       position: absolute;
//       width: 60%;
//       height: 60%;
//       margin: 21%;
//       background: url(../../../assets/images/fourth/insideFirst0.png) no-repeat;
//       background-size: 100%;
//      // animation: myMove2 30s infinite linear;
//       z-index: -1;
//     }

//     .shade {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       margin: 0%;
//       background: url(../../../assets/images/fourth/shade.png) no-repeat;
//       background-size: 100%;
//       z-index: -2;
//     }
//   }
@keyframes myMove {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes myMove2 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
@keyframes changeSize {
  0% {
    width: 100%;
  }
  50% {
    width: 96%;
    margin-left: 2%;
  }
  100% {
    width: 108%;
    margin-left: -4%;
  }
}
</style>