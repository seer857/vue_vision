<template>
  <div class="home-container">
    <video src="../assets/videos/backdrop.mp4" autoplay="autoplay" loop="loop" muted="muted"></video>
    <div class="warp">
      <div class="top">
        <dv-decoration-10 class="top-line" :color="['#b634da','#00c2ff']" />
        <h1>
          <span>爱玛科技集团公司数据中台展示</span>
        </h1>
      </div>
      <div class="content-box">
        <section class="main">
          <div class="left" v-if="!isShow">
            <LeftModule />
          </div>
          <div class="center" >
            <CenterModule v-on:againSend="getContentShow" />
          </div>
          <div class="right" v-if="!isShow">
            <RightModule />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import CenterModule from '../components/centerModule/index.vue'
import LeftModule from '../components/leftModule/index.vue'
import RightModule from '../components/rightModule/index.vue'
export default {
  name: 'Home',
  components: {
    CenterModule,
    LeftModule,
    RightModule
  },
  data(){
    return{
      isShow:false
    }
  },
  methods:{
    getContentShow(data){
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
$absolute: absolute;
.home-container {
  position: $absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  video {
    position: $absolute;
    z-index: -1;
  }
  .warp {
    transform-origin: 0px 0px 0px;
  }
  .top {
    position: $absolute;
    left: 0%;
    top: 0%;
    width: 1920px;
    height: 100px;
    background: url(../assets/images/top_nav.png) no-repeat;
    background-size: 100%;
    border: none;
    overflow: hidden;
    .top-line {
      width: 100%;
      height: 5px;
    }
    h1 {
      height: 80px;
      position: relative;
      line-height: 30px;
      font-size: 30px;
      text-align: center;
      color: #b634da;
      z-index: 999;
      background-image: -webkit-gradient(
        linear,
        0 0,
        0 bottom,
        from(#8ef7fa),
        to(#b634da)
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .content-box {
    position: $absolute;
    width: 100%;
    height: 1078px;
    .main {
      position: $absolute;
      margin-top: 100px;
      width: 100%;
      height: 978px;
    }
    .left {
      position: relative;
      width: 450px;
      height: 978px;
      border: 1px springgreen solid;
      float: left;
    }
    .center {
      position: absolute;
      margin-left: 460px;
      width: 994px;
      height: 978px;
      border: 1px springgreen solid;
      animation: domCenterMove 20s infinite linear alternate;
    }
    .right {
      position: relative;
      width: 450px;
      height: 978px;
      border: 1px red solid;
      float: right;
    }
  }
}

@keyframes domCenterMove {
  0% {
    margin-left: 460px;
    width: 994px;
  }
  50% {
    margin-left: 550px;
    width: 824px;
  }
  100% {
    margin-left: 370px;
    width: 1164px;
  }
}
</style>
