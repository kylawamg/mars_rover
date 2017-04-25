//Inicialización del objeto rover
var myRover = {
  position: [4,5],
  direction: 'N'

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
  function goBack(rover) {

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
    moveRoverOnGrid();

  }
//Movimiento hacia delante
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      if(rover.position[0]===9){
        rover.position[0]=0;
        console.log("Has dado la vuelta de N a S al mapa!")
      }else{
        rover.position[0]++;
      }

      break;
    case 'E':
    if(rover.position[1]===9){
      rover.position[1]=0;
      console.log("Has dado la vuelta de E a W al mapa!")
    }else{
      rover.position[1]++;
    }

      break;
    case 'S':
    if(rover.position[0]===0){
      rover.position[0]=9;
        console.log("Has dado la vuelta de S a N al mapa!")
    }else {
        rover.position[0]--

    }

      break;
    case 'W':
    if(rover.position[1]===0){
      rover.position[1]=9;
        console.log("Has dado la vuelta de W a E al mapa!")
    }else{
        rover.position[1]--
    }

      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
  moveRoverOnGrid();

}
//Recibe el strin de comandos y comprueba cuales tiene que ejecutar.
function parseCommands (sequence) {

  for (var i = 0; i < sequence.length; i++) {
    switch (sequence[i]) {
      case "f":
            console.log("Rover Avanzando...");
            goForward(myRover);
        break;
      case "b":
            console.log("Rover retrocediendo...");
              goBack(myRover);
        break;
      case "l":
            console.log("Rover girando a la izquierda...");
            if (myRover.direction === "N"){
              myRover.direction = "W";
              console.log("Nueva direccion del rover W");

            }else if (myRover.direction === "E") {
              myRover.direction = "N";
              console.log("Nueva direccion del rover N");

            }else if (myRover.direction === "S") {
              myRover.direction = "E";
              console.log("Nueva direccion del rover E");

            }else if (myRover.direction === "W") {
              myRover.direction = "S";
              console.log("Nueva direccion del rover S");

            }else {
              console.console.log("Hemos perdido el vehiculo");
            }
        break;
      case "r":
            console.log("Rover girando a la derecha...");
            if (myRover.direction === "N"){
              myRover.direction = "E";
              console.log("Nueva direccion del rover E");

            }else if (myRover.direction === "E") {
              myRover.direction = "S";
              console.log("Nueva direccion del rover S");

            }else if (myRover.direction === "S") {
              myRover.direction = "W";
              console.log("Nueva direccion del rover W");

            }else if (myRover.direction === "W") {
              myRover.direction = "N";
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
    var sequence = prompt("Introduce tu secuencia de comandos");
  parseCommands(sequence);
}
//Obtenemos los datos del rover.
function getRoverData () {

  console.log("La direccion del rover es " + myRover.direction);
  console.log("La posicion del rover es " + myRover.position);
}
//Print the rover on the grid.
function moveRoverOnGrid () {

var y = myRover.position[0];
var x = myRover.position[1];
//Repintamos el array de 0 y lo imprimimos
for (var i = 1; i < 10; i++) {
  grid[i] = [];
  for (var j = 0; j < 10; j++) {
  grid[i][j] = 0;
  }
}
if(y === 10){
  y = 9;

}
if(x === 10){
  x = 9;

}
grid[y][x] = 1;
console.log(grid);
}


goForward(myRover);
