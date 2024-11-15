// Função para exibir o retângulo azul e ocultar o verde
function mostrarBotaoAdulto() {
  document.getElementById("retanguloAdulto").style.display = "block";
  document.getElementById("retanguloCrianca").style.display = "none";
}

// Função para exibir o retângulo verde e ocultar o azul
function mostrarBotaoCrianca() {
  document.getElementById("retanguloAdulto").style.display = "none";
  document.getElementById("retanguloCrianca").style.display = "block";
}
