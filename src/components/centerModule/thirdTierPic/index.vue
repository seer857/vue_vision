<template>
  <div class="third-tier-box">
    <!--  <div class="box">
      <div class="module-one"></div>
      <div class="module-two"></div>
    </div>

    <div class="three-pic">
      <div class="outerside-one"></div>
      <div class="outerside-two"></div>
      <div class="outerside-three"></div>
      <div class="shade"></div>
    </div>-->
    <div class="box-content">
      <router-link :to="{name:'asset'}">
        <div class="box-one">
          <span>结构化数据</span>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-two">
          <span>非结构数据</span>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-three">
          <span>整体计划</span>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-four">
          <span>里程碑</span>
        </div>
      </router-link>
    </div>
    <div class="box-module">
      <div class="one-pic">
        <div class="outerside-one"></div>
        <div class="outerside-two"></div>
        <div class="outerside-three"></div>
        <div class="shade"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
      background: url(../../../assets/images/third/content/jiegou.png) no-repeat;
      background-size: 90%;
      span {
        margin-top: 65px;
        width: 120px;
        position: absolute;
        color: #fff;
        font-size: 16px;
      }
    }
    .box-two {
      position: absolute;
      width: 60px;
      height: 55px;
      margin-left: 40%;
      margin-top: 0%;
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
    }
    .box-three {
      position: absolute;
      width: 60px;
      height: 55px;
      margin-left: 55%;
      margin-top: 0%;
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
    }
    .box-four {
      position: absolute;
      width: 60px;
      height: 55px;
      margin-left: 68%;
      margin-top: 5%;
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
    }
  }
  .box-module {
    position: absolute;
    width: 994px;
    height: 978px;
    margin-top: 5%;
    margin-left: 3%;
    transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(68deg)
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
        animation: myMove 20s infinite linear;
      }
      .outerside-two {
        position: absolute;
        width: 140%;
        height: 140%;
        background: url(../../../assets/images/third/division.png) no-repeat;
        background-size: 100%;
        animation: myMove2 20s infinite linear;
      }
      .outerside-three {
        position: absolute;
        width: 150%;
        height: 150%;
        margin-top: -10%;
        margin-left: -5%;
        background: url(../../../assets/images/third/yellow.png) no-repeat;
        background-size: 100%;
        animation: myMove 15s infinite linear;
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
// .three-module {
//   position: absolute;
//   width: 72%;
//   height: 72%;
//   margin-left: 14.5%;
//   margin-top: 25%;
//   animation: changeSize 10s infinite linear alternate;
//   transform-origin: (100deg, 100deg);
//   transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(73deg)
//     rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
//   .three-pic {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     .outerside-one {
//       position: absolute;
//       width: 90%;
//       height: 90%;
//       margin-left: 5%;
//       margin-top: 5%;
//       background: url(../../../assets/images/third/division.png) no-repeat;
//       background-size: 100%;
//       animation: myMove 15s infinite linear;
//     }
//     .outerside-two {
//       position: absolute;

//       width: 100%;
//       height: 100%;
//       background: url(../../../assets/images/third/red.png) no-repeat;
//       background-size: 100%;
//       animation: myMove2 15s infinite linear;
//     }
//     .outerside-three {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       background: url(../../../assets/images/third/yellow.png) no-repeat;
//       background-size: 100%;
//       animation: myMove 10s infinite linear;
//     }
//     .shade{
//       position: absolute;

//       width: 100%;
//       height: 100%;
//       background: url(../../../assets/images/third/shade.png) no-repeat;
//       background-size: 100%;
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
</style>