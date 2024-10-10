let angle = 0;
let intervalo;
let pausado = false;
const velocidadeAngular = 45; // graus por segundo

function girarObjeto() {
    angle += velocidadeAngular; // Aumenta o ângulo em 45 graus
    const objeto = document.getElementById('objeto');
    objeto.style.transform = `rotate(${angle}deg)`; // Aplica a rotação
    document.getElementById('velocidade').textContent = `Velocidade Angular: ${velocidadeAngular}°/s`;
}

function iniciarRotacao() {
    intervalo = setInterval(girarObjeto, 1000); // Gira a cada segundo
}

function pausarRotacao() {
    clearInterval(intervalo); // Para a rotação
    document.getElementById('velocidade').textContent = `Velocidade Angular: 0°/s`;
}

document.getElementById('botao').addEventListener('click', function() {
    if (pausado) {
        iniciarRotacao();
        this.textContent = 'Pausar';
    } else {
        pausarRotacao();
        this.textContent = 'Retomar';
    }
    pausado = !pausado; // Alterna o estado
});

iniciarRotacao(); // Inicia a rotação ao carregar a página