let angle = 0;
let angularSpeed = 0.5; // rad/s
const image = document.getElementById('image');
const angularSpeedDisplay = document.getElementById('angular-speed');

function rotateImage() {
    angle += angularSpeed; // Aumenta o ângulo
    image.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;
    angularSpeedDisplay.textContent = angularSpeed.toFixed(2); // Mostra a velocidade angular

    requestAnimationFrame(rotateImage); // Chama a função novamente para criar o loop
}

rotateImage(); // Inicia a rotação