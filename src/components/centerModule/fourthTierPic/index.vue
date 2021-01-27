<!-- 第四层 动画部分  -->
<template>
  <div class="four-tier-box">
    <div class="box-content">
<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->    

      <router-link :to="{name:'asset'}" >
        <div class="box-one"
         @click="fourGetOne"
         @mouseenter="boxoneActive" @mouseleave="removeboxone"
          ref="boxone">
          <span>资产盘点</span>
          <div class="cover-one"></div>
        </div>
      </router-link>
<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
      <router-link :to="{name:'research'}" >
        <div  class="box-two" 
         @click="fourGetTwo"
        @mouseenter="boxtwoActive" @mouseleave="removeboxtwo"
         ref="boxtwo">
          <span>研发明细</span>
          <div class="cover-two"></div>
        </div>
      </router-link>
<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->      
      <router-link :to="{name:'buyer'}">
        <div
          class="box-three"
          @mouseenter="boxthreeActive"
          @mouseleave="removeboxthree"
          ref="boxthree"
        >
          <span>采购计划</span>
          <div class="cover-three"></div>
        </div>
      </router-link>

      <router-link :to="{name:'market'}">
        <div class="box-four" @mouseenter="boxfourActive" @mouseleave="removeboxfour" ref="boxfour">
          <span>营销分析</span>
          <div class="cover-four"></div>
        </div>
      </router-link>
      <router-link :to="{name:'brand'}">
        <div class="box-five" @mouseenter="boxfivActive" @mouseleave="removeboxfiv" ref="boxfiv">
          <span>品质运营</span>
          <div class="cover-five"></div>
        </div>
      </router-link>
    </div>
    <div class="box-module">
      <div class="one-pic">
        <div class="outerside-one" ref="outersideOne"></div>
        <div class="outerside-two" ref="outersideTwo"></div>
        <div class="outerside-three" ref="outersideThree"></div>
        <div class="outerside-four" ref="outersideFour"></div>
        <div class="inside-one" ref="insideOne"></div>
        <div class="shade"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      //  oneName: "资源盘点：" ,
      //  oneData: 8000,
      //  twoName:'数栈计算引擎:',
      //  twoData:6666,
        arrFilipOne:{//资产盘点数据
            one:['1','7','8','5','5','6','3'],
            two:['"资"','"源"','"元"'],
            three:["资源盘点："],
            four:[8333333]
        },
      arrFilipTwo:{//研发明细
            one:['6','5','6','3','2','1','2'],
            two:['"研"','"发"','"元"'],
            three:["研发明细"],
            four:[99932222]
        },
    }
  },
  methods: {
  //---------------获取自己组件数据G传给父组件-----------------------------
    fourGetOne(){
      this.$store.commit("updataForthOneValue",{forthValues:this.arrFilipOne})
    },
    fourGetTwo(){
     this.$store.commit("updataForthOneValue",{forthValues:this.arrFilipTwo})
      // console.log(this.$store.state)
    },
//--------------------------------------------

//--------------------------
    circleSpeed() {
      let outersideThree = this.$refs.outersideThree.style
      outersideThree.animationDuration = '10s'
      let outersideFour = this.$refs.outersideFour.style
      outersideFour.animationDuration = '3s'
      let insideOne = this.$refs.insideOne.style
      insideOne.animationDuration = '3s'
    },
    circleDown() {
      let outersideOne = this.$refs.outersideOne.style
      outersideOne.animationDuration = '30s'
      let outersideThree = this.$refs.outersideThree.style
      outersideThree.animationDuration = '30s'
      let outersideFour = this.$refs.outersideFour.style
      outersideFour.animationDuration = '30s'
      let insideOne = this.$refs.insideOne.style
      insideOne.animationDuration = '20s'
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

    boxfivActive() {
      this.$refs.boxfiv.style.setProperty('--mytime', '1s')
      this.circleSpeed()
    },
    removeboxfiv() {
      this.$refs.boxfiv.style.setProperty('--mytime', '')
      this.circleDown()
    },
    //-------------------------
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
}
</script>
<style lang='scss' scoped>
$time: var(--mytime);
.four-tier-box {
  position: absolute;
  width: 994px;
  height: 978px;
  //animation: changeSize 2s infinite linear alternate;
  .box-content {
    position: absolute;
    width: 100%;
    height: 200px;
    margin-top: -3%;
    .box-one {
      position: absolute;
      width: 70px;
      height: 75px;
      margin-left: 30%;
      margin-top: 3%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/fourth/content/one.png) no-repeat;
      background-size: 90%;
      span {
        margin-top: 70px;
        position: absolute;
        color: #fff;
        font-size: 17px;
      }
      .cover-one {
        position: absolute;
        width: 110px;
        height: 110px;
        margin-top: -19px;
        margin-left: -10px;
        background: url(../../../assets/images/fourth/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
    }
    .box-two {
      position: absolute;
      width: 70px;
      height: 75px;
      margin-left: 40%;
      margin-top: 9%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/fourth/content/two.png) no-repeat;
      background-size: 90%;
      span {
        width: 120px;
        margin-top: 70px;
        position: absolute;
        color: #fff;
        font-size: 17px;
      }
      .cover-two {
        position: absolute;
        width: 110px;
        height: 110px;
        margin-top: -19px;
        margin-left: -10px;
        background: url(../../../assets/images/fourth/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
    }
    .box-three {
      position: absolute;
      width: 70px;
      height: 75px;
      margin-left: 48%;
      margin-top:0%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/fourth/content/three.png) no-repeat;
      background-size: 90%;
      span {
        margin-top: 70px;
        position: absolute;
        color: #fff;
        font-size: 17px;
      }
      .cover-three {
        position: absolute;
        width: 110px;
        height: 110px;
        margin-top: -19px;
        margin-left: -10px;
        background: url(../../../assets/images/fourth/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
    }
    .box-four {
      position: absolute;
      width: 70px;
      height: 75px;
      margin-left: 58%;
      margin-top: 9%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/fourth/content/four.png) no-repeat;
      background-size: 90%;
      span {
        margin-top: 70px;
        width: 120px;
        position: absolute;
        color: #fff;
        font-size: 17px;
      }
      .cover-four {
        position: absolute;
        width: 110px;
        height: 110px;
        margin-top: -19px;
        margin-left: -10px;
        background: url(../../../assets/images/fourth/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
    }
    .box-five {
      position: absolute;
      width: 70px;
      height: 75px;
      margin-left: 68%;
      margin-top: 3%;
      animation: myfirst $time infinite linear alternate;
      background: url(../../../assets/images/fourth/content/five.png) no-repeat;
      background-size: 80%;
      span {
        margin-top: 70px;
        width: 120px;
        position: absolute;
        color: #fff;
        font-size: 17px;
      }
      .cover-five {
        position: absolute;
        width: 110px;
        height: 110px;
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
    height: 200px;
    margin-left: 2%;
    margin-top: 50%;
    transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(65deg)
      rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
    //animation: changeSize 2s infinite linear alternate;
    z-index: -1;
    .one-pic {
      position: absolute;
      width: 400px;
      height: 400px;
      margin-top: -140%;
      margin-left: 30%;
      animation: changeSize 2s infinite linear alternate;
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
    width: 40%;
     margin-left: 30%;
  }
  100% {
    width: 42%;
     margin-left: 29%;


  }
}

@keyframes myfirst {
  100% {
    transform: translate(0px, -10px);
  }
}
</style>