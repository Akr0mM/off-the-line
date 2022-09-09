export class Map {
    constructor(ctx, canvas, levelIndex) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.levelIndex = levelIndex;
        this.patternColor = '#fff';
        this.xStart;
        this.yStart;
        this.coins = {
            length: 0,
            placement: [],
            color: 'yellow',
            width: 8
        };
    }

    draw() {
        // this.drawBackground()

        if (this.levelIndex === 0) {
            // pattern
            this.xStart = (this.canvas.width - 200) / 2;
            this.yStart = (this.canvas.height - 200) / 2;
            this.ctx.strokeStyle = this.patternColor;
            this.ctx.strokeRect(this.xStart, this.yStart, 200, 200);

            // coins 
            this.coins.placement.push({ x: this.xStart + 44, y: this.yStart + 44 });
            this.coins.placement.push({ x: this.xStart + 70, y: this.yStart + 44 });
            this.coins.placement.push({ x: this.xStart + 96, y: this.yStart + 44 });
            this.coins.placement.push({ x: this.xStart + 122, y: this.yStart + 44 });
            this.coins.placement.push({ x: this.xStart + 148, y: this.yStart + 44 });

            this.coins.placement.push({ x: this.xStart + 44, y: this.yStart + 96 });
            this.coins.placement.push({ x: this.xStart + 70, y: this.yStart + 96 });
            this.coins.placement.push({ x: this.xStart + 96, y: this.yStart + 96 });
            this.coins.placement.push({ x: this.xStart + 122, y: this.yStart + 96 });
            this.coins.placement.push({ x: this.xStart + 148, y: this.yStart + 96 });
            this.coins.placement.push({ x: this.xStart + 44, y: this.yStart + 148 });
            this.coins.placement.push({ x: this.xStart + 70, y: this.yStart + 148 });
            this.coins.placement.push({ x: this.xStart + 96, y: this.yStart + 148 });
            this.coins.placement.push({ x: this.xStart + 122, y: this.yStart + 148 });
            this.coins.placement.push({ x: this.xStart + 148, y: this.yStart + 148 });
            this.drawCoins();
        }
    }

    drawCoins() {
        this.coins.placement.forEach(coin => {
            this.ctx.strokeStyle = this.coins.color;
            this.ctx.strokeRect(coin.x, coin.y, this.coins.width, this.coins.width);
        });
    }

    drawBackground() {

    }
}