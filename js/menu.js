export class Menu {
    constructor(canvas, ctx, gameReady) {
        if (!gameReady) {
            ctx.fillStyle = '#2F2F2F';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }
}