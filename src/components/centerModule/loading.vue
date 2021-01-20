<template>
  <div class="home-loading" v-cloak>
    <div class="loadImg">
      <video src="@/assets/videos/loading.webm" autoplay="autoplay" loop="loop" muted="muted"></video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.home-loading {
  width: 100%;
  height: 100%;
  background: black;
  background-blend-mode: multiply;
  .loadImg {
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
      transform: scale(1, 1);
      animation: loading 5s infinite linear alternate;
      background-blend-mode: multiply;
    }
  }
}
@keyframes loading {
  0% {
    margin-left: 25%;
    margin-top: 20%;
    width: 50%;
    height: 50%;
  }
  100% {
    width: 100%;
    height: 100%;
    transform: scale(1, 1);
  }
}
</style>