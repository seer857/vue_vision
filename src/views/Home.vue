<template>
  <dv-full-screen-container class="home-container" v-cloak>
    <video src="../assets/videos/backdrop.mp4" autoplay="autoplay" loop="loop" muted="muted"></video>
   <!--   <transition name="dynamicOff">
      <Loading class="load" v-if="!find" />
    </transition> -->
    <transition name="dynamicOn">
      <div class="warp" v-if="find" @click="routerBack">
        <div class="top">
          <dv-decoration-10 class="top-line" :color="['#b634da','#00c2ff']" />
          <h1>
            <span>爱玛集团公司数据中台架构大屏</span>
          </h1>
        </div>
        <transition name="dynamicOnCenter">
        <div class="content-box">
          <section class="main">
            <div class="left" v-if="isShow">
              <LeftModule />
            </div>
            <div class="left" v-if="!isShow">
              <DefaultLeft />
            </div>
            <div class="center" ref="ModuleCenter">
              
                <CenterModule v-on:againSend="getContentShow" v-if="findCenter" />
             
            </div>
            <div class="right" v-if="isShow">
              <RightModule />
            </div>
            <div class="right" v-if="!isShow">
              <DefaultRight />
            </div>
          </section>
        </div>
         </transition>
      </div>
    </transition>
  </dv-full-screen-container>
</template>

<script>
import CenterModule from '../components/centerModule/index.vue'
import LeftModule from '../components/leftModule/index.vue'
import RightModule from '../components/rightModule/index.vue'
import Loading from '../components/centerModule/loading.vue'
import DefaultLeft from '../components/leftModule/default.vue'
import DefaultRight from '../components/rightModule/default.vue'
export default {
  name: 'Home',
  components: {
    CenterModule,
    LeftModule,
    RightModule,
    Loading,
    DefaultLeft,
    DefaultRight
  },
  data() {
    return {
      isShow: false,
      find: true,
      findCenter: true,
    }
  },
  mounted() {
    //this.loading()
  },
  methods: {
    loading() {
      setTimeout(() => {
        this.find = !this.find
        setTimeout(() => {
          this.findCenter = !this.findCenter
        }, 1000)
      }, 5000)
    },
    getContentShow(data) {
      this.isShow = data
    },
    routerBack(){
     
    }
  },
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
 // background: url(../assets/images/bj.jpg) no-repeat;
 // background-size: 100%;
  video {
    width: 100%;
    height: 100%;
    margin: 0;
    position: $absolute;
    z-index: -1;
  }
  .dynamicOn-enter-active {
    transition: opacity 2s;
  }
  .dynamicOn-enter {
    opacity: 0;
  }
  .warp {
    transform-origin: 0px 0px 0px;
    .load {
      width: 100%;
      height: 100%;
    }
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
      //border: 1px springgreen solid;
      float: left;
    }
    .center {
      position: absolute;
      margin-left: 460px;
      width: 994px;
      height: 978px;
      //border: 1px springgreen solid;
      //animation: domCenterMove 20s infinite linear alternate;
      .dynamicOnCenter-enter-active {
        transition: opacity 1s;
      }
      .dynamicOnCenter-enter {
        opacity: 0;
      }
      .dynamicOff-leave-active {
        transition: opacity 1s;
      }
      .dynamicOff-leave {
        opacity: 0;
      }
    }
    .right {
      position: relative;
      width: 450px;
      height: 978px;
      //border: 1px red solid;
      float: right;
      margin-right: 4px;
    }
  }
}

@keyframes domCenterMove {
  0% {
    margin-left: 550px;
    width: 824px;
  }

  50% {
    margin-left: 370px;
    width: 1164px;
  }

  100% {
    margin-left: 460px;
    width: 994px;
  }
}
@keyframes domCenterMove1 {
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
