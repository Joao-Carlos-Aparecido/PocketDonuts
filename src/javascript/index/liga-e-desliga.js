import { secaoBloco } from "./bloco-de-notas.js";
import { calFunc } from "./calculadora.js";
import { game } from "./caçador-de-tesouros.js";

const btn = document.getElementById("btn-digt");
let tela = document.getElementById("tela");
const ic = document.getElementById("icones");
const icr = document.getElementById("icones-right");
const bt = document.getElementById("bateria");
const bl1 = document.getElementById("bloco1");
const bl2 = document.getElementById("bloco2");
const bl3 = document.getElementById("bloco3");
const bl4 = document.getElementById("bloco4");
const TelaDescarregou = document.getElementById("fim-de-carga");
const apps = document.getElementById("apps")


function alternar() {
  if (tela.style.backgroundImage) {
    tela.style.backgroundImage = ""; 
    ic.style.display = "none";
    icr.style.display = "none";
    apps.style.display = "none"
    calFunc.style.display = "none"
    secaoBloco.style.display = "none";
    game.style.display = "none"
    

  } else {
    tela.style.backgroundImage =
      "url('../../../assents/img/wallpaper/wallpaper.png')"; 
    ic.style.display = "flex";
    icr.style.display = "flex";
    bl1.style.display = "block";
    bt.style.display = "flex";
    bl2.style.display = "block";
    bl3.style.display = "block";
    bl4.style.display = "block";
    apps.style.display = "flex"
  }
}

function descarregou() {
  if (tela.style.backgroundImage) {
    setTimeout(() => {
      tela.style.backgroundImage = "";
      ic.style.display = "none";
      apps.style.display = "none"
      calFunc.style.display = "none"
      secaoBloco.style.display = "none";
      icr.style.display = "none";
      game.style.display = "none"
    }, 1200000000);
  }
}

function TelaDescarregouF() {
  setTimeout(() => {
    TelaDescarregou.style.display = "flex";
  }, 1200000000);
  setTimeout(() => {
    TelaDescarregou.style.display = "none";
  }, 1250000000);
}

function bateria() {
  setTimeout(() => {
    bl4.style.display = "none";
  }, 3000000);
  setTimeout(() => {
    bl3.style.display = "none";
  }, 60000);
  setTimeout(() => {
    bl2.style.display = "none";
  }, 90000);
  setTimeout(() => {
    bl1.style.display = "none";
  }, 110000);
}

btn.addEventListener("click", function () {
  alternar();
  descarregou();
  bateria();
  TelaDescarregouF();
});
