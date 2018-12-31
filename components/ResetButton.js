class ResetButton {
  constructor() {
    this.x = width/6;
    this.y = height-height/3;
    this.buttonWidth = width-(width/6)*2;
    this.buttonHeight = 80;
  }

  clickedOn() {
    if (mouseX > this.x && mouseX < this.x+this.buttonWidth && mouseY > this.y && mouseY < this.y+this.buttonHeight) {
      return true;
    }
    else {
      return false;
    }
  }

  show() {
    if (bird.y >= height-bird.birdHeight) {
      fill(236, 251, 222);
      stroke(40, 30, 36);
      rect(this.x, this.y, this.buttonWidth, this.buttonHeight, 16);

      textSize(26);
      fill(40, 160, 40);
      noStroke();
      textStyle(BOLD);
      textAlign(CENTER, CENTER);
      text("RESET GAME", width/2, this.y+this.buttonHeight/2);
    }
  }
}
