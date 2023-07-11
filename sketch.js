//another animated collage in front of Havana's cigar factory. Experimenting with blending layers within the animation.

let EL1;
let EL2;
let dad;
let tileCount;

function preload(){
  EL1 = loadImage('assets/ELDad_Cigar_EL.png');
  EL2 = loadImage('assets/ELDad_Cigar_EL.png');
  dad = loadImage('assets/ELDad_Cigar_dad.png')
}

function setup() {
  createCanvas(dad.width/2, dad.height/2);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(8);
}

function draw() {
  background(0);
  tileCount = random(20);
  //dad
  image(dad, 0, 0, dad.width/2, dad.height/2);

  //color layer
  noStroke();
  if (frameCount%4==0){
  fill(random(360), 100, 100, random(100));
  }
  rect(0, 0, width, height);

  //grid
  if (frameCount%10==0){
    grid();
    }
  
    //EL
  push();
  blend(EL1, 0, 0, EL1.width, EL1.height, 0, 0, EL1.width/2, EL1.height/2, DARKEST);
  tint(255, random(100));
  image(EL2, 0, 0, EL2.width/2, EL2.height/2);
  EL2.filter(GRAY);
  pop();
}

function mousePressed(){
  let fs = fullscreen();
  fullscreen(!fs);
}

function grid(){
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = (width / tileCount) * gridX;
      let posY = (height / tileCount) * gridY;
      noStroke();
      rectMode(CORNER);
      //fill(0);
      //rect(posX, posY, width/tileCount, height/tileCount);
      
      var toggle = floor(random(2));
      if (toggle == 1){
         fill(0, random(100));
          rect(posX, posY, width/tileCount, height/tileCount);
    } else {
      fill(255, random(100)) ;
      rect(posX, posY, width/tileCount, height/tileCount);
      }
      }
    }
}
