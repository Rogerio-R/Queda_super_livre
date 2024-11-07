// Acessando os elementos HTML
const image = document.getElementById('image');
const speedInput = document.getElementById('speed-input');
const speedDisplay = document.getElementById('angular-speed');
const periodDisplay = document.getElementById('period-value');
const frequencyDisplay = document.getElementById('frequency-value');
const setSpeedButton = document.getElementById('set-speed-button');

let angularSpeed = parseFloat(speedInput.value); // Velocidade angular inicial (graus por segundo)
let angle = 0; // Ângulo inicial da imagem

// Função para atualizar a rotação e calcular os valores de frequência e período
function updateRotation() {
    angle += angularSpeed;
    if (angle >= 360) angle -= 360; // Manter o ângulo entre 0 e 360 graus
    image.style.transform = `rotate(${angle}deg)`;

    // Atualizar os valores de período e frequência
    let period = 360 / angularSpeed; // Período (tempo para completar uma rotação)
    let frequency = 1 / period; // Frequência (número de rotações por segundo)

    // Exibir os valores de período e frequência
    periodDisplay.textContent = period.toFixed(2);
    frequencyDisplay.textContent = frequency.toFixed(4);
}

// Função para definir a nova velocidade angular
function setNewSpeed() {
    angularSpeed = parseFloat(speedInput.value);
    speedDisplay.textContent = angularSpeed.toFixed(2);
}

// Atualizar a rotação a cada 50ms (20 fps)
setInterval(updateRotation, 50);

// Evento para mudar a velocidade angular
setSpeedButton.addEventListener('click', setNewSpeed);

// Iniciar com a rotação configurada
setNewSpeed();
