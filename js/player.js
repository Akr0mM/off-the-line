export class Player {
    constructor(ctx, canvas) {
        this.pos = {
            x: (canvas.width - 200) / 2,
            y: (canvas.height - 200) / 2,
        };
        this.ctx = ctx;
        this.canvas = canvas;
        this.color = '#0088ff';
    }
}