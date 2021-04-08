let map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let playerPosition = {x:9,y:0 };

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
  if (playerPosition.x === 8 && playerPosition.y === 20) {
    document.getElementById('msg').classList.add('victory');
  }
}
/********** BUTTON RESET ****************/

const reloadPage = document.getElementById('btnReset');
reloadPage.addEventListener('click', () => location.reload());

/********* BUTTON SONG ******************/

const btnSongs = document.getElementById('btnSongs');
btnSongs.addEventListener('click', () => {
  const song01 = document.getElementById('song01');
  song01.muted = !song01.muted;
})
