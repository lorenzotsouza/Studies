// Comentários.
Podemos comentar uma linha com //.
Podemos comentar uma parte com /* e */.

// String.
console.log("Aqui tem texto que irá aparecer na página.")
Caso for utilizar aspas simples '' dentro da string,
utilizar aspas duplas no início e fim. (vice-versa)
Utilizar crase `` no início e fim permite multíplas linhas.
console.log(`Cálculo ${1 +1}`)
Crase também permite expressões dentro da string. (interpolação)

// Numbers.
33 - inteiros.
13.7 - reais/float.
NaN - Not a Number.
Infinity - Infinito.

// Boolean.
True - Verdadeiro
False - Falso

// Undefined e Null.
Undefined - indefinido.
Null - nulo, não possui nada dentro.

// Object.
Objeto que possui propriedades(atributos) e funcionalidades(métodos)
const person = {
    name: 'Lorenzo',
    age: 25,
    weight: 75,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos.`)

// Array(Vetores).
Um agrupamento de dados. exemplo:
const animals = [
    'Wolf',
    'Parrot',
    'Eagle'
]

console.log(animals) // mostrará todos.
console.log(animals[2]) // mostrará eagle. (começa no 0 a contagem.)
console.log(animals[length]) // mostrará quantos tem.

// Var(variáveis). exemplo:
<script>

    var clima = "Frio"
    clima = "Frio"

    console.log(clima)

</script>
Irá mostrar no console a palavra Frio.
Além do "var" temos o "let" que é muito semelhante e mais moderno,
assim como o const. O "const" é diferente dos demais por ser constante,
não pode ser alterado de forma alguma pelo código.

O "var" é global e local, ele funciona em qualquer parte do código.
O "let" e o "const" são locais, sendo assim, 
funcionam somente dentro do escopo que foram criadas.

// Scope(escopo).
<script>

console.log('> existe x antes do bloco? ', x)

{
    var x = 0 // var funciona sem problema algum.
    // Já o "let" e o "const" precisariam que a string estivesse aqui dentro.
}

console.log('> existe x antes do bloco? ', x)

</script>

// Nomeando variáveis.
Posso: $ _ , letras, acentos, maiúsculas e minúsculas são diferentes.

Não posso: Números e espaços vazios.

Ideal: Nomes que fazem sentido e expliquem a variável (em inglês).
camelCase (sempre que trocar a palavra usar maiúscula) - checkIfNameExist.
snake_case (sempre que trocar a palavra usar um underline) - check_if_name_exist.

// Concatenando e Interpolando.
<script>

var name
name = "Lorenzo"
let age, isHuman
age = 25
isHuman = true

//console.log(name, age, isHuman)
//console.log('o Lorenzo tem 25 anos')
//console.log('o ' + name + ' tem ' + age + ' anos.')
//console.log(`o ${name} tem ${age} anos.`)

</script>

// Conversion.
console.log(Number('5') + 2) // Number converte string em number.
// Outras formas de conversão.
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// Contagem.
let word = "parapeito"
console.log(word.length)
let number = 782738278327
console.log(String(number).length)

// Transformar número grande após ponto(vírgula) em somente 2 casas e trocar ponto por vírgula.
let number = 325.32563245235
console.log(number.toFixed(2).replace(".", ","))

// Transformar minúscula em maiúscula e vice-versa.
let word = "Programar é show!"
console.log(word.toLowerCase()) OU console.log(word.toUpperCase())

// Manipulando Strings e Arrays.
let phrase = "Eu quero ser um desenvolvedor."
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase())

///////////////////////////////////////////////////////////////////////////
let techs = ["html", "css", "js"]
techs.push("nodejs")
techs.unshift("sql")
techs.pop() // remove o último elemento.
techs.shift() // remove o primeiro elemento.
console.log(techs.slice(1, 3)) // primeiro argumento é posição inicial e o segundo é posição final.
techs.splice(1, 2) // primeiro argumento é o index e o segundo argumento é quantos quer remover.
let index = techs.indexOf('css')
console.log(techs)

// Array com construtor.
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// Contar elementos de um Array.
console.log([
    "a",
    {type: "array"},
    function() {return "hello"}
].length)

// Transformar uma cadeira de caracteres em elementos de um array.
let word = "dev"
console.log(Array.from(word))

// Verificar se o texto contém uma palavra específica.
let phrase = "Eu quero ser um desenvolvedor."
console.log(phrase.includes("Eu"))

// Expressões (expressions)
Operadores:
Binário - number + 1. operador fica entre dois valores.
Unário - ++number. operador vem antes do valor.
Ternário - true ? 'alo' : 'nada'. operador fica entre valores em formato boolean.

New - permite a criação de um novo objeto.
let name = new String('Lorenzo') // também pode ser new date, new number...

Delete - permite deletar uma propriedade dentro de um objeto.
const person ={
    name: 'Lorenzo'
}
delete person.name

Operadores Aritiméticos
Multiplicação - (2 * 2)a
Subtração - (2 - 2)
Resto da divisão(remainder) - (2 % 2)
Incremento - (++2)
Decremento - (--2)
Exponencial - (2 ** 2)

Agrupar Expressões
(2 + 3) * (5 / 2)
("Alo," + " quem é?")

Comparação
let one = 1
let two = 2
console.log(one == 2) // igual - retorna false, por que não é igual a one.
console.log(one != 2) // diferente = retorna verdadeiro, por que é diferente de one.
console.log(one === 2) // estritamente igual - tanto o valor quando o tipo tem que ser o mesmo.
console.log(one !== 2) // estritamente diferente - tanto o valor quanto o tipo tem que ser diferente.
console.log(one < two) // um menor que dois.
console.log(one > two) // um maior que dois.
console.log(one <= two) // um menor ou igual a dois.
console.log(one >= two) // um maior ou igual a dois.

Operadores Lógicos
let pao = true
let queijo = true
console.log(pao && queijo) // mostrará verdadeiro, porque temos os dois.
console.log(pao && presunto) // mostrará falso, porque só tem um deles.
console.log(pao || presunto) // mostrará verdadeiro, porque tem um. falso se não tiver nenhum dos dois.
console.log(!pao) // inverte o valor do objeto.

Operador Condicional // retorna o valor top caso tenha os dois. se não tiver os dois retorna o ruim.
let pao = true
let queijo = true
const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim' // pode ser || como operador também.
console.log(niceBreakfast)

let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

Operador de String
Comparação - ('a' == 'a')
Concatenação - ('a' + 'b' + 'c')

// Type coersion
Falsy - é quando o valor obrigatoriamente precisa ser booleano e não está.
Truthy - é quando o valor obrigatoriamente precisa ser booleano e ele está.

// If(se) e else(se não)
let temperature = 36.9

if(temperature >= 37.5) {
    console.log('Febre')
} else if(temperature < 37.5 && temperature >= 37) {
    console.log('Atenção')
} else {
    console.log('Saudável')
}

 OU 

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37
if(highTemperature) {
    console.log('Febre')
} else if(mediumTemperature) {
    console.log('Atenção')
} else {
    console.log('Saudável')
}

// Switch
let expression = ''

switch (expression) {
  case 'a': // confere se o valor da expressão é correto.
    console.log('a')
    break // para a execução do switch, apenas se verdadeiro.
  case 'b':
    console.log('b')
    break 
  default: // caso nenhum valor seja o correto, realizará a instrução dentro de si.
    console.log('default')
    break
}

exemplo com calculadora:

function calculate(number1, operator, number2) { // colocamos o operador entre os números.
    let result = 0;

    switch (operator) { // colocamos uma modificação em cada operador.
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default: // operador não existente.
            console.log('não implementado')
            break
    }

    return result
}
