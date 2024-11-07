// Inicializando variáveis
let angle = 0;
let angularSpeed = 0.1; // valor inicial da velocidade angular (rad/s)

const image = document.getElementById('image');
const angularSpeedDisplay = document.getElementById('angular-speed');
const speedInput = document.getElementById('speed-input');
const setSpeedButton = document.getElementById('set-speed-button');

// Função para aplicar a rotação na imagem
function rotateImage() {
    angle += angularSpeed; // Aumenta o ângulo baseado na velocidade angular
    image.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`; // Aplica a rotação na imagem

    // Exibe a velocidade angular atual
    angularSpeedDisplay.textContent = angularSpeed.toFixed(2);

    // Cria o loop de animação
    requestAnimationFrame(rotateImage);
}

// Função para atualizar a velocidade angular com base na entrada do usuário
function updateSpeed() {
    const speed = parseFloat(speedInput.value); // Obtém o valor inserido pelo usuário
    if (isNaN(speed) || speed <= 0) {
        alert("Por favor, insira uma velocidade válida.");
        return;
    }
    angularSpeed = speed; // Atualiza a velocidade angular
    angularSpeedDisplay.textContent = angularSpeed.toFixed(2); // Exibe a nova velocidade
}

// Evento para atualizar a velocidade quando o botão é clicado
setSpeedButton.addEventListener('click', updateSpeed);

// Inicia a rotação da imagem assim que a página carrega
rotateImage();