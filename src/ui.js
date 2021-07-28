const form = document.querySelector('form.calculator');
const firstNumber = document.querySelector('#firstNumber');
const secondNumber = document.querySelector('#secondNumber');
const article = document.querySelector('article');

const createElement = (text) => {
    const {operation, result} = text;
    const p = document.createElement('p');
    p.textContent = `Wynikiem ${operation} jest ${result != Math.floor(result) ? result.toFixed(2): result}`;
    article.appendChild(p);
}

function calculator(e) {
    e.preventDefault();
    article.textContent = "";
    const calculatores = new Calc(firstNumber.value, secondNumber.value);
    createElement(calculatores.add());
    createElement(calculatores.subtract());
    createElement(calculatores.multiply());
    createElement(calculatores.divide());
}

form.addEventListener('submit', calculator)