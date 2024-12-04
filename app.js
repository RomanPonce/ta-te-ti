const celdas = document.querySelectorAll(".cell");
const marcador = document.querySelector(".turno");
const tablero = document.querySelector(".gamerboard");

// condigo consol(sirve)
let ganador = false;
// Ayuda
// i = 0
// 0 1 2
// 3 4 5
// 6 7 8

const columnaUno = [1,0,0,1,0,0,1,0,0];
const columnaDos = [0,1,0,0,1,0,0,1,0];
const columnaTres = [0,0,1,0,0,1,0,0,1];

const diagonalC = [0,0,1,0,1,0,1,0,0];
const diagonalD = [1,0,0,0,1,0,0,0,1];

const noGana = [0, 1, 1, 1, 0, 0, 0, 0, 0];

function buscarGanador(arr, marca) {
  const ganaPor = {
    linea: false,
    columna: false,
    diagonalDecreciente: false,
    diagonalCreciente: false,
  };
  // Linea
  for (let i = 0; i <= arr.length; i += 3) {
    if (arr[i] === marca && arr[i + 1] === marca && arr[i + 2] === marca) {
      ganaPor.linea = true;
    }
  }

  // Columna
  for (let i = 0; i <= 3; i++) {
    if (arr[i] === marca && arr[i + 3] === marca && arr[i + 6] === marca) {
      ganaPor.columna = true;
    }
  }
  // Diagonal 1
  if (arr[0] === marca && arr[4] === marca && arr[8] === marca) {
    ganaPor.diagonalDecreciente = true;
  }

  // Diagonal 2
  if (arr[2] === marca && arr[4] === marca && arr[6] === marca) {
    ganaPor.diagonalCreciente = true;
  }

  return ganaPor;
}
const ganaCF = buscarGanador(columnaUno, 1);
const ganaCS = buscarGanador(columnaDos, 1);
const ganaCT = buscarGanador(columnaTres, 1);

const ganaDC = buscarGanador(diagonalC, 1);
const ganaDD = buscarGanador(diagonalD, 1);


console.log("Gana en columna 1 todo el objeto:");
console.log(ganaCF);
console.log("Gana en columna 2 todo el objeto:");
console.log(ganaCS);
console.log("Gana en columna 3 todo el objeto:");
console.log(ganaCT);
console.log("Gana en diagonal creciente todo el objeto:");
console.log(ganaDC);
console.log("Gana en diagonal decreciente todo el objeto:");
console.log(ganaDD);
