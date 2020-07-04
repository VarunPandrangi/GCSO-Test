var car1, car2, wall1, wall2;
var speed, speed1, weight, weight1;

function setup() {
  createCanvas(1600,1600);

  speed = random(55,95);
  speed1 = random(65,135);
  weight = random(400,1500);
  weight1 = random(600,1700); 

  wall1 = createSprite(1400,200,60,200);
  wall1.shapeColor = color(255);

  wall2 = createSprite(1400,500,120,50);
  wall2.shapeColor = color(255);

  car1 = createSprite(50,200,50,50);
  car1.velocityX = speed;
  car1.shapeColor = "white";

  car2 = createSprite(50,500,50,50);
  car2.velocityX = speed1;
  car2.shapeColor = "white";
}

function draw() {
  background(0);  
  
  if(wall1.x - car1.x < car1.width / 2 + wall1.width / 2) {
      car1.velocityX = 0;
      var deformation = 0.5 * weight * speed * speed / 22500;
      if(deformation > 180) {
        car1.shapeColor = color(255,0,0);
        text("NOT SAFE",700,200);
      }

      if(deformation < 180 && deformation > 100) {
        car1.shapeColor = color(230,230,0);
        text("Needs to be Upgraded",700,200);
      }

      if(deformation < 100) {
        car1.shapeColor = color(0,255,0);
        text("SAFE",700,200);
      }

     console.log(deformation);
  }

  if(wall2.x - car2.x < car2.width / 2 + wall2.width / 2) {
    car2.velocityX = 0;
    var deformation1 = 0.5 * weight1 * speed * speed / 22500;
    if(deformation1 > 180) {
      car2.shapeColor = color(255,0,0);
      text("NOT SAFE",700,500);
    }

    if(deformation1 < 180 && deformation1 > 100) {
      car2.shapeColor = color(230,230,0);
      text("Needs to be Upgraded",700,500);
    }

    if(deformation1 < 100) {
      car2.shapeColor = color(0,255,0);
      text("SAFE",700,500);
    }
}

  drawSprites();
  
}