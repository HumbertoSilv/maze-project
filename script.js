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
          div.style.backgroundColor = '#000';
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

let playerPosition = {x:9,y:0 };

let divPlayer = document.createElement('div');
    divPlayer.innerText = "P";




document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  let currentPosition = document.getElementById(`cell-${playerPosition.x}-${playerPosition.y}`);
      currentPosition.appendChild(divPlayer);


  if (keyName == 'ArrowDown' || keyName == 's') {
    playerPosition.x += 1;
  }
  if (keyName == 'ArrowUp' || keyName == 'w') {
    playerPosition.x -= 1;
  }
  if (keyName == 'ArrowRight' || keyName == 'd') {
    playerPosition.y += 1;
  }
  if (keyName == 'ArrowLeft' || keyName == 'a') {
    playerPosition.y -= 1;
  }

console.log(currentPosition)

});


/*function player() {
    let test = document.getElementById('l' + playerPosition.x).childNodes;
        test[playerPosition.y].innerText = "s";
        test[playerPosition.y].style.backgroundColor = 'yellow';
    
    let start = document.getElementById('l' + playerPosition.x).childNodes;
    let divPlayer = document.createElement('div');
    divPlayer.innerText = 's';
    start[playerPosition.y].appendChild(divPlayer);
    console.log(playerPosition)

}
*/
