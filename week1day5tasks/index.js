const week1task1btn = document.getElementById('week1task1btn');
const week1task2btn = document.getElementById('week1task2btn');
const week1task3btn = document.getElementById('week1task3btn');
const week1tast1output = document.getElementById('week1tast1output');
const week1tast2output = document.getElementById('week1tast2output');
const week1tast3output = document.getElementById('week1tast3output');

// zadanie pierwsze

function week1task1() {

  const name = prompt('Podaj imię');
  const surname = prompt('Podaj nazwisko');
  const age = prompt('Podaj wiek');

  if (age >= 18) {
    console.log(`Nazywasz się ${surname} ${name}, masz ${age}`);
    week1tast1output.innerHTML = `Nazywasz się ${surname} ${name}, masz ${age}`;
  }
}

//zadanie drugie
function week1task2() {
  const firstNumber = prompt('Podaj pierwszą liczbę');
  const secondNumber = prompt('Podaj drugą liczbę');
  const symbol = prompt('Podaj znak: +, -, * lub / ');

  if (symbol == '+') {
    console.log(Number(firstNumber) + Number(secondNumber));
    week1tast2output.innerHTML = Number(firstNumber) + Number(secondNumber);
  } else if (symbol == '-') {
    console.log(Number(firstNumber) - Number(secondNumber));
    week1tast2output.innerHTML = Number(firstNumber) - Number(secondNumber);
  } else if (symbol == '*') {
    console.log(Number(firstNumber) * Number(secondNumber));
    week1tast2output.innerHTML = Number(firstNumber) * Number(secondNumber);
  } else if (symbol == '/') {
    console.log(Number(firstNumber) / Number(secondNumber));
    week1tast2output.innerHTML = Number(firstNumber) / Number(secondNumber);
  } else {
    console.log('podany znak jest nieprawidłowy');
    week1tast2output.innerHTML = 'podany znak jest nieprawidłowy';
  }
}

//zadanie trzecie
function week1task3() {
  const sentence = prompt('Podaj wyrażenie');
  for (let i = 0; i <= sentence.length; i++) {
    if (i % 2) {
      console.log(sentence[i].toLocaleLowerCase());
      week1tast3output.innerHTML += `<p>${sentence[i].toLocaleLowerCase()}</p>`;
    } else {
      console.log(sentence[i].toUpperCase());
      week1tast3output.innerHTML += `<p>${sentence[i].toUpperCase()}</p>`;
    }
  }

}

week1task1btn.addEventListener('click', week1task1);
week1task2btn.addEventListener('click', week1task2);
week1task3btn.addEventListener('click', week1task3);
