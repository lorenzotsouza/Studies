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
Objeto que possui propriedades(atributos) e funcionalidades(métodos).

// Array(Vetores).
Um agrupamento de dados. exemplo:
console.log([
    "Lorenzo",
    "Caderno",
    "Caneta"
])

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

// .