<template>
  <div class="one-module">
    <div class="box">
       <div class="module-one" >
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
    <div class="one-pic">
      <div class="outerside-one"></div>
      <div class="outerside-two"></div>
      <div class="outerside-three"></div>
      <div class="shade"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.one-module {
  width: 40%;
  height: 40%;
  margin-left: 30%;
  margin-top: 3%;
  transform-origin: (100deg, 100deg);
  transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(73deg)
    rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
  .one-pic {
    position: absolute;
    width: 100%;
    height: 100%;
    .outerside-one {
      position: absolute;
      width: 100%;
      height: 100%;
      background: url(../../../assets/images/first/ziquan.png) no-repeat;
      background-size: 100%;
    }
    .outerside-two {
      position: absolute;
      width: 110%;
      height: 110%;
      margin-left: -5%;
      margin-top: -5%;
      background: url(../../../assets/images/first/red.png) no-repeat;
      background-size: 100%;
      animation: myMove2 20s infinite linear;
    }
    .shade {
      position: absolute;
      width: 100%;
      height: 100%;
      background: url(../../../assets/images/first/zhezhao.png) no-repeat;
      background-size: 100%;
      opacity: 0.8;
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
</style>