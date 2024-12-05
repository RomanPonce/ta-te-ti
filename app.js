const celdas = document.querySelectorAll(".cell");
const marcaTurno = document.querySelector(".turno");
const tablero = document.querySelector(".gamerboard");
let turno = 1;

celdas.forEach((celda) => {
  celda.addEventListener("click", () => {
    if (turno % 2 === 0 && celda.textContent === "") {
      celda.textContent = "X";
      turno++;
      marcaTurno.textContent = `Le tocan a las x Turno ${turno}`;
    } else if (turno % 2 === 1 && celda.textContent === "") {
      celda.textContent = "O";
      turno++;
      marcaTurno.textContent = `Le tocan a las o Turno ${turno}`;
    }

    if (buscarGanador(celdas, "X")) {
      marcaTurno.textContent = "Ganaron las X";
    } else if (buscarGanador(celdas, "O")) {
      marcaTurno.textContent = "Ganaron las O";
    } else if(turno === 10 && !buscarGanador(celdas, "O" ) && !buscarGanador(celdas, "X" )){
      marcaTurno.textContent = "Empate";
    }
  });
});


function buscarGanador(arr, marca) {
  let gano = false;

  for (let i = 0; i < arr.length; i += 3) {
    if (
      arr[i].textContent === marca &&
      arr[i + 1].textContent === marca &&
      arr[i + 2].textContent === marca
    ) {
      gano = true;
    }
  }

  // Columna
  for (let i = 0; i < 3; i++) {
    if (
      arr[i].textContent === marca &&
      arr[i + 3].textContent === marca &&
      arr[i + 6].textContent === marca
    ) {
      gano = true;
    }
  }
  // Diagonal 1
  if (
    arr[0].textContent === marca &&
    arr[4].textContent === marca &&
    arr[8].textContent === marca
  ) {
    gano = true;
  }

  // Diagonal 2
  if (
    arr[2].textContent === marca &&
    arr[4].textContent === marca &&
    arr[6].textContent === marca
  ) {
    gano = true;
  }

  return gano;
}
