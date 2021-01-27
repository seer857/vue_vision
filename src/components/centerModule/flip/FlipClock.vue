/*
 * 翻牌时钟
 */
<template>
  <div class="FlipClock">
   <div class="xiaoliang">
        <div class="digital front number0" ref="one"></div>
        <div class="digital back  number1" ref="two"></div>
      </div>
    <em>:</em>
    <!-- <Flipper ref="flipperFirst" /> -->
    <Flipper ref="flipperFirst" />
    <Flipper ref="flipperHour1" />
    <Flipper ref="flipperHour2" />
    <Flipper ref="flipperMinute1" />
    <Flipper ref="flipperMinute2" />
    <Flipper ref="flipperSecond1" />
    <Flipper ref="flipperSecond2" />
    <div class="tai"> 
        <div class="digital" ref='three' ></div>
        </div>
  </div>
</template>

<script>
import Flipper from '../flip/Flipper'
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'FlipClock',
  data() {
    return {
    }
  },
  components: {
    Flipper,
  },
  watch:{
    "$route":function(){
      this.getNumber()
    }
  },
  mounted() {
     this.getNumber()
  },

  methods: {
    getNumber() {
      this.$refs.flipperFirst.setFront(0) //翻牌器前数字
      setTimeout(() => {
        this.$refs.flipperFirst.flipDown(0, this.$store.state.forthValues.FilipSzData[0]) //翻牌后数字
      }, 500)
      this.$refs.flipperHour1.setFront(0)
      setTimeout(() => {
        this.$refs.flipperHour1.flipDown(0, this.$store.state.forthValues.FilipSzData[1])
      }, 600)
      this.$refs.flipperHour2.setFront(0)
      setTimeout(() => {
        this.$refs.flipperHour2.flipDown(0, this.$store.state.forthValues.FilipSzData[2])
      }, 700)
      this.$refs.flipperMinute1.setFront(0)
      setTimeout(() => {
        this.$refs.flipperMinute1.flipDown(0, this.$store.state.forthValues.FilipSzData[3])
      }, 700)
      this.$refs.flipperMinute2.setFront(0)
      setTimeout(() => {
        this.$refs.flipperMinute2.flipDown(0, this.$store.state.forthValues.FilipSzData[4])
      }, 900)
      this.$refs.flipperSecond1.setFront(0)
      setTimeout(() => {
        this.$refs.flipperSecond1.flipDown(0, this.$store.state.forthValues.FilipSzData[5])
      }, 1100)
      this.$refs.flipperSecond2.setFront(0)
      setTimeout(() => {
        //延时效果
        this.$refs.flipperSecond2.flipDown(0, this.$store.state.forthValues.FilipSzData[6])
      }, 1500)
               //获取数组里的销
                this.$refs.one.style.setProperty('--setxaio',  this.$store.state.forthValues.FilipTextData[0])
              //获取数组里的linag
                this.$refs.two.style.setProperty('--setliang',  this.$store.state.forthValues.FilipTextData[1])
                //获取数组里的台
                this.$refs.three.style.setProperty('--settai',  this.$store.state.forthValues.FilipTextData[2])
              //  console.log( this.$refs.tai.style) 
    },

  },
 
}
</script>

<style lang="scss" scoped>
$xaio: var(--setxaio);
$liang: var(--setliang);
$tai: var(--settai);
// $a:'台';
.FlipClock {
  margin-left: -3%;
  width: 110%;
  text-align: center;
  /* border: rgb(11, 43, 224) 5px solid; */
 
}
/* ==========================================*/
 .xiaoliang{
  display: inline-block;
  position: relative;
  width: 60px;
  height: 100px;
  line-height: 100px;
  border: solid 1px #000;
  border-radius: 10px;
  background: #fff;
  font-size: 66px;
  color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5); 
  text-align: center;
  font-family: 'Helvetica Neue';
  margin-left: 20px;
  margin-top:10px;
  }
.xiaoliang .digital:before,
.xiaoliang .digital:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  /* 背景颜色 */
  background: rgb(57, 51, 59);
  overflow: hidden;
  box-sizing: border-box;
   font-size:25px;
  line-height: 50px;
}
.xiaoliang .digital:before {
  /* 上半牌 */
  top: 0;
  bottom: 50%;
  border-radius: 10px 10px 0 0;
 border-bottom: solid 1px #666;
}
.xiaoliang .digital:after {
    /* 下半牌 */
  top: 50%;
  bottom: 0;
  border-radius: 0 0 10px 10px;
  /* line-height: 0; */
}
 .xiaoliang .number0:before,
 .xiaoliang .number0:after { content: $xaio;}
 .xiaoliang .number1:before,
 .xiaoliang .number1:after { content: $liang;}

 /*向下翻*/
 .xiaoliang .front:before { z-index: 3;}
 /* .xaioliang .back:after { zindex: 2;} */
 /* .xaioliang .front:after, */
 /* .xaioliang .back:before { z-index: 1;} */
 .tai{
   display: inline-block;
  position: relative;
  width: 60px;
  height: 100px;
  line-height: 100px;
  border: solid 1px #000;
  border-radius: 10px;
  background: #fff;
  font-size: 66px;
  color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5); 
  text-align: center;
  font-family: 'Helvetica Neue';
 }
 .tai .digital:before,
.tai .digital:after {
  content: $tai;
  position: absolute;
  left: 0;
  right: 0;
  /* 背景颜色 */
  background: rgb(57, 51, 59);
  overflow: hidden;
  box-sizing: border-box;
   font-size:25px;
  line-height: 50px;
}
.tai .digital:before {
  /* 上半牌 */
  top: 0;
  bottom: 50%;
  border-radius: 10px 10px 0 0;
 border-bottom: solid 1px #666;
 line-height: 6;
}
.tai .digital:after {
    /* 下半牌 */
  top: 50%;
  bottom: 0;
  border-radius: 0 0 10px 10px;
  /* line-height: 100px; */
}

.FlipClock em {
  display: inline-block;
  line-height: 102px;
  font-size: 66px;
  font-style: normal;
  vertical-align: top; 
}
</style>
