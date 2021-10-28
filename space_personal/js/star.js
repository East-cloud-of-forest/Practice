const PI = Math.PI * 2

export class Star {
  constructor(stageWidth, stageHeight) {
    this.radius = 1

    const diameter = this.radius * 2

    // 랜덤 함수는 0.0.. ~ 0.9.. 까지의 값을 반환, 바꿔 말하면 0 ~ 99 % 를 반환하기 때문에 0부터 원하는 난수값을 원하면 원하는 난수값의 최대값을 곱해주면 된다. 외곽선과 겹치는걸 방지하기 위해 곱해줄 최대값에서 지름을 빼준뒤 난수를 곱한 수에 반지름을 더해준다.
    this.x = this.radius + Math.random() * (stageWidth - diameter)
    this.y = this.radius + Math.random() * (stageHeight - diameter)
  }

  animate(ctx) {
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, PI, false)
    ctx.fill()
  }
}
