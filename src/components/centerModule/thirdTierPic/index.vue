<template>
  <div class="third-tier-box">
    <div class="box-content">
      <router-link :to="{name:'asset'}">
        <div class="box-one" @mouseenter="boxoneActive" @mouseleave="removeboxone" ref="boxone">
          <span>结构化数据</span>
          <div class="cover-one"></div>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-two" @mouseenter="boxtwoActive" @mouseleave="removeboxtwo" ref="boxtwo">
          <span>非结构数据</span>
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
          <span>整体计划</span>
          <div class="cover-three"></div>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-four" @mouseenter="boxfourActive" @mouseleave="removeboxfour" ref="boxfour">
          <span>里程碑</span>
          <div class="cover-four"></div>
        </div>
      </router-link>
    </div>
    <div class="box-module">
      <div class="one-pic">
        <div class="outerside-one" ref="outersideOne"></div>
        <div class="outerside-two" ref="outersideTwo"></div>
        <div class="outerside-three" ref="outersideThree"></div>
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
      let outersideOne = this.$refs.outersideOne.style
      outersideOne.animationDuration = '4s'
      let outersideTwo = this.$refs.outersideTwo.style
      outersideTwo.animationDuration = '20s'
      let outersideThree = this.$refs.outersideThree.style
      outersideThree.animationDuration = '2s'
    },
    circleDown() {
      let outersideOne = this.$refs.outersideOne.style
      outersideOne.animationDuration = '15s'
      let outersideTwo = this.$refs.outersideTwo.style
      outersideTwo.animationDuration = '30s'
      let outersideThree = this.$refs.outersideThree.style
      outersideThree.animationDuration = '20s'
    },
    boxoneActive() {
      this.$refs.boxone.style.setProperty('--mytime', '1s')
      this.circleSpeed()
    },
    removeboxone() {
      this.$refs.boxone.style.setProperty('--mytime', '')
      this.circleDown()
    },
    boxtwoActive() {
      this.$refs.boxtwo.style.setProperty('--mytime', '1s')
      this.circleSpeed()
    },
    removeboxtwo() {
      this.$refs.boxtwo.style.setProperty('--mytime', '')
      this.circleDown()
    },

    boxthreeActive() {
      this.$refs.boxthree.style.setProperty('--mytime', '1s')
      this.circleSpeed()
    },
    removeboxthree() {
      this.$refs.boxthree.style.setProperty('--mytime', '')
      this.circleDown()
    },

    boxfourActive() {
      this.$refs.boxfour.style.setProperty('--mytime', '1s')
      this.circleSpeed()
    },
    removeboxfour() {
      this.$refs.boxfour.style.setProperty('--mytime', '')
      this.circleDown()
    },
    //-------------------------
  },
}
</script>

<style lang="scss" scoped>
$time: var(--mytime);
.third-tier-box {
  position: absolute;
  width: 994px;
  height: 978px;

  .box-content {
    position: absolute;
    width: 100%;
    height: 200px;

    .box-one {
      position: absolute;
      width: 60px;
      height: 55px;
      margin-left: 30%;
      margin-top: 5%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/third/content/jiegou.png) no-repeat;
      background-size: 90%;
      span {
        margin-top: 65px;
        width: 120px;
        position: absolute;
        color: #fff;
        font-size: 16px;
      }
      .cover-one {
        position: absolute;
        width: 90px;
        height: 90px;
        margin-top: -19px;
        margin-left: -10px;
        background: url(../../../assets/images/fourth/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
    }
    .box-two {
      position: absolute;
      width: 60px;
      height: 55px;
      margin-left: 40%;
      margin-top: 0%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/third/content/feijiegou.png)
        no-repeat;
      background-size: 90%;
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
        background: url(../../../assets/images/fourth/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
    }
    .box-three {
      position: absolute;
      width: 60px;
      height: 55px;
      margin-left: 55%;
      margin-top: 0%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/third/content/zhengti.png)
        no-repeat;
      background-size: 70%;
      span {
        width: 120px;
        margin-top: 65px;
        position: absolute;
        color: #fff;
        font-size: 16px;
      }
      .cover-three {
        position: absolute;
        width: 90px;
        height: 90px;
        margin-top: -19px;
        margin-left: -10px;
        background: url(../../../assets/images/fourth/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
    }
    .box-four {
      position: absolute;
      width: 60px;
      height: 55px;
      margin-left: 68%;
      margin-top: 5%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/third/content/lichengbei.png)
        no-repeat;
      background-size: 80%;
      span {
        margin-top: 65px;
        width: 120px;
        position: absolute;
        color: #fff;
        font-size: 16px;
      }
      .cover-four {
        position: absolute;
        width: 90px;
        height: 90px;
        margin-top: -19px;
        margin-left: -10px;
        background: url(../../../assets/images/fourth/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
    }
  }
  .box-module {
    position: absolute;
    width: 994px;
    height: 178px;
    margin-top: 24%;
    margin-left: 3%;

    transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(72deg)
      rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
    z-index: -1;
    .one-pic {
      position: absolute;
      width: 400px;
      height: 400px;
      margin-top: -100%;
      margin-left: 20%;
      .outerside-one {
        position: absolute;
        width: 150%;
        height: 150%;
        margin-top: -5%;
        margin-left: -5%;
        background: url(../../../assets/images/third/red.png) no-repeat;
        background-size: 100%;
        animation: myMove2 20s infinite linear;
      }
      .outerside-two {
        position: absolute;
        width: 140%;
        height: 140%;
        background: url(../../../assets/images/third/division.png) no-repeat;
        background-size: 100%;
        animation: myMove 20s infinite linear;
      }
      .outerside-three {
        position: absolute;
        width: 150%;
        height: 150%;
        margin-top: -10%;
        margin-left: -5%;
        background: url(../../../assets/images/third/yellow.png) no-repeat;
        background-size: 100%;
        animation: myMove 20s infinite linear;
      }
      .shade {
        position: absolute;
        width: 150%;
        height: 150%;
        margin-top: -10%;
        margin-left: -5%;
        background: url(../../../assets/images/third/shade.png) no-repeat;
        background-size: 100%;
      }
    }
  }
}

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
    width: 72%;
  }
  50% {
    width: 74%;
    margin-left: 13.5%;
  }
  100% {
    width: 70%;
    margin-left: 15.5%;
  }
}

@keyframes myfirst {
  100% {
    transform: translate(0px, -10px);
  }
}
</style>