const PI = Math.PI * 2
let time = 0

export class Star {
  constructor(stageWidth, stageHeight) {
    this.radius = 1
    this.diameter = this.radius * 2
    this.stageWidth = stageWidth
    this.stageHeight = stageHeight

    this.location()
  }

  animate(ctx) {
    ctx.fillStyle = '#ffffff'
    // 원하는 범위 내의 난수값 (최소값 + Math.random() * (최대값 - 최소값))
    let timeRange = Math.floor(500 + Math.random() * 200)
    time += 1
    if (time >= timeRange) {
      this.location()
      time = 0
    }
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, PI, false)
    ctx.fill()
  }

  location() {
    // 랜덤 함수는 0.0.. ~ 0.9.. 까지의 값을 반환, 바꿔 말하면 0 ~ 99 % 를 반환하기 때문에 0부터 원하는 난수값을 원하면 원하는 난수값의 최대값을 곱해주면 된다. 외곽선과 겹치는걸 방지하기 위해 곱해줄 최대값에서 지름을 빼준뒤 난수를 곱한 수에 반지름을 더해준다.
    this.x = this.radius + Math.random() * (this.stageWidth - this.diameter)
    this.y = this.radius + Math.random() * (this.stageHeight - this.diameter)
  }
}
