document.addEventListener("DOMContentLoaded", function() {
    const screen = document.querySelector('.screen');
    let currentInput = '';
    let expression = '';

    
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;
            handleInput(value);
        });
    });

   
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (/\d|\+|\-|\*|\/|\./.test(key)) {
            handleInput(key);
        } else if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Backspace') {
            handleInput('C');
        } else {
            alert('Only numbers are allowed');
        }
    });

    function handleInput(value) {
        if (value === 'C') {
            currentInput = '';
            expression = '';
            screen.textContent = '';
        } else if (value === '=') {
            calculateResult();
        } else {
            currentInput += value;
            expression += value;
            screen.textContent = currentInput;
        }
    }

    function calculateResult() {
        try {
            const result = eval(expression);
            screen.textContent = result;
            currentInput = result.toString();
            expression = result.toString();
        } catch (error) {
            screen.textContent = 'Error';
            currentInput = '';
            expression = '';
        }
    }
});
