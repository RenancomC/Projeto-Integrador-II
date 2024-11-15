// Livros do Antigo Testamento
const livrosAntigoTestamento = [
  "Gênesis",
  "Êxodo",
  "Levítico",
  "Números",
  "Deuteronômio",
  "Josué",
  "Juízes",
  "Rute",
  "1 Samuel",
  "2 Samuel",
  "1 Reis",
  "2 Reis",
  "1 Crônicas",
  "2 Crônicas",
  "Esdras",
  "Neemias",
  "Ester",
  "Jó",
  "Salmos",
  "Provérbios",
  "Eclesiastes",
  "Cânticos",
  "Isaías",
  "Jeremias",
  "Lamentações",
  "Ezequiel",
  "Daniel",
  "Oséias",
  "Joel",
  "Amós",
  "Obadias",
  "Jonas",
  "Miqueias",
  "Naum",
  "Habacuque",
  "Sofonias",
  "Ageu",
  "Zacarias",
  "Malaquias",
];

// Livros do Novo Testamento
const livrosNovoTestamento = [
  "Mateus",
  "Marcos",
  "Lucas",
  "João",
  "Atos",
  "Romanos",
  "1 Coríntios",
  "2 Coríntios",
  "Gálatas",
  "Efésios",
  "Filipenses",
  "Colossenses",
  "1 Tessalonicenses",
  "2 Tessalonicenses",
  "1 Timóteo",
  "2 Timóteo",
  "Tito",
  "Filemom",
  "Hebreus",
  "Tiago",
  "1 Pedro",
  "2 Pedro",
  "1 João",
  "2 João",
  "3 João",
  "Judas",
  "Apocalipse",
];

const selectLivro = document.getElementById("livro");
const capituloInput = document.getElementById("capitulo");
const resultadoDiv = document.getElementById("resultado");

const antigoTestamentoBtn = document.getElementById("antigoTestamentoBtn");
const novoTestamentoBtn = document.getElementById("novoTestamentoBtn");

// Função para habilitar a lista de livros e preencher com os livros do testamento selecionado
function ativarLista(livros) {
  selectLivro.innerHTML = ""; // Limpar a lista de livros
  livros.forEach((livro) => {
    const option = document.createElement("option");
    option.value = livro;
    option.textContent = livro;
    selectLivro.appendChild(option);
  });
  selectLivro.disabled = false; // Habilitar o select
}

// Quando o botão "Antigo Testamento" for clicado
antigoTestamentoBtn.addEventListener("click", () => {
  ativarLista(livrosAntigoTestamento);
});

// Quando o botão "Novo Testamento" for clicado
novoTestamentoBtn.addEventListener("click", () => {
  ativarLista(livrosNovoTestamento);
});

