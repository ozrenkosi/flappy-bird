class Score {
  constructor() {
    this.y = 110;
    this.text = 0;
  }

  update() {
    for (let i = pipes.length-1; i >= 0; i--) {
      if (pipes[i].x < bird.x-bird.birdWidth/2 && pipes[i].x > bird.x-bird.birdWidth/2-5 && birdIsAlive === true) {
        pointSound.play();
        this.text = this.text + 1;
      }
    }
  }

  show() {
    textSize(50);
    fill(236, 251, 222);
    stroke(0);
    strokeWeight(8);
    strokeJoin(BEVEL);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(this.text, width/2, this.y);
  }
}
