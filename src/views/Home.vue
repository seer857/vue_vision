<template>
  <dv-full-screen-container class="home-container" v-cloak>
    <video v-if="allShow" src="../assets/videos/backdrop.mp4" autoplay="autoplay" loop="loop" muted="muted"></video>
   
    <div class="bg" v-if="!allShow">
      <Index />
    </div>
    <!--   <transition name="dynamicOff">
      <Loading class="load" v-if="!find" />
    </transition>-->
    <transition name="dynamicOn">
      <div class="warp" v-if="find" @click="routerBack">
        <div class="top">
          <img v-if="allShow" src="../assets/images/top_nav.png" alt="">
          <img class="second" v-if="!allShow" src="../assets/images/top_nav2.png" alt="">
          <dv-decoration-10 class="top-line" :color="['#b634da','#00c2ff']" />
          <h1>
            <span>爱玛集团公司数据中台架构大屏</span>
          </h1>
          <div class="clock">
            <Clock />
          </div>
        </div>
        <transition name="dynamicOnCenter">
          <div class="content-box">
            <section class="main">
              <div class="left" v-if="isShow && allShow">
                <LeftModule />
              </div>
              <div class="left" v-if="!isShow && allShow">
                <DefaultLeft />
              </div>
              <div class="center-default">
<!-- ------------------------------------------ -->
                <DefaultCenter 
                v-if="allShow"
                 :getHomeData= "arrHomeData"
                 />
<!-- ------------------------------------------ -->
              </div>
              <div class="center" ref="ModuleCenter">
 <!-- ------------------------------------------ -->
                <CenterModule
                    v-on:againSend="getContentShow"
                    v-on:againSendTag="getContentShowTag"
                    v-if="findCenter" 
                    @getOneDatass="getOneHome"
                    @getTwoDatass="getTwoHome"
               />
 <!-- ------------------------------------------ -->
              </div>
              <div class="right" v-if="isShow && allShow">
                <RightModule />
              </div>
              <div class="right" v-if="!isShow && allShow ">
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
import DefaultCenter from '../components/centerModule/default.vue'
import Clock from '../components/OtherModule/clock.vue'
import Index from './Index.vue'
export default {
  
  name: 'Home',
  components: {
    CenterModule,//
    LeftModule,
    RightModule,
    Loading,
    DefaultLeft,
    DefaultRight,
    DefaultCenter,
    Clock,
    Index
  },
  data() {
    return {
      isShow: false,
      allShow: true,
      find: true,
      findCenter: true,
      arrHomeData:{
        homeName:'营业额（万元）：',
        homeData:100088,
      }
    }
  },
  mounted() {
    //this.loading()
  },
  methods: {
//--------------------------------------------
    getOneHome(oneName,oneData){ //获取子组件数据
      // console.log(oneName,oneData)
       this.arrHomeData.homeName=(oneName)//获取子组件数据,赋值给自己
       this.arrHomeData.homeData=(oneData)
      //  console.log(this.getData.homeOneName,this.getData.homeOneData)
    },
    getTwoHome(oneName,oneData){
         this.arrHomeData.homeName=(oneName)//获取子组件数据,赋值给自己
         this.arrHomeData.homeData=(oneData)
    },
//--------------------------------------------
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
    getContentShowTag(data){
      this.allShow = data
    },
    routerBack() {},
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
  .bg{
    width: 100%;
    height: 100%;
    position:absolute;
    z-index: -1;
  }
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
    //background: url(../assets/images/top_nav.png) no-repeat;
    border: none;
    overflow: hidden;
    img{
      width: 100%;
      position: absolute;
    }
    .clock{
      position: absolute;
      width: 320px;
      height: 80px;
      margin-top: 10px;
      margin-right: 20px;
     // border: solid 1px springgreen;
      right: 0%;
      z-index: 99;

    }
    .top-line {
      width: 100%;
      height: 5px;
    }
    h1 {
      font-family: myFirstFont;
      height: 80px;
      position: absolute;
      line-height: 30px;
      font-size: 35px;
      margin-left: 37%;
      margin-top: 1.3%;
      text-align: center;
      color: #b634da;
      z-index: 10;
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
    .center-default {
      position: absolute;
      width: 820px;
      height: 240px;
      margin-left: 550px;
      margin-top: 10px;
    }
    .center {
      position: absolute;
      margin-left: 450px;
      width: 994px;
      height: 978px;
      
     // animation: domCenterMove 20s infinite linear alternate;
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
    transform: scaleX(1, 1);
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
