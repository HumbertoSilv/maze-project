let map = [
    "WWWWWWWWWWWWWWWWWWW",
    "W        W        W",
    "W WW WWW W WWW WW W",
    "W WW WWW W WWW WW W",
    "W                 W",
    "W WW W WWWWW W WW W",
    "W    W   W   W    W",
    "WWWW WW     WW WWWW",
    "   W W       W W   ",
    "   W W WWWWW W W   ",
    "WWWW W W   W W WWWW",
    "S      W   W      F",
    "WWWW W W   W W WWWW",
    "   W W WWWWW W W   ",
    "   W W       W W   ",
    "WWWW W WWWWW W WWWW",
    "W        W        W",
    "W WW WWW   WWW WW W",
    "W  W           W  W",
    "WW W W WWWWW W W WW",
    "W    W   W   W    W",
    "W WWWWWW   WWWWWW W",
    "W                 W",
    "WWWWWWWWWWWWWWWWWWW",
];

let playerPosition = {x:11,y:0 };

/*********** CREATE MAP***********/ 

const creatMap = () => {

  const colDiv = document.createElement('div');
  
  for (let i = 0; i < map.length; i++) {

    const row = map[i];
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('displayFlex');
    rowDiv.classList.add('row');

    for (let j = 0; j < row.length; j++) {

      const div = document.createElement('div');
        if (row[j] === 'W') {
          div.classList.add('block');
        }
      div.classList.add('cell');
      div.id = `cell-${i}-${j}`;
      rowDiv.appendChild(div);
    }
    colDiv.appendChild(rowDiv);
  }
  
  return colDiv;

}

const domMap = creatMap();
document.getElementById('box').appendChild(domMap);

/*************** DIV PLAYER ************/ 

let divPlayer = document.createElement('div');
    divPlayer.classList.add('divPlayer');

let divRed = document.createElement('div');
    divRed.classList.add('divRed');

document.getElementById("cell-6-11").appendChild(divRed);

let divBlue = document.createElement('div');
    divBlue.classList.add('divBlue');

document.getElementById("cell-16-6").appendChild(divBlue);

/******** PLAYER POSITION **************/

let currentPosition = document.getElementById(`cell-${playerPosition.x}-${playerPosition.y}`);
    currentPosition.appendChild(divPlayer);

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

    if (playerPosition.y < 0) {
      playerPosition.y = 0;
    }

    if (keyName == 'ArrowDown' || keyName == 's') {
      playerPosition.x += 1;
      if (map[playerPosition.x][playerPosition.y] === 'W') {
        playerPosition.x -= 1;
        currentPosition = document.getElementById(`cell-${playerPosition.x}-${playerPosition.y}`);
        currentPosition.appendChild(divPlayer);  
      }
    }
    if (keyName == 'ArrowUp' || keyName == 'w') {
      playerPosition.x -= 1;
      if (map[playerPosition.x][playerPosition.y] === 'W') {
        playerPosition.x += 1;
        currentPosition = document.getElementById(`cell-${playerPosition.x}-${playerPosition.y}`);
        currentPosition.appendChild(divPlayer);  
      }
    }
    if (keyName == 'ArrowRight' || keyName == 'd') {
      playerPosition.y += 1;
      if (map[playerPosition.x][playerPosition.y] === 'W') {
        playerPosition.y -= 1;
        currentPosition = document.getElementById(`cell-${playerPosition.x}-${playerPosition.y}`);
        currentPosition.appendChild(divPlayer);  
      }
    }
    if (keyName == 'ArrowLeft' || keyName == 'a') {
      playerPosition.y -= 1;
      if (map[playerPosition.x][playerPosition.y] === 'W') {
        playerPosition.y += 1;
        currentPosition = document.getElementById(`cell-${playerPosition.x}-${playerPosition.y}`);
        currentPosition.appendChild(divPlayer);  
      }
    }  

    currentPosition = document.getElementById(`cell-${playerPosition.x}-${playerPosition.y}`);
    currentPosition.appendChild(divPlayer);

    hasVictory()
});

/********* VICTORY *********/ 

function hasVictory() {
  if (playerPosition.x === 11 && playerPosition.y === 18) {
    document.getElementById('msg').classList.add('victory');
  }
}
/********** BUTTON RESET ****************/

const reloadPage = document.getElementById('btnReset');
reloadPage.addEventListener('click', () => location.reload());

