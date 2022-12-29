let jugador = 0
let pc = 0
let perder = 0
let ganar = 0


function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function jugada(seleccion) {
  let resultado = "";
  if (seleccion == 1) {
    resultado = "🥌";
  } else if (seleccion == 2) {
    resultado = "📄";
  } else if (seleccion == 3) {
    resultado = "✂";
  } else {
    resultado = "Debe seleccionar una opción entre 1 y 3";
  }
  return resultado;
}


while (perder <3 && ganar < 3) {
  jugador = prompt("Selecciona 1)🥌, 2)📄, 3)✂");
  pc = aleatorio(1, 3);

  alert("Jugador selecciono " + jugada(jugador));
  alert("pc selecciono " + jugada(pc));

  //COMBATE
  if (jugador == pc) {
    alert("Empate entre juagador y pc...!!");
  } else if (jugador == 1 && pc == 3) {
    alert("Jugador gana el combate");
    ganar = ganar +1;
  } else if (jugador == 2 && pc == 1) {
    alert("Jugador gana el combate");
    ganar = ganar + 1;
  } else if (jugador == 3 && pc == 2) {
    alert("Jugador gana el combate");
    ganar = ganar + 1;
  } else {
    alert("pc gana el combate");
    perder = perder  + 1;
  }
}

alert("Jugador gano " + ganar + " veces y perdio " + perder + " veces")

