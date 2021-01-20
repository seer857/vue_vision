<template>
  <div class="default-left">
    <dv-border-box-13 class="content-one">
      <div class="header">
        <img class="icon" src="../../assets/images/leftContent/dian.png"  @click="moveAll"/>
        <img class="title" src="../../assets/images/leftContent/title.png" />
        <h2>集团业务总看板</h2>
        <img class="guangdian" src="../../assets/images/guangdian.png" alt />
      </div>
      <div class="main-box">
        <div class="lianxian">
          <img src="../../assets/images/leftContent/lianxian.png" alt="">
        </div>
        <div class="group-img">
          <img src="../../assets/images/leftContent/jituan.png" alt />
        </div>
        <div class="group-one">
          <img src="../../assets/images/leftContent/fangzhu.png" alt />
        </div>
        <div class="group-two">
          <img src="../../assets/images/leftContent/yuanzhu.png" alt />
        </div>
        <div class="group-three">
          <img src="../../assets/images/leftContent/lengzhu.png" alt />
        </div>
        <div class="group-four">
          <img src="../../assets/images/leftContent/fangzhu.png" alt />
        </div>
      </div>
    </dv-border-box-13>
    <div class="content-two"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    moveAll(){
      this.$router.push({name:'asset'})
    }
  },
}
</script>

<style lang="scss" scoped>
$color: #fff;
.default-left {
  width: 100%;
  height: 100%;
  
  .content-one {
    width: 120%;
    height: 300px;
    background: url(../../assets/images/leftContent/top_one_bg.png) no-repeat;
    background-size: cover;
    margin-top: 10px;
    .header {
      width: 100%;
      height: 75px;

      .icon {
        position: absolute;
        width: 30px;
        height: 30px;
        margin: 5%;
        z-index: 4;
      }
      .title {
        position: absolute;
        margin-top: 4.5%;
        margin-left: 13%;
      }
      h2 {
        position: absolute;
        margin-top: 5.1%;
        margin-left: 18%;
        font-size: 18px;
        color: #536598;
        background-image: -webkit-gradient(
          linear,
          0 0,
          0 bottom,
          from(#bbbfff),
          to(hsl(184, 100%, 35%))
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .guangdian {
        position: absolute;
        margin-top: 8.7%;
        margin-left: 8%;
        animation: gdMove 10s infinite linear alternate;
      }
    }
    .main-box {
      width: 100%;
      height: 205px;
      margin-top: 20px;
      .lianxian{
        position: absolute;
        z-index: -1;
        margin-left: 100px;
        margin-top: 43px;
      }
      .group-img {
        position: absolute;
        width: 100px;
        height: 110px;
        margin-left: 220px;
        margin-top: 20px;
        animation: guangdianMove 1s infinite linear alternate;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .group-one {
        position: absolute;
        width: 100px;
        height: 110px;
        margin-left: 100px;
        margin-top: 10px;
        animation: guangdianMove 1s infinite linear alternate;
        img {
          width: 70%;
          height: 70%;
        }
      }
      .group-two {
        position: absolute;
        width: 100px;
        height: 110px;
        margin-left: 150px;
        margin-top: 80px;
        animation: guangdianMove 1s infinite linear alternate;
        img {
          width: 70%;
          height: 70%;
        }
      }
      .group-three {
        position: absolute;
        width: 100px;
        height: 110px;
        margin-left: 340px;
        margin-top: 20px;
        animation: guangdianMove 1s infinite linear alternate;
        img {
          width: 70%;
          height: 70%;
        }
      }
      .group-four {
        position: absolute;
        width: 100px;
        height: 110px;
        margin-left: 390px;
        margin-top: 90px;
        animation: guangdianMove 1s infinite linear alternate-reverse ;
        img {
          width: 70%;
          height: 70%;
        }
      }
    }
  }
  .content-two {
    width: 120%;
    height: 70%;
  }
}
@keyframes gdMove {
  0% {
    margin-left: 8%;
  }
  100% {
    margin-left: 70%;
    opacity: 0;
  }
}
@keyframes guangdianMove {
  to{
    transform: translate(0px, -5px);
  }
}
@keyframes guangdianMove2 {
  to {
    transform: translate(0px, 5px);
  }
}
</style>