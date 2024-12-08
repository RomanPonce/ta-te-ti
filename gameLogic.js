export function BuscarGanador(arr, marca) {
  
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

  for (let i = 0; i < 3; i++) {
    if (
      arr[i].textContent === marca &&
      arr[i + 3].textContent === marca &&
      arr[i + 6].textContent === marca
    ) {
      gano = true;
    }
  }
  if (
    arr[0].textContent === marca &&
    arr[4].textContent === marca &&
    arr[8].textContent === marca
  ) {
    gano = true;
  }

  if (
    arr[2].textContent === marca &&
    arr[4].textContent === marca &&
    arr[6].textContent === marca
  ) {
    gano = true;
  }

  return {gano, marca};
}