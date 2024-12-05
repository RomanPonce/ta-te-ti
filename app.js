import { BuscarGanador } from "./gameLogic.js";
import { tablero, marcador, form } from "./dom.js";

function ObtenerPlayer(){
  const playerOne = document.querySelector("#player-one").value;
  const playerTwo = document.querySelector("#player-two").value;
  return {playerOne, playerTwo}
}

form.addEventListener("submit", ObtenerPlayer);

function Partida() {
  const player = {playerOne:"OAHOA",playerTwo:"dasdasd"};
  let ronda = 1;
  
  const actualizarMarcador = () => {
    if (BuscarGanador(tablero, "X")) {
      marcador.textContent = "Ganaron las X";
    } else if (BuscarGanador(tablero, "O")) {
      marcador.textContent = "Ganaron las O";
    } else if (ronda === 10) {
      marcador.textContent = "Empate";
    } else if(ronda % 2 === 0){
      marcador.textContent = `Ronda ${ronda} Jugador ${player.playerOne}`
    } else {
      marcador.textContent = `Ronda ${ronda} Jugador ${player.playerTwo}`;
    }
  };
  const resetearPartida = () => {
    tablero.forEach((celda) => celda.textContent = "");
  };
  tablero.forEach((celda) => {
    celda.addEventListener("click", () => {
      if (ronda % 2 === 0 && celda.textContent === "") {
        celda.textContent = "X";
        ronda++;
      } else if (ronda % 2 === 1 && celda.textContent === "") {
        celda.textContent = "O";
        ronda++;
      }
      actualizarMarcador();
    });
  });
}

Partida();
