const week1task1btn = document.getElementById('week1task1btn');
const week1task2btn = document.getElementById('week1task2btn');
const week1task3btn = document.getElementById('week1task3btn');
const week1task4btn = document.getElementById('week1task4btn');
const week1task5btn = document.getElementById('week1task5btn');
const week1tast1output = document.getElementById('week1tast1output');
const week1tast2output = document.getElementById('week1tast2output');
const week1tast3output = document.getElementById('week1tast3output');
const week1tast4output = document.getElementById('week1tast4output');
const week1tast5output = document.getElementById('week1tast5output');

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

//zadanie dodatkowe sobota/niedziela
function week1task4()  {
const startText = "Jestem tutaj";
let reverseText = "";

//Pętla
for (let i = 0; i < startText.length; i++){
  reverseText += startText[startText.length - i - 1]
}
console.log(reverseText);
week1tast4output.innerText = reverseText
}

//zadanie dodatkowe 2 sobota/niedziela

function week1task5(){
  const startText2 = "Hejka, tutaj Beata 'betka' Kowalska!";
  let reverseText2 = "";
  
  //Rozwiązanie tutaj
  for(let i = 0; i<startText2.length;i++){
    if(startText2[i] == 'a'  || startText2[i] == 'b' || startText2[i] == 'B'){
      if(startText2[i] == 'a') {
        reverseText2 += 'x';  
      } else {
        reverseText2 += 'z';  
      }
    } else {
      reverseText2 += startText2[i];
    }
  }
  console.log(reverseText2);
  week1tast5output.innerText = reverseText2
}

week1task1btn.addEventListener('click', week1task1);
week1task2btn.addEventListener('click', week1task2);
week1task3btn.addEventListener('click', week1task3);
week1task4btn.addEventListener('click', week1task4);
week1task5btn.addEventListener('click', week1task5);
