// 1. Declare uma variável de nome weight.
let weight

// 2. Que tipo de dado é a variável weight?
console.log(typeof weight)

// 3. Declare uma variável e atribua os valores para cada um dos dados:
/*  name: String
    age: Number (integer)
    stars: Number (float)
    isSubscribed: Boolean
*/

let Name = "Lorenzo"
let age = 25
let stars = 4.9
let isSubscribed = true

// 4. A variável student abaixo é de que tipo de dado?
// Atribua a ela as mesmas propriedades e valores do número 3.

let student = {
    name: "Lorenzo",
    age: 25,
    weight: 75,
    isSubscribed: true
};
console.log(typeof student)
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

// 5. Declare uma variável do tipo array de nome students, atribua a ela
// nenhum valor.
let students = []

// 6. Reatribua o valor criado na questão 4 para a questão 5. Não é para copiar e colar, é para reatribuir o valor.
students = [
    student
]
console.log(students)

// 7. Coloque no console o valor da posição 0 do array acima.
console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do array students.
const lorenzo = {
    name: "Loh",
    age: 26,
    weight: 76,
    isSubscribed: false
}

students = [
    student,
    lorenzo
]
OU
students[1] = lorenzo
console.log(students)

// 9. Sem rodar o código, qual é a resposta deste código abaixo:
console.log(a)
var a = 1
Comente.

Será "undefined" por que a variável ainda não foi atribuída de valor,
assim que ocorrer o hoisting, ela subirá sem valor.