class ResetButton {
  constructor() {
    this.x = 50;
    this.y = 400;
    this.buttonWidth = 250;
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
    if (bird.y >= gameAreaHeight-bird.birdHeight) {
      fill(236, 251, 222);
      stroke(40, 30, 36);
      rect(this.x, this.y, this.buttonWidth, this.buttonHeight, 16);

      fill(40, 160, 40);
      noStroke();
      triangle(width/2-12, this.y+this.buttonHeight/2-20, width/2-12, this.y+this.buttonHeight/2+20, width/2+12, this.y+this.buttonHeight/2);
    }
  }
}
