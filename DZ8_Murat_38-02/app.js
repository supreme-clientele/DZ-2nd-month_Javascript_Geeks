function generateNumbers() {
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        const number = Math.floor(Math.random() * 99) + 1;
        const numberStr = number.toString().padStart(2, '0');

        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = numberStr;

        numbersContainer.appendChild(numberElement);
    }
}