let angulo = 0;

function girarQuadrado() {
    angulo += 90; // Aumenta o ângulo em 90 graus
    document.getElementById('quadrado').style.transform = `rotate(${angulo}deg)`;
}

// Adiciona um evento de clique ao quadrado
document.getElementById('quadrado').addEventListener('click', girarQuadrado);
