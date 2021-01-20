<template>
  <div class="first-tier-box">
    <!--   <div class="box">
      <div class="module-one">
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
    <div class="two-pic">
      <div class="outerside-one"></div>
      <div class="outerside-two"></div>
      <div class="shade"></div>
    </div>-->
    <div class="box-content">
      <router-link :to="{name:'asset'}">
        <div class="box-one" @mouseenter="boxoneActive" @mouseleave="removeboxone" ref="boxone">
          <span>数据建模</span>
          <div class="cover-one"></div>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-two" @mouseenter="boxtwoActive" @mouseleave="removeboxtwo" ref="boxtwo">
          <span>数据获取</span>
          <div class="cover-two"></div>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div
          class="box-three"
          @mouseenter="boxthreeActive"
          @mouseleave="removeboxthree"
          ref="boxthree"
        >
          <span>数据开发</span>
          <div class="cover-three"></div>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-four" @mouseenter="boxfourActive" @mouseleave="removeboxfour" ref="boxfour">
          <span>数据运维</span>
          <div class="cover-four"></div>
        </div>
      </router-link>
    </div>
    <div class="box-module">
      <div class="one-pic">
        <div class="outerside-one" ref="outersideOne"></div>
        <div class="outerside-two" ref="outersideTwo"></div>
        <div class="shade"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    //--------------------------
    circleSpeed() {
      let outersideTwo = this.$refs.outersideTwo.style
      outersideTwo.animationDuration = '1s'
    },
    circleDown() {
      let outersideTwo = this.$refs.outersideTwo.style
      outersideTwo.animationDuration = '20s'
    },
    boxoneActive() {
      let boxone = this.$refs.boxone.style.setProperty('--mytime', '1s')
      this.circleSpeed()
    },
    removeboxone() {
      let boxone = this.$refs.boxone.style.setProperty('--mytime', '')
      this.circleDown()
    },
    boxtwoActive() {
      let boxtwo = this.$refs.boxtwo.style.setProperty('--mytime', '1s')
      this.circleSpeed()
    },
    removeboxtwo() {
      let boxtwo = this.$refs.boxtwo.style.setProperty('--mytime', '')
      this.circleDown()
    },

    boxthreeActive() {
      let boxthree = this.$refs.boxthree.style.setProperty('--mytime', '1s')
      this.circleSpeed()
    },
    removeboxthree() {
      let boxthree = this.$refs.boxthree.style.setProperty('--mytime', '')
      this.circleDown()
    },

    boxfourActive() {
      let boxfour = this.$refs.boxfour.style.setProperty('--mytime', '1s')
      this.circleSpeed()
    },
    removeboxfour() {
      let boxfour = this.$refs.boxfour.style.setProperty('--mytime', '')
      this.circleDown()
    },

    //-------------------------
  },
}
</script>

