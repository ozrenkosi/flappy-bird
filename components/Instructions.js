class Instructions {
  constructor() {

  }

  show() {
    textSize(26);
    fill(236, 251, 222);
    stroke(0);
    strokeWeight(5);
    strokeJoin(BEVEL);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("Press SPACE to jump!", width/2, height/2);
  }
}
