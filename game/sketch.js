var bird;
var pipes = [];

var seconds = 0;
var el = document.getElementById('score-counter');

function incrementSeconds() {
    seconds += 1;
    el.innerHTML= "Score: " + seconds;
}

var cancel = setInterval(incrementSeconds, 1000);

function setup() {
  createCanvas(1000, 700);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      if(!alert("Game Over!\n\nYour score is: " + seconds))
        {
          alert("Game Over!\n\nYour score is: " + seconds);
          alert("Game Over!\n\nYour score is: " + seconds);
          alert("Game Over!\n\nYour score is: " + seconds);

          window.location.reload();
          sleep(1000);
        }
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}
