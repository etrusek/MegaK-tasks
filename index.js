// const {setTimeout} = require('timers/promises');

const week1task1btn = document.getElementById('week1task1btn');
const week1task2btn = document.getElementById('week1task2btn');
const week1task3btn = document.getElementById('week1task3btn');
const week1task4btn = document.getElementById('week1task4btn');
const week1task5btn = document.getElementById('week1task5btn');
const week2day1task1btn = document.getElementById('week2day1task1btn');
const week2day1task2btn = document.getElementById('week2day1task2btn');
const week2day2task1btn = document.getElementById('week2day2task1btn');
const week2day3task1btn = document.getElementById('week2day3task1btn');
const week2day3task2btn = document.getElementById('week2day3task2btn');
const week2day4task1btn = document.getElementById('week2day4task1btn');
const week2day5task1btn = document.getElementById('week2day5task1btn');
const week3day2task1btn = document.getElementById('week3day2task1btn');
const week3day3task1btn = document.getElementById('week3day3task1btn');

const week1tast1output = document.getElementById('week1tast1output');
const week1tast2output = document.getElementById('week1tast2output');
const week1tast3output = document.getElementById('week1tast3output');
const week1tast4output = document.getElementById('week1tast4output');
const week1tast5output = document.getElementById('week1tast5output');
const week2day1task1output = document.getElementById('week2day1task1output');
const week2day2task1output = document.getElementById('week2day2task1output');
const week2day3task1output = document.getElementById('week2day3task1output');
const week2day3task2output = document.getElementById('week2day3task2output');
const week2day4task1output = document.getElementById('week2day4task1output');
const week2day5task1output = document.getElementById('week2day5task1output');
const week3day2task1output = document.getElementById('week3day2task1output');
const week3day3task1output = document.getElementById('week3day3task1output');


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

// week2day1task1
const week2day1task1 = ()=>{
  function mathWork(num1,num2){
    // druga wersja to
    // const mathWork = (num1, num2) =>{
    if (num2 === 0) return 'nie da rady podzielić przez zero'
    week2day1task1output.innerHTML += (`<p>wynik dodawania to: ${num1} + ${num2} = ${num1+num2}</p>`)
    week2day1task1output.innerHTML += (`<p>wynik dejmowania to: ${num1} - ${num2} = ${num1-num2}</p>`)
    week2day1task1output.innerHTML += (`<p>wynik mnożenia to: ${num1} * ${num2} = ${num1*num2}</p>`)
    week2day1task1output.innerHTML += (`<p>wynik dzielenia to: ${num1} / ${num2} = ${num1/num2}</p>`)
      return (
    console.log('wynik dodawania to: ', num1, ' + ', num2, " = ", num1+num2),
    console.log('wynik odejmowania to: ', num1, ' - ', num2, " = ", num1-num2),
    console.log('wynik mnożenia to: ', num1, ' * ', num2, " = ", num1*num2),
    console.log('wynik dzielenia to: ', num1, ' / ', num2, " = ", num1/num2)
      )
  }
  const numero1 = Number(prompt('podaj pierwszą liczbę'));
  const numero2 = Number(prompt('podaj drugą liczbę'));
  mathWork(numero1, numero2)
  }

//week2day1task2
const week2day1task2 = ()=>{
  function checkNumber(number){
    if(number % 2) {return even(number)
    } else {
      return odd(number)
    } 
  }

  const even = number => {
    console.log(number);
    week2day1task2output.innerHTML = `<p>${number}</p>`
  };
  
  const odd = number => {
    console.log(number*2);
    week2day1task2output.innerHTML = `<p>${number*2}</p>`
  }
  
  const number = prompt('Podaj liczbę')

  checkNumber(number);
}
//week2day2task1
const week2day2task1 = () =>{


function Pers(name, surname) {
  this.name = name;
  this.surname = surname;
  this.sayHello = function (){
      console.log('Hello ' + this.name + ' ' + this.surname);
      }
  }
  
  const urArr = [];
  for (let i =0; i<3;i++){
    const inName = prompt('Podaj imię ' + i);
    const inSurname = prompt('Podaj nazwisko ' + i);
    const userNew = new Pers(inName, inSurname);
    // urArr.push(new Pers(prompt('Podaj imię ' + i), prompt('Podaj nazwisko ' + i)));
  week2day2task1output.innerHTML += `<p>Osoba ${i} to ${userNew.name} ${userNew.surname}</p>`
  urArr.push(userNew);
  }
  console.log(urArr)
}

//week2day3task1
const week2day3task1 = ()=>{
  const obj = {
    id: 1,
    name: 'Tester Testowy',
    pwdHash: 'qwertyuioplkjhgfdsa1234567890',
    isAdmin: true,
    hasAvatar: true,
  }
 
  function filter(obj){
    const {id, name, hasAvatar} = obj;
    const obj1 = {id, name, hasAvatar};
    week2day3task1output.innerHTML = `{ ${obj.id}, ${obj.name}, ${obj.hasAvatar} }`
    return obj1
  }
  console.log(filter(obj))
}


