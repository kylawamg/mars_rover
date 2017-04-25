//flag que comprueba nº de rover
var flagSecondRover = false;
var secondRover = {
  position: [0,0],
  direction: 'N',
  id: 2
};
//Inicialización del objeto rover
var myRover = {
  position: [5,5],
  direction: 'N',
  id: 1

};
//Contrucción del grid 10x10
var grid = [];
  for (var i = 0; i < 10; i++) {
    grid[i] = [];
    for (var j = 0; j < 10; j++) {
      grid[i][j] = 0;
    }
  }
//Movimiento hacia atras
  function goBack(rover,grid) {
  grid[rover.position[0]][rover.position[1]] = 0;
    switch(rover.direction) {
      case 'N':
      if(rover.position[0]===0){
        rover.position[0]=9;
        console.log("Has dado la vuelta de S a N al mapa!")
      }else{
        rover.position[0]--
      }

        break;
      case 'E':
      if(rover.position[1]===9){
        rover.position[1]=0;
        console.log("Has dado la vuelta de e a w al mapa!")
      }else {
        rover.position[1]--
      }

        break;
      case 'S':
      if(rover.position[0]===9){
        rover.position[0]=0;
        console.log("Has dado la vuelta de S a N al mapa!")
      }else{
        rover.position[0]++
      }

        break;
      case 'W':
      if(rover.position[1]===0){
        rover.position[1]=9;
        console.log("Has dado la vuelta de w a e al mapa!")
      }else {
        rover.position[1]++
      }


        break;
    };

    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
    moveRoverOnGrid(rover,grid);

  }
//Movimiento hacia delante
function goForward(rover,grid) {
    grid[rover.position[0]][rover.position[1]] = 0;
  switch(rover.direction) {
    case 'N':
      if(rover.position[0]===9){
        rover.position[0]=0;
        console.log("Has dado la vuelta de N a S al mapa!")
      }else{
        rover.position[0]++;
      }
      if (checkObstacles(rover,grid) === true) {
        if (rover.position[0] === 0) {
          rover.position = 9;
        }else {
          rover.position[0]--;
        }
      }
      break;
    case 'E':
    if(rover.position[1]===9){
      rover.position[1]=0;
      console.log("Has dado la vuelta de E a W al mapa!")
    }else{
      rover.position[1]++;
    }
    if (checkObstacles(rover,grid) === true) {
      if (rover.position[1] === 0) {
        rover.position = 9;
      }else {
        rover.position[1]--;
      }
    }
      break;
    case 'S':
    if(rover.position[0]===0){
      rover.position[0]=9;
        console.log("Has dado la vuelta de S a N al mapa!")
    }else {
        rover.position[0]--

    }
    if (checkObstacles(rover,grid) === true) {
      if (rover.position[0] === 9) {
        rover.position = 0;
      }else {
        rover.position[0]++;
      }
    }
      break;
    case 'W':
    if(rover.position[1]===0){
      rover.position[1]=9;
        console.log("Has dado la vuelta de W a E al mapa!")
    }else{
        rover.position[1]--
    }
    if (checkObstacles(rover,grid) === true) {
      if (rover.position[1] === 9) {
        rover.position = 0;
      }else {
        rover.position[1]++;
      }
    }
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
  moveRoverOnGrid(rover,grid);

}
//Recibe el strin de comandos y comprueba cuales tiene que ejecutar.
function parseCommands (sequence, rover) {

  for (var i = 0; i < sequence.length; i++) {
    switch (sequence[i]) {
      case "f":
            console.log("Rover Avanzando...");
            goForward(rover,grid);
        break;
      case "b":
            console.log("Rover retrocediendo...");
              goBack(rover,grid);
        break;
      case "l":
            console.log("Rover girando a la izquierda...");
            if (rover.direction === "N"){
              rover.direction = "W";
              console.log("Nueva direccion del rover W");

            }else if (rover.direction === "E") {
              rover.direction = "N";
              console.log("Nueva direccion del rover N");

            }else if (rover.direction === "S") {
              rover.direction = "E";
              console.log("Nueva direccion del rover E");

            }else if (rover.direction === "W") {
              rover.direction = "S";
              console.log("Nueva direccion del rover S");

            }else {
              console.console.log("Hemos perdido el vehiculo");
            }
            console.log(grid);
        break;
      case "r":
            console.log("Rover girando a la derecha...");
            if (rover.direction === "N"){
              rover.direction = "E";
              console.log("Nueva direccion del rover E");

            }else if (rover.direction === "E") {
              rover.direction = "S";
              console.log("Nueva direccion del rover S");

            }else if (rover.direction === "S") {
              rover.direction = "W";
              console.log("Nueva direccion del rover W");

            }else if (rover.direction === "W") {
              rover.direction = "N";
              console.log("Nueva direccion del rover N");

            }else {
              console.console.log("Hemos perdido el vehiculo");
            }
        break;
      default:
      console.log("Comando no valido");
      break;

    }
  }
}

//Obtiene la secuencia tras el prompt
function getSequence (){
  if (flagSecondRover === true){
    var nRover = prompt("Type rover1 or rover2");
    if (nRover === "rover1") {
      var sequence = prompt("Introduce tu secuencia de comandos");
    parseCommands(sequence, myRover);
  }else if (nRover === "rover2"){
    var sequence = prompt("Introduce tu secuencia de comandos");
    parseCommands(sequence, secondRover);
  }else {
    console.log("comando no valido");
  }
}else {
  var sequence = prompt("Introduce tu secuencia de comandos");
parseCommands(sequence, myRover);
}


}
//Obtenemos los datos del rover.
function getRoverData () {
  if (flagSecondRover === true) {
    console.log("La direccion del rover1 es " + myRover.direction);
    console.log("La posicion del rover1 es " + myRover.position);
    console.log("La direccion del rover2 es " + secondRover.direction);
    console.log("La posicion del rover2 es " + secondRover.position);
  }else{
  console.log("La direccion del rover es " + myRover.direction);
  console.log("La posicion del rover es " + myRover.position);
  }
}
//Print the rover on the grid.
function moveRoverOnGrid (rover,grid) {

var y = rover.position[0];
var x = rover.position[1];
//Repintamos el array de 0 y lo imprimimos

grid[y][x] = 1;
console.log(grid);
}
//Funcionalidad añadida Bonus
//Creamos los obstaculos aleatorios en el grid y lo pintamos

function prinGrid (grid, rover){

  for (var i = 0; i < 5; i++) {
    var y = Math.round(Math.random() * 10);
    var x = Math.round(Math.random() * 10);
    if (x === 10) {
      x=9;
    }if (y === 10) {
      y=9;
    }
    grid[y][x] = 2;

  }
    lin =rover.position[0];
    col =rover.position[1];
    grid [lin][col] = 1;

    console.log(grid);
    return grid;
}
//Comprobar si hay obstaculo y parar de moverse.
  function checkObstacles (rover,grid){
    var y =  rover.position[0];
    var x = rover.position[1];
    if (grid[y][x] === 2 || grid[y][x] === 1) {
      console.log("Hay un obstaculo, no puedo moverme mas...");
      return true;
    }else {
      return false;
    }
  }
  //nuevo rover
  function createNewRover() {

    alert("Nuevo rover enviado. Mira la consola para ver donde ha atterizado.");
    flagSecondRover = true;
    console.log("La dirección de tu nuevo rover es: " + secondRover.direction);
    console.log("La posicion de tu nuevo rover es: " + secondRover.position);
    return flagSecondRover;
  }
getRoverData (myRover);
prinGrid(grid, myRover);
