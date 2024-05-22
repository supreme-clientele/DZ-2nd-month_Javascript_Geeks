let count = 0;
        const counterElement = document.getElementById('counter');
        const increaseButton = document.getElementById('increase');
        const resetButton = document.getElementById('reset');
        const decreaseButton = document.getElementById('decrease');

        function updateCounter() {
            counterElement.textContent = count;

            if (count > 0) {
                counterElement.style.color = 'green';
            } else if (count < 0) {
                counterElement.style.color = 'red';
            } else {
                counterElement.style.color = 'gray';
            }
        }

        increaseButton.addEventListener('click', function() {
            count += 1;
            updateCounter();
        });

        resetButton.addEventListener('click', function() {
            count = 0;
            updateCounter();
        });

        decreaseButton.addEventListener('click', function() {
            count -= 1;
            updateCounter();
        });

        updateCounter();