<style lang="scss" scoped>
$time: var(--mytime);
.first-tier-box {
  position: absolute;
  width: 994px;
  height: 978px;

  .box-content {
    position: absolute;
    width: 100%;
    height: 200px;
    margin-top: 3%;
    .box-one {
      position: absolute;
      width: 50px;
      height: 55px;
      margin-left: 32%;
      margin-top: 6%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/second/content/jianmo.png)
        no-repeat;
      background-size: 100%;
      span {
        margin-top: 65px;
        position: absolute;
        color: #fff;
        width: 120px;
        font-size: 16px;
      }
      .cover-one {
        position: absolute;
        width: 90px;
        height: 90px;
        margin-top: -19px;
        margin-left: -10px;
        background: url(../../../assets/images/second/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
    }
    .box-two {
      position: absolute;
      width: 50px;
      height: 55px;
      margin-left: 42%;
      margin-top: 3%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/second/content/huoqu.png) no-repeat;
      background-size: 100%;
      span {
        margin-top: 65px;
        position: absolute;
        color: #fff;
        width: 120px;
        font-size: 16px;
      }
      .cover-two {
        position: absolute;
        width: 90px;
        height: 90px;
        margin-top: -19px;
        margin-left: -10px;
        background: url(../../../assets/images/second/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
    }
    .box-three {
      position: absolute;
      width: 50px;
      height: 55px;
      margin-left: 53%;
      margin-top: 3%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/second/content/kaifa.png) no-repeat;
      background-size: 100%;
      span {
        margin-top: 65px;
        position: absolute;
        color: #fff;
        width: 120px;
        font-size: 16px;
      }
      .cover-three {
        position: absolute;
        width: 100px;
        height: 100px;
        margin-top: -19px;
        margin-left: -10px;
        background: url(../../../assets/images/second/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
    }
    .box-four {
      position: absolute;
      width: 50px;
      height: 55px;
      margin-left: 63%;
      margin-top: 6%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/second/content/yunwei.png)
        no-repeat;
      background-size: 100%;
      span {
        margin-top: 65px;
        position: absolute;
        color: #fff;
        width: 120px;
        font-size: 16px;
      }
      .cover-four {
        position: absolute;
        width: 90px;
        height: 90px;
        margin-top: -19px;
        margin-left: -10px;
        background: url(../../../assets/images/second/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
    }
  }
  .box-module {
    position: absolute;
    width: 994px;
    height: 200px;
    margin-top: 40%;
    margin-left: 1%;
    transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(73deg)
      rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
    z-index: -1;
    .one-pic {
      position: absolute;
      width: 400px;
      height: 400px;
      margin-top: -135%;
      margin-left: 30%;
      .outerside-one {
        position: absolute;
        width: 110%;
        height: 110%;
        margin-left: -5%;
        margin-top: -5%;
        background: url(../../../assets/images/second/lanquan.png) no-repeat;
        background-size: 100%;
        //animation: myMove2 20s infinite linear;
      }
      .outerside-two {
        position: absolute;
        width: 120%;
        height: 120%;
        margin-left: -10%;
        margin-top: -10%;
        background: url(../../../assets/images/second/yellow.png) no-repeat;
        background-size: 100%;
        animation: myMove 20s infinite linear;
      }
      .shade {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(../../../assets/images/second/zhezhao.png) no-repeat;
        background-size: 100%;
        opacity: 0.8;
      }
    }
  }
}
// .two-module {
//   width: 55%;
//   height: 55%;
//   margin-left: 23%;
//   margin-top: 13%;
//   animation: changeSize 15s linear infinite alternate;
//   transform-origin: (100deg, 100deg);
//   transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(75deg)
//     rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
//   .two-pic {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     .outerside-one {
//       position: absolute;
//       width: 90%;
//       height: 90%;
//       margin-top: 5%;
//       margin-left: 5%;
//       background: url(../../../assets/images/second/lanquan.png) no-repeat;
//       background-size: 100%;
//       animation: myMove2 20s infinite linear;
//     }
//     .outerside-two {
//       position:absolute;
//       width: 100%;
//       height: 100%;
//       background: url(../../../assets/images/second/yellow.png) no-repeat;
//       background-size: 100%;
//       animation: myMove2 20s infinite linear;
//     }
//     .shade {
//       position:absolute;
//       width: 90%;
//       height: 90%;
//       margin-top: 5%;
//       margin-left: 5%;
//       background: url(../../../assets/images/second/zhezhao.png) no-repeat;
//       background-size: 100%;
//       opacity: 0.8;
//     }
//   }
//   .box{
//     position: absolute;
//     width: 100%;
//     height: 200px;
//     // .module-one{
//     //   position: absolute;
//     //   width: 70px;
//     //   height: 90px;
//     //   background: url(../../../assets/images/fourth/content/one.png) no-repeat;
//     //   background-size: 100%;
//     // }
//   }
// }

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
    width: 55%;
  }
  50% {
    width: 59%;
    margin-left: 20%;
  }
  100% {
    width: 51%;
    margin-left: 24%;
  }
}
@keyframes myfirst {
  100% {
    transform: translate(0px, -10px);
  }
}
</style>