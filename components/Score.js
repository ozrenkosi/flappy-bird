class Score {
  constructor() {
    this.text = 0;
  }

  update() {
    for (let i = pipes.length-1; i >= 0; i--) {
      if (pipes[i].x < bird.x && pipes[i].x > bird.x-5) {
        this.text = this.text + 1;
      }
    }
  }

  show() {
    textSize(40);
    fill(236, 251, 222);
    noStroke();
    textStyle(BOLD);
    textAlign(RIGHT, CENTER);
    text(this.text, width-width/10, height/20);
  }
}
