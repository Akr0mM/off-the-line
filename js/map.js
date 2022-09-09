export class Map {
    constructor(ctx, canvas, levelIndex) {
        this.ctx = ctx
        this.canvas = canvas
        this.levelIndex = levelIndex
        this.patternColor = '#eee'
        this.xStart = (canvas.width - 200) / 2
        this.yStart = (canvas.height - 200) / 2
        this.drawMap = {
            '0': () => {
                ctx.strokeStyle = this.patternColor
                ctx.rect(this.xStart, this.yStart, 200, 200)
                ctx.stroke()
            }
        }
        this.coins = {
            length: 15,
            placement: [{x: this.xStart + 40, y: this.yStart + 40}],
            draw: () => this.drawCoins(),
            color: 'yellow',
            width: 8
        }
    }

    draw() {  
        if (this.levelIndex === 0) this.drawMap['0']()
    }

    drawCoins() {
        this.coins.placement.forEach(coin => this.drawCoin(coin.x, coin.y))
    }

    drawCoin(x, y) {
        
    }
}