const btnAberto = document.querySelector("#btn__aberto");
const btnFechado = document.querySelector("#btn__fechado");

function alternarMenu(evento) {
  if(evento.type === "touchstart" ) {
    evento.preventEventDefault();
  }
  const body = document.querySelector("body");
  body.classList.toggle("ativo");
}

btnAberto.addEventListener("click", alternarMenu);
btnFechado.addEventListener("click", alternarMenu);

btnAberto.addEventListener("touchstart", alternarMenu);
btnFechado.addEventListener("touchstart", alternarMenu);