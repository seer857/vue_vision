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
        <div class="box-one">
          <span>数据建模</span>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-two">
          <span>数据获取</span>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-three">
          <span>数据开发</span>
        </div>
      </router-link>
      <router-link :to="{name:'asset'}">
        <div class="box-four">
          <span>数据运维</span>
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
  .box-one {
    position: absolute;
    width: 50px;
    height: 55px;
    margin-left: 32%;
    margin-top: 6%;
    background: url(../../../assets/images/second/content/jianmo.png) no-repeat;
    background-size: 100%;
    span {
      margin-top: 65px;
      position: absolute;
      color: #fff;
      width: 120px;
      font-size: 16px;
    }
  }
  .box-two {
    position: absolute;
    width: 50px;
    height: 55px;
    margin-left: 42%;
    margin-top: 3%;
    background: url(../../../assets/images/second/content/huoqu.png) no-repeat;
    background-size: 100%;
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
    margin-left: 53%;
    margin-top: 3%;
    background: url(../../../assets/images/second/content/kaifa.png) no-repeat;
    background-size: 100%;
    span {
      margin-top: 65px;
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
    margin-left: 63%;
    margin-top: 6%;
    background: url(../../../assets/images/second/content/yunwei.png) no-repeat;
    background-size: 100%;
    span {
      margin-top: 65px;
      position: absolute;
      color: #fff;
     width: 120px;
      font-size: 16px;
    }
  }
  .box-module {
    position: absolute;
    width: 994px;
    height: 978px;
    margin-top: 10%;
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
        animation: myMove2 20s infinite linear;
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
</style>