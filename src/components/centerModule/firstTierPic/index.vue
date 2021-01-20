<template>
  <div class="first-tier-box">
    <div class="box-content">
      <router-link :to="{name:'asset'}">
        <div class="box-one" @mouseenter="boxActive" @mouseleave="removeBox" ref="boxone">
          <img src="@/assets/images/first/content/one.png" alt />
          <span>业务报表</span>
          <div class="cover-one"></div>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-two" @mouseenter="boxtwoActive" @mouseleave="removeboxtwo" ref="boxtwo">
          <span>决策分析</span>
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
          <span>智能营销</span>
          <div class="cover-three"></div>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-four" @mouseenter="boxfourActive" @mouseleave="removeboxfour" ref="boxfour">
          <span>智能租赁</span>
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
    circleSpeed() {
      let outersideOne = this.$refs.outersideOne.style
      outersideOne.animationDuration = '1s'
    },
    circleDown() {
      let outersideOne = this.$refs.outersideOne.style
      outersideOne.animationDuration = '20s'
    },
    boxActive() {
      this.$refs.boxone.style.setProperty('--mytime', '1s')
      this.circleSpeed()
    },
    removeBox() {
      this.$refs.boxone.style.setProperty('--mytime', '')
      this.circleDown()
    },

    boxtwoActive() {
      //  $event.currentTarget.className = 'third-slow';
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
.first-tier-box {
  $time: var(--mytime);
  position: absolute;
  width: 994px;
  height: 978px;
  margin-top: 5%;
  .box-content {
    position: absolute;
    width: 100%;
    height: 200px;
    .box-one {
      position: absolute;
      width: 50px;
      height: 55px;
      margin-left: 36%;
      margin-top: 12%;
      animation: myfirst $time infinite linear alternate;
      img {
        position: absolute;
        width: 80%;
        height: 80%;
      }
      span {
        margin-top: 45px;
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
      height: 65px;
      margin-left: 45%;
      margin-top: 9%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/first/content/two.png) no-repeat;
      background-size: 70%;
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
      margin-left: 54%;
      margin-top: 10%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/first/content/three.png) no-repeat;
      background-size: 80%;
      span {
        margin-top: 55px;
        position: absolute;
        color: #fff;
        width: 120px;
        font-size: 16px;
      }
      .cover-three {
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
    .box-four {
      position: absolute;
      width: 50px;
      height: 55px;
      margin-left: 62%;
      margin-top: 12%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/first/content/four.png) no-repeat;
      background-size: 80%;
      span {
        margin-top: 50px;
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
    height: 978px;
    margin-top: 6%;
    margin-left: 3%;
    transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(73deg)
      rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
    z-index: -1;
    .one-pic {
      position: absolute;
      width: 400px;
      height: 400px;
      margin-top: -100%;
      margin-left: 30%;
      .outerside-one {
        position: absolute;
        width: 100%;
        height: 100%;
        margin-left: -5%;
        margin-top: -5%;
        background: url(../../../assets/images/first/red.png) no-repeat;
        background-size: 100%;
        animation: myMove2 20s infinite linear;
      }
      .outerside-two {
        position: absolute;
        width: 90%;
        height: 90%;
        background: url(../../../assets/images/first/ziquan.png) no-repeat;
        background-size: 100%;
        //animation: myMove2 20s infinite linear;
      }
      .shade {
        position: absolute;
        width: 90%;
        height: 90%;
        background: url(../../../assets/images/first/zhezhao.png) no-repeat;
        background-size: 100%;
        opacity: 0.8;
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
@keyframes myfirst {
  100% {
    transform: translate(0px, -5px);
  }
}
</style>