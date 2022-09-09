import { Menu } from './menu.js';
import { Map } from './map.js';
import { Player } from './player.js';



const cw = 640;
const ch = 480;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
canvas.style = "width: 640; height: 480; background-color: black";
canvas.width = cw;
canvas.height = ch;

let menu;
let map;
let gameReady = true;
let gameLaunched = false;

window.onload = function main() {
    map = new Map(ctx, canvas, 0);
    menu = new Menu(canvas, ctx, gameReady);

    animate();
};

function animate() {
    update();
    draw();

    requestAnimationFrame(animate);
}

function update() {
    if (gameReady) gameLaunched = true;


}

function draw() {
    if (!gameLaunched) return;

    // map 
    map.draw();
}