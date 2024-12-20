let pontos = 0;
let rodada = 1;
let imagemCorreta; // Nova variável para rastrear a resposta correta

// Array com imagens reais e falsas
const imagensReais = [
  "src/assets/oi/a1.jpeg",
  "src/assets/oi/a2.jpeg",
  "src/assets/oi/a3.jpeg",
  "src/assets/oi/a4.jpeg",
  "src/assets/oi/a5.jpeg",
  "src/assets/oi/a6.jpeg",
  "src/assets/oi/a7.jpeg",
  "src/assets/oi/a8.jpeg",
  "src/assets/oi/a9.jpeg",
  "src/assets/oi/a10.jpeg",
  "src/assets/oi/a11.jpeg",
  "src/assets/oi/a12.jpeg",
  "src/assets/oi/a13.jpeg",
  "src/assets/oi/a14.jpeg",
  "src/assets/oi/a15.jpeg",
  "src/assets/oi/a16.jpeg",
  "src/assets/oi/a17.jpeg",
  "src/assets/oi/a18.jpeg",
  "src/assets/oi/a19.jpeg",
  "src/assets/oi/a20.jpeg",
  "src/assets/oi/b1.jpeg",
  "src/assets/oi/b2.jpeg",
  "src/assets/oi/b3.jpeg",
  "src/assets/oi/b4.jpeg",
  "src/assets/oi/b5.jpeg",
];
const imagensFalsas = [
  "src/assets/hi/a21.jpeg",
  "src/assets/hi/a22.jpeg",
  "src/assets/hi/a23.jpeg",
  "src/assets/hi/a24.jpeg",
  "src/assets/hi/a25.jpeg",
  "src/assets/hi/a26.jpeg",
  "src/assets/hi/a27.jpeg",
  "src/assets/hi/a28.jpeg",
  "src/assets/hi/a29.jpeg",
  "src/assets/hi/a30.jpeg",
  "src/assets/hi/a31.jpeg",
  "src/assets/hi/a32.jpeg",
  "src/assets/hi/a33.webp",
  "src/assets/hi/a34.jpeg",
  "src/assets/hi/a35.jpeg",
  "src/assets/hi/a36.jpeg",
  "src/assets/hi/a37.jpeg",
  "src/assets/hi/a38.jpeg",
  "src/assets/hi/a39.jpeg",
  "src/assets/hi/a40.jpeg",
  "src/assets/hi/b1.jpeg",
  "src/assets/hi/b2.jpeg",
  "src/assets/hi/b3.jpeg",
  "src/assets/hi/b4.jpeg",
  "src/assets/hi/b5.jpeg",
];

const scoreDisplay = document.getElementById("points");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// Função para atualizar a pontuação
function atualizarPontuacao(pontosAdicionados) {
  pontos += pontosAdicionados;
  scoreDisplay.innerText = pontos;
}

// Função para trocar as imagens da rodada
function trocarImagens() {
  // Escolhe uma imagem real e uma falsa aleatoriamente
  const imagemReal =
    imagensReais[Math.floor(Math.random() * imagensReais.length)];
  const imagemFalsa =
    imagensFalsas[Math.floor(Math.random() * imagensFalsas.length)];

  // Define aleatoriamente qual imagem será a correta
  if (Math.random() > 0.5) {
    img1.src = imagemReal;
    img2.src = imagemFalsa;
    imagemCorreta = 1; // Imagem 1 é a real
  } else {
    img1.src = imagemFalsa;
    img2.src = imagemReal;
    imagemCorreta = 2; // Imagem 2 é a real
  }
}

// Função para lidar com a escolha do jogador
function escolherImagem(escolha) {
  if (escolha === imagemCorreta) {
    atualizarPontuacao(200); // Pontuação positiva para escolha correta
  } else {
    atualizarPontuacao(-150); // Pontuação negativa para erro
  }

  rodada++;
  trocarImagens();
}

// Eventos para os botões
btn1.addEventListener("click", () => escolherImagem(1)); // Imagem 1
btn2.addEventListener("click", () => escolherImagem(2)); // Imagem 2

// Iniciar o jogo
trocarImagens();
