<template>
  <div class="two-module">
    <div class="box"></div>
    <div class="two-pic">
      <div class="outerside-one"></div>
      <div class="outerside-two"></div>
      <div class="shade"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.two-module {
  width: 55%;
  height: 55%;

  margin-left: 23%;
  margin-top: 13%;
  animation: changeSize 15s linear infinite alternate;
  transform-origin: (100deg, 100deg);
  transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(75deg)
    rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
  .two-pic {
    position: absolute;
    width: 100%;
    height: 100%;
    .outerside-one {
      position: absolute;
      width: 90%;
      height: 90%;
      margin-top: 5%;
      margin-left: 5%;
      background: url(../../../assets/images/second/lanquan.png) no-repeat;
      background-size: 100%;
      animation: myMove2 20s infinite linear;
    }
    .outerside-two {
      position:absolute;
      width: 100%;
      height: 100%;
      background: url(../../../assets/images/second/yellow.png) no-repeat;
      background-size: 100%;
      animation: myMove2 20s infinite linear;
    }
    .shade {
      position:absolute;
      width: 90%;
      height: 90%;
      margin-top: 5%;
      margin-left: 5%;
      background: url(../../../assets/images/second/zhezhao.png) no-repeat;
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

@keyframes changeSize {
  0% {
    width: 55%;

  }
  50%{
    width: 59%;
     margin-left: 20%;
  }
  100%{
    width: 51%;
    margin-left: 24%;
  }
}
</style>