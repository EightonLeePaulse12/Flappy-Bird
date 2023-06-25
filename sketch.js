let bird;

const canv = document.querySelector("canvas");
const ctx = canv.getContext("2d");

canv.width = window.innerWidth;
canv.height = window.innerHeight;
canv.style.backgroundColor = "azure";

function Bird() {
  this.y = canv.height / 2;
  this.x = 200;
  this.gravity = 1;
  this.lift = -20;
  this.velocity = 0;
  this.radius = 20;

  this.up = function () {
    this.velocity += this.lift;
  };

  this.show = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = "azure";
    ctx.stroke();
  };

  this.update = function () {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y + this.radius > canv.height) {
      this.y = canv.height + -this.radius;
      this.velocity = 0;
    }
    if (this.y - this.radius < 0) {
      this.y = 0 - -this.radius;
      this.velocity = 0;
    }
  };
}
bird = new Bird();

function newBird() {
  requestAnimationFrame(newBird);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  bird.update();
  bird.show();
}

function spaceBar() {
  window.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.code == "Space") {
      console.log(bird.up);
      bird.up();
    }
  });
  // if(key == ' '){
  //     console.log("HI")
  // }
}

spaceBar();

newBird();
