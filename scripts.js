document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animatedText');
    const text = textElement.innerText;
    textElement.innerHTML = '';

    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }
    
    typeEffect();
});
