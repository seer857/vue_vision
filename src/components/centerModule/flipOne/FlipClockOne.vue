/*
 * 翻牌时钟
 */
<template>
  <div class="FlipClockOne">
      <div class="lirun">
        <div class="digital front number0"></div> 
        <div class="digital back  number1"></div>
      </div>
      <em>:</em>
    <Flipper ref="flipperFirst" />
    <Flipper ref="flipperHour1" />
    <Flipper ref="flipperHour2" />
    <Flipper ref="flipperMinute1" />
    <Flipper ref="flipperMinute2" />
    <Flipper ref="flipperSecond1" />
    <Flipper ref="flipperSecond2" />
      <div class="yuan"> <div class="digital "></div></div>
  </div>
</template>

<script>
import Flipper from '../flipOne/FlipperOne'

export default {
  name: 'FlipClockOne',
  data() {
    return {
      timer: null,
      // flipObjs: [
      //   {number0: 2,number1: 4,number2: 5,number3: 6,
      // number4: 7, number5: 8, number6: 9,} ],
      arrDataOne:['5','5','5','1','8','8','8'],
    }
  },
  components: {
    Flipper,
  },
  methods: {
    getNumber() {
      this.$refs.flipperFirst.setFront(0)//翻牌器前数字
      setTimeout(()=>{
          this.$refs.flipperFirst.flipDown(0, this.arrDataOne[0])//翻牌后数字
      },500)
      this.$refs.flipperHour1.setFront(0)
      setTimeout(() => {
          this.$refs.flipperHour1.flipDown(0, this.arrDataOne[1])
      }, 600);
      this.$refs.flipperHour2.setFront(0)
      setTimeout(()=>{
        this.$refs.flipperHour2.flipDown(0, this.arrDataOne[2])
      },700)
      this.$refs.flipperMinute1.setFront(0)
      setTimeout(()=>{
        this.$refs.flipperMinute1.flipDown(0, this.arrDataOne[3])
      },800)
      this.$refs.flipperMinute2.setFront(0)
      setTimeout(()=>{
        this.$refs.flipperMinute2.flipDown(0, this.arrDataOne[4])
      },900)
      this.$refs.flipperSecond1.setFront(0)
      setTimeout(()=>{
          this.$refs.flipperSecond1.flipDown(0,this.arrDataOne[5])
      },1000)
      this.$refs.flipperSecond2.setFront(0)
      setTimeout(() => {//延时效果
        this.$refs.flipperSecond2.flipDown(0, this.arrDataOne[6])
      }, 1100)
    },
  },
  mounted() {
    this.getNumber()
      // console.log(this.number0);
  },
}
</script>

<style>
.FlipClockOne {
  margin-left: -3%;
  width: 110%;
  text-align: center;
  margin-top: -3%;
  /* border: rgb(11, 43, 224) 5px solid; */
 
}
/* ==========================================*/
 .lirun{
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
.lirun .digital:before,
.lirun .digital:after {
  content: '销';
  position: absolute;
  left: 0;
  right: 0;
  /* 背景颜色 */
  background: rgb(57, 51, 59);
  overflow: hidden;
  box-sizing: border-box;
   font-size:35px;
  line-height: 50px;
}
.lirun .digital:before {
  /* 上半牌 */
  top: 0;
  bottom: 50%;
  border-radius: 10px 10px 0 0;
 border-bottom: solid 1px #666;
}
.lirun .digital:after {
    /* 下半牌 */
  top: 50%;
  bottom: 0;
  border-radius: 0 0 10px 10px;
  /* line-height: 0; */
}
 .lirun .number0:before,
 .lirun .number0:after { content: "利";}
 .lirun .number1:before,
 .lirun .number1:after { content: "润";}

 /*向下翻*/
 .lirun .front:before { z-index: 3;}
 /* .xaioliang .back:after { zindex: 2;} */
 /* .xaioliang .front:after, */
 /* .xaioliang .back:before { z-index: 1;} */
 .yuan{
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
 .yuan .digital:before,
.yuan .digital:after {
  content: '元';
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
.yuan .digital:before {
  /* 上半牌 */
  top: 0;
  bottom: 50%;
  border-radius: 10px 10px 0 0;
 border-bottom: solid 1px #666;
 line-height: 6;
}
.yuan .digital:after {
    /* 下半牌 */
  top: 50%;
  bottom: 0;
  border-radius: 0 0 10px 10px;
  /* line-height: 100px; */
}
/* ============================== ============*/
/* .M-Flipper {
  margin: 0 3px; 
} */
.FlipClockOne em {
  display: inline-block;
  line-height: 102px;
  font-size: 66px;
  font-style: normal;
  vertical-align: top; 
}
</style>
