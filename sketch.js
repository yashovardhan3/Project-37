let img;
function preload() {
  img = loadImage('assets/laDefense.jpg');
}
function setup() {
  image(img, 0, 0);
  tint(255, 126); 
  image(img, 50, 0);
}


function setup() {
    text("SCORE :"+score,750,40);
    fetch();
    var particle;
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);
    block13 = new Block(360, 235, 30, 40);
    block14 = new Block(390, 235, 30, 40);
    block15 = new Block(420, 235, 30, 40);
    block16 = new Block(450, 235, 30, 40);


    if (score){
      if(thisvisibility<0 && this.visibility >=105){
        score++
      }
    }
    ellipse(0, 50, 33, 33); // Left circle
    push(); // Start a new drawing state
    translate(50, 0);
    strokeWeight(10);
    fill(204, 153, 0);
    ellipse(0, 50, 33, 33); // Middle circle
    pop(); // Restore original state
    ellipse(100, 50, 33, 33); // Right circle
    ellipse(0, 50, 33, 33); // Left circle
    push(); // Start a new drawing state
    strokeWeight(10);
    fill(204, 153, 0);
    ellipse(33, 50, 33, 33); // Left-middle circle
    push(); // Start another new drawing state
    stroke(0, 102, 153);
    ellipse(66, 50, 33, 33); // Right-middle circle
    pop(); // Restore previous state
    pop(); // Restore original state
    ellipse(100, 50, 33, 33); // Right circle

    if(particle!=null)
    {
      particle.display();

        if(particle.body.position.y>760)
        {
          if(particle.body.position.x<300)
          {
            score=score+500;
            particle=null;
            if(countcount>= 5) gameState = "end";
          }
        }
    }

    mousePressed();
    keyPressed();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}
function mousePressed()
{
  if(gameState!=="end")
  {
    count++;
    particle=new Particle(mouseX, 10, 10, 10);
  }
}