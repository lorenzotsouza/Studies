// function expression
// function anonymous
// parâmetros (parameters)
const sum = function(number1, number2){
    let total = number1 + number2
    return total
}

let number 1 = 21
let number 2 = 9

console.log(`a soma é ${sum(number1, number2)}`) // argumentos (arguments)

// function scope
let subject

function createThink() {
    subject = 'study'
    return subject
}

// começa sem pensamento, cria o pensamento e então temos o pensamento.
console.log(subject)
console.log(createThink(subject))
console.log(subject)

// arrow function
const sayMyName = () => {
    console.log('Lorenzo')
}

sayMyName()

// callback function - é uma função que está passando como parâmetro para outra função.
function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a função callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

// function constructor = é uma função que adiciona propriedades.
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const lorenzo = new Person("Lorenzo")
const loh = new Person("Loh")
console.log(lorenzo.walk())
console.log(loh.walk())