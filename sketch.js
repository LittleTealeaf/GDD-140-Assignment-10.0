/// <reference path="./node_modules/@types/p5/global.d.ts" />

/*
Worked alongside Priscilla Esteves on Exercise
*/
var spr;
var ct;

var count = 0;

function setup() {
  createCanvas(600, 400);
  ct = 0;
}

function draw() {
  background(200);
  drawSprites();

  if (ct == 60) {
    spr = createSprite(width / 2, 0, 40, 40);
    spr.shapeColor = color(random(255),random(255),random(255)) ;
    //sets onMousePressed
    spr.onMousePressed = spriteClicked;
    spr.velocity.y = 2;
    ct = 0;
  }
  ct++;

  text("Sprites Clicked: " + count, 50,50);
}

//Whenever a sprite is clicked
function spriteClicked() {
    count++;
    console.log(count);
}
