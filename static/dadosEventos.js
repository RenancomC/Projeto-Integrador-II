function redirecionar() {
  // Obtém o valor da opção selecionada
  const select = document.getElementById("evento");
  const link = select.value;

  // Verifica se uma opção foi selecionada
  if (link) {
    // Redireciona para o link selecionado
    window.location.href = link;
  } else {
    alert("Por favor, selecione um evento.");
  }
}
