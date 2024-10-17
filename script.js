let angulo = 0;
let velocidade = 1; // Define a velocidade inicial
let intervalo;

function girarQuadrado() {
    angulo += 90; // Aumenta o ângulo em 90 graus
    document.getElementById('quadrado').style.transform = `rotate(${angulo}deg)`;
}

function ativarRotacao() {
    clearInterval(intervalo); // Limpa qualquer intervalo anterior
    intervalo = setInterval(girarQuadrado, 1000 / velocidade);
}

document.getElementById('girarBtn').addEventListener('click', ativarRotacao);

document.getElementById('velocidadeInput').addEventListener('input', function() {
    velocidade = this.value;
    document.getElementById('velocidadeLabel').innerText = `Velocidade: ${velocidade}x`;
    ativarRotacao(); // Atualiza a rotação com a nova velocidade
});