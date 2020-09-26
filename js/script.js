//===========================DECLARING VARIABLES===========================//

let field = document.body;
let pikachu = document.getElementById('pikachu');
let ball = document.getElementById('ball');
let scoreF = document.getElementById('score');

let fieldW = field.getBoundingClientRect().width;
let fieldH = field.getBoundingClientRect().height;
let pikachuW = pikachu.getBoundingClientRect().width;
let pikachuH = pikachu.getBoundingClientRect().height;
let ballW = ball.getBoundingClientRect().width;
let ballH = ball.getBoundingClientRect().height;

let pikaRun = 0;
let direction;
let score = 0;

//===========================DECLARING FUNCTIONS===========================//

function run(direction) {
        if (pikaRun == 132) pikaRun = 0;
            pikachu.style.backgroundPositionX = pikaRun +'%';
            pikaRun += 33;
            // console.log(pikaRun)
        if (direction == 'down' || direction == 'right-down' || direction == 'left-down') {
           pikachu.style.backgroundPositionY = 0;
        }
        else if (direction == 'left') {
            pikachu.style.backgroundPositionY = '35%';
        } 
        else if (direction == 'right') {
            pikachu.style.backgroundPositionY = '70%';
        } 
        else if (direction == 'up' || direction == 'right-up' || direction == 'left-up') {
            pikachu.style.backgroundPositionY = '100%';
        } 
         
}

function ballJump() {
    ball.style.top = Math.round(Math.random()*(fieldH-ballH))+'px';
    ball.style.left = Math.round(Math.random()*(fieldW-ballW))+'px';
    setTimeout(()=>{ball.className = ''}, 3000)
}

function showScore(score) {
    scoreF.innerText = 'Your score: '+score;
}

//=========================== GAME RUNNING ===========================//

ballJump();

document.addEventListener('keydown', (event) => {
    // running
    if (event.code == "ArrowLeft" || event.code == "KeyA") {
        pikachuPosX = pikachu.offsetLeft;
        pikachu.style.left = (pikachuPosX - 5) +'px';
        run('left')
    } else if (event.code == "ArrowRight" || event.code == "KeyD") {
        pikachuPosX = pikachu.offsetLeft;
        pikachu.style.left = (pikachuPosX + 5) + 'px';
        run('right')
    } else if (event.code == "ArrowUp" || event.code == "KeyW") {
        pikachuPosY = pikachu.offsetTop;
        pikachu.style.top = (pikachuPosY - 5) + 'px';
        run('up')
    } else if (event.code == "ArrowDown" || event.code == "KeyS") {
        pikachuPosY = pikachu.offsetTop;
        pikachu.style.top = (pikachuPosY + 5) +'px';
        run('down')
    }
    // field boundaries
    if (pikachu.offsetLeft <= -15) pikachu.style.left = '-15px';
    if (pikachu.offsetLeft+pikachuW >= fieldW) pikachu.style.left = fieldW - pikachuW + 'px';
    if (pikachu.offsetTop <= -20) pikachu.style.top = '-20px';
    if (pikachu.offsetTop+pikachuH >= fieldH) pikachu.style.top = fieldH - pikachuH + 'px';

    // catching ball
    if ((ball.offsetLeft+ballW) >= pikachu.offsetLeft && (pikachu.offsetLeft+pikachuW) >= ball.offsetLeft && ball.offsetTop <= (pikachu.offsetTop+pikachuH) && pikachu.offsetTop <= (ball.offsetTop+ballH)) {score++; ball.className = 'caught'; showScore(score); ballJump()}
 
})


//----------------------------diagonal run prototype ----------------------------//

// function runOnKeys(func, ...codes) {
//     let pressed = new Set();

//     document.addEventListener('keydown', function(event) {
//       pressed.add(event.code);

//       for (let code of codes) { 
//         if (!pressed.has(code)) {
//           return;
//         }
//       }
//       pressed.clear();

//       func();
//     });

//     document.addEventListener('keyup', function(event) {
//       pressed.delete(event.code);
//     });
// }

