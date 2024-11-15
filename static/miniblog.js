function filtrarFrases() {
  const termo = document.getElementById("pesquisa").value.toLowerCase();
  const frases = document.querySelectorAll(".frase");

  frases.forEach((frase) => {
    if (frase.textContent.toLowerCase().includes(termo)) {
      frase.classList.remove("oculto");
    } else {
      frase.classList.add("oculto");
    }
  });
}

function mostrarRetangulo(id) {
  // Oculta todos os botões
  const botoes = document.querySelectorAll(".botao");
  botoes.forEach((botao) => (botao.style.display = "none"));

  // Mostra o retângulo correspondente
  const retangulo = document.getElementById("retangulo-" + id);
  retangulo.style.display = "block";
}
function atualizarPagina() {
  location.reload(); // Atualiza a página
}
