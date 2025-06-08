const appBloco = document.getElementById("bloco-de-notas");
const secaoBloco = document.getElementById("section-bloco-de-notas-func");

let texto = document.getElementById("id-digitar-nota");
const btnAdicionar = document.getElementById("input-salvar-nota");
const secaoAAdc = document.getElementById("bloco-de-notas-func");

const btnVerNota = document.getElementById("article-ver-nota");
const setaVerNota = document.getElementById("seta-ver-notas");
const setaDigNota = document.getElementById("seta-primera-block");
const limpar = document.getElementById("input-limpar-nota");

appBloco.addEventListener("click", function () {
  document.getElementById("section-bloco-de-notas-func").style.display =
    "block";
  document.getElementById("apps").style.display = "none";
});

btnAdicionar.addEventListener("click", function () {
  if (texto.value === "") {
    texto.value = "digite algo";
    setTimeout(() => {
      texto.value = "";
    }, 2000);
  } else {
    let p = document.createElement("p");
    let btnRemove = document.createElement("button");
    btnRemove.id = "btnRemoveBLoco";
    btnRemove.innerHTML = "remover";
    let article = document.createElement("article");
    p.innerHTML = texto.value;
    article.appendChild(p);
    article.appendChild(btnRemove);
    document.getElementById("area-das-notas").appendChild(article);

    btnRemove.addEventListener("click", function () {
      btnRemove.parentNode.remove();
    });
  }
});

limpar.addEventListener("click", function () {
  texto.value = "";
});

btnVerNota.addEventListener("click", function () {
  document.getElementById("bloco-de-notas-func").style.display = "none";
  document.getElementById("area-das-notas").style.display = "flex";
});

setaVerNota.addEventListener("click", function () {
  document.getElementById("bloco-de-notas-func").style.display = "block";
  document.getElementById("area-das-notas").style.display = "none";
});

setaDigNota.addEventListener("click", function () {
  secaoBloco.style.display = "none";
  document.getElementById("apps").style.display = "flex";
});

export { secaoBloco };