// function runLeft() {
//     pikachuPosX = pikachu.offsetLeft;
//     pikachu.style.left = (pikachuPosX - 10) +'px';
//     run('left')
// }

// function runRight() {
//     pikachuPosX = pikachu.offsetLeft;
//     pikachu.style.left = (pikachuPosX + 10) + 'px';
//     run('right')
// }

// function runUp() {
//     pikachuPosY = pikachu.offsetTop;
//     pikachu.style.top = (pikachuPosY - 10) + 'px';
//     run('up')
// }

// function runDown() {
//     pikachuPosY = pikachu.offsetTop;
//     pikachu.style.top = (pikachuPosY + 10) +'px';
//     run('down')
// }

// function runDownLeft() {
//     pikachuPosX = pikachu.offsetLeft;
//     pikachuPosY = pikachu.offsetTop;
//     pikachu.style.top = (pikachuPosY + 5) +'px';
//     pikachu.style.left = (pikachuPosX - 5) +'px';
//     run('down')
// }

// function runDownRight() {
//     pikachuPosX = pikachu.offsetLeft;
//     pikachuPosY = pikachu.offsetTop;
//     pikachu.style.top = (pikachuPosY + 5) +'px';
//     pikachu.style.left = (pikachuPosX + 5) + 'px';
//     run('down')
// }

// function runUpLeft() {
//     pikachuPosX = pikachu.offsetLeft;
//     pikachuPosY = pikachu.offsetTop;
//     pikachu.style.top = (pikachuPosY - 5) + 'px';
//     pikachu.style.left = (pikachuPosX - 5) +'px';
//     run('up')
// }

// function runUpRight() {
//     pikachuPosX = pikachu.offsetLeft;
//     pikachuPosY = pikachu.offsetTop;
//     pikachu.style.top = (pikachuPosY - 5) + 'px';
//     pikachu.style.left = (pikachuPosX + 5) +'px';
//     run('up')
// }

// runOnKeys(runDown, "ArrowDown")
// runOnKeys(runDown, "KeyS")
// runOnKeys(runLeft, "ArrowLeft")
// runOnKeys(runLeft, "KeyA")
// runOnKeys(runUp, "ArrowUp")
// runOnKeys(runUp, "KeyW")
// runOnKeys(runRight, "ArrowRight")
// runOnKeys(runRight, "KeyD")
// runOnKeys(runDownLeft, "ArrowDown", "ArrowLeft")


// ------------------- other option -------------------

// let timestamp = [];
// let keys = [];
// timestamp.push(parseInt(event.timeStamp));
//     keys.push(event.code);
//     console.log(keys)
//     console.log(timestamp);
//     let keyA = keys[0];
//     let keyB = keys[1];
//     if (timestamp.length >= 2) {timestamp = []; keys = []}
//     console.log(keyA);
//     console.log(keyB);

//     if (keyA !== keyB && (timestamp[1]-timestamp[0] <= 100)) {
//         if (keyA == 'ArrowLeft' && keyB == 'ArrowDown' || keyB == 'ArrowLeft' && keyA == 'ArrowDown' || keyA == 'KeyA' && keyB == 'KeyS' || keyB == 'KeyA' && keyA == 'KeyS') runDownLeft();
//         if (keyA == 'ArrowRight' && keyB == 'ArrowDown' || keyB == 'ArrowRight' && keyA == 'ArrowDown' || keyA == 'KeyD' && keyB == 'KeyS' || keyB == 'KeyD' && keyA == 'KeyS') runDownRight();
//         if (keyA == 'ArrowLeft' && keyB == 'ArrowUp' || keyB == 'ArrowLeft' && keyA == 'ArrowUp' || keyA == 'KeyA' && keyB == 'KeyW' || keyB == 'KeyA' && keyA == 'KeyW') runUpLeft();
//         if (keyA == 'ArrowRight' && keyB == 'ArrowUp' || keyB == 'ArrowRight' && keyA == 'ArrowUp' || keyA == 'KeyD' && keyB == 'KeyW' || keyB == 'KeyD' && keyA == 'KeyW') runUpRight();
//     } 