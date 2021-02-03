<template>
  <div class="default-left">
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content one">
      <div class="title">
        <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
        <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
        <span>集团经营状况—余量与销量分析</span>
      </div>
      <div id="leftDefaOne">
          <ChartOne/>
      </div>
    </dv-border-box-10>
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content two">
      <div class="title">
        <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
        <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
        <span>集团经营状况—各工厂产量数值</span>
      </div>
      <div id="leftDefaTwo">
         <ChartTwo/>
      </div>
    </dv-border-box-10>
    <dv-border-box-10 :color="['#1c1b55', '#e0e3ff']" class="content three">
      <div class="title">
        <img class="float icon" src="@/assets/images/leftContent/dian1.png" alt />
        <img class="tImg" src="@/assets/images/rightContent/violet_tag.png" alt />
        <span>集团经营状况—各工厂仓库余量</span>
      </div>
      <div id="leftDefaThree">
       <ChartThree/>
      </div>
    </dv-border-box-10>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import ChartOne from './defaultCharts/ChartOne.vue';
import ChartTwo from './defaultCharts/ChartTwo.vue';
import ChartThree from './defaultCharts/ChartThree.vue';
export default {
  components: {
    Swiper,
    SwiperSlide,
    ChartOne,ChartTwo,ChartThree
  },
  data() {
    return {
      salesArr: [],
      salesDateArr: [],
    }
  },

  mounted() {
  },
  methods: {
    
   
  },
}
</script>

<style lang="scss" scoped>
$color: #fff;
.default-left {
  width: 100%;
  height: 100%;

  .content {
    width: 119%;
    height: 300px;
    .title {
      position: absolute;
      width: 100%;
      height: 40px;

      img {
        width: 25px;
      }
      .float {
        margin-top: 10px;
        margin-left: 12px;
        animation: myMove2 2s infinite linear;
      }
      .tImg {
        position: absolute;
        width: 100%;
        margin-top: 7px;
        margin-left: 5px;
      }
      span {
        position: absolute;
        color: #fff;
        margin-top: 11px;
        margin-left: 24px;
      }
    }
  }

  .one {
    margin-top: 15px;

    #leftDefaOne {
      width: 100%;
      height: 100%;
    }
  }
  .two {
    margin-top: 20px;
    #leftDefaTwo {
      width: 100%;
      height: 100%;
    }
  }
  .three {
    margin-top: 20px;
    #leftDefaThree {
      width: 100%;
      height: 100%;
    }
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
  to {
    transform: translate(0px, -5px);
  }
}
@keyframes guangdianMove2 {
  to {
    transform: translate(0px, 5px);
  }
}

@keyframes myMove2 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>