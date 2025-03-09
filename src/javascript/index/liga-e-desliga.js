const btn = document.getElementById("btn-digt");
let tela = document.getElementById("tela");
const ic = document.getElementById("icones");
const icr = document.getElementById("icones-right");
const bl1 = document.getElementById("bloco1");
const bl2 = document.getElementById("bloco2");
const bl3 = document.getElementById("bloco3");
const bl4 = document.getElementById("bloco4");
function alternar() {
  if (tela.style.backgroundImage) {
    tela.style.backgroundImage = ""; // Remove a imagem
    ic.style.display = "none";
    icr.style.display = "none";
  } else {
    tela.style.backgroundImage =
      "url('../../../assents/img/wallpaper/wallpaper.png')"; // Define a imagem
    ic.style.display = "flex";
    icr.style.display = "flex";
    bl1.style.display = "block";
    bl2.style.display = "block";
    bl3.style.display = "block";
    bl4.style.display = "block";

  }
}

function descarregou() {
  if (tela.style.backgroundImage) {
    setTimeout(() => {
      tela.style.backgroundImage = "";
      ic.style.display = "none";
      icr.style.display = "none";
    }, 12000);
  }
}

function bateria() {

  setTimeout(() => {
    bl4.style.display = "none";
  }, 3000);
  setTimeout(() => {
    bl3.style.display = "none";
  }, 6000);
  setTimeout(() => {
    bl2.style.display = "none";
  }, 9000);
  setTimeout(() => {
    bl1.style.display = "none";
  }, 11000);
}

btn.addEventListener("click", function () {
  alternar();
  descarregou();
  bateria()
});
