let angle = 0;
let intervalo;
let pausado = false;

function girarObjeto() {
    angle += 45; // Aumenta o ângulo em 45 graus
    const objeto = document.getElementById('objeto');
    objeto.style.transform = `rotate(${angle}deg)`; // Aplica a rotação
}

function iniciarRotacao() {
    intervalo = setInterval(girarObjeto, 1000); // Gira a cada segundo
}

function pausarRotacao() {
    clearInterval(intervalo); // Para a rotação
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