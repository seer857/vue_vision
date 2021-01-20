<template>
  <div class="first-tier-box">
    <div class="box-content">
      <router-link :to="{name:'asset'}">
        <div class="box-one">
          <span>业务报表</span>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-two">
          <span>决策分析</span>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-three">
          <span>智能营销</span>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-four">
          <span>智能租赁</span>
        </div>
      </router-link>
    </div>
    <div class="box-module">
      <div class="one-pic">
        <div class="outerside-one"></div>
        <div class="outerside-two"></div>
        <div class="shade"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.first-tier-box {
  position: absolute;
  width: 994px;
  height: 978px;
  .box-content {
    position: absolute;
    width: 100%;
    height: 200px;
    .box-one {
      position: absolute;
      width: 50px;
      height: 55px;
      margin-left: 34%;
      margin-top: 12%;
      background: url(../../../assets/images/first/content/one.png) no-repeat;
      background-size: 80%;
      span {
        margin-top: 45px;
        position: absolute;
        color: #fff;
        width: 120px;
        font-size: 16px;
      }
    }
    .box-two {
      position: absolute;
      width: 50px;
      height: 65px;
      margin-left: 43%;
      margin-top: 8%;
      background: url(../../../assets/images/first/content/two.png) no-repeat;
      background-size: 80%;
      span {
        margin-top: 65px;
        position: absolute;
        color: #fff;
         width: 120px;
        font-size: 16px;
      }
    }
    .box-three {
      position: absolute;
      width: 50px;
      height: 55px;
      margin-left: 52%;
      margin-top: 9%;
      background: url(../../../assets/images/first/content/three.png) no-repeat;
      background-size: 90%;
      span {
        margin-top: 55px;
        position: absolute;
        color: #fff;
         width: 120px;
        font-size: 16px;
      }
    }
    .box-four {
      position: absolute;
      width: 50px;
      height: 55px;
      margin-left: 61.5%;
      margin-top: 12%;
      background: url(../../../assets/images/first/content/four.png) no-repeat;
      background-size: 80%;
      span {
        margin-top: 50px;
        position: absolute;
        color: #fff;
        width: 120px;
        font-size: 16px;
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
// .one-module {
//   width: 994px;
//   height: 978px;
//   border: springgreen 1px solid;
//   transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(73deg)
//     rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
//   .one-pic {
//     position: absolute;
//     width: 400px;
//     height: 400px;
//     margin-top: -100%;
//     margin-left: 30%;

//     .outerside-one {
//       position: absolute;
//       width: 110%;
//       height: 110%;
//       margin-left: -5%;
//       margin-top: -5%;
//       background: url(../../../assets/images/first/red.png) no-repeat;
//       background-size: 100%;
//       animation: myMove2 20s infinite linear;
//     }
//     .outerside-two {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       background: url(../../../assets/images/first/ziquan.png) no-repeat;
//       background-size: 100%;
//       //animation: myMove2 20s infinite linear;
//     }
//     .shade {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       background: url(../../../assets/images/first/zhezhao.png) no-repeat;
//       background-size: 100%;
//       opacity: 0.8;
//     }
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
</style>