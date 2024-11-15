let currentIndex = 0;
const images = document.querySelectorAll(".image");

function showImage(index) {
  images[currentIndex].classList.remove("active");
  currentIndex = (index + images.length) % images.length; // Wrap around
  images[currentIndex].classList.add("active");
}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}

// Opção para alternar automaticamente a imagem a cada 3 segundos
setInterval(nextImage, 3000); // Troca a imagem a cada 3 segundos

function toggleContent101(buttonNumber) {
  const extraContent101 = document.getElementById("extraContent101");
  const extraTitle101 = document.getElementById("extraTitle101");
  const extraText101 = document.getElementById("extraText101");
  // Títulos e textos para cada botão
  const content101 = {
    1: {
      title: "Como ser um Cristão",
      text: "Veja como você pode se tornar um bom cristão.",
    },
    2: {
      title: "Panorama Bíblico",
      text: "Veja um breve resumo da Bíblia do Antigo e Novo Testamento.",
    },
    3: {
      title: "Teologia Básica",
      text: "Vejo os conceitos básicos da Bíblia.",
    },
  };

  // Verifica se o conteúdo extra está visível e se foi o mesmo botão clicado
  if (
    extraContent101.style.display === "block" &&
    extraTitle101.innerText === content101[buttonNumber].title
  ) {
    extraContent101.style.display = "none"; // Oculta o conteúdo se for o mesmo botão
  } else {
    // Atualiza o título e o texto com base no botão clicado
    extraTitle101.innerText = content101[buttonNumber].title;
    extraText101.innerText = content101[buttonNumber].text;
    extraContent101.style.display = "block"; // Exibe o conteúdo
  }
}

