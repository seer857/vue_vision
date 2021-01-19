<template>
  <div class="three-module">
    <div class="box">
      <div class="module-one"></div>
      <div class="module-two"></div>
    </div>

    <div class="three-pic">
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
.three-module {
  position: absolute;
  width: 72%;
  height: 72%;
  margin-left: 14.5%;
  margin-top: 25%;
  animation: changeSize 10s infinite linear alternate;
  transform-origin: (100deg, 100deg);
  transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(73deg)
    rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
  .three-pic {
    position: absolute;
    width: 100%;
    height: 100%;
    .outerside-one {
      position: absolute;
      width: 90%;
      height: 90%;
      margin-left: 5%;
      margin-top: 5%;
      background: url(../../../assets/images/third/division.png) no-repeat;
      background-size: 100%;
      animation: myMove 15s infinite linear;
    }
    .outerside-two {
      position: absolute;

      width: 100%;
      height: 100%;
      background: url(../../../assets/images/third/red.png) no-repeat;
      background-size: 100%;
      animation: myMove2 15s infinite linear;
    }
    .outerside-three {
      position: absolute;
      width: 100%;
      height: 100%;
      background: url(../../../assets/images/third/yellow.png) no-repeat;
      background-size: 100%;
      animation: myMove 10s infinite linear;
    }
    .shade{
      position: absolute;

      width: 100%;
      height: 100%;
      background: url(../../../assets/images/third/shade.png) no-repeat;
      background-size: 100%;
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
  50%{
    width: 74%;
     margin-left: 13.5%;
  }
  100%{
    width: 70%;
    margin-left: 15.5%;
  }
}
</style>