let angle = 0;
let angularSpeed = 0.1; // rad/s
const square = document.getElementById('square');
const angularSpeedDisplay = document.getElementById('angular-speed');

function rotateSquare() {
    angle += angularSpeed; // Aumenta o ângulo
    square.style.transform = `rotate(${angle}rad)`;
    angularSpeedDisplay.textContent = angularSpeed.toFixed(2); // Mostra a velocidade angular

    requestAnimationFrame(rotateSquare); // Chama a função novamente para criar o loop
}

rotateSquare(); // Inicia a rotação