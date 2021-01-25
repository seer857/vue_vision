<template>
  <div class="showTime">
    <div class="time"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created(){
    this.showTime()
  },
  methods: {
    showTime() {
      let t = null
      t = setTimeout(time, 1000) //開始运行
      function time() {
        clearTimeout(t) //清除定时器
        let dt = new Date()
        let y = dt.getFullYear()
        let mt = dt.getMonth() + 1
        let day = dt.getDate()
        let h = dt.getHours() //获取时
        let m = dt.getMinutes() //获取分
        var s = dt.getSeconds() //获取秒
        document.querySelector('.time').innerHTML =
          '当前时间：' +
          y +
          '年' +
          mt +
          '月' +
          day +
          '日' +
          '-'+
          h +
          '时' +
          m +
          '分' +
          s +
          '秒'
        t = setTimeout(time, 1000) //设定定时器，循环运行
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.showTime {
  position: absolute;
  width: 100%;
  height: 100%;
  .time {
    width: 320px;
    right: 100px;
    color: rgba(255, 255, 255, 0.596);
    //color: rgba(255, 255, 255, 0.7);

  }
}
</style>