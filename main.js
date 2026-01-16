
 function i (l,k){
  let age = l-k
   return age
 }
  let t = prompt('Введите имя')
  let year1= +prompt('Введите год рождения')
  let year2= +prompt('Введите нынешний год')
  console.log(t + ',' + ' Ваш возраст:' + i(year2,year1))
  





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