//week2day3task2
const week2day3task2 = ()=>{
  const name = "Smdb Test";
  const age = 35;
  const role = "Admin";
  const info = name + 'has a role od ' + role + ' and is brn in year ' + (new Date().getFullYear() - age);
  const infoTempl = `${name} has a role od ${role} and is brn in year ${new Date().getFullYear() - age}`;
  week2day3task2output.innerHTML = `<p>const info = name + 'has a role od ' + role + ' and is brn in year ' + (new Date().getFullYear() - age);</p>
  <p>${info}</p>
  <p>const infoTempl = \`\${name} has a role od \${role} and is brn in year \${new Date().getFullYear() - age}\`;</p>
  <p>${infoTempl}</p>`
}
//week2day4task1
const week2day4task1 = ()=>{

  class Medals{
    constructor(country, medalsList){
      this.country = country;
      this.medalsList = medalsList;
      this.isTheBest= function(){
        if(this.medalsList[0] > 0){
          console.log(`${this.country} GRATULACJE ZA ZłOTY MEDAL`);
          week2day4task1output.innerHTML += `<p> ${this.country} GRATULACJE ZA ZŁOTY MEDAL</p>`
        }
      }
    }
    isGood(){
      if(this.medalsList[1]>0){
        console.log('jest dobrze');
        week2day4task1output.innerHTML += `<p> ${this.country} GRATULACJE ZA srebrny MEDAL</p>`
      }
    }

  }

  Medals.prototype.addMedals = function (medalsToAdd){
    for(let i=0;i<3;i++){
      this.medalsList[i] += medalsToAdd[i];
    }
  }
  week2day4task1output.innerHTML = ""
  const poland = new Medals('POLSKA',[0,1,3]);
  poland.addMedals([2,2,2]);
  poland.addMedals([3,3,3]);
  poland.isGood();
  poland.isTheBest();

  const england = new Medals('ANGLIA',[1,2,1]);
  england.addMedals([1,1,1]);
  england.addMedals([2,2,2]);
  england.isGood();
  england.isTheBest();
  week2day4task1output.innerHTML += `<p>Polska ma: <br>
${poland.medalsList[0]} medali złotych<br>
${poland.medalsList[1]} medali srebrnych<br>
${poland.medalsList[2]} medali brązowych<br>
Anglia ma: <br>
${england.medalsList[0]} medali złotych<br>
${england.medalsList[1]} medali srebrnych<br>
${england.medalsList[2]} medali brązowych<br>
</p>`
}

//week2day5task1
const week2day5task1 = ()=>{
  const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];
  let meanGrade = 0;
  grades.forEach(gr => meanGrade+=gr);
  const gradesGreatherThan3 = grades.filter(gr => gr>3)
  console.log(`Średnia ocen to ${meanGrade}`)
  week2day5task1output.innerHTML = `<p>Średnia ocen to ${meanGrade}</p>`;
  console.log(`Oceny min 4 to: ${gradesGreatherThan3}`)
  week2day5task1output.innerHTML += `<p>Oceny min 4 to: ${gradesGreatherThan3}</p>`;
  const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];
  const newCities = cities
                        .filter(city => !(city.length%2))
                        .map(city => `<p>${city.toUpperCase()}</p>`)

  cities
      .filter(city => !(city.length%2))
      .map(city => city.toUpperCase())
      .forEach(city => console.log(city))
  week2day5task1output.innerHTML += `<p> ${newCities}</p>`;
}

//week3day2task1
const week3day2task1 = ()=>{
  const isbnNumber = prompt('Podaj numer isbn. np. 9780553804577');
  const example = 9780553804577
  fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNumber}`)
      .then(response => response.json())
      .then(data => {
        console.log('Tytuł ksiązki to: ',data.items[0].volumeInfo.title);
        console.log('Autor ksiązki to: ',data.items[0].volumeInfo.authors);
        week3day2task1output.innerHTML += `<p> Tytuł ksiązki to: ${data.items[0].volumeInfo.title}</p>`;
        week3day2task1output.innerHTML += `<p> Autor ksiązki to: ${data.items[0].volumeInfo.authors}</p>`;
      })
      .catch(err =>{
        console.log('Nie znalazłem takiej książki', err);
        week3day2task1output.innerHTML += `<p> Nie znalazłem takiej książki</p>`;
      })

}

//week3day3task1
const week3day3task1 = ()=>{
  const isbnNumber = prompt('Podaj numer isbn. np. 9780553804577');
  const googleBooks = async () =>{
    const responseFromGoogleBoks = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNumber}`)
    const data = await responseFromGoogleBoks.json()
    const {title, authors} = data.items[0].volumeInfo
      console.log('Tytuł ksiązki to: ',title);
      console.log('Autor ksiązki to: ',authors);
      week3day3task1output.innerHTML += `<p> Tytuł ksiązki to: ${title}</p>`;
      week3day3task1output.innerHTML += `<p> Autor ksiązki to: ${authors}</p>`;
    }
  googleBooks()
}

week1task1btn.addEventListener('click', week1task1);
week1task2btn.addEventListener('click', week1task2);
week1task3btn.addEventListener('click', week1task3);
week1task4btn.addEventListener('click', week1task4);
week1task5btn.addEventListener('click', week1task5);
week2day1task1btn.addEventListener('click', week2day1task1);
week2day1task2btn.addEventListener('click', week2day1task2);
week2day2task1btn.addEventListener('click', week2day2task1);
week2day3task1btn.addEventListener('click', week2day3task1);
week2day3task2btn.addEventListener('click', week2day3task2);
week2day4task1btn.addEventListener('click', week2day4task1);
week2day5task1btn.addEventListener('click', week2day5task1);
week3day2task1btn.addEventListener('click', week3day2task1);
week3day3task1btn.addEventListener('click', week3day3task1);
