import { Star } from './star.js'

class App {
  constructor() {
    this.canvas = document.createElement('canvas')
    document.body.appendChild(this.canvas)
    this.ctx = this.canvas.getContext('2d')

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1

    window.addEventListener('resize', this.resize.bind(this), false)
    this.resize()

    window.requestAnimationFrame(this.animate.bind(this))
  }

  resize() {
    this.stageWidth = document.body.clientWidth
    this.stageHeight = document.body.clientHeight

    this.canvas.width = this.stageWidth * this.pixelRatio
    this.canvas.height = this.stageHeight * this.pixelRatio
    this.ctx.scale(this.pixelRatio, this.pixelRatio)

    const totalStar = 500
    this.star = []
    for (let i = 0; i < totalStar; ++i) {
      this.star[i] = new Star(this.stageWidth, this.stageHeight)
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this))

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)

    if (this.star.length > 0) {
      for (let i = 0; i < this.star.length; i++) {
        this.star[i].animate(this.ctx)
      }
    }
  }
}

window.onload = () => {
  new App()
}
