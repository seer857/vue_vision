<!-- 第四层 动画部分  -->
<template>
  <div class="four-module">
    <div class="box">
      <div class="module-one" @click="onAsset">
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
    <div class="four-pic">
      <div class="outerside-one"></div>
      <div class="outerside-two"></div>
      <div class="outerside-three"></div>
      <div class="outerside-four"></div>
      <div class="inside-one"></div>
      <div class="inside-two"></div>
      <div class="shade"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tag: false,
    }
  },
  methods: {
    onAsset() {
      this.$emit('getShow', this.tag)
    },
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
}
</script>
<style lang='scss' scoped>
.four-module {
  width: 100%;
  height: 100%;
  .box {
    position: absolute;
    width: 100%;
    height: 400px;
    margin-top: 300px;
    border: solid 1px steelblue;
    z-index: 5;
    .module-one {
      position: absolute;
      width: 70px;
      height: 90px;
      margin-left: 22%;
      margin-top: 12%;
      background: url(../../../assets/images/fourth/content/one.png) no-repeat;
      background-size: 100%;
      .cover {
        position: absolute;
        width: 70px;
        height: 90px;
        margin-top: 0px;
        background: url(../../../assets/images/fourth/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
      span {
        position: absolute;
        color: #fff;
        margin-top: 68px;
      }
    }
    .module-two{
      position: absolute;
      width: 70px;
      height: 90px;
      margin-left: 35%;
      margin-top: 18%;
      background: url(../../../assets/images/fourth/content/two.png) no-repeat;
      background-size: 100%;
      .cover {
        position: absolute;
        width: 70px;
        height: 90px;
        margin-top: 0px;
        background: url(../../../assets/images/fourth/content/cover.png)
          no-repeat;
        background-size: 100%;
      }
       span {
        width: 100px;
        position: absolute;
        color: #fff;
        margin-top: 68px;
      }
    }
  }
  .four-pic {
    width: 100%;
    height: 100%;
    margin-top: 300px;
    border: thistle 1px solid;
    transform-origin: (100deg, 100deg);
    transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1) rotateX(70deg)
      rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
    .outerside-one {
      position: absolute;
      width: 100%;
      height: 100%;
      background: url(../../../assets/images/fourth/outerFirst.png) no-repeat;
      background-size: 100%;
      animation: myMove 30s infinite linear;
    }
    .outerside-two {
      position: absolute;
      width: 100%;
      height: 100%;
      background: url(../../../assets/images/fourth/outerSecond.png) no-repeat;
      background-size: 100%;
      animation: myMove2 20s infinite linear;
      z-index: -1;
    }
    .outerside-three {
      position: absolute;
      width: 80%;
      height: 80%;
      margin: 10%;
      background: url(../../../assets/images/fourth/outerThird.png) no-repeat;
      background-size: 100%;
      animation: myMove2 20s infinite linear;
      z-index: -1;
    }
    .outerside-four {
      position: absolute;
      width: 90%;
      height: 90%;
      margin: 5%;
      background: url(../../../assets/images/fourth/outerFour.png) no-repeat;
      background-size: 100%;
      animation: myMove2 30s infinite linear;
      z-index: -1;
    }
    .inside-one {
      position: absolute;
      width: 60%;
      height: 60%;
      margin: 21%;
      background: url(../../../assets/images/fourth/insideFirst.png) no-repeat;
      background-size: 100%;
      animation: myMove2 30s infinite linear;
      z-index: -1;
    }
    .inside-two {
      position: absolute;
      width: 30%;
      height: 30%;
      margin: 36%;
      background: url(../../../assets/images/fourth/insideSecond.png) no-repeat;
      background-size: 100%;
      z-index: -1;
    }
    .shade {
      position: fixed;
      width: 100%;
      height: 100%;
      margin: 0%;
      background: url(../../../assets/images/fourth/shade.png) no-repeat;
      background-size: 100%;
      z-index: -2;
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