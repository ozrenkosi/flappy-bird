class Score {
  constructor() {
    this.text = 0;
  }

  update() {
    for (let i = pipes.length-1; i >= 0; i--) {
      if (pipes[i].x < bird.x-bird.birdWidth/2 && pipes[i].x > bird.x-bird.birdWidth/2-3 && birdIsAlive === true) {
        pointSound.play();
        this.text = this.text + 1;
      }
    }
  }

  show() {
    textSize(70);
    fill(236, 251, 222);
    stroke(0);
    strokeWeight(8);
    strokeJoin(MITER);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(this.text, width/2, height/6);
  }
}
