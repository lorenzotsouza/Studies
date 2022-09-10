// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
// receitas: [] 
// despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas, mostrando uma mensagem se a família está com,
// saldo positivo ou negativo, seguido do valor do saldo.

let family = {
    incomes: [2500, 3200, 330.25, 470.90],
    expenses: [400, 590, 1300, 1900]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const weAreGood = total >= 0

    let balanceText = "negativo"

    if (weAreGood) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()