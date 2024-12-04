const celdas = document.querySelectorAll(".cell");
const marcador = document.querySelector(".turno");
const tablero = document.querySelector(".gamerboard");

// condigo consol(sirve)
let ganador = false;
// Ayuda
// 0 1 2
// 3 4 5
// 6 7 8

const LineaTop = [1,1,1,0,0,0,0,0,0];
const LineaMid = [0,0,0,1,1,1,0,0,0];
const LineaMBotton= [0,0,0,0,0,0,1,1,1];
const noGana= [0,1,1,1,0,0,0,0,0];


function buscarGanador(arr, marca){
  const ganaPor = {
    linea: 0,
    columna: 0,
    diagonalDecreciente: 0,
    diagonalCreciente: 0
  }
  
  for (let i = 0; i <= arr.length; i += 3) {
    if (arr[i] === marca && arr[i + 1] === marca && arr[i + 2] === marca){
      ganaPor.linea++;
    }
  }

  for (let i = 0; i <= arr.length; i += 3) {
    if (arr[i] === marca && arr[i + 3] === marca) {
      ganaPor.columna++;
    }
  }

  for (let i = 0; i <= arr.length; i += 4) {
    if (arr[i] === marca && arr[i + 4] === marca) {
      ganaPor.diagonalDecreciente++;
    }
  }

  for (let i = 0; i <= arr.length; i += 2) {
    if (arr[i] === marca && arr[i + 2] === marca) {
      ganaPor.diagonalCreciente++;
    }
  }
  
  return ganaPor;
}
const ganaLT = buscarGanador(LineaTop,1);
const ganaLM = buscarGanador(LineaMid,1);
const ganaLB = buscarGanador(LineaMBotton,1);
const nowin = buscarGanador(noGana,1);

console.log("Gana en linea alta todo el objeto:");
console.log(ganaLT);
console.log("Gana en linea media todo el objeto:");
console.log(ganaLM);
console.log("Gana en liena baja todo el objeto:");
console.log(ganaLB);
console.log("No deberia ganar");
console.log(nowin);
