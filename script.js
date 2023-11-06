var buble = "";
var timer = 60;
var ran = 0;
var score = 0;
var count = 0;

function increasescore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function runTimer() {
  var timestop = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timestop);
      document.querySelector("#ptmb").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function makebuble() {
  if (count == 1) {
    buble = "";
    count = 0;
  }
  for (var index = 1; index < 190; index++) {
    const floor = Math.floor(Math.random() * 10);
    buble += `<div class="buble">${floor}</div>`;
  }
  document.querySelector("#ptmb").innerHTML = buble;
  count++;
}

makebuble();
function getnewhint() {
  ran = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").innerHTML = ran;
}
getnewhint();

document.querySelector("#ptmb").addEventListener("click", function (details) {
  var clicknum = Number(details.target.textContent);
  if (clicknum === ran) {
    increasescore();
    makebuble();
    getnewhint();
  } else {
    document.querySelector(
      "#ptmb"
    ).innerHTML = `<h1>Game Over</h1>`;
  }
});


runTimer();
