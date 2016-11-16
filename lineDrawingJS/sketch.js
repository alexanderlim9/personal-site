
function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  stroke(0, 120);
  //line(width/2, height/2, mouseX, mouseY);
  line(0, 0, mouseX, mouseY);
  line(0, height, mouseX, mouseY);
  line(width, 0, mouseX, mouseY);
  line(width, height, mouseX, mouseY);

}
