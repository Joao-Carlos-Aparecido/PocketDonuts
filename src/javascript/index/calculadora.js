// Região dos apps
const appsDoCal = document.getElementById("apps");
//app da tela de inicio
const appAtivoCal = document.getElementById("calculadora");

const calFunc = document.getElementById("calculadora-funci");

//botao de voltar
const voltarCal = document.getElementById("voltar-cal");

// Tela
const telaCal = document.getElementById("calculadora-funci-tela");

//Botão de reset
const btnReset = document.getElementById("button-reset")

// Botões de números
const btn1 = document.getElementById("number1");
const btn2 = document.getElementById("number2");
const btn3 = document.getElementById("number3");
const btn4 = document.getElementById("number4");
const btn5 = document.getElementById("number5");
const btn6 = document.getElementById("number6");
const btn7 = document.getElementById("number7");
const btn8 = document.getElementById("number8");
const btn9 = document.getElementById("number9");

// Botões de operação
const btnMais = document.getElementById("selMais");
const btnMenos = document.getElementById("selMenos");
const btnVezes = document.getElementById("selVezes");
const btnDiv = document.getElementById("selDiv");
const btnIgual = document.getElementById("selIgual");

function adicionar(valor) {
  telaCal.value += valor;
}

appAtivoCal.addEventListener("click", function () {
  calFunc.style.display = "flex";
  bt.style.display = "flex";
  appsDoCal.style.display = "none";
});

voltarCal.addEventListener("click", function () {
  calFunc.style.display = "none";
  bt.style.display = "flex";
  document.getElementById("bateria").style.display = "flex";
  appsDoCal.style.display = "flex";

});

btnReset.addEventListener("click", function () {
  telaCal.value= ""

});

btn1.addEventListener("click", function () {
  adicionar(btn1.value);
});
btn2.addEventListener("click", function () {
  adicionar(btn2.value);
});
btn3.addEventListener("click", function () {
  adicionar(btn3.value);
});
btn4.addEventListener("click", function () {
  adicionar(btn4.value);
});
btn5.addEventListener("click", function () {
  adicionar(btn5.value);
});
btn6.addEventListener("click", function () {
  adicionar(btn6.value);
});
btn7.addEventListener("click", function () {
  adicionar(btn7.value);
});
btn8.addEventListener("click", function () {
  adicionar(btn8.value);
});
btn9.addEventListener("click", function () {
  adicionar(btn9.value);
});

btnMais.addEventListener("click", function () {
  adicionar(btnMais.value);
});
btnMenos.addEventListener("click", function () {
  adicionar(btnMenos.value);
});
btnVezes.addEventListener("click", function () {
  adicionar(btnVezes.value);
});
btnDiv.addEventListener("click", function () {
  adicionar(btnDiv.value);
});

btnIgual.addEventListener("click", function () {
  try {
    return (telaCal.value = eval(telaCal.value));
  } catch (e) {
    telaCal.value = "Erro";
  }
});

export {calFunc}