// Quando o formulário for submetido
document
  .getElementById("bibleForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const livro = selectLivro.value;
    const capitulo = capituloInput.value;
    resultadoDiv.innerHTML = "Carregando...";

    try {
      // URL da API (ajuste conforme necessário para a API que escolher)
      const response = await fetch(
        `https://bible-api.com/${livro} ${capitulo}?translation=almeida`
      );

      if (!response.ok) {
        if (livro === "Gênesis" && (capitulo < 1 || capitulo > 50)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Gênesis só possui 50 capítulos, escolha um número entre 1 e 50."
          );
        } else if (livro === "Êxodo" && (capitulo < 1 || capitulo > 40)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Êxodo só possui 40 capítulos, escolha um número entre 1 e 40."
          );
        } else if (livro === "Levítico" && (capitulo < 1 || capitulo > 27)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Levítico só possui 27 capítulos, escolha um número entre 1 e 27."
          );
        } else if (livro === "Números" && (capitulo < 1 || capitulo > 36)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Números só possui 36 capítulos, escolha um número entre 1 e 36."
          );
        } else if (
          livro === "Deuteronômio" &&
          (capitulo < 1 || capitulo > 34)
        ) {
          throw new Error(
            "Capítulo não encontrado. O livro de Deuteronômio só possui 34 capítulos, escolha um número entre 1 e 34."
          );
        } else if (livro === "Josué" && (capitulo < 1 || capitulo > 24)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Josué só possui 24 capítulos, escolha um número entre 1 e 24."
          );
        } else if (livro === "Juízes" && (capitulo < 1 || capitulo > 21)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Juízes só possui 21 capítulos, escolha um número entre 1 e 21."
          );
        } else if (livro === "Rute" && (capitulo < 1 || capitulo > 4)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Rute só possui 4 capítulos, escolha um número entre 1 e 4."
          );
        } else if (livro === "1 Samuel" && (capitulo < 1 || capitulo > 31)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 1 Samuel só possui 31 capítulos, escolha um número entre 1 e 31."
          );
        } else if (livro === "2 Samuel" && (capitulo < 1 || capitulo > 24)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 2 Samuel só possui 24 capítulos, escolha um número entre 1 e 24."
          );
        } else if (livro === "1 Reis" && (capitulo < 1 || capitulo > 22)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 1 Reis só possui 22 capítulos, escolha um número entre 1 e 22."
          );
        } else if (livro === "2 Reis" && (capitulo < 1 || capitulo > 25)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 2 Reis só possui 25 capítulos, escolha um número entre 1 e 25."
          );
        } else if (livro === "1 Crônicas" && (capitulo < 1 || capitulo > 29)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 1 Crônicas só possui 29 capítulos, escolha um número entre 1 e 29."
          );
        } else if (livro === "2 Crônicas" && (capitulo < 1 || capitulo > 36)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 2 Crônicas só possui 36 capítulos, escolha um número entre 1 e 36."
          );
        } else if (livro === "Esdras" && (capitulo < 1 || capitulo > 10)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Esdras só possui 10 capítulos, escolha um número entre 1 e 10."
          );
        } else if (livro === "Neemias" && (capitulo < 1 || capitulo > 13)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Neemias só possui 13 capítulos, escolha um número entre 1 e 13."
          );
        } else if (livro === "Ester" && (capitulo < 1 || capitulo > 10)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Ester só possui 10 capítulos, escolha um número entre 1 e 10."
          );
        } else if (livro === "Jó" && (capitulo < 1 || capitulo > 42)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Jó só possui 42 capítulos, escolha um número entre 1 e 42."
          );
        } else if (livro === "Salmos" && (capitulo < 1 || capitulo > 150)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Salmos só possui 150 capítulos, escolha um número entre 1 e 150."
          );
        } else if (livro === "Provérbios" && (capitulo < 1 || capitulo > 31)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Provérbios só possui 31 capítulos, escolha um número entre 1 e 31."
          );
        } else if (livro === "Eclesiastes" && (capitulo < 1 || capitulo > 12)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Eclesiastes só possui 12 capítulos, escolha um número entre 1 e 12."
          );
        } else if (livro === "Cânticos" && (capitulo < 1 || capitulo > 8)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Cânticos só possui 8 capítulos, escolha um número entre 1 e 8."
          );
        } else if (livro === "Isaías" && (capitulo < 1 || capitulo > 66)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Isaías só possui 66 capítulos, escolha um número entre 1 e 66."
          );
        } else if (livro === "Jeremias" && (capitulo < 1 || capitulo > 52)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Jeremias só possui 52 capítulos, escolha um número entre 1 e 52."
          );
        } else if (livro === "Lamentações" && (capitulo < 1 || capitulo > 5)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Lamentações só possui 5 capítulos, escolha um número entre 1 e 5."
          );
        } else if (livro === "Ezequiel" && (capitulo < 1 || capitulo > 48)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Ezequiel só possui 48 capítulos, escolha um número entre 1 e 48."
          );
        } else if (livro === "Daniel" && (capitulo < 1 || capitulo > 12)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Daniel só possui 12 capítulos, escolha um número entre 1 e 12."
          );
        } else if (livro === "Oséias" && (capitulo < 1 || capitulo > 14)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Oséias só possui 14 capítulos, escolha um número entre 1 e 14."
          );
        } else if (livro === "Joel" && (capitulo < 1 || capitulo > 3)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Joel só possui 3 capítulos, escolha um número entre 1 e 3."
          );
        } else if (livro === "Amós" && (capitulo < 1 || capitulo > 9)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Amós só possui 9 capítulos, escolha um número entre 1 e 9."
          );
        } else if (livro === "Obadias" && (capitulo < 1 || capitulo > 1)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Obadias só possui 1 capítulo."
          );
        } else if (livro === "Jonas" && (capitulo < 1 || capitulo > 4)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Jonas só possui 4 capítulos, escolha um número entre 1 e 4."
          );
        } else if (livro === "Miquéias" && (capitulo < 1 || capitulo > 7)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Miquéias só possui 7 capítulos, escolha um número entre 1 e 7."
          );
        } else if (livro === "Naum" && (capitulo < 1 || capitulo > 3)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Naum só possui 3 capítulos, escolha um número entre 1 e 3."
          );
        } else if (livro === "Habacuque" && (capitulo < 1 || capitulo > 3)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Habacuque só possui 3 capítulos, escolha um número entre 1 e 3."
          );
        } else if (livro === "Sofonias" && (capitulo < 1 || capitulo > 3)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Sofonias só possui 3 capítulos, escolha um número entre 1 e 3."
          );
        } else if (livro === "Ageu" && (capitulo < 1 || capitulo > 2)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Ageu só possui 2 capítulos, escolha um número entre 1 e 2."
          );
        } else if (livro === "Zacarias" && (capitulo < 1 || capitulo > 14)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Zacarias só possui 14 capítulos, escolha um número entre 1 e 14."
          );
        } else if (livro === "Malaquias" && (capitulo < 1 || capitulo > 4)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Malaquias só possui 4 capítulos, escolha um número entre 1 e 4."
          );
        } else if (livro === "Mateus" && (capitulo < 1 || capitulo > 28)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Mateus só possui 28 capítulos, escolha um número entre 1 e 28."
          );
        } else if (livro === "Marcos" && (capitulo < 1 || capitulo > 16)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Marcos só possui 16 capítulos, escolha um número entre 1 e 16."
          );
        } else if (livro === "Lucas" && (capitulo < 1 || capitulo > 24)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Lucas só possui 24 capítulos, escolha um número entre 1 e 24."
          );
        } else if (livro === "João" && (capitulo < 1 || capitulo > 21)) {
          throw new Error(
            "Capítulo não encontrado. O livro de João só possui 21 capítulos, escolha um número entre 1 e 21."
          );
        } else if (livro === "Atos" && (capitulo < 1 || capitulo > 28)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Atos só possui 28 capítulos, escolha um número entre 1 e 28."
          );
        } else if (livro === "Romanos" && (capitulo < 1 || capitulo > 16)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Romanos só possui 16 capítulos, escolha um número entre 1 e 16."
          );
        } else if (livro === "1 Coríntios" && (capitulo < 1 || capitulo > 16)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 1 Coríntios só possui 16 capítulos, escolha um número entre 1 e 16."
          );
        } else if (livro === "2 Coríntios" && (capitulo < 1 || capitulo > 13)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 2 Coríntios só possui 13 capítulos, escolha um número entre 1 e 13."
          );
        } else if (livro === "Gálatas" && (capitulo < 1 || capitulo > 6)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Gálatas só possui 6 capítulos, escolha um número entre 1 e 6."
          );
        } else if (livro === "Efésios" && (capitulo < 1 || capitulo > 6)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Efésios só possui 6 capítulos, escolha um número entre 1 e 6."
          );
        } else if (livro === "Filipenses" && (capitulo < 1 || capitulo > 4)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Filipenses só possui 4 capítulos, escolha um número entre 1 e 4."
          );
        } else if (livro === "Colossenses" && (capitulo < 1 || capitulo > 4)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Colossenses só possui 4 capítulos, escolha um número entre 1 e 4."
          );
        } else if (
          livro === "1 Tessalonicenses" &&
          (capitulo < 1 || capitulo > 5)
        ) {
          throw new Error(
            "Capítulo não encontrado. O livro de 1 Tessalonicenses só possui 5 capítulos, escolha um número entre 1 e 5."
          );
        } else if (
          livro === "2 Tessalonicenses" &&
          (capitulo < 1 || capitulo > 3)
        ) {
          throw new Error(
            "Capítulo não encontrado. O livro de 2 Tessalonicenses só possui 3 capítulos, escolha um número entre 1 e 3."
          );
        } else if (livro === "1 Timóteo" && (capitulo < 1 || capitulo > 6)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 1 Timóteo só possui 6 capítulos, escolha um número entre 1 e 6."
          );
        } else if (livro === "2 Timóteo" && (capitulo < 1 || capitulo > 4)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 2 Timóteo só possui 4 capítulos, escolha um número entre 1 e 4."
          );
        } else if (livro === "Tito" && (capitulo < 1 || capitulo > 3)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Tito só possui 3 capítulos, escolha um número entre 1 e 3."
          );
        } else if (livro === "Filemom" && (capitulo < 1 || capitulo > 1)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Filemom só possui 1 capítulo."
          );
        } else if (livro === "Hebreus" && (capitulo < 1 || capitulo > 13)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Hebreus só possui 13 capítulos, escolha um número entre 1 e 13."
          );
        } else if (livro === "Tiago" && (capitulo < 1 || capitulo > 5)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Tiago só possui 5 capítulos, escolha um número entre 1 e 5."
          );
        } else if (livro === "1 Pedro" && (capitulo < 1 || capitulo > 5)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 1 Pedro só possui 5 capítulos, escolha um número entre 1 e 5."
          );
        } else if (livro === "2 Pedro" && (capitulo < 1 || capitulo > 3)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 2 Pedro só possui 3 capítulos, escolha um número entre 1 e 3."
          );
        } else if (livro === "1 João" && (capitulo < 1 || capitulo > 5)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 1 João só possui 5 capítulos, escolha um número entre 1 e 5."
          );
        } else if (livro === "2 João" && (capitulo < 1 || capitulo > 1)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 2 João só possui 1 capítulo."
          );
        } else if (livro === "3 João" && (capitulo < 1 || capitulo > 1)) {
          throw new Error(
            "Capítulo não encontrado. O livro de 3 João só possui 1 capítulo."
          );
        } else if (livro === "Judas" && (capitulo < 1 || capitulo > 1)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Judas só possui 1 capítulo."
          );
        } else if (livro === "Apocalipse" && (capitulo < 1 || capitulo > 22)) {
          throw new Error(
            "Capítulo não encontrado. O livro de Apocalipse só possui 22 capítulos, escolha um número entre 1 e 22."
          );
        } else {
          console.log("Livro e capítulo inválidos!");
        }
      }

      const data = await response.json();

      // Exibir o texto do capítulo
      resultadoDiv.innerHTML = `<h2>${livro} ${capitulo}</h2>`;
      data.verses.forEach((verse) => {
        resultadoDiv.innerHTML += `<p><strong>${verse.verse}</strong> ${verse.text}</p>`;
      });
    } catch (error) {
      resultadoDiv.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
    }
  });
