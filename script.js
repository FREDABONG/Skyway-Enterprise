document.addEventListener('DOMContentLoaded', () => {
    const firstH1 = document.getElementById('firstH1');
    const secondH1 = document.getElementById('secondH1');

    // Store original text in dataset
    firstH1.dataset.text = firstH1.textContent;
    secondH1.dataset.text = secondH1.textContent;

    function typeIn(element) {
        const originalText = element.dataset.text; // Get original text
        element.textContent = '';
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < originalText.length) {
                element.textContent += originalText[i];
                i++;
            } else {
                clearInterval(intervalId);
                setTimeout(() => typeOut(element), 1000);
            }
        }, 50);
    }

    function typeOut(element) {
        let currentText = element.textContent;
        let i = currentText.length;
        const intervalId = setInterval(() => {
            if (i > 0) {
                element.textContent = currentText.substring(0, i - 1);
                i--;
            } else {
                clearInterval(intervalId);
                const nextElement = element.id === 'firstH1' ? secondH1 : firstH1;

                // Reset text before showing
                nextElement.textContent = nextElement.dataset.text;
                element.style.display = 'none';
                nextElement.style.display = 'block';
                typeIn(nextElement);
            }
        }, 50);
    }

    // Initial call
    typeIn(firstH1);
});

function home() {
    window.location.href = "index.html";
}