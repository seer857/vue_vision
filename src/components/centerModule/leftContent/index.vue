<template>
  <div class="left-box">
    <div class="pedestal">
      <a-popover placement="bottom">
        <template slot="title">
         
        </template>
        <template slot="content">
          <p>敬请期待</p>
        </template>
        <div class="xuehua"></div>
      </a-popover>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.left-box {
  width: 100%;
  height: 100%;

  .pedestal {
    position: absolute;
    width: 100px;
    height: 100px;
    transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(65deg)
      rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
    z-index: 999;
    .xuehua {
      width: 100%;
      height: 100%;
      background: url(../../../assets/images/leftContent/xuehua2.png) no-repeat;
      background-size: 100%;
      animation: myMove 2s infinite linear;
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