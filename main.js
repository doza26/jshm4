//Функции - это часть кода которая выполняет какие либо действия или вычисления, функцию можно использовать неограниченое количество раз

//function declaretion

// function info(one, two) {
//     let result = (one + two)/2
//     return result
// }
// console.log (info(100,200));

// function expression

// let info = function (one,two){
//     let result = (one,two)/2
//     return result
// }
// console.log (info(5,8));

// function solve(min,max){
//     let sum = 0
//     for(let i = min; i<=max;i++){
//       sum += i
//     }
//     return sum
// }
// console.log(solve(1,10))

// Math.random()- отдаёт рандомное число от 0 до 0.99999999
// Math.round() - округляет число как в математике
// Math.ceil() - округляет до наибольшего
// Math.floor() - округляет до наименьшего


// function random(min,max){
//     return Math.floor(Math.random()*(max+1-min)+min)
// }

// let a = +prompt("Ведите минимальный диапазон")
// let b = +prompt("Ведите максимальный диапазон")


// for(let i = 1;i<=5;i++){
//     let one = random(a,b)
//     let two = random(a,b)
//     let primer = +prompt(one + "+" + two + "=")
//     let word = primer == (one + two) ? "Молодец" : "Холодец"
//     console.log(one + "+" + two + "=" + (one + two) + "Ваш ответ " + primer + "," + word)
// }


var z = prompt("Введите имя:")
var year1 = +prompt("Введите год рождения:")
var year2 = +prompt("Ведите нынешний год:")
var age = (year2 - year1)
console.log(z + ", " + "ваш возраст:" + age)







 let u = 0
 function random(u){
    return Math.floor(Math.random() * 10) + 1
 }
let count = +prompt("Введите количество примеров")
 function rs() {
  let s = ["+", "-", "*", "/"];
  let n = Math.floor(Math.random() * s.length)
  return s[n]
}
  for (let i = 0; i < count; i++) {
    let a = random(u)
    let b = random(u)
    let si = rs()
    let correct
    if (si == "+") correct = a + b
    if (si == "-") correct = a - b
    if (si == "*") correct = a * b
    if (si == "/") correct = a / b
    let answer = +prompt(a  + si + b)
    if (answer == correct) {
      console.log("Ваш ответ верный - " + answer)
    } else {
      console.log(
        "Ваш ответ не верный - " + answer + ", Правильный ответ - " + correct)
    }
  }



