import { BuscarGanador } from "./gameLogic.js";
import {  tablero, celdas, marcador,form, dialog } from "./dom.js";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  Partida();
});

function Partida() {
  const player = {
    uno: document.querySelector("#player-one").value,
    dos: document.querySelector("#player-two").value
  }
  let ronda = 1;
  let playerGanador = {};

  dialog.close();
  tablero.showModal();

  const actualizarMarcador = () => {
    playerGanador = BuscarGanador(celdas, "X");
    console.log(playerGanador.gano);

    if (BuscarGanador(celdas, "X")) {
      marcador.textContent = `Gano ${player.uno}`;
    } else if (BuscarGanador(celdas, "O")) {
      marcador.textContent = `Gano ${player.dos}`;
    } else if (ronda === 10) {
      marcador.textContent = "Empate";
    } else if(ronda % 2 === 0){
      marcador.textContent = `Ronda ${ronda} Turno: ${player.uno}`
    } else {
      marcador.textContent = `Ronda ${ronda} Turno: ${player.dos}`;
    }
  };

  celdas.forEach((celda) => {
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
  actualizarMarcador();
}


