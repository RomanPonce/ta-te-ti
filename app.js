const celdas = document.querySelectorAll(".cell");
const marcador = document.querySelector(".turno");
const tablero = document.querySelector(".gamerboard");

celdas.forEach((e) => {
  e.addEventListener("click", () => {
    e.textContent = "x";
  });
});

function logicaDeJuego() {
  let turno = 1;
  const incrementarTurno = () => {
    turno++;
  };
  const obtenerTurno = () => turno;

  const revisarCeldas = (celdas) => {
    let ganador = false;
    let contador = 1;
    for (let i = 0; i <= celdas.length; i++) {
      if (celdas[i].textContent === celdas[i + 1].textContent) {
        contador++; 
      }
    }
    for (let i = 0; i <= celdas.length; i += 3) {
      if (celdas[i].textContent === celdas[i + 3].textContent) {
        contador++; 
      }
    }
    for (let i = 0; i <= celdas.length; i += 4) {
      if (celdas[i].textContent === celdas[i + 4].textContent) {
        contador++; 
      }
    }
    for (let i = 0; i <= celdas.length; i += 2) {
      if (celdas[i].textContent === celdas[i + 2].textContent) {
        contador++; 
      }
    }
  }
}
// condigo consol(sirve)
let ganador = false;
// Ayuda
// 0 1 2
// 3 4 5
// 6 7 8

const Linea = [1,1,1,0,0,0,0,0,0];
const Columna = [1,0,0,1,0,0,1,0,0];
const DiagonalD = [1,0,0,0,1,0,0,0,1];
const DiagonalC = [0,0,1,0,1,0,1,0,0];

function buscarGanador(arr, marca){
  const ganaPor = {
    linea: 0,
    columna: 0,
    diagonalDecreciente: 0,
    diagonalCreciente: 0
  }
  
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === marca && arr[i + 1] === marca) {
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
const ganaL = buscarGanador(Linea,1);
const ganaC = buscarGanador(Columna,1);
const ganaDd = buscarGanador(DiagonalD,1);
const ganaDc = buscarGanador(DiagonalC,1);

console.log("Gana en linea todo el objeto:");
console.log(ganaL);
console.log("Gana en Columna todo el objeto:");
console.log(ganaC);
console.log("Gana en DiagonalD todo el objeto:");
console.log(ganaDd);
console.log("Gana en DiagonalC todo el objeto:");
console.log(ganaDc);