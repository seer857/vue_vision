<template>
  <dv-border-box-1 :color="['#1c1b55', '#a255d7']">
    <div class="sales">
      <canvas id="canvas"></canvas>
      <div class="filp dowm">
        <div class="digital front number0"></div>
        <div class="digital back number1"></div>
      </div>
    </div>
    <div class="profit"></div>
  </dv-border-box-1>
</template>

<script>
export default {
  props: ['getHomeData'],
  components: {},
  data() {
    return {
      data: 10000,
      name: '营业额（万元）：',

      arrData: {
        name: '',
        data: '',
      },
    }
  },
  updated() {
    this.fontShow()
  },
  mounted() {
    this.fontShow()
    this.onClick()
  },
  methods: {
<<<<<<< HEAD
    //---------------------------------------------
    onClick() {
      this.arrData.name = this.getHomeData.homeName
      this.arrData.data = this.getHomeData.homeData
      // console.log(this.arrData)
    },
    //---------------------------------------------
=======
 //---------------------------------------------
      onClick(){
         this.arrData.name = this.getHomeData.homeName
         this.arrData.data = this.getHomeData.homeData
        //  console.log(this.arrData)
      },
//---------------------------------------------
>>>>>>> master
    fontShow() {
      var txt = this.name + this.data

      this.onClick()
      var txt = this.arrData.name + this.arrData.data

      var txtH = 100
      var font = 'sans-serif'
      var rayColor1 = '#90effb'
      var rayColor2 = '#6b42a6'
      var canvas = document.getElementById('canvas')
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
  .filp {
    display: inline-block;
  }

  #canvas {
    position: absolute;
    margin-left: -100px;
    margin-top: -120px;
    width: 700px;
    height: 350px;
  }
  .profit {
    position: absolute;
    width: 780px;
    height: 100px;
    margin-left: 20px;
    margin-top: 120px;
    border: yellow 1px solid;
  }
}
</style>