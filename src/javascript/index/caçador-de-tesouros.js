const appGame = document.getElementById("jogo");
const game = document.getElementById("game-func");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const gameover = document.getElementById("game-over");
const reinicia = document.getElementById("button-reinicia");
const play = document.getElementById("play");
const aceitar = document.getElementById("play-button");
const gameSeta = document.getElementById("game-seta");

const personagemImg = new Image();
personagemImg.src = "../../assents/img/apps/jogo/personagem.png";
const personagemDrawSize = { width: 186, height: 186 };
const personagemColSize = { width: 60, height: 60 };

const mumiaImg = new Image();
mumiaImg.src = "../../assents/img/apps/jogo/mumia.png";
const mumiaDrawSize = { width: 96, height: 96 };
const mumiaColSize = { width: 30, height: 30 };

const ouroImg = new Image();
ouroImg.src = "../../assents/img/apps/jogo/ouro.png";
const ouroDrawSize = { width: 84, height: 84 };
const ouroColSize = { width: 50, height: 43 };

let square = { x: 50, y: 50, speed: 5 };
let keys = {};
let level = 1;
let balls = [];
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth * 0.4;
  canvas.height = window.innerHeight * 0.4;


  if (window.innerWidth <= 1024) {
    personagemDrawSize.width = 100;
    personagemDrawSize.height = 100;

    mumiaDrawSize.width = 60;
    mumiaDrawSize.height = 60;

    ouroDrawSize.width = 50;
    ouroDrawSize.height = 50;
  } else if (window.innerWidth >= 600) {
    personagemDrawSize.width = 30;
    personagemDrawSize.height = 30;

    mumiaDrawSize.width = 50;
    mumiaDrawSize.height = 50;

    ouroDrawSize.width = 40;
    ouroDrawSize.height = 40;
  } else  {
    personagemDrawSize.width = 186;
    personagemDrawSize.height = 186;

    mumiaDrawSize.width = 96;
    mumiaDrawSize.height = 96;

    ouroDrawSize.width = 84;
    ouroDrawSize.height = 84;
  }
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function update() {
  if (keys["ArrowUp"]) square.y -= square.speed;
  if (keys["ArrowDown"]) square.y += square.speed;
  if (keys["ArrowLeft"]) square.x -= square.speed;
  if (keys["ArrowRight"]) square.x += square.speed;

  square.x = Math.max(0, Math.min(canvas.width - personagemColSize.width, square.x));
  square.y = Math.max(0, Math.min(canvas.height - personagemColSize.height, square.y));

  for (let ball of balls) {
    if (!ball.collected) {
      if (
        checkRectCollision(
          square.x,
          square.y,
          personagemColSize.width,
          personagemColSize.height,
          ball.x,
          ball.y,
          ouroColSize.width,
          ouroColSize.height
        )
      ) {
        ball.collected = true;
      }
    }
  }

  if (balls.every((b) => b.collected)) {
    level++;
    resetLevel();
  }

  for (let star of stars) {
    star.x += star.speedX;
    if (star.x <= 0 || star.x + mumiaColSize.width >= canvas.width) {
      star.speedX *= -1;
    }

    if (
      checkRectCollision(
        square.x,
        square.y,
        personagemColSize.width,
        personagemColSize.height,
        star.x,
        star.y,
        mumiaColSize.width,
        mumiaColSize.height
      )
    ) {
      gameover.style.display = "flex";
      level = 1;
      resetLevel();
      break;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(
    personagemImg,
    square.x,
    square.y,
    personagemDrawSize.width,
    personagemDrawSize.height
  );

  for (let ball of balls) {
    if (!ball.collected) {
      ctx.drawImage(
        ouroImg,
        ball.x,
        ball.y,
        ouroDrawSize.width,
        ouroDrawSize.height
      );
    }
  }

  for (let star of stars) {
    ctx.drawImage(
      mumiaImg,
      star.x,
      star.y,
      mumiaDrawSize.width,
      mumiaDrawSize.height
    );
  }
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

function resetLevel() {
  square.x = 50;
  square.y = 50;
  balls = [];
  stars = [];

  for (let i = 0; i < 3; i++) {
    balls.push({
      x: Math.random() * (canvas.width - ouroDrawSize.width),
      y: Math.random() * (canvas.height - ouroDrawSize.height),
      collected: false,
    });
  }

  const maxMumias = 3;
  const numMumias = Math.min(level, maxMumias);

  if (level > 1) {
    for (let i = 0; i < numMumias; i++) {
      let star;
      do {
        star = {
          x: Math.random() * (canvas.width - mumiaDrawSize.width),
          y: Math.random() * (canvas.height - mumiaDrawSize.height),
          width: mumiaColSize.width,
          height: mumiaColSize.height,
          speedX: (Math.random() > 0.5 ? 1 : -1) * (2 + level),
        };
      } while (checkOverlap(square, star));
      stars.push(star);
    }
  }
}

function checkRectCollision(x1, y1, w1, h1, x2, y2, w2, h2) {
  return !(x1 + w1 < x2 || x1 > x2 + w2 || y1 + h1 < y2 || y1 > y2 + h2);
}

function checkOverlap(square, obj) {
  const padding = 50;
  return (
    obj.x < square.x + personagemColSize.width + padding &&
    obj.x + obj.width > square.x - padding &&
    obj.y < square.y + personagemColSize.height + padding &&
    obj.y + obj.height > square.y - padding
  );
}

gameSeta.addEventListener("click", function () {
  game.style.display = "none";
  document.getElementById("apps").style.display = "flex";
});

appGame.addEventListener("click", function () {
  game.style.display = "block";
  document.getElementById("apps").style.display = "none";
  play.style.display = "flex";
});

aceitar.addEventListener("click", function () {
  play.style.display = "none";
  document.querySelector(".controls").style.display = "grid";
});

gameover.addEventListener("click", function () {
  gameover.style.display = "none";
});

window.addEventListener("keydown", (e) => (keys[e.key] = true));
window.addEventListener("keyup", (e) => (keys[e.key] = false));

["up", "down", "left", "right"].forEach((dir) => {
  document.getElementById(dir).addEventListener("mousedown", () => (keys[`Arrow${dir.charAt(0).toUpperCase() + dir.slice(1)}`] = true));
  document.getElementById(dir).addEventListener("mouseup", () => (keys[`Arrow${dir.charAt(0).toUpperCase() + dir.slice(1)}`] = false));
  document.getElementById(dir).addEventListener("touchstart", (e) => {
    e.preventDefault();
    keys[`Arrow${dir.charAt(0).toUpperCase() + dir.slice(1)}`] = true;
  });
  document.getElementById(dir).addEventListener("touchend", (e) => {
    e.preventDefault();
    keys[`Arrow${dir.charAt(0).toUpperCase() + dir.slice(1)}`] = false;
  });
});

resetLevel();
gameLoop();
export { game };