const versiculo = [
  [
    "Salmo 23:1-3",
    "O Senhor é o meu pastor; nada me faltará. Ele me faz repousar em pastos verdejantes. Leva-me para junto das águas de descanso.",
  ],
  ["Filipenses 4:13", "Posso todas as coisas naquele que me fortalece."],
  [
    "1 Coríntios 13:4-7",
    "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não busca seus interesses, não se irrita facilmente, não guarda rancor.",
  ],
  [
    "Romanos 8:28",
    "Sabemos que Deus faz todas as coisas cooperarem para o bem daqueles que o amam.",
  ],
  [
    "Salmo 46:1",
    "Deus é o nosso refúgio e a nossa fortaleza, socorro bem presente na angústia.",
  ],
  [
    "Provérbios 3:5-6",
    "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento. Reconheça-o em todos os seus caminhos, e ele endireitará suas veredas.",
  ],
  [
    "Isaías 40:31",
    "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão, e não se cansarão; andarão, e não se fatigarão.",
  ],
  [
    "Mateus 11:28-30",
    "Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso.",
  ],
  [
    "Salmo 119:105",
    "Lâmpada para os meus pés é a tua palavra e luz para o meu caminho.",
  ],
  [
    "Romanos 15:13",
    "Que o Deus da esperança os encha de toda alegria e paz à medida que vocês confiam nele.",
  ],
  [
    "Salmo 37:4",
    "Deleite-se no Senhor, e ele atenderá aos desejos do seu coração.",
  ],
  [
    "1 Pedro 5:7",
    "Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.",
  ],
  [
    "Salmo 139:14",
    "Eu te louvo porque me fizeste de maneira especial e admirável.",
  ],
  [
    "Isaías 41:10",
    "Não tema, pois eu estou com você; não tenha medo, pois eu sou o seu Deus.",
  ],
  [
    "Gálatas 5:22-23",
    "Mas o fruto do Espírito é amor, alegria, paz, paciência, bondade, fidelidade, mansidão e domínio próprio.",
  ],
  [
    "Tiago 1:17",
    "Toda boa dádiva e todo dom perfeito vêm do alto, descendo do Pai das luzes.",
  ],
  [
    "Salmo 34:8",
    "Provem e vejam como o Senhor é bom; feliz é o homem que nele se refugia.",
  ],
  [
    "Colossenses 3:2",
    "Mantenham o pensamento nas coisas que são de cima, e não nas que são da terra.",
  ],
  [
    "2 Timóteo 1:7",
    "Porque Deus não nos deu espírito de covardia, mas de poder, de amor e de moderação.",
  ],
  [
    "Salmo 121:1-2",
    "Elevo os meus olhos para os montes; de onde me virá o socorro? O meu socorro vem do Senhor, que fez os céus e a terra.",
  ],
  [
    "Mateus 5:16",
    "Assim brilhe a luz de vocês diante dos homens, para que vejam suas boas obras e glorifiquem a seu Pai que está nos céus.",
  ],
  ["1 João 4:19", "Nós amamos porque ele nos amou primeiro."],
  [
    "Salmo 100:4-5",
    "Entrem por suas portas com gratidão e em seus átrios com louvor; deem-lhe graças e louvem o seu nome. Porque o Senhor é bom e a sua misericórdia dura para sempre.",
  ],
  [
    "Hebreus 11:1",
    "A fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.",
  ],
  [
    "Efésios 2:8-9",
    "Pois pela graça vocês são salvos, por meio da fé; e isso não vem de vocês, é dom de Deus, não por obras, para que ninguém se glorie.",
  ],
  [
    "Salmo 91:1-2",
    "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará. Direi do Senhor: Ele é o meu refúgio e a minha fortaleza, o meu Deus, em quem confio.",
  ],
  [
    "Salmo 62:1",
    "Somente em Deus minha alma descansa; dele vem a minha salvação.",
  ],
  [
    "1 Tessalonicenses 5:16-18",
    "Alegrem-se sempre. Orem sem cessar. Dêem graças em todas as circunstâncias; pois esta é a vontade de Deus para vocês em Cristo Jesus.",
  ],
  [
    "João 3:16",
    "Porque Deus amou o mundo de tal maneira que deu seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna.",
  ],
  [
    "Salmo 139:16",
    "Os teus olhos viram o meu corpo ainda em forma; todos os dias determinados para mim foram escritos no teu livro.",
  ],
  [
    "Efésios 3:20",
    "Aquele que é capaz de fazer infinitamente mais do que tudo o que pedimos ou pensamos, de acordo com o seu poder que atua em nós.",
  ],
  [
    "Provérbios 4:23",
    "Acima de tudo, guarde o seu coração, pois dele depende toda a sua vida.",
  ],
  [
    "Romanos 12:2",
    "E não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente.",
  ],
  [
    "Salmo 19:14",
    "As palavras dos meus lábios e o meditar do meu coração sejam agradáveis na tua presença, Senhor, rocha minha e redentor meu.",
  ],
  [
    "Mateus 6:33",
    "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.",
  ],
  ["Salmo 27:1", "O Senhor é a minha luz e a minha salvação; a quem temerei?"],
  [
    "Isaías 26:3",
    "Tu, Senhor, guardarás em perfeita paz aquele cujo propósito é firme, porque em ti confia.",
  ],
  [
    "Gálatas 6:9",
    "E não nos cansemos de fazer o bem, pois no tempo certo colheremos, se não desanimarmos.",
  ],
  ["Salmo 30:5", "O choro pode durar uma noite, mas a alegria vem pela manhã."],
  ["1 Coríntios 16:14", "Façam tudo com amor."],
  [
    "Salmo 118:24",
    "Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos nele.",
  ],
  [
    "Mateus 7:7",
    "Peçam, e lhes será dado; busquem, e encontrarão; batam, e a porta lhes será aberta.",
  ],
  [
    "Colossenses 3:23-24",
    "E tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens.",
  ],
  [
    "Salmo 145:18",
    "Perto está o Senhor de todos os que o invocam, de todos os que o invocam em verdade.",
  ],
  [
    "1 Pedro 3:15",
    "Estejam sempre preparados para responder a todo aquele que lhes pedir a razão da esperança que há em vocês.",
  ],
  ["Hebreus 13:5", "Deus disse: Nunca o deixarei, nunca o abandonarei."],
  [
    "Mateus 28:20",
    "E eis que estou convosco todos os dias, até a consumação do século.",
  ],
  [
    "Salmo 119:11",
    "Escondi a tua palavra no meu coração, para eu não pecar contra ti.",
  ],
  [
    "Romanos 5:8",
    "Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores.",
  ],
  [
    "Filipenses 4:6-7",
    "Não andem ansiosos por coisa alguma; em vez disso, em tudo, pela oração e súplica, com ação de graças, apresentem seus pedidos a Deus.",
  ],
];

function sortearDados() {
  // Sortear um índice aleatório para selecionar um subarray
  const indiceAleatorio = Math.floor(Math.random() * versiculo.length);
  const subarraySorteado = versiculo[indiceAleatorio];

  // Atribuir o primeiro e o segundo valor do subarray aos parágrafos
  document.getElementById("paragrafo303").textContent = subarraySorteado[0];
  document.getElementById("paragrafo1303").textContent = subarraySorteado[1];
}
