<template>
  <dv-border-box-1 :color="['#1c1b55', '#a255d7']">
    <div class="sales">
      <!-- <canvas id="canvas1"></canvas> -->
      <dv-decoration-9 class="proportion" :dur="5" :color="['#a255d7', '#a255d7']">
        <div class="yield">
          <a-popover placement="bottom">
            <template slot="title">
              <span>目标完成情况</span>
            </template>
            <template slot="content" class="popover">
              <p>财经指标</p>
              <p>运营指标</p>
              <p>运营指标</p>
            </template>
            <a-button type="link" ghost>
              <div class="number">66%</div>达成率
            </a-button>
          </a-popover>
        </div>
        <canvas id="canvas1"></canvas>
      </dv-decoration-9>
      <!-- //>>>>>>>>>> -->
      <!--翻牌的外框-->
      <div class="flip-dowm">
        <FlipClock />
        <!-- <FlipClockOne/> -->
      </div>

      <!-- //>>>>>>>>>> -->
      <!-- <div class="filp dowm"> </div> -->
    </div>

    <!-- <div class="profit"></div> -->
  </dv-border-box-1>
</template>

<script>
import Clock from '../OtherModule/clock.vue'
import FlipClock from '../centerModule/flip/FlipClock'


export default {
  // props: ['getHomeData'],
  components: { Clock, FlipClock },
  data() {
    return {
      arrData: {
        name: '',
        data: '',
      },
    }
  },

  mounted() {
    this.fontShow()
  },
  methods: {
    fontShow() {
      var txt =  this.$store.state.forthValues.dataname+ this.$store.state.forthValues.datasu
      var txtH = 60
      var font = 'sans-serif'
      var rayColor1 = '#90effb'
      var rayColor2 = '#6b42a6'
      var canvas = document.getElementById('canvas1')
      var ctx = canvas.getContext('2d')
      ctx.imageSmoothingQuality = 'high'
      var cw = (canvas.width = window.innerWidth)
      var ch = (canvas.height = window.innerHeight)

      var w2 = cw / 2
      var h2 = ch / 2
      var pi = Math.PI
      var pi2 = pi * 0.5

      var txtCanvas = document.createElement('canvas')
      var txtCtx = txtCanvas.getContext('2d')
      txtCtx.font = txtH + 'px ' + font
      txtCtx.textBaseline = 'middle'
      var txtW = Math.floor(txtCtx.measureText(txt).width)
      txtCanvas.width = txtW
      txtCanvas.height = txtH * 1.2

      var gradient = ctx.createRadialGradient(w2, h2, 0, w2, h2, txtW)
      gradient.addColorStop(0, rayColor2)
      gradient.addColorStop(1, rayColor1)
      ctx.strokeStyle = gradient

      txtCtx.fillStyle = gradient
      txtCtx.font = txtH + 'px ' + font
      txtCtx.textBaseline = 'middle'
      txtCtx.fillText(txt, 0, txtH * 0.5)

      //dirty adjust for descends
      txtH *= 1.5

      var bufferCanvas = document.createElement('canvas')
      bufferCanvas.width = txtW
      bufferCanvas.height = txtH
      var buffer = bufferCanvas.getContext('2d')

      //text start position
      var sx = (cw - txtW) * 0.5
      var sy = (ch - txtH) * 0.5

      ////generate data
      var rays = []
      var txtData = txtCtx.getImageData(0, 0, txtW, txtH)
      for (var i = 0; i < txtData.data.length; i += 4) {
        var ii = i / 4
        var row = Math.floor(ii / txtW)
        var col = ii % txtW
        var alpha = txtData.data[i + 3]
        if (alpha !== 0) {
          var c = 'rgba('
          c += [
            txtData.data[i],
            txtData.data[i + 1],
            txtData.data[i + 2],
            alpha / 255,
          ]
          c += ')'
          rays.push(new Ray(Math.floor(ii / txtW), ii % txtW, c))
        }
      }

      var current = 1
      //start animation
      tick()

      function tick() {
        ctx.clearRect(0, 0, cw, ch)
        ctx.drawImage(bufferCanvas, 0, 0, current, txtH, sx, sy, current, txtH)
        ctx.save()
        ctx.globalAlpha = 0.07
        ctx.globalCompositeOperation = 'lighter'
        if (drawRays(current)) {
          current++
          current = Math.min(current, txtW)
          window.requestAnimationFrame(tick)
        } else {
          //fadeOut()
        }
        ctx.restore()
      }

      // function fadeOut() {
      //   ctx.clearRect(0, 0, cw, ch)
      //   ctx.globalAlpha *= 0.95
      //   ctx.drawImage(bufferCanvas, 0, 0, current, txtH, sx, sy, current, txtH)
      //   if (ctx.globalAlpha > 0.01) {
      //     window.requestAnimationFrame(fadeOut)
      //   } else {
      //     window.setTimeout(restart, 100)
      //   }
      // }
      // function restart() {
      //   for (var i = 0; i < rays.length; i++) {
      //     rays[i].reset()
      //   }
      //   ctx.globalAlpha = 1
      //   buffer.clearRect(0, 0, txtW, txtH)
      //   current = 1
      //   tick()
      // }
      function drawRays(c) {
        var count = 0
        ctx.beginPath()
        for (var i = 0; i < rays.length; i++) {
          var ray = rays[i]
          if (ray.col < c) {
            count += ray.draw()
          }
        }
        ctx.stroke()
        return count !== rays.length
      }

      function filterRays(r) {
        return Boolean(r)
      }

      function Ray(row, col, f) {
        this.col = col
        this.row = row

        var xp = sx + col
        var yp = sy + row
        var fill = f

        var ath = txtH / 1.5

        var a = (pi2 * (this.row - ath * 0.5)) / ath
        if (a === 0) {
          a = (Math.random() - 0.5) * pi2
        }
        var da = 0.02 * Math.sign(a)
        da += (Math.random() - 0.5) * 0.005
        var l = 0
        var dl = Math.random() * 2 + 2

        var buffered = false
        this.reset = function () {
          a = (pi2 * (this.row - ath * 0.5)) / ath
          if (a === 0) {
            a = -pi2 * 0.5
          }
          l = 0
          buffered = false
        }
        this.draw = function () {
          if (l < 0) {
            if (!buffered) {
              buffer.fillStyle = fill
              buffer.fillRect(this.col, this.row, 1, 1)
              buffered = true
            }
            return 1
          } else {
            ctx.moveTo(xp, yp)
            ctx.lineTo(xp + Math.cos(a) * l, yp + Math.sin(a) * l)
            a += da
            l += Math.cos(a) * dl
            return 0
          }
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.sales {
  position: absolute;
  margin: 20px;
  width: 780px;
  height: 100px;
  .proportion {
    position: absolute;
    width: 150px;
    height: 150px;
    margin-top: 25px;
    margin-left: 78%;
    color: #fff;
    font-family: myFirstFont;
    font-size: 24px;
    .yield {
      position: absolute;
      width: 100px;
      height: 50px;
      margin-top: 0px;
      margin-left: 0px;
      z-index: 999;
      .popover {
        span {
          font-size: 20px;
        }
      }
      .number {
        font-size: 24px;
      }
      button {
        width: 100%;
        height: 100%;
        position: absolute;
        font-size: 12px;
      }
    }
  }
  //>>>>>>>>>>>>>>>>>>>
  .flip-dowm {
    display: inline-block;
    position: relative;
    width: 70%;
    height: 130px;
    margin-top: 16px;
    line-height: 100px;
    // border: 5px solid1px#857857;
    border-radius: 10px; //圆角
    //  background: #fff; //背景
    font-size: 66px;
    color: #fff;
    box-shadow: 006pxrgba (0, 0, 0, 0.5);
    text-align: center;
    font-family: 'Helvetica Neue';
  }

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  #canvas1 {
    position: relative;
    margin-top: 120px;
    margin-left: -1070px;
    width: 700px;
    height: 350px;
    // border: yellow 1px solid;
  }
}
</